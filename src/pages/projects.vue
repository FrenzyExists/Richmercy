<template>
  <span class="pb-20 pt-4">
    <div class="md:px-8 sm:mt-12 prose prose-toy-story dark:prose-invert max-w-7xl mx-auto">
      <h2>Projects</h2>
      <p>Want to see more? Visit my GitHub profile or check out the rest of my projects below!</p>
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 my-12">
      <div
        class="mx-auto grid grid-cols-1 md:gap-8 md:grid-cols-2 lg:max-w-5xl gap-y-12 lg:grid-cols-3 lg:gap-x-8"
      >
      <ProjectCard
    v-for="p in github_response"
    :key="p.id"
    :projectName="p.name"
    :projectDesc="p.description"
    :projectStars="p.stars"
    :projectForks="p.forks"
    :projectUrl="p.url"
  />
      </div>
    </div>

    <!-- <h2>The best of the best</h2>
    <div>
      <h2>🚧 Under Construction 🚧</h2>
    </div> -->

    <div
      class="pb-20 prose prose-toy-story dark:prose-invert font-montserrat-alternate max-w-7xl mx-auto flex flex-col"
    >
      <!-- View More Button -->
      <button
        v-if="hasMoreProjects"
        @click="loadMoreProjects"
        class="w-fit px-36 mx-auto rounded-full drop-shadow-md my-4 sm:my-0 font-bold text-lg hover:transition duration-300 hover:ease-in-out hover:bg-acc-soft hover:text-bg-soft text-acc-soft dark:hover:text-dark-bg-super-hard dark:bg-dark-bg-super-hard dark:text-dark-acc-soft dark:hover:bg-dark-acc-soft bg-bg-soft p-4 min-w-[10rem]"
      >
        View More
      </button>

      <!-- End of Projects Message -->
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
    hasMoreProjects: true // Determines if more projects are available to load
  }),
  async created() {
    await this.loadMoreProjects() // Load initial set of projects on page load
  },
  methods: {
    // Function to fetch paginated data from GitHub API
    async getPaginatedData(url) {
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
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
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

    // Load more projects when clicking the "View More" button
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
  /* color: white; */
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

.skill-name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.skill-description {
  font-size: 1rem;
  margin-bottom: 15px;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.6s cubic-bezier(0.68, 0.6, 0.32, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
}

/* .carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
} */
</style>

<route lang="yaml">
meta:
  layout: fell
</route>
