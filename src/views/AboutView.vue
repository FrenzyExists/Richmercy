<template>
  <!-- relative xl:mx-36 lg:mx-0 flex min-h-screen flex-col justify-center overflow-hidden md:py-8 lg:py-12 -->
  <div class="pt-8 md:pt-10">
    <div class="absolute bg-color-about-me inset-0">
    </div>
    <div
      class="dark:bg-dark-bg-hard bg-bg-hard mb-0 md:mb-24 relative w-full md:rounded-3xl px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pb-28 lg:pt-16">
      <div class="prose prose-toy-story dark:prose-invert font-montserrat-alternate mx-auto">
        <h1>Who Am I?</h1>
        <p>Hi! My name is Angel, but is very likely you know me as <italic>Pikachu</italic> I'm a Computer Engineering
          student at the University of Puerto Rico in Mayaguez. I've always been fascinated by the way computers and
          circuits work and how they can be used to solve complex problems. My passion for programming started since my
          days in middle school when playing Flash games like Smash Flash 2. Youtube had lots of tutorials on Game Maker
          and when I got in highschool I started to "program" with tutorials. Although I was able to make a simple
          platform game, I still had trouble understanding object-oriented concepts like polyphormism and posponed my
          hobbie. Several years later I would take the basic courses like Algorithms and Advanced Programming
          to finally set myself on switching from studying Surveying Engineering to Computer Engineering on my 4th year.
          And although the change wasn't easy, I don't regret it!</p>

        <p>I am currently working on a research project with a professor in the Electrical Engineering department where we
          are developing a GUI for an existing testing CLI developed by Texas Instruments engineers.</p>

        <p>I also currently develop frontend in my free time and experiment with Arduino and ESP-32 boards. I am also an active
          member of the IEEE Circuits and Systems Asociation as a Webmaster asistant and as Webmaster
          for the IEEE in my university. I am excited about the future of technology and how it can be used to solve
          real-world problems. I hope to be part of this change by contributing my skills and knowledge.</p>
        <br />
        <div class="text-center mx-auto max-w-4xl px-3">
          <h2>Let's work together</h2>
          <p>Whether you're interested in working with me or just want to say hello, I'd love to hear from you!</p>
          <br>
          <div id="form-messages"></div>
          <form @submit.prevent="onsubmit" @reset="onReset">

            <div class="my-6">
              <div class="relative h-11 w-full">
                <input
                  class="peer h-full w-full border-b bg-transparent pt-4 pb-1.5 text-sm font-normal outline outline-0 transition-all dark:border-dark-bg-mute border-bg-mute"
                  placeholder=" " name="name" id="name" v-model="v$.form.name.$model" />
                <label
                  class="font-bold uppercase pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-xs text-acc dark:text-dark-acc transition-all after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 dark:after:border-dark-acc after:border-acc after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] dark:peer-placeholder-shown:text-dark-acc-soft peer-placeholder-shown:text-acc-soft peer-focus:text-xs peer-focus:leading-tight peer-focus:after:scale-x-100 peer-focus:after:border-acc dark:peer-focus:after:border-dark-acc">
                  Name
                </label>
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
                  placeholder=" " name="email" id="email" v-model="v$.form.email.$model" />
                <label
                  class="font-bold uppercase pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-xs text-acc dark:text-dark-acc transition-all after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 dark:after:border-dark-acc after:border-acc after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] dark:peer-placeholder-shown:text-dark-acc-soft peer-placeholder-shown:text-acc-soft peer-focus:text-xs peer-focus:leading-tight peer-focus:after:scale-x-100 peer-focus:after:border-acc dark:peer-focus:after:border-dark-acc">
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
                  placeholder=" " data-minlength="10" v-model="v$.form.textMessage.$model" name="messageText" />
                <label
                  class="font-bold uppercase pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-xs text-acc dark:text-dark-acc transition-all after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 dark:after:border-dark-acc after:border-acc after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] dark:peer-placeholder-shown:text-dark-acc-soft peer-placeholder-shown:text-acc-soft peer-focus:text-xs peer-focus:leading-tight peer-focus:after:scale-x-100 peer-focus:after:border-acc dark:peer-focus:after:border-dark-acc">
                  Hi! I'm Contacting you because...
                </label>
              </div>
              <!-- Text Message error message -->
              <div class="input-errors" v-for="(error, index) of v$.form.textMessage.$errors" :key="index">
                <div class="error-msg text-red dark:text-dark-red">{{ error.$message }}</div>
              </div>
            </div>
            <div class="flex justify-around sm:flex-row flex-col">
              <button type="submit" id="submit" name="submit" class="rounded-full drop-shadow-md my-4 sm:my-0 font-bold text-lg hover:transition duration-300 hover:ease-in-out hover:bg-acc-soft hover:text-bg-soft text-acc-soft dark:hover:text-dark-bg-soft dark:bg-dark-bg-soft dark:text-dark-acc-soft dark:hover:bg-dark-acc-soft bg-bg-soft p-4 min-w-[10rem]
                " @click="sendEmail">SEND MESSAGE</button>
              <button type="reset" id="submit" name="reset" class="rounded-full drop-shadow-md my-4 sm:my-0 font-bold text-lg hover:transition duration-300 hover:ease-in-out hover:bg-acc-soft hover:text-bg-soft text-acc-soft dark:hover:text-dark-bg-soft dark:bg-dark-bg-soft dark:text-dark-acc-soft dark:hover:bg-dark-acc-soft bg-bg-soft p-4 min-w-[10rem]
                ">RESET</button>
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
import { required, email, minLength } from '@vuelidate/validators'
import { useHead } from '@unhead/vue';

export function validName(name) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)) {
    return true;
  }
  return false;
}

export default {
  setup() {
    useHead({
      title: 'Who is Pikachu?',
    })
    return {
      v$: useVuelidate(),
    }
  },
  mounted() {
    let smtpjs = document.createElement("script");
    smtpjs.async = true;
    smtpjs.setAttribute("src", "https://smtpjs.com/v3/smtp.js")
    document.head.appendChild(smtpjs)
  },
  methods: {
    sendEmail() {
      console.log("attempting message")
      Email.send({
        SecureToken: 'f36dced5-ba7c-4311-a801-ba89cc2d958c',
        To: 'frenzyexists@gmail.com',
        From: this.v$.form.email.$model,
        Subject: this.v$.form.name.$model + ' - Customer',
        Body: this.v$.form.textMessage.$model
      }).then(
        // TODO: Create a better alert component
        message => alert(message)
      );
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