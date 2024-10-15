<template>
  <div
    class="flex flex-col rounded-3xl bg-bg-soft dark:bg-dark-bg-soft shadow-xl ring-1 ring-blue/10 h-full"
  >
    <div class="p-8 sm:p-10">
      <h3
        class="text-2xl font-semibold leading-relaxed tracking-wide text-acc dark:text-dark-acc"
        id="tier-hobby"
      >
        {{ projectName }}
      </h3>
    </div>
    <div class="flex flex-1 flex-col justify-between p-6">
      <ul role="list" class="space-y-4 p-0">
        <li class="flex items-start">
          <div class="flex-shrink-0">
            <font-awesome-icon
              class="dark:text-dark-bg-super-hard text-bg-super-hard"
              size="lg"
              icon="fa-solid fa-check"
            />
          </div>
          <p class="ml-3 text-sm leading-6 text-soft dark:text-dark-text-soft">
            {{ projectDesc }}
          </p>
        </li>

        <li class="flex items-start">
          <div class="flex-shrink-0">
            <font-awesome-icon
              class="dark:text-dark-bg-super-hard text-bg-super-hard"
              size="lg"
              icon="fa-solid fa-star"
            />
          </div>
          <p class="ml-3 text-sm text-soft dark:text-dark-text-soft">
            {{ projectStars }}
          </p>
        </li>
        <li class="flex items-start">
          <div class="flex-shrink-0">
            <font-awesome-icon
              class="dark:text-dark-bg-super-hard text-bg-super-hard"
              size="lg"
              icon="fa-solid fa-code-fork"
            />
          </div>
          <p class="ml-3 text-sm text-soft dark:text-dark-text-soft">
            {{ projectForks }}
          </p>
        </li>
      </ul>
      <div class="relative -bottom-11 left-10 mt-8">
        <a
          :href="projectUrl"
          class="inline-block w-full rounded-lg dark:hover:ring-dark-bg-soft dark:hover:text-dark-bg-soft dark:bg-dark-bg-mute dark:text-dark-acc dark:hover:bg-dark-acc hover:ring-bg-soft bg-bg-soft hover:bg-acc hover:text-bg-soft text-acc px-4 py-4 text-center text-sm font-semibold leading-5 hover:ring"
          aria-describedby="tier-team"
        >
          Visit the Repo
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projectName: {
      type: String,
      required: true
    },
    projectDesc: {
      type: String,
      required: false
    },
    projectStars: {
      type: Number,
      required: false
    },
    projectForks: {
      type: Number,
      required: false
    },
    projectUrl: {
      type: String,
      required: false
    }
  }
}
</script>
