<template>
  <div class="flex justify-evenly w-full">
    <article
      class="px-4 skillcard-contents group before:absolute bg-[#081F44] rounded-xl overflow-hidden shadow-md mb-3 w-full h-96"
    >
      <h3>{{ projectName }}</h3>
      <p>{{ projectDesc }}</p>
      <!-- <p>{{ projectImg }}</p> -->
      <p>Stars: {{ projectStars }}</p>
    
    </article>
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
    projectImg: {
      type: String
    },
    projectStars: {
      type: Number,
      required: false
    },
    projectFork: {
      type: Number,
      required: false
    },
    projectCommits: {
      type: Number,
      required: false
    },
    p: {
        type: Object,
        required: false
    }
  }
}
</script>
