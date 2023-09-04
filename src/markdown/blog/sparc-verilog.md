---
title: SparcV8 Hardware Design
repoURL: https://github.com/FrenzyExists/Computer-Architecture-Project-SPARC
status: 'Developing'
readTime: '10min'
date: 'July 11th, 2023'
description: "My first time getting into hardware design and probably one of the most challenging and time-consumming college projects I've ever got"
tags: ['hardware', 'sparcV8', 'verilog']
---

My first time getting into hardware design and probably one of the most challenging and time-consumming college projects I've ever got, probably will be only beaten by the CAPSTONE project I'll get on next semester.

## Overview

I worked on this project during the spring semester of 2023 and it was a 3-student project at the beginning and was part of the Computer Architecture course. We had to learn verilog and understand how a computer works at the lowest level, and using some cheat sheets as reference convert assembly instructions into binary and viceversa. We even had to recreate on hand a memory stack during a quiz, understand a circular stack and work with cache. It was quite the experience. For the course project we had to implement a fully functional architecture in *SystemVerilog*: a SPARC version 8 architecture. This implementation would take some assembly instructions in binary and execute it as if it was just a normal computer. Of course, it had its limitations. I'll take about those later in the article.

The project is broken down into 4 phases to allow an easier breakdown of said task. Additionally, I did some extra things here and there as I really wanted to experiment more and get the hang on different tools a digital design engineer would use in the industry.

Without further ado, let's start!

## Prerequisites

As with any project there are a few things to have before tackling any project that requires some technical skills. You'll need:

- *[IcarusVerilog]()* installed
- A text editor like *Sublime Text* or *Vscode*
- A copy of the [SPARC V8 architecture specifications]() book
- Draw.io on a browser or locally installed
- Some previous programming knoledge, bonus points if it so happen to be Verilog
- God's holy patience
- Git Bash (optional)

## Tools

For the unitiated, IcarusVerilog is an open-source compiler implementation of the IEEE-1364 Verilog. And what's verilog you're asking? Its a hardware description language (HDL) used to model an electronic system. Basically its  a language that allows the engineer/designer to abstract a design down to its logic functionality. No need to think about the transistor technology or where to power it up or any other detail that is not necessarily part of a general design.

## Phases


### Phase 1: Learning Verilog and our first Module


### Phase 2: Learning Verilog and our first Module

### Phase 3: Implementing the Pipeline Unit

### Phase 4: Implement the whole damn architecture


## Challenges


## Bonus Material


## References
