<template class="">
  <div class="items-end relative flex overflow-y-hidden h-full overflow-x-hidden">

    <FC1 />
    <FC2 />
    <FC3 />

    <Paperplane />
    <Balloon />
    <div class="absolute top-[30rem] left-[3rem]">
      <button
        class="whitespace-normal fixed z-40 focus:outline-none flex select-none items-center gap-3 rounded-lg bg-color-text py-3.5 px-7 text-center align-middle text-sm font-bold uppercase text-color-bg-soft font-montserrat-alternate shadow-md shadow-blue-gray-500/10 transition-all hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button" data-ripple-dark="true">
        <img src="https://www.material-tailwind.com/icons/metamask.svg" alt="metamask" class="h-6 w-6" />
        look more...
      </button>
    </div>

    <Cloud1 />
    <Cloud2 />
    <Cloud3 />

    <div class="info current-info absolute top-[18rem] select-none left-10">
      <h1 class="text name uppercase font-montserrat-alternate font-extrabold text-5xl shadow-hero">Sup! I'm Angel</h1>
      <!-- This part will be using Typed.js, or something like that idk -->
      <h4 class="text text-3xl tracking-[0.65rem] pb-3 whatami before:h-5 before:-mt-2 before:top-[34%] before:w-24 before:absolute after:absolute after:top-20 after:w-60 after:ml-[-5.7rem] after:-mt-4 after:h-1 before:left-[-20%] after:left-[-20%] after:bg-color-text before:bg-color-text font-montserrat-alternate font-medium lowercase shadow-hero">Tinkerer</h4>
    </div>

  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    Cloud1: defineAsyncComponent(() => import('../assets/Cloud1.vue')),
    Paperplane: defineAsyncComponent(() => import('../assets/Paperplane.vue')),
    FC1: defineAsyncComponent(() => import('../assets/FlyingCloud1.vue')),
    FC2: defineAsyncComponent(() => import('../assets/FlyingCloud2.vue')),
    FC3: defineAsyncComponent(() => import('../assets/FlyingCloud3.vue')),
    Balloon: defineAsyncComponent(() => import('../assets/Balloon.vue')),
    Cloud2: defineAsyncComponent(() => import('../assets/Cloud2.vue')),
    Cloud3: defineAsyncComponent(() => import('../assets/Cloud3.vue'))
  }
}
</script>

<style>
:root {
  --card-width: 200px;
  --card-height: 300px;
  --card-transition-duration: 800ms;
  --card-transition-easing: ease
}

@keyframes fadeInUpInfo {
  from {
    opacity: 0;
    transform: translateZ(2rem)
  }

  to {
    opacity: 1
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(5rem)
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0)
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(-6rem);
    transition: transform 900ms ease-in
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0)
  }
}

@keyframes animateCloud {
  0% {
    transform: translateX(-10vw)
  }

  100% {
    transform: translateX(105vw)
  }
}

.info {
  animation-name: fadeInUpInfo;
  animation-duration: 3s
}

.info .whatami {
  --mg-left: 3rem;
  --text-size-offset: .12;
  font-weight: 600;
  margin-left: var(--mg-left);
  margin-bottom: calc(var(--mg-left) / 2);
  margin-top: 3rem;
  margin-left: 9rem
}

.info .whatami::before {
  margin-left: calc(-1.90 * var(--mg-left));
}


.text {
  animation-name: fadeInUp
}

.text.name {
  animation-duration: .75s
}

.text.whatami {
  animation-duration: 1.25s
}

.text.whatami::before {
  animation-duration: 1.75s;
  animation-name: fadeInRight
}

.text.whatami::after {
  animation-duration: 1.25s;
  animation-name: fadeInUp
}

.balloon-boi {
  animation-name: fadeInUp;
  animation-duration: 1.25s
}
</style>
