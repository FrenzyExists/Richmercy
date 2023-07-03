<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden py-8 lg:py-12">
    <div
      class="absolute inset-0 bg-[url(../assets/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.2S))]">
    </div>
    <div
      class="relative w-full bg-[#295192ad]  px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pb-28 lg:pt-16">

      <div class="prose mx-auto mt-8 lg:prose-lg prose-p:text-color-text-acc prose-h1:text-color-acc-soft">

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
          my old laptop. Anyway, changed to Computer Engineering in my 4th year, took my data structures in Java and I
          still
          hate that language.</p>

        <p>Most of the progress I got is from this year and past one i think. First is with my pokedex that I kept
          posponing
          for 2 to 3 years. The next is this site, which I posponed since last year. I tend to do that a lot.</p>

        <p>My languages are spanish and english, I speak both fluently. Doesn't mean I like to speak tho</p>
        <br />
        <div class="text-center mx-auto max-w-4xl px-3">
          <h2 class="">Contact Me Plz</h2>
          <p>Whether you're interested in working with me or just want to say hello, I'd love to hear from you!</p>
          <br>
          <div id="form-messages"></div>
          <form @submit.prevent="submit" @reset="onReset">
            <input type="text" v-model="name" class="text-base form-control text-color-bg-soft bg-color-text-acc" id="name" name="name" placeholder="NAME"
              data-error="Field can't be blank!" required>

            <input type="email" v-model="email" class="text-base form-control text-color-bg-soft bg-color-text-acc" id="email" name="email" placeholder="EMAIL"
              data-error="Field can't be blank!" required>

            <textarea data-minlength="10" class="min-h-[10rem] text-base form-control text-color-bg-soft bg-color-text-acc" v-model="message" id="message" name="message"
              placeholder="MESSAGE" data-error="Minimum of 10 characters" required></textarea>

            <div class="flex justify-around sm:flex-row flex-col">
              <button type="submit" id="submit" name="submit"
                class="my-4 sm:my-0 hover:transition duration-300 hover:ease-in-out hover:bg-color-acc hover:text-color-text-acc text-lg p-3 font-bold border-color-acc border-4 text-color-acc-soft bg-color-text-acc min-w-[10rem] ">SEND
                MESSAGE</button>
              <button type="reset" id="submit" name="reset"
                class="my-4 sm:my-0 hover:transition duration-300 hover:ease-in-out hover:bg-color-acc hover:text-color-text-acc text-lg p-3 font-bold border-color-acc border-4 text-color-acc-soft bg-color-text-acc min-w-[10rem] ">RESET</button>
            </div>
          </form>
          <br>
        </div>

      </div>
    </div>
  </div>
</template>


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