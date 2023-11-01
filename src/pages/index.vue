<script setup lang="ts">
import VitailseLogo from '@/assets/logo.png';
useHead({
	title: 'Vitailse | Opinionated vite starter template',
});
</script>


<template>
	<div class="grid place-items-center min-h-[80vh]">
		<div>
			<img :src="VitailseLogo" width="300" class="mx-auto" />
			<p class="lg:text-left text-center">
				Stuff happens
				<a href="https://tailwindcss.com/" class="text-blue-500 hover:underline">TailwindCSS</a>
			</p>
			<p class="text-center">
				GITHUB
				<a class="text-blue-500 hover:underline" href="https://github.com/zynth17/vitailse">Github Repo</a>
			</p>
			<div class="mt-5 text-center">
				BOI
			</div>
			
		</div>
</template>

<route lang="yaml">
name: home
</route>

