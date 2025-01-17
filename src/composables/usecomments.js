import { ref } from 'vue';


export function useComments() {
  const comments = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  const owner = import.meta.env.VITE_GITHUB_USER;
  const repo = import.meta.env.VITE_GITHUB_REPO;

  /**
   * Fetch comments for a given issue number.
   */
  const fetchComments = async (octokit, issueNumber) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await octokit.rest.issues.listComments({
        owner,
        repo,
        issue_number: issueNumber,
      });
      comments.value = response.data;
    } catch (e) {
      error.value = e;
    } finally {
      isLoading.value = false;
    }
  };

  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
  
    // Extract the parts of the date
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
  
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    // Format hours into 12-hour time
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
  
    return `${formattedDate} - ${formattedHours}:${minutes}${period}`;
  }  

  /**
   * Post a comment to a specific issue.
   */
  const postComment = async (octokit, issueNumber, body) => {
    try {
      const response = await octokit.rest.issues.createComment({
        owner,
        repo,
        issue_number: issueNumber,
        body,
      });
      
      const newComment = response.data;
      comments.value.push(newComment); // Add the new comment to the list
      return newComment;
    } catch (e) {
      error.value = e;
      throw e;
    }
  };


  const getIssueNumberByTitle = async (octokit, title) => {
    try {
      const response = await octokit.request('GET /repos/{owner}/{repo}/issues', {
        owner,
        repo,
        state: 'open',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      });
      console.log('data thing', response.data);
      
      // Search for the issue with the matching title
      const issue = response.data.find((issue) => {
        return issue.title === title
      });
      console.log(issue, "ISSUE");
      
      // Return the issue number if found, otherwise null
      return issue ? issue.number : null;
    } catch (error) {
      console.error('Error fetching issues:', error);
      throw error;
    }
  }


  /**
   * Ensure an issue exists or create it if it does not.
   */
  const ensureIssueExists = async (octokit, title) => {
    try {      
      const issueNumber = await getIssueNumberByTitle(octokit, title);    
      console.log(issueNumber, 'issue');
      if(issueNumber === null) {
        throw {
          status: 404
        }
      }
      return issueNumber;
    } catch (err) {
      console.log("E R R O R", err);
      if (err.status === 404) {
        console.log('Creating issue...');
        
        // Issue not found, create a new one
        const newIssue = await octokit.rest.issues.create({
          owner,
          repo,
          title,
        });
        console.log(newIssue);
        
        // get issue number and return
        return newIssue.data.number;
      } else {
        throw err; // Re-throw other errors
      }
    }
  };

  return {
    ensureIssueExists,
    comments,
    isLoading,
    error,
    fetchComments,
    postComment,
    formatDate
  };
}
