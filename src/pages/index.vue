<template>
  <div class="xl:max-w-7xl lg:max-w-5xl lg:p-6 mld:max-w-3xl mld:p-4 m-auto xs:w-full xs:p-4">
    <div class="xl:py-20 lg:py-28 mld:py-10 xs:py-10">
      <!-- Hero -->
      <div class="xl:py-20 lg:py-20 mld:py-10 xs:py-10">
        <div class="grid mld:grid-cols-10 xs:grid-cols-1">
          <!-- text -->
          <div class="col-span-6">
            <!-- Some catchy intro sillicon valley bots use or whatever -->
            <div>
              <h5 class="text-2xl uppercase text-text-soft dark:text-dark-text-soft">Hey There!</h5>
              <h1 class="text-7xl text-text dark:text-dark-text font-bold">I'm Angel</h1>
              <!-- typed.js extravaganza -->
              <h4 class="text-4xl dark:text-dark-text-soft text-soft">
                A <span id="typed"></span>
              </h4>
            </div>
            <!-- some description or something idk -->
            <blockquote class="text-lg italic font-semibold mt-3 text-gray-900 dark:text-white">
              <quottation />
              <p>{{ quote.q }}</p>
              <span class="text-sm font-light">- {{ quote.a }}</span>
            </blockquote>
          </div>
          <!-- image and lower clouds -->
          <div class="grid mld:col-span-4">
            <div
              class="max-h-96 flex items-center justify-center h-full w-full relative animate-float"
            >
              <balloon />
            </div>
          </div>
        </div>
      </div>

      <!-- A catchy phrase -->
      <div class="text-center xl:py-20 lg:py-20 mld:py-10 xs:py-10">
        <div class="text-center m-auto max-w-4xl">
          <h2
            class="font-semibold italic dark:text-dark-acc text-acc lg:text-5xl mld:text-5xl xs:text-4xl text-3xl after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto dark:after:bg-dark-acc after:bg-acc after:h-1 after:w-32 relative mb-16 pb-9"
          >
            Building the future one line of code at a time
          </h2>
          <p class="sm:text-lg lg:text-xl text-text dark:text-dark-text">
            As a full stack developer, I have experience working with both front-end and back-end
            technologies. I'm also passionate about tinkering with hardware and exploring new
            technologies. Whether you're looking to build a new website or develop an innovative
            hardware solution, I'm here to help you bring your ideas to life.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Education and Experience -->
  <div
    class="xs:p-4 mld:p-4 bg-bg-soft dark:bg-dark-bg-soft py-20 lg:py-16 mld:py-10 layout-2col resume has-column-divider"
  >
    <div class="max-w-screen-xl w-full lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto px-2">
      <div class="flex flex-wrap">
        <div
          class="pr-2 first:border-r-2 dark:first:border-dark-acc-soft first:border-acc-soft flex flex-grow max-w-full sm:max-w-[50%]"
        >
          <div>
            <h3 class="text-3xl font-bold mb-8 text-text-soft dark:text-dark-text-soft">
              Education
            </h3>
            <div v-for="edu in local.education">
              <h5
                class="text-xl lg:text-lg md:text-base sm:text-base font-bold text-text dark:text-dark-text"
              >
                {{ edu.title }}
              </h5>
              <h6 class="text-lg dark:text-dark-acc-soft italic">{{ edu.place }}</h6>
              <span class="text-xs dark:text-dark-bg-super-hard-trans font-bold">{{
                edu.finishedAt
              }}</span>
              <p class="text-text-soft dark:text-dark-text-soft mb-6 font-normal">{{ edu.desc }}</p>
            </div>
          </div>
        </div>
        <div class="pl-[3.5%] flex max-w-half max-w-[50%] relative col col-12 col-sm-6">
          <div>
            <h3 class="text-3xl font-bold mb-8 text-text-soft dark:text-dark-text-soft">
              Experience
            </h3>
            <div v-for="ex in local.experience">
              <h5
                class="text-xl lg:text-lg md:text-base sm:text-base font-bold text-text dark:text-dark-text"
              >
                {{ ex.title }}
              </h5>
              <h6 class="text-lg dark:text-dark-acc-soft italic">{{ ex.employer }}</h6>
              <span class="text-xs dark:text-dark-bg-super-hard-trans font-bold"
                >{{ ex.from }} - {{ ex.to }}</span
              >
              <p class="text-text-soft dark:text-dark-text-soft mb-6 font-normal">
                {{ ex.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="xl:max-w-7xl lg:max-w-5xl lg:p-6 mld:max-w-3xl mld:p-4 m-auto xs:w-full xs:p-4">
    <div class="xl:py-32 lg:py-32 mld:py-10 xs:py-10">
      <section class="wrap-section my-10">
        <div class="w-full mx-auto px-4 container">
          <div class="mb-8 text-center max-w-3xl m-auto text-text dark:text-dark-text">
            <h3 class="mb-3 text-3xl md:mb-4 md:text-4xl">
              Some of the Technologies I've worked with
            </h3>
            <div class="font-light text-base">
              <p>
                Every engineer is armed with a toolbox, these are my tools. From UI/UX design to
                software development all the way to data analysis down to hardware design.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap box-border flex-row">
            <div
              v-for="item in local.tech"
              class="mb-8 box-border px-4 lg:basis-1/4 md:basis-1/3 basis-1/2"
            >
              <div
                class="cursor-pointer duration-200 hover:-translate-y-1 stack__content border border-bg-super-soft dark:border-dark-bg-super-soft rounded-lg flex flex-col justify-center gap-x-4 items-center justify-self-center h-full py-5 px-2 sm:flex-col md:flex-row"
              >
                <div class="stack__img">
                  <font-awesome-icon
                    :icon="item.url"
                    class="text-bg-super-hard-trans dark:text-dark-bg-super-hard-trans w-16 h-16"
                  />
                </div>
                <span class="font-medium text-base text-text dark:text-dark-text md:text-xl">{{
                  item.name
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <subscribe />
</template>

<style scoped>
.container {
  max-width: 1140px !important;
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 576px) {
  .col-sm-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media only screen and (min-width: 769px) {
  .section-title {
    margin-bottom: 60px;
  }
}

.section-title {
  margin-bottom: 30px;
  text-align: center;
}

@media only screen and (min-width: 769px) {
  .stack__content {
    padding: 3.5rem 1.6875rem;
  }
}

@media only screen and (min-width: 576px) {
  .stack__content {
    padding: 2.5rem 0.9375rem;
  }
}
</style>

<script>
import { useHead } from '@unhead/vue'
import { defineAsyncComponent, ref } from 'vue'
import Typed from 'typed.js'
import local from '../api/local'

export default {
  setup() {
    useHead({
      title: 'Welcome frends'
    })
    const quote = ref(null)
    // defaults
    quote.value = {
      q: 'Anything that can go wrong will go wrong, and at the worst possible time',
      a: "Murphy's Law"
    }
    return { quote }
  },
  data() {
    return {
      local
    }
  },
  mounted() {
    const options = {
      strings: ['Fullstack Developer', 'Tech Enthusiast', 'Computer Engineer', 'Hardware Maniac'],
      typeSpeed: 50,
      loop: true,
      backDelay: 2600,
      delaySpeed: 900,
      backSpeed: 40,
      smartBackspace: true
    }
    const typed = new Typed('#typed', options)
    this.storeLocalQuotes()
  },
  methods: {
    has12HoursPassed(lastUpdatedTime) {
      if (isNaN(lastUpdatedTime)) {
        return true
      }
      const now = Math.round(new Date().getTime() / 1000)
      const twelveHoursInMs = 12 * 60 * 60 // 12 hours in seconds
      return now - lastUpdatedTime > twelveHoursInMs
    },
    async fetchQuotes() {
      try {
        const response = await fetch('http://localhost:3001/api/quotes')
        const quotes = await response.json()
        localStorage.setItem('quotes', JSON.stringify(quotes)) // Store quotes as a string
        console.log('Quotes fetched and stored.')

        console.log(quotes)
        return quotes
      } catch (error) {
        // use a better error handling
        console.log('ERROR', error)
      }
    },
    storeLocalQuotes() {
      let ts = localStorage.getItem('quotesLastUpdated')
      ts = parseInt(ts)
      if (this.has12HoursPassed(ts)) {
        console.log('fetching quotes...')
        const now = Math.round(new Date().getTime() / 1000)
        localStorage.setItem('quotesLastUpdated', now)
        this.fetchQuotes()
      } else {
        console.log('Using cached quotes...')
      }
      const storedQuotes = localStorage.getItem('quotes')
      this.selectRandomQuote(storedQuotes)
    },

    selectRandomQuote(quotes) {
      let qs = JSON.parse(quotes)
      if (qs) {
        this.quote = qs[parseInt(Math.random() * (qs.length - 1))]
      }
    }
  },
  components: {
    ti: defineAsyncComponent(() => import('@/components/ti.vue')),
    gehc: defineAsyncComponent(() => import('@/components/gehc.vue')),
    balloon: defineAsyncComponent(() => import('@/components/balloon.vue')),
    quottation: defineAsyncComponent(() => import('@/components/quottation.vue')),
    foot: defineAsyncComponent(() => import('@/components/foot.vue')),
    subscribe: defineAsyncComponent(() => import('@/components/subscribe.vue'))
  }
}
</script>

<route lang="yaml">
meta:
  layout: fell
</route>
