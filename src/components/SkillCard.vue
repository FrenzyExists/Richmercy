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

<style>
.carousel__icon {
  width: inherit;
  height: inherit;
  fill: var(--color-accent);
}

.carousel__next,
.carousel__prev {
  height: fit-content;
  width: 5rem;
  margin: 0;
  display: none;
}

.carousel__pagination-button::after {
  border-radius: 0;
  height: inherit;
  width: inherit;
  -webkit-mask-image: url(../assets/paper-plane.svg);
  mask-image: url(../assets/paper-plane.svg);
  mask-repeat: no-repeat;
}

.carousel__pagination {
  justify-content: space-evenly;
  width: 100%;
  margin: 6px 0;
}

.carousel__pagination-button {
  height: 2rem;
  width: 1.7rem;
  display: flex;
  padding: 0;
}

@media (min-width: 667px) {
  @media (min-height: 375px) {
    .skill-name {
      font-size: 13px;
    }

    .skill-description {
      font-size: 11px;
    }

    .carousel__pagination-button {
      width: 9%;
    }

    .show-more {
      display: none;
    }

    .skillcard-contents {
      min-height: 210px;
    }

    .carousel {
      flex-direction: column-reverse !important;
    }

    .show-more {
      display: block;
      font-size: 11px;
      position: initial;
      margin: 0 auto;
      margin-top: 10px;
      padding: 6px 12px;
      top: 50px;
    }
  }
}

/* Iphone SE size */
@media (min-width: 667px) {
  @media (min-height: 375px) {
    .skill-name {
      font-size: 13px;
    }

    .skill-description {
      font-size: 11px;
    }

    .carousel__pagination-button {
      width: 9%;
    }

    .show-more {
      display: none;
    }

    .skillcard-contents {
      min-height: calc(28vh - 40px);
    }

    .carousel {
      flex-direction: column-reverse !important;
    }

    .show-more {
      display: block;
      font-size: 11px;
      position: initial;
      margin: 0 auto;
      margin-top: 10px;
      padding: 6px 12px;
      top: 50px;
    }
  }
}

/* min height based on an iphone SE */
@media (min-height: 375px) {
  .skill-projects-container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    visibility: hidden;
    margin-left: auto;
    margin-right: auto;
    transition: 0.3s ease-out;
  }

  .skillcard-contents:hover .skill-projects-container {
    visibility: visible;
  }

  .skill-projects {
    background: #122d57;
    border-radius: 20px 20px 0px 0;
    padding: 10px 0;
  }
}

@media (max-width: 560px) {
  .carousel {
    flex-direction: column-reverse;
  }
}

@media (max-width: 375px) {
  @media (min-height: 610px) {
    .skillcard-contents {
      flex-direction: row !important;
      display: flex !important;
      align-items: center !important;
      gap: 12px;

      padding-bottom: 10px;
    }

    .show-more {
      width: 7rem;
    }
  }

  @media (max-height: 667px) {
    .skill-name {
      padding: 0 !important;
      margin-bottom: 0 !important;
    }

    .skill-name::after {
      display: none !important;
    }

    .skillcard-contents {
      padding: 4px 0 !important;
    }
  }
}

@media (min-width: 1420px) {
  .skillcard-contents {
    height: calc(70vh - 112px);
  }

  .skill-name {
    font-size: 20px;
    flex-grow: 1;
  }

  .skill-description {
    font-size: 15px;
    flex-grow: 2;
  }

  .skill-projects-container {
    position: sticky;
    margin-top: calc(20% + 10vh);
    flex-grow: 2;
  }

  .skill-projects {
    padding: 1rem 0;
    border-radius: 12px;
  }
  .skillcard-inner-contents {
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}

.box ul li::after {
  transition: 0.3s ease-out;
}
</style>
