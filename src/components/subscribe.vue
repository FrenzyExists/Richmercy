<template>
    <div
      class="bg-background-harder dark:bg-dark-background-harder flex flex-col sm:flex-row px-11 overflow-hidden relative py-16 pb-24"
    >
    <icon-material-symbols-mail
    class="dark:text-dark-background-hard text-background-hard !flex absolute z-0 -rotate-12 w-auto !h-80 -mt-24 ml-24"/>
      <font-awesome-icon
        lass="dark:text-dark-bg-hard text-bg-harder "
        icon="fa-solid fa-envelope"
      />
      <div class="w-3/5 float-left relative inline-block align-middle">
        <h3 class="mb-3 text-3xl font-bold dark:text-dark-green text-green">Join my wacky Newsletter!</h3>
        <p class="text-lg w-3/4 dark:text-dark-text text-text">
          Subscribe to stay up to date with the latest tutorials and stories I write :D
        </p>
      </div>
      <div class="inline-block align-middle relative w-2/5">
        <form action="" class="align-middle inline-flex w-full">
          <input
            type="text"
            class="border-none h-12 rounded-lg max-w-full align-middle sm:w-3/5 w-auto dark:bg-dark-bg bg-bg-harder"
          />
          <button class="dark:bg-dark-acc bg-acc dark:text-dark-bg-hard text-bg-harder px-4 py-2 rounded-xl text-xl -ml-4">
            <font-awesome-icon class="" icon="fa-solid fa-paper-plane" />
          </button>
        </form>
      </div>
    </div>
  </template>