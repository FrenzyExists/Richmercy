<template>
  <div class="relative xl:mx-36 lg:mx-0 flex min-h-screen flex-col justify-center overflow-hidden md:py-8 lg:py-12">
    <!-- bg-[url(../assets/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.2S))] -->
    <div
      class="absolute bg-color-about-me inset-0">
    </div>
    <div
      class="mb-0 md:mb-24 relative w-full bg-color-bg-article md:rounded-3xl px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pb-28 lg:pt-16">
      <div class="prose mx-auto mt-8 lg:prose-lg prose-p:text-color-text-acc prose-h1:text-color-acc-soft font-montserrat-alternate">
        <h1>Who Am I?</h1>
        <p>My real name is Angel Garcia, but prefer to go by Pikachu on the internet, its less formal. I started formally
          learning programming at my 3rd year of college in Java. Since then I've been tinkering from time to time in
          other
          languages. During that time I also learned about Linux thanks to two instructors who used Manjaro and Ubuntu. A
          year
          later or so I learned about r/unixporn and started tinkering with dotfiles, getting into some basic bash and
          trying
          neovim for the first time. I think it was at the summer of that time, but around there I made some trinkets in
          python, specifically with pygame. I did a simple game and tried to make a tile generator, tho that one got lost
          in
          my old laptop. Anyway, changed to Computer Engineering in my 4th year, took my data structures in Java and found
          it to be far too verbose for my taste.</p>
        <p>Most of the progress I got is from this year and past one i think. First is with my pokedex that I kept
          posponing
          for 2 to 3 years. The next is this site, which I posponed since last year. I tend to do that a lot.</p>
        <p>My languages are spanish and english, I speak both fluently.</p>
        <br />
        <div class="text-center mx-auto max-w-4xl px-3">
          <h2 class="">Let's work together</h2>
          <p>Whether you're interested in working with me or just want to say hello, I'd love to hear from you!</p>
          <br>
          <div id="form-messages"></div>
          <form @submit.prevent="onsubmit" @reset="onReset">

            <div class="my-6">
              <div class="relative h-11 w-full">
                <input
                  class=" peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-color-acc-soft focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" " name="name" id="name" v-model="v$.form.name.$model" />
                <label
                  class="!font-bold uppercase after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-color-acc-soft after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-color-acc-soft peer-focus:after:scale-x-100 peer-focus:after:border-color-acc-soft peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Name
                </label>
              </div>
              <!-- Name error message -->
              <div class="input-errors" v-for="(error, index) of v$.form.name.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>
            <div class="my-6">
              <div class="relative h-11 w-full">
                <input
                  class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-color-acc-soft focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" " name="email" id="email" v-model="v$.form.email.$model" />
                <label
                  class="!font-bold uppercase after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-color-acc-soft after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-color-acc-soft peer-focus:after:scale-x-100 peer-focus:after:border-color-acc-soft peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
              <!-- Name error message -->
              <div class="input-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>

            <div class="my-6">
              <div class="relative w-full min-w-[200px]">
                <textarea
                  class="peer h-full min-h-[10rem] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-color-acc-soft focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" " data-minlength="10" v-model="v$.form.textMessage.$model" name="messageText"
                  id="messageText"></textarea>
                <label
                  class="!font-bold uppercase after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-color-acc-soft after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-color-acc-soft peer-focus:after:scale-x-100 peer-focus:after:border-color-acc-soft peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Hi! I'm Contacting you because...
                </label>
              </div>
              <!-- Text Message error message -->
              <div class="input-errors" v-for="(error, index) of v$.form.textMessage.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>

            <div class="flex justify-around sm:flex-row flex-col">
              <button type="submit" id="submit" name="submit"
                class="rounded-full my-4 sm:my-0 hover:transition duration-300 hover:ease-in-out hover:bg-color-acc hover:text-color-text-acc text-lg p-3 font-bold border-color-acc border-4 text-color-acc-soft bg-color-text-acc min-w-[10rem] ">SEND
                MESSAGE</button>
              <button type="reset" id="submit" name="reset"
                class="rounded-full my-4 sm:my-0 hover:transition duration-300 hover:ease-in-out hover:bg-color-acc hover:text-color-text-acc text-lg p-3 font-bold border-color-acc border-4 text-color-acc-soft bg-color-text-acc min-w-[10rem] ">RESET</button>
            </div>
          </form>
          <br>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'

export function validName(name) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)) {
    return true;
  }
  return false;
}

export default {
  setup() {
    return { v$: useVuelidate() }
  },

  data() {
    return {
      form: {
        name: '',
        email: '',
        textMessage: ''
      }
    }
  },

  validations() {
    return {
      form: {
        name: {
          required, name_validation: {
            $validator: validName,
            $message: 'Invalid Name. Valid name only contain letters, dashes (-) and spaces'
          }
        },
        email: { required, email },
        textMessage: { required, min: minLength(6) },
      },
    }
  },
}
</script>

<style>
.form-control {
  border: 2px solid rgba(0, 0, 0, 0.27);
  width: 100%;
  max-width: 100%;
  height: 3em;
  padding: 1em;
  margin: 0.5em 0 2em 0;
  font-weight: bold;
}
</style>