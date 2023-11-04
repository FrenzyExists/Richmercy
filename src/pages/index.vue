<script setup lang="ts">
useHead({
	title: 'Detective Eternal 7 Gates of Blue Hell',
});
</script>


<template>
	<navbar />
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

	<div>
		<div class="text-center xl:py-20 lg:py-20 mld:py-10 xs:py-10">
			<div class="text-center m-auto max-w-4xl">
				<h2
					class="font-semibold italic dark:text-dark-bg-super-soft-trans text-bg-super-soft-trans lg:text-5xl mld:text-5xl xs:text-4xl text-3xl after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto dark:after:bg-dark-acc after:bg-acc after:h-1 after:w-32 relative mb-16 pb-9">
					Building the future one line of code at a time
				</h2>
				<p class="sm:text-lg lg:text-xl text-text dark:text-dark-text">
					As a full stack developer, I have experience working with both front-end and back-end
					technologies. I'm also passionate about tinkering with hardware and exploring new
					technologies. Whether you're looking to build a new website or develop an innovative
					hardware solution, I'm here to help you bring your ideas to life.
				</p>
			</div>
		</div>
	</div>

	<foot />
</template>

<route lang="yaml">
name: home
</route>

