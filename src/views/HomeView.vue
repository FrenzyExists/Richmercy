
<template>
  <div class="home">
    <Hero />

    <!-- Skills -->
    <section class="grid">
      <div
        class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:ml-11 xl:mr-11 lg:ml-9 lg:mr-9 md:gap-2 xl:gap-20 2xl:grid-cols-5">
        <SkillCard v-for="i in skills" :key="i.name" :skillName=i.name :skillDescription=i.description :skillProjectList="i.projects"
          :skillIcon=i.icon />
      </div>
    </section>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  components: {
    Hero: defineAsyncComponent(() => import('../components/HomeHero.vue')),
    SkillCard: defineAsyncComponent(() => import('../components/SkillCard.vue'))
  }, data() {
    const skills = [{
      name: "Programming Embedded Systems",
      description: "Simple circuits that make my life a bit easier",
      icon: "fa-solid fa-microchip",
      category: 'electronics', // Should match with a tag in github or something
      projects: ['Arduino Motor']
    }, {
      name: "Databases",
      description: "Building em with Postgresql, Prisma, and deploying on Heroku or Netlify",
      icon: "fa-solid fa-database",
      category: 'databases',
      projects: ['Tiny Pokedex', 'Booking System', 'Music']
    }, {
      name: "3D Printing",
      description: "Tinkering around with my 3D Printer and Fusion360",
      icon: "fa-solid fa-cubes",
    }, {
      name: "Full-Stack",
      description: "I can build web pages with VueJS or React",
      icon: "fa-solid fa-layer-group",
    }, {
      name: 'Scripting and Automation',
      description: "Scripting with Python, Bash or Lue to ease the boring daily task, just like I do!",
      icon: "fa-solid fa-gears",
      projects: ['Dotfiles']
    }]
    return { skills }
  }
}
</script>