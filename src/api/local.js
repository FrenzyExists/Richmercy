const education = [
  {
    title: 'B.S. in Computer Engineering',
    place: 'University of Puerto Rico',
    finishedAt: 'May 2025',
    cert: null,
    desc: 'Took courses like Databases, Computer Architectures and Operating Systems.'
  },
  {
    title: 'Android Development Intermediate Course (AND102)',
    place: 'Codepath, Virtual',
    finishedAt: 'Spring 2024',
    cert: null,
    desc: 'Learned how to develop different android applications, from games such as Wordle to general use such as a NY Times best-seller book app where I used the NY Times API.'
  },
  {
    title: 'Web Development Advanced Course (WEB103)',
    place: 'Codepath, Virtual',
    finishedAt: 'Currently taking it',
    cert: null,
    desc: 'A description of the variety of websites I have learned to work on, from react-based applications to pure webpack. Also talk about the experience i got from using backend services like railway and supabase. Also talk about the deployment aspect learned with Netlify and Vercel.'
  },
  {
    title: 'Version Source Control',
    place: 'Meta, Coursera, Virtual',
    finishedAt: 'Currently taking it',
    cert: null,
    desc: 'Learning more advanced workflows on git'
  }
]

const tech = [
  {
    name: 'python',
    url: 'fa-brands fa-python'
  },
  {
    name: 'java',
    url: 'fa-brands fa-java'
  },
  // {
  //   name: 'wordpress',
  //   url: 'fa-brands fa-wordpress'
  // },
  {
    name: 'node.js',
    url: 'fa-brands fa-node-js'
  },
  {
    name: 'vue.js',
    url: 'fa-brands fa-vuejs'
  },
  {
    name: 'react',
    url: 'fa-brands fa-react'
  },
  {
    name: 'verilog',
    url: 'fa-solid fa-microchip'
  },
  {
    name: 'bash/sh',
    url: 'fa-solid fa-terminal'
  },
  {
    name: 'html5',
    url: 'fa-brands fa-html5'
  },
  {
    name: 'css3',
    url: 'fa-brands fa-css3'
  },
  {
    name: 'javascript',
    url: 'fa-brands fa-js'
  },
  {
    name: 'android',
    url: 'fa-brands fa-android'
  },
  {
    name: 'figma',
    url: 'fa-brands fa-figma'
  }
]

const experience = [
  {
    title: 'Researcher in Single Event Effect - Data Post Processing GUI',
    employer: 'Industrial Affiliates Program (IAP)',
    sponsor: 'Texas Instruments',
    from: 'August 2022',
    to: 'May 2024',
    description: 'Research stuff'
  },
  {
    title: 'EEDP Software Engineering Internship',
    employer: 'GE Healthcare',
    sponsor: null,
    from: 'June 2024',
    to: 'August 2024',
    description:
      'Debugged and fixed multiple issues in the C-based tool, resulting in more accurate test results for Portrait Mobile. Developed Perl scripts for additional testing and created comprehensive documentation using Manpage.'
  },
  {
    title: 'Researcher in Image Restoration using Neural Networks for DLP',
    employer: 'Industrial Affiliates Program (IAP)',
    sponsor: 'Texas Instruments',
    from: 'August 2024',
    to: 'present',
    description: 'the thing im doing now'
  },
  {
    title: 'IT Assistant',
    employer: 'University of Puerto Rico',
    sponsor: null,
    from: 'January 2023',
    to: 'May 2023',
    description:
      'Collaborated with a team of other fellow TAs writting rubrics, grading students and programming the base projects given to students written in C++ utilizing the in the course in OpenFrameworks GUI framework.'
  },
  {
    title: 'Teaching Assistant for the course Advance Programming (CIIC4010)',
    employer: 'University of Puerto Rico',
    sponsor: null,
    from: 'August 2023',
    to: 'May 2024',
    description:
      'Developed a course website for a professor and gave maintanance to the university lab computers, keeping them functional at all times'
  }
]

export default { education, experience, tech }
