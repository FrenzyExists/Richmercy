<template>
  <div class="absolute bg-color-about-me inset-0"></div>
  <div
    class="dark:bg-dark-bg-hard bg-bg-hard mb-0 md:mb-24 relative w-full md:rounded-3xl px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pb-28 lg:pt-16"
  >
    <div class="prose prose-toy-story dark:prose-invert font-montserrat-alternate mx-auto">
      <h1>Who Am I?</h1>
      <p>
        Hi! My name is Angel, but is very likely you know me as
        <span class="italic">Pikachu</span> I'm a Computer Engineering student at the University of
        Puerto Rico in Mayaguez. I've always been fascinated by the way computers and circuits work
        and how they can be used to solve complex problems. I've always been interested in the
        field of computer science and how it can be used to improve our lives. 
      </p>
      <p>
        I also have my hobbies, like playing video games, building mechanical keyboards, playing with 
        arduinos, and other technical hobbies. But I also am into outdoors activities, like hiking,
        and going to rollercoasters in amusement parks, and going to the beach.
      </p>
      <p>
        Did some research for Texas Instruments during my uni since 2022. Previously developed a GUI
        for where they can visualize the results of a series of tests done in labview. Currently I am
        now developing a neural network to detect and clean black pepper noise in images.
      </p>
      <p>
        In my free time I sometimes write a short blog or article about what I've been working on.
        Sometimes I also write code on whatever I'm working on, being an API or a website or even 
        a tooling script.
      </p>
      <br />
      <div class="text-center mx-auto max-w-4xl px-3">
        <h2>Let's work together</h2>
        <p>
          Whether you're interested in working with me or just want to say hello, I'd love to hear
          from you!
        </p>
        <br />
        <div id="form-messages"></div>
        <form @submit.prevent="onsubmit" @reset="onReset">
          <div class="my-6">
            <div class="relative h-11 w-full">
              <input
                class="peer h-full w-full border-b bg-transparent pt-4 pb-1.5 text-sm font-normal outline outline-0 transition-all dark:border-dark-bg-mute border-bg-mute"
                placeholder=" "
                name="name"
                id="name"
                v-model="v$.form.name.$model"
              />
              <label
                class="font-bold uppercase pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-xs text-acc dark:text-dark-acc transition-all after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 dark:after:border-dark-acc after:border-acc after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] dark:peer-placeholder-shown:text-dark-acc-soft peer-placeholder-shown:text-acc-soft peer-focus:text-xs peer-focus:leading-tight peer-focus:after:scale-x-100 peer-focus:after:border-acc dark:peer-focus:after:border-dark-acc"
                >Name</label
              >
            </div>
            <!-- Name error message -->
            <div class="input-errors" v-for="(error, index) of v$.form.name.$errors" :key="index">
              <div class="error-msg dark:text-dark-red text-red">{{ error.$message }}</div>
            </div>
          </div>
          <div class="my-6">
            <div class="relative h-11 w-full">
              <input
                class="peer h-full w-full border-b bg-transparent pt-4 pb-1.5 text-sm font-normal outline outline-0 transition-all dark:border-dark-bg-mute border-bg-mute"
                placeholder=" "
                name="email"
                id="email"
                v-model="v$.form.email.$model"
              />
              <label
                class="font-bold uppercase pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-xs text-acc dark:text-dark-acc transition-all after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 dark:after:border-dark-acc after:border-acc after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] dark:peer-placeholder-shown:text-dark-acc-soft peer-placeholder-shown:text-acc-soft peer-focus:text-xs peer-focus:leading-tight peer-focus:after:scale-x-100 peer-focus:after:border-acc dark:peer-focus:after:border-dark-acc"
              >
                Email
              </label>
            </div>
            <!-- Name error message -->
            <div class="input-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
              <div class="error-msg text-red dark:text-dark-red">{{ error.$message }}</div>
            </div>
          </div>
          <div class="my-6">
            <div class="relative h-36 w-full">
              <textarea
                class="resize-none peer h-full w-full border-b bg-transparent pt-4 pb-1.5 text-sm font-normal outline outline-0 transition-all dark:border-dark-bg-mute border-bg-mute"
                placeholder=" "
                data-minlength="10"
                v-model="v$.form.textMessage.$model"
                name="messageText"
              />
              <label
                class="font-bold uppercase pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-xs text-acc dark:text-dark-acc transition-all after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 dark:after:border-dark-acc after:border-acc after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] dark:peer-placeholder-shown:text-dark-acc-soft peer-placeholder-shown:text-acc-soft peer-focus:text-xs peer-focus:leading-tight peer-focus:after:scale-x-100 peer-focus:after:border-acc dark:peer-focus:after:border-dark-acc"
              >
                Hi! I'm Contacting you because...
              </label>
            </div>
            <!-- Text Message error message -->
            <div
              class="input-errors"
              v-for="(error, index) of v$.form.textMessage.$errors"
              :key="index"
            >
              <div class="error-msg text-red dark:text-dark-red">{{ error.$message }}</div>
            </div>
          </div>
          <div class="flex justify-around sm:flex-row flex-col">
            <button
              type="submit"
              id="submit"
              name="submit"
              class="rounded-full drop-shadow-md my-4 sm:my-0 font-bold text-lg hover:transition duration-300 hover:ease-in-out hover:bg-acc-soft hover:text-bg-soft text-acc-soft dark:hover:text-dark-bg-soft dark:bg-dark-bg-soft dark:text-dark-acc-soft dark:hover:bg-dark-acc-soft bg-bg-soft p-4 min-w-[10rem]"
              @click="sendEmail"
            >
              SEND MESSAGE
            </button>
            <button
              type="reset"
              id="submit"
              name="reset"
              class="rounded-full drop-shadow-md my-4 sm:my-0 font-bold text-lg hover:transition duration-300 hover:ease-in-out hover:bg-acc-soft hover:text-bg-soft text-acc-soft dark:hover:text-dark-bg-soft dark:bg-dark-bg-soft dark:text-dark-acc-soft dark:hover:bg-dark-acc-soft bg-bg-soft p-4 min-w-[10rem]"
            >
              RESET
            </button>
          </div>
        </form>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { useHead } from '@unhead/vue'
import { defineAsyncComponent } from 'vue'

export function validName(name) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$")
  if (validNamePattern.test(name)) {
    return true
  }
  return false
}

export default {
  setup() {
    useHead({
      title: 'Who is Pikachu?'
    })
    return {
      v$: useVuelidate()
    }
  },
  mounted() {
    let smtpjs = document.createElement('script')
    smtpjs.async = true
    smtpjs.setAttribute('src', 'https://smtpjs.com/v3/smtp.js')
    document.head.appendChild(smtpjs)
  },
  methods: {
    sendEmail() {
      console.log('attempting message')
      Email.send({
        SecureToken: `${import.meta.env.VITE_EMAIL_TOKEN}`,
        To: `${import.meta.env.VITE_EMAIL}`,
        From: this.v$.form.email.$model,
        Subject: this.v$.form.name.$model + ' - Customer',
        Body: this.v$.form.textMessage.$model
      }).then(
        // TODO: Create a better alert component
        (message) => alert(message)
      )
    }
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
          required,
          name_validation: {
            $validator: validName,
            $message: 'Invalid Name. Valid name only contain letters, dashes (-) and spaces'
          }
        },
        email: { required, email },
        textMessage: { required, min: minLength(6) }
      }
    }
  }
}
</script>

<route lang="yaml">
meta:
  layout: fell
</route>
