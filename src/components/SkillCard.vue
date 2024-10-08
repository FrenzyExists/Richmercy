<template>
  <div class="flex justify-evenly w-full">
    <article
      class="skillcard-contents group before:absolute bg-[#081F44] rounded-xl overflow-hidden shadow-md mb-3 w-full"
    >
      <div class="relative">
        <font-awesome-icon
          class="absolute left-1/4 object-cover w-full text-[9rem] text-color-bg-soft pt-4"
          :icon="`${skillIcon}`"
        />
      </div>
      <div class="relative z-10">
        <button
          class="show-more transition-[0.3s] rounded-md italic font-montserrat-alternate cursor-pointer text-sm hover:text-[#11294F] hover:bg-color-acc border-solid border-2 border-color-acc bg-[#11294F] px-3 py-2"
        >
          show more...
        </button>
      </div>
      <div class="text-[#EBEBEB] font-montserrat-alternate skillcard-inner-contents">
        <h2
          class="skill-name font-bold italic text-sm relative pt-3 after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:bg-color-acc after:h-[3px] after:w-[50px] mb-3 pb-3"
        >
          {{ skillName }}
        </h2>
        <p class="relative skill-description font-light text-xs tracking-wider">
          {{ skillDescription }}
        </p>
        <div class="skill-projects-container z-20">
          <div
            class="box skill-projects text-sm translate-y-32 group-hover:translate-y-0 transition"
          >
            <ul v-if="typeof skillProjectList !== 'undefined'">
              <li
                v-for="i in skillProjectList"
                class="decoration-[none] relative text-base after:bg-gradient-to-r from-orange-400 to-red-500 after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] hover:after:left-[30%] hover:after:w-[40%]"
              >
                {{ i }}
              </li>
            </ul>
            <p v-else>Can't think of anything lol</p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    skillName: {
      type: String,
      required: true
    },
    skillDescription: {
      type: String,
      required: false
    },
    skillIcon: {
      type: String
    },
    skillProjectList: {
      type: Array,
      required: false
    }
  }
}
</script>
