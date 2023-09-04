---
title: "Making This Website"
status: "Developing"
date: "June 25th, 2023"
description: "Documentation and some tutorial about the creation of this website"
tags: ["vue3", "ui/ux", "web design"]
---



Every professional you encounter will probably encourage you to create a portfolio, or a website as a portfolio in engineering. Throughout  my time in college I did a few attempts on doing a portfolio website that could show my skills and document the things I've been doing. However, these older [websites]() were too simple, outdated, or a pain to maintain. This website is my third and hopefully last attempt...

## Introduction

Welcome to my blog! In this post, I’ll be sharing my journey of building my personal portfolio website using Vue3, Vite ,TailwindCSS and other technologies. From brainstorming the design and features to choosing the right technology stack and overcoming challenges along the way, I’ll be taking you through the entire process of bringing my website to life.

I will go from the brainstorming sessions using tools like Figma, and I’ll be diving deeper into the different stages of building my website, including the technology stack of choice, development process, challenges and many pitfalls I've had, and lessons learned. I hope you’ll find this post informative and inspiring, whether you’re a fellow developer or just curious about the process of building a website from scratch. Let’s get started!

## Brainstorming

The idea for my personal portfolio website had been brewing in my mind for some time. I had actually tried to build it almost 2 years ago, but as a somewhat lazybones, I let the code gather dust on my Dell XPS laptop (I didn’t even bother uploading it to GitHub). Fast-forward to summer 2023, and while exploring my old laptop, I stumbled upon my old code. As with all old code, I cringed at the sight of it and wondered what on earth I was thinking when I wrote such a mess. Suffice to say, I decided to start from scratch.

### Planning with Figma

That’s where *Figma* came into play. [Figma]() is a graphics design editor commonly used by frontend developers to design interfaces. You can use it to draw SVG vectors, create collages or designs, or wireframe websites and design mobile/desktop interfaces. It’s an all-around great graphics editor.

You can find my Figma file **[here]()**, where I’ve laid out the general concept for some parts of the website. Now, frontend design isn’t exactly my strength, so I had to do a lot of research on designs to get some _inspiration_. For example, *[Codepen]()* is a great website for finding ideas and exploring different designs and animations when building a website. With these two tools in hand, I came up with the following guidelines for my website:

- An animated landing page that forwards to a carousel
- An About page with a _Contact Me_ form
- A section for blogs
- A way to scrape and connect blogs to GitHub projects
- A way to display my resume for download
- The website must be _responsive_ and work on both desktop and mobile screens

### Choosing a Color Palette

One of the challenges I faced during the brainstorming process was deciding on a clear direction for my website. I often found myself changing my vision and struggling to stay focused on one particular concept. This was especially evident when it came to choosing colors. While experimenting with *[Coolors]()* and trying out different palettes in *Figma*, I had a hard time deciding on the right balance of light and dark for my shadows and darker versions of my base colors.

In the end, I decided not to spend too much time agonizing over these details, as I knew that my vision for the website was likely to evolve as I continued to develop it. Instead, I focused on being flexible and open to change, while still maintaining a general sense of direction for what I wanted my website to be.

With those basic guidelines in place, I started searching for a color palette that would suit my website. Some years ago, I had created a palette called _Aquarium_ and thought about using it for this website. However, _Aquarium_ is a very pale, washed-out palette by design, and I wanted something with more contrast that was both visually appealing and easy to navigate. That’s where _Coolors_, the color palette generator, came in.

I spent around 3 or 4 minutes experimenting with different pre-made palettes until I landed on a dark mute blue and vibrant orange combination, along with white. Then I used the gradient feature to generate different tones as I realized I could focus the website on 3 main colors and use different tones for borders, shadows, etc. My vision was for the website to have a sense of focus and calmness. My family, however, asked if I was making a Toy Story website. And so the _Toy Story_ color palette was born.

Once I had a solid general concept of the visuals and user interaction for the website, I moved on to brainstorming the technology stack - which deserves its own section!

## Technology Stack

Going back to the mention of my older code, instead of completely throwing it I maintained a few things, like the core framework I utilized.

### Vue 3



### Debugging/Quality Life



### Vue Router

Its the official router for *Vue.js* and allows you to build Single Page Apps with ease. I defined a file called `src/router/index.js` and defined the routes for my website. A basic form is something like this:

