<template>
  <div
    class="font-montserrat-alternate select-none text-center relative flex min-h-screen flex-col justify-center overflow-hidden py-8 lg:py-12 about prose prose-h1:text-color-acc-soft prose-p:text-color-text-acc prose- mx-auto font-whyte font-light max-w-prose">
    <h1 class="text-9xl leading-[0] font-extrabold">404</h1>
    <h1>An error as occured.</h1>
    <h1><span>(╯°□°）╯︵ ┻━┻</span></h1>
    <div class="contents">
      <button v-on:click="$router.back()" class="drop-shadow-md font-bold text-lg hover:transition duration-300 hover:ease-in-out hover:bg-color-acc-soft hover:text-color-bg-soft text-color-acc-soft bg-color-bg-soft m-2 py-3 rounded-full">Back</button>
      <button v-on:click="$router.push({path: '/'})" class="drop-shadow-md font-bold text-lg hover:transition duration-300 hover:ease-in-out hover:bg-color-acc-soft hover:text-color-bg-soft text-color-acc-soft bg-color-bg-soft m-2 py-3 rounded-full">Home</button>
    </div>
  </div>
</template>