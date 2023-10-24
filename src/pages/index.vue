<template>
  <div class="w-full dark:bg-dark-bg bg-bg m-auto font-montserrat-alternate">
    <div class="xl:max-w-7xl lg:max-w-5xl lg:p-6 mld:max-w-3xl mld:p-4 m-auto xs:w-full xs:p-4">
      <div class="xl:py-20 lg:py-28 mld:py-10 xs:py-10">
        <!-- Hero -->
        <div class="xl:py-20 lg:py-20 mld:py-10 xs:py-10">
          <div class="grid mld:grid-cols-10 xs:grid-cols-1">
            <!-- text -->
            <div class="col-span-6">
              <!-- Some catchy intro sillicon valley bots use or whatever -->
              <div>
                <h5 class="text-2xl uppercase text-text-soft dark:text-dark-text-soft">
                  Hey There!
                </h5>
                <h1 class="text-7xl text-text dark:text-dark-text font-bold">I'm Angel</h1>
                <!-- typed.js extravaganza -->
                <h4 class="text-4xl dark:text-dark-text-soft text-soft">
                  A <span id="typed"></span>
                </h4>
              </div>
              <!-- some description or something idk -->
              <blockquote class="text-lg italic font-semibold mt-3 text-gray-900 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="block w-5 h-5 dark:text-dark-acc-soft text-acc-soft mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path
                    d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
                  ></path>
                </svg>
                <p>{{ quote.q }}</p>
                <span class="text-sm font-light">{{ quote.a }}</span>
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
        <!-- Companies -->
        <div class="text-center xl:py-20 lg:py-20 mld:py-10">
          <p
            class="sm:text-lg lg:text-xl 2xl:mb-4 xl:mb-2 lg:mb-2 mld:mb-1 xs:mb-1 text-lg 2xl:text-xl font-medium text-bg-super-hard-trans dark:text-dark-bg-super-hard-trans"
          >
            The companies and asociations with who I've collaborated with can voice their experience
          </p>
          <!-- company logos n frendz -->
          <div class="m-auto max-w-3xl">
            <ti
              class="inline-block xl:h-24 w-fit xl:px-4 xl:py-1 lg:h-20 lg:px-4 lg:py-1 mld:h-20 mld:p-3 xs:h-4 xs:p-2"
            />
            <sirkosky
              class="inline-block xl:h-24 w-fit xl:px-4 xl:py-1 lg:h-20 lg:px-4 lg:py-1 mld:h-20 mld:p-3 xs:h-4 xs:p-2"
            />
          </div>
        </div>
        <!-- A catchy phrase -->
        <div class="text-center xl:py-20 lg:py-20 mld:py-10 xs:py-10">
          <div class="text-center m-auto max-w-4xl">
            <h2
              class="font-semibold italic dark:text-dark-bg-super-soft-trans text-bg-super-soft-trans lg:text-5xl mld:text-5xl xs:text-4xl text-3xl after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto dark:after:bg-dark-acc after:bg-acc after:h-1 after:w-32 relative mb-16 pb-9"
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

        <!-- Some Projects of Interest -->
        <!-- <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 my-12">
          <div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-5xl lg:grid-cols-3 lg:gap-8">
            <div v-for="i in [1, 2, 3]"
              class="flex flex-col rounded-3xl bg-bg-soft dark:bg-dark-bg-soft shadow-xl ring-1 ring-blue/10">
              <div class="p-8 sm:p-10">
                <h3 class=" text-2xl font-semibold leading-relaxed tracking-wide text-acc-soft dark:text-dark-acc-soft"
                  id="tier-hobby">
                  Tiny Pokedex</h3>
                <div class="mt-4 px-11 flex items-baseline">
                  <img class="rounded-3xl" src="../assets/tiny-pokedex.jpeg" alt="">
                </div>
              </div>
              <div class="flex flex-1 flex-col p-2">
                <div class="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <ul role="list" class="space-y-6">
                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <font-awesome-icon class="dark:text-dark-bg-super-hard text-bg-super-hard" size="lg"
                          icon="fa-solid fa-check" />
                      </div>
                      <p class="ml-3 text-sm leading-6 text-soft dark:text-dark-text-soft">Bookmark Favorites</p>
                    </li>

                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <font-awesome-icon class="dark:text-dark-bg-super-hard text-bg-super-hard" size="lg"
                          icon="fa-solid fa-check" />
                      </div>
                      <p class="ml-3 text-sm leading-6 text-soft dark:text-dark-text-soft">Import Bookmarks from Twitter
                      </p>
                    </li>

                  </ul>
                  <div class="relative -bottom-11 left-12 mt-8">
                    <a href="/login"
                      class="inline-block w-full rounded-lg dark:hover:ring-dark-bg-soft dark:hover:text-dark-bg-soft dark:bg-dark-bg-mute dark:text-dark-acc-soft dark:hover:bg-dark-acc-soft hover:ring-bg-soft bg-bg-soft hover:bg-acc-soft hover:text-bg-soft text-acc-soft px-4 py-4 text-center text-sm font-semibold leading-5 hover:ring"
                      aria-describedby="tier-team">Learn More...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>

    <!-- Education and Experience -->
    <!-- <div
      class="xs:p-4 mld:p-4 bg-bg-soft dark:bg-dark-bg-soft py-20 lg:py-16 mld:py-10  layout-2col resume has-column-divider">
      
      <div class="max-w-screen-xl w-full lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto px-2">
        
        <div class="flex flex-wrap ">
          
          <div
            class="pr-2 first:border-r-2 dark:first:border-dark-acc-soft first:border-acc-soft flex flex-grow max-w-full sm:max-w-[50%]">
            <div>
              <h3 class="text-3xl font-bold mb-8 text-text-soft dark:text-dark-text-soft">Education</h3>
              <div v-for="edu in education">
                <h5 class="text-xl lg:text-lg md:text-base sm:text-base font-bold text-text dark:text-dark-text">
                  {{ edu.title }}</h5>
                <p class="text-text-soft dark:text-dark-text-soft mb-6 font-normal ">{{ edu.desc }}</p>
              </div>
            </div>
          </div>
          <div class="pl-[3.5%] flex max-w-half max-w-[50%] relative  col  col-12 col-sm-6">
            <div>
              <h3 class="text-3xl font-bold mb-8 text-text-soft dark:text-dark-text-soft">Experience</h3>
              <div v-for="ex in experience">
                <h5 class="text-xl lg:text-lg md:text-base sm:text-base font-bold text-text dark:text-dark-text">
                  {{ ex.title }}</h5>
                <p class="text-text-soft dark:text-dark-text-soft mb-6 font-normal ">{{ ex.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="xl:max-w-7xl lg:max-w-5xl lg:p-6 mld:max-w-3xl mld:p-4 m-auto xs:w-full xs:p-4">
      <div class="xl:py-32 lg:py-32 mld:py-10 xs:py-10">
        <!-- Technologies and tools I've used in the past -->
        <section class="wrap-section my-10">
          <div class="w-full mx-auto px-4 container">
            <div class="mb-8 text-center max-w-3xl m-auto text-text dark:text-dark-text">
              <h3 class="mb-3 text-3xl md:mb-4 md:text-4xl">
                Some of the Technologies I've worked with
              </h3>
              <div class="font-light text-base">
                <p>
                  I've done UI/UX design, software development, data analysis and hardware design.
                </p>
              </div>
            </div>
            <div class="flex flex-wrap box-border flex-row">
              <div
                v-for="item in tech"
                class="mb-8 box-border px-4 lg:basis-1/4 md:basis-1/3 basis-1/2"
              >
                <div
                  class="stack__content border border-bg-super-soft dark:border-dark-bg-super-soft rounded-lg flex flex-col justify-center items-center justify-self-center h-full py-5 px-2 sm:flex-col md:flex-row"
                >
                  <div class="stack__img">
                    <font-awesome-icon
                      :icon="item.url"
                      class="text-bg-super-hard-trans dark:text-dark-bg-super-hard-trans w-16 h-16"
                    />
                  </div>
                  <span class="font-medium text-base text-text dark:text-dark-text md:text-2xl">{{
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
  </div>

  <foot />
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
import { defineAsyncComponent, ref, watchEffect } from 'vue'
import Typed from 'typed.js'
export default {
  setup() {
    useHead({
      title: 'Welcome frends'
    })
    const quote = ref(null)
    quote.value = {
      q: 'Anything that can go wrong will go wrong, and at the worst possible time',
      a: "Murphy's Law"
    }
    return { quote }
  },
  data() {
    return {
      education: [
        {
          title: 'Highschool life or something',
          desc: 'Some small description of that boogaloo'
        },
        {
          title: 'My Google Data certification on Data',
          desc: 'Some small description of that boogaloo'
        },
        {
          title: 'My Meta certification on Fullstack once I complete it',
          desc: 'Some cool highlights and projects'
        },
        {
          title: 'The Datastructures course I took',
          desc: 'A description of what i did on the course and whatnot'
        },
        {
          title: 'The Computer Architecture course I also took',
          desc: 'The odyssey I went through that course'
        }
      ],
      experience: [
        {
          title: 'Research',
          desc: 'Info bout that'
        },
        {
          title: 'CAS Technical Advisor',
          desc: 'My role in that field'
        },
        {
          title: 'CAS Assistant Webmaster',
          desc: 'What I worked on'
        },
        {
          title: 'Undergrad Research with TI',
          desc: 'The app that was being developed'
        }
      ],
      tech: [
        {
          name: 'python',
          url: 'fa-brands fa-python'
        },
        {
          name: 'java',
          url: 'fa-brands fa-java'
        },
        {
          name: 'wordpress',
          url: 'fa-brands fa-wordpress'
        },
        {
          name: 'node.js',
          url: 'fa-brands fa-node-js'
        },
        {
          name: 'vue.js',
          url: 'fa-brands fa-vuejs'
        },
        {
          name: 'verilog',
          url: 'fa-solid fa-microchip'
        },
        {
          name: 'react',
          url: 'fa-brands fa-react'
        },
        {
          name: 'bash/sh',
          url: 'fa-solid fa-terminal'
        }
      ]
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
  },
  components: {
    ti: defineAsyncComponent(() => import('@/components/ti.vue')),
    sirkosky: defineAsyncComponent(() => import('@/components/sirkosky.vue')),
    balloon: defineAsyncComponent(() => import('@/components/balloon.vue')),
    foot: defineAsyncComponent(() => import('@/components/foot.vue')),
    subscribe: defineAsyncComponent(() => import('@/components/subscribe.vue'))
  }
}
</script>

<route lang="yaml">
meta:
  layout: fetching
</route>
