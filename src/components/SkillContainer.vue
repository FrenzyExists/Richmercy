<template>

        <SkillCard
            v-for="i in [{ name: 'Boi', description: 'Balls', icon: 'fa-solid fa-burger' }, { name: 'Boi', description: 'Balls', icon: 'fa-solid fa-burger' }]"
            :key="i.name" :skillName=i.name :skillDescription=i.description :skillIcon=i.icon />

</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        SkillCard: defineAsyncComponent(() => import('./SkillCard.vue'))
    }
}
</script>