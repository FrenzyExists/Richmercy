---
title: "Web Design with vue: A Rant"
description: "I have a grudge and I'm about to implode, be warned"
status: 'Rant'
readTime: '3min'
date: 'July 6th, 2023'
tags: ['Webdev']
---



Web development! Javascript! Bloody rewrites!

Things to do


1. Remake switch component for toggle
2. Do the tutorial thing to get the search thingy working
3. Create custom markdown theme for blogs
4. 



Blog: The making of this site

Personal portfolios. Everyone has one and in the tech industry you need one. Now I made a couple of em before, like [this] one a few years ago in basic html and css. Back then I didn't knew much bout web development and being in a third-world island where technology is outdated thanks to not so great economy wasn't helping either. But you what they say, "better late than never". So for vacations I wanted to do many things, but didn't really knew where to start. So I said, "why not start on the base?". And so I opened my abandoned projects folder and I find a vue 3 project I did around a year ago of a portfolio I never finished. I decide to run it and was pretty astonished on the design as I couldn't remember being able to make it in the first place. Memory is silly somethings. So I start to explore and see what I could finish and soon find the reason of why I never finished it: non-responsive CSS. 

It had many issues in terms of responsiveness, frontend is and will never be my strength. So after trying for some days to salvage it I decided to abandon it again and start from scratch. I had a few ideas in mind wasn't fully sure how to implement it
 
- Blog site
- Scrap projects
- Responsiveness for mobile devices
- Animations and transitions everywhere

That last one also was a reason I scrapped my abandoned vue project. I couldn't figure out why I vue transitions did not worked and when they did, it had an odd bug where a component of one route will sit on the bottom of the previous one for a moment before disappearing. Really annoying bug that took too long for my dumb brain to figure out.

Since I'll be writting from time to time on this while making it and already made some progress I'll put time stamps and whatnot to give a sense of progression and hopefully organize this god awful mess of a blog. I can't be organized, don't ask why.


june 20, 2023


I did some progress on the new site, not as fast as I wished tho. There's people out there who can do what I'm doing much faster and better, sucks to be slow. A lot. Managed to get transitions working bout a week ago, and did a lot of exploring here and there. I had to re-make my project cards completely and took me like 2 or 3 days to have it to an aestheticness and responsiveness that I could be happy. Everything must be flawless.

Two weeks ago I found a tutorial for the scraping I needed, but it needed Pinia and some other dependency. I hesitate a lot when it comes to installing dependencies. Maybe I have the wrong perspective, but seeing 200+ dependencies shown in node gives me anxiety, I can't see abundance without cringing or feeling disgusted. Anyway, here's what I have in mind and how to implement it:

#### Blog

This one was pretty hard, but for the wrong reasons. Many tutorials showed that I could use NuxtJS and using Markdown. That sounded fantastic to me, as I wanted to use markdown for my blogs, but most importantly, I wanted to use YAML to set some metadata on my blog files which my search feature and project scrapper would use.

Basically, you could scrape github and categorize a project by some tag found in the github project and show the README file and whatnot. But I wanted to do more than that. I wanted to document blogs based on said project and sort of merge the information of said blog with said project seemingly. For example, if I write a blog of my college computer architecture then when a user clicks said project it would instead show a blog or a series of blogs related to said project and some icons/links to visit said project. I'm not sure if one can run a demo of said project for demonstration, but if possible, then a window showing said demo as well. It would help me keep track of progress on the projects I make and maybe putting it on text could help me figure out the problem, bug or whatever I may be facing when I'm stuck.

#### Projects

The layout would be somewhat similar to Vimm's Lair in terms that a user could see the most relevant projects first or type it on a search bar or in an alphabet. Something that will motivate me to do more projects.


#### About


Still unsure how to go with this one. I could set up a contant me, but for an era where communication is practically instant it doesn't sound so ideal. I've seen sites that have a live chat, its less formal, but something more akin to how people send and receive messages. Maybe I could make a chat that shows on some discord server, maybe in Matrix, some people are paranoic of the government. Some take it to the extreme and live off the grid. Maybe its an effect the city has over people, who knows.





