<template class="">
  <div class="relative overflow-y-hidden h-full overflow-x-hidden">

    <FC1 />
    <FC2 />
    <FC3 />

    <Paperplane />
    <Balloon />


    <Cloud1 />
    <Cloud2 />
    <Cloud3 />

    <div class="info current-info absolute top-[18rem] left-10">
      <h1 class="text name uppercase font-extrabold text-5xl shadow-hero">Sup! I'm Angel</h1>
      <!-- This part will be using Typed.js, or something like that idk -->
      <h4 class="text text-3xl whatami font-medium lowercase font-whyte shadow-hero">Tinkerer</h4>
    </div>

  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    Cloud1: defineAsyncComponent( () => import('../assets/Cloud1.vue')),
    Paperplane: defineAsyncComponent( () => import('../assets/Paperplane.vue')),
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
  padding-bottom: .8rem;
  letter-spacing: .65rem;
  margin-top: 3rem;
  margin-left: 9rem
}

.info .whatami::before {
  top: 1rem;
  width: 6.25rem;
  margin-left: calc(-1.90 * var(--mg-left));
  height: 1.2rem;
  margin-top: -.5rem;
  top: 34%
}

.info .whatami::before,
.info .whatami::after {
  position: absolute;
  background: #fff;
  left: -20%
}

.info .whatami::after {
  top: 5rem;
  width: 15rem;
  height: 4px;
  margin-left: -5.7rem
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
