<template>
  <span class="pb-20 pt-4">
    <div class="md:px-8 mt-12 prose prose-toy-story dark:prose-invert max-w-7xl mx-auto">
      <h2>Projects</h2>
      <p>Want to see more? Visit my GitHub profile or check out the rest of my projects below!</p>
    </div>

    <div>
      <!-- Loading animation -->
      <div v-if="loading" class="dark:text-dark-bg-soft text-bg-soft flex justify-center items-center h-screen">
        <font-awesome-icon icon="fa-solid fa-spinner" spin size="4x" class="text-color-acc" />
      </div>

      <!-- Display content once loading is complete -->
      <div v-else>
        <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 my-12">
          <div class="mx-auto grid grid-cols-1 md:gap-8 md:grid-cols-2 lg:max-w-5xl gap-y-12 lg:grid-cols-3 lg:gap-x-8">
            <ProjectCard v-for="p in github_response" :key="p.id" :projectName="p.name" :projectDesc="p.description"
              :projectStars="p.stars" :projectForks="p.forks" :projectUrl="p.url" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="pb-20 prose prose-toy-story dark:prose-invert font-montserrat-alternate max-w-7xl mx-auto flex flex-col">
      <button v-if="hasMoreProjects" @click="loadMoreProjects"
        class="w-fit px-36 mx-auto rounded-full drop-shadow-md my-4 sm:my-0 font-bold text-lg hover:transition duration-300 hover:ease-in-out hover:text-dark-bg-mute bg-dark-bg-mute text-dark-acc-soft hover:bg-dark-acc-soft p-4 min-w-[10rem]">
        View More
      </button>
      <p v-if="!hasMoreProjects && github_response.length > 0" class="text-center mt-4">
        You've reached the end
      </p>
    </div>
  </span>
</template>

<script>
import { Octokit } from '@octokit/core'
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    ProjectCard: defineAsyncComponent(() => import('@/components/ProjectCard.vue'))
  },
  data: () => ({
    temporary_response: [],
    github_response: [],
    nextUrl: '/users/{username}/repos', // Starting endpoint
    hasMoreProjects: true, // Determines if more projects are available to load
    loading: false
  }),
  async created() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        this.loading = true // Start loading
        await this.loadMoreProjects()
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        this.loading = false
      }
    },

    // Function to fetch paginated data from GitHub API
    async getPaginatedData(url) {
      // TODO: Find a better way to manage octokit object so I don't have to make a new object every single darn time
      const octokit = new Octokit({
        auth: `${import.meta.env.VITE_GITHUB_TOKEN}`
      })
      this.nextUrl = url
      try {
        let gotem = false
        let filteredProjects = []
        let linkHeader
        while (!gotem) {
          const response = await octokit.request(`GET ${this.nextUrl}`, {
            username: `${import.meta.env.VITE_GITHUB_USER}`,
            per_page: 100,
            headers: { 'X-GitHub-Api-Version': '2022-11-28' }
          })

          filteredProjects = [
            ...filteredProjects,
            ...response.data
              .filter((repo) => repo.topics && repo.topics.some((tag) => tag === 'good')) // Filter repos with 'good' tag
              .map((repo) => ({
                url: repo.html_url,
                id: repo.id,
                name: repo.name,
                description: repo.description || 'No description available',
                icon: 'fa fa-github', // Set a default icon or customize this
                projects: repo.topics || [],
                stars: repo.stargazers_count,
                tags: repo.topics,
                forks: repo.forks
              }))
          ]
          console.log(filteredProjects)

          linkHeader = response.headers.link
          if (linkHeader && linkHeader.includes('rel="next"')) {
            // Find the next URL to fetch from the link header
            const nextPattern = /(?<=<)([\S]*)(?=>; rel="next")/i
            this.nextUrl = linkHeader.match(nextPattern)[0]
          } else {
            // No more pages to load
            this.hasMoreProjects = false
          }
          // Note, this has a pretty odd bug, remember to test it better
          if (filteredProjects.length >= 10 || !linkHeader.includes('rel="next"')) {
            gotem = true
            this.temporary_response = [...this.temporary_response, ...filteredProjects.splice(15)]
          }
        }
        this.github_response = [...this.github_response, ...filteredProjects]

        // Check if there is a next page of results
      } catch (error) {
        console.error('Error fetching repositories:', error)
      }
    },

    async loadMoreProjects() {
      if (this.hasMoreProjects && this.nextUrl) {
        await this.getPaginatedData(this.nextUrl)
      }
    }
  }
}
</script>

<style>
.selected-skill-details {
  padding: 20px;
  background-color: #3c5f87;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

/* Close button styling */
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ff5c5c;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background-color: #ff3838;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

<route lang="yaml">
meta:
  layout: fell
</route>
