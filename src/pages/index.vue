<script setup lang="ts">
import VitailseLogo from '@/assets/logo.png';
useHead({
	title: 'Vitailse | Opinionated vite starter template',
});
</script>


<template>
	<!-- <div class="grid place-items-center min-h-[80vh]">
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
	</div> -->
	<div class="w-full m-auto dark:bg-dark-background bg-background">
		<div class="xl:max-w-7xl lg:max-w-5xl lg:p-6 mld:max-w-3xl mld:p-4 m-auto xs:w-full xs:p-4">
			<div class="xl:py-20 lg:py-28 mld:py-10 xs:py-10">
				<!-- Hero -->
				<div class="xl:py-20 lg:py-20 mld:py-10 xs:py-10">
					<div class="grid mld:grid-cols-10 xs:grid-cols-1">
						<!-- text -->
						<div class="col-span-6">
							<div>
								<h5 class="text-2xl uppercase text-text-soft dark:text-dark-text-soft">
									Hey There!
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<route lang="yaml">
name: home
</route>