```javascript
import { createRouter, createWebHistory } from 'vue-router'

const routeArray = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  }, {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) 
    // for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }, {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectView.vue')
  }, {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  }, {
    path: "/projects/:letter",
    name: "projectByLetter",
    component: () => import('../views/ByListProjectView.vue'),
    visibleToNav: false
  }, {
    path: "/blog/:letter",
    name: "blogByLetter",
    component: () => import('../views/ByListBlogView.vue'),
    visibleToNav: false
  }, {
    path: "/:pathMatch(.*)",
    name: "404",
    component: () => import('../views/404View.vue'),
    visibleToNav: false
  }
]

export { routeArray }
export default router
```

Let's break this snippet. The purpose of this snippet is to specify what *views* to show based on the route link.

The first line of the code imports the `createRouter` and `createWebHistory` functions from the `vue-router` package. These functions are used to create a new instance of the Vue Router with a history mode that uses the[ HTML5 History API]().

The `routeArray` constant is an array of objects that define the routes for the application. Each object in the array represents a route and has several properties:

- `path`: The URL path for the route.
- `name`: The name of the route, which can be used to reference the route in other parts of the application.
- `component`: The Vue component that should be rendered when the route is matched. In this case, the components are imported dynamically using an arrow function and the `import()` syntax. This allows for code-splitting, where each route’s component is loaded only when it is needed, improving the performance of the application.
- `visibleToNav`: An optional property that specifies whether or not this route should be visible in navigation menus.

One thing to note is that is possible to use regex so any matching route link would redirect to the desired view. For example a route like `/about/*/sec-[0-9]` will match for routes like `/about/something/sec-3`. This a bit tricky for me because there were exceptions to the rule where you'll have to reference to the vue router documentation. For example to match for unused routes one would use `/:pathMatch(.*)` instead of a barebones `/*`. The latter pattern will instead override all possible path - including the previously defined ones in the `routeArray` and redirect all to whatever view is specified by `/*`. I recommend give a [read to the documentation](https://router.vuejs.org/guide/essentials/dynamic-matching.html) as it has a couple of examples that you can copy/paste.

Setting up the history and creating the routes is not enough,  we have to mount it into the main app. Go to your main.js file and add:

```javascript
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
```

Assuming the views specified in the route array exists it should work as expected. Now, you may realize that this way of routing is not very sustainable if, for example we created a blog site, as we would have to hardcode every single file into `routeArray`. I had this very issue when I was trying to get Vue to route my Markdown files (including this very one). The solution? Vite and its many plugins

### Vite

In case you're wondering, Vite is **NOT** another framework. It's think of it as an *extension* for Vue


### Vite Plugins



```javascript
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'




export { routeArray, markdownRoutes }

export default router
```


### Tailwind CSS

There's this joke where to 


### Axios



### Vueuse



### Vue Carousel



## Development Process


### Markdown and the Seven Gates of Hell

### Navbar Extravaganza

Ah yes, the navigation bar, a 75px to 85px bar whose existence is paramount for a website's UX. For a good navbar you need it to be as adaptive as possible to the screen size, have a tidy layout and not get in the way, and by that I mean the navbar to hide.

The general layout for my navbar is very simple: A logo with a name, a few links, and light/dark theme button. The same goes with the colors: slightly lighter blue than the rest of the general background, white links, yellow for the active link and a shadow drop on under the bar. And for mobile you hide the links and press the hamburger to see it or unsee it. Finally once you scroll a certain distance it will disappear, allowing you to focus on the info you have in front of you.

Explaning in detail my code so it actually make sense to everyone

- the layour


[jquery - Bootstrap 4 - How to make fixed-top navbar disappear on scroll - Stack Overflow](https://stackoverflow.com/questions/54164397/bootstrap-4-how-to-make-fixed-top-navbar-disappear-on-scroll)




### Landing Page with Identity Crisis


### Why are you doing this to me EMAIL?!?!?




### Code Snippets

## Lessons Learned

Sometimes projects never end 🥲.

Feel free to comment your thoughts and... any feedback is welcome!


https://medium.com/js-dojo/learn-form-validation-in-vue-3-in-10-minutes-with-vuelidate-8929c5059e66#:~:text=Form%20validation%20in%20Vue%203%20in%2010%20minutes,called%20to%20validate%20our%20Vue%203%20application%20forms.


