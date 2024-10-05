---
title: My Journey in making my first lua plugin for Neovim
status: 'Blog'
description: 'Just a record on my struggles and progress while learning lua, and making my first plugin for the overrated Neovim text editor'
readTime: '10min'
date: "July 12th, 2023"
tags: ['lua', 'neovim', 'programming']
---

Lua is everywhere, its in roblox, in neovim, in my laptop, and one day it will be in my grandma's 90s wagon. Mark my words. Jokes aside, this is just a record on my struggles and progress while learning lua, and making my first plugin for the overrated Neovim text editor

## Disclaimer

This post is kinda borrowing from other posts. Hey! At least I'm honest about it.

I took inspiration on 


I really recommend anyone to check those posts, they're pretty good. For this guide you will also need to use your search engine.... a lot. If you don't know something, search it, if you don't fully understand a snippet code, read the documentation, or just copy/paste it and see what it does. Some learn by experimenting.

## Prerequisite

- Neovim v0.5 or higher (for lua support)
- nvim-web-devicons (optional)
- God's Infinite Patience
- Terminal Emulator (ie. Alacritty, or Kitty)

## The Planning

So, like everything instead of crashing down and start coding like a madman its always best to first ask "why?". If you're going to make a plugin for the sake of making a plugin and its to create a question rather than answering one, then its probably not worth it. By going to the drawing board and stating the problem in detail you can have a better idea on what the plugin should accomplish. Furthermore, its plausible that the problem you want to solve with a plugin has already been attempted by someone else and one could therefore look on that person's solution and see what it did right, and what could be improved.

Take a notepad or drawing app and start brainstorming. Make a concept and state what the plugin should do and what should it solve. For me I use Obsidian, Microsoft Whiteboard, and Figma. Obsidian is a great option for this as Neovim is just a vscode on a terminal emulator. Here's an example of what I came with while brainstorming:

**Problem**: Not much DB support for neovim.

**Does someone tried to solve it already?** Yup. This [repo]() written in vimscript attempts to add to neovim a similar functionality as Jetbrains Datagrip database management UI.

**What to improve?** 
- We can make a plugin in lua that takes advantage of Neovim's lua API so the plugin runs more efficiently. 
- Some UI improvement and mouse support could work.
- Maybe support for other plugins (?)

**Research**
- The existing plugins for Neovim/Vim, Datagrip, vscode's database plugins


## Initial Setup


