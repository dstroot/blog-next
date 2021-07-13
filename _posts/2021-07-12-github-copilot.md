---
title: GitHub Copilot
excerpt: You are contributing value, whether you like it not, when you make 
  your code public. Training machine learning models on publicly available data is 
  considered fair use across the machine learning community. The models gain insight 
  and accuracy from the public collective intelligence. The only way to extract value back out is to use Copilot yourself.
coverImage: /assets/blog/img/copilot.jpg
date: "2021-07-12"
published: false
author:
  name: Dan Stroot
  picture: /assets/blog/authors/dan.jpeg
ogImage:
  url: /assets/blog/img/copilot.jpg
seoURL: ""
---

[Microsoft](https://www.microsoft.com/en-us/), who owns [GitHub](https://github.com/) has partnered with [OpenAI](https://openai.com/) who developed Codex, an AI that translates natural language into code.  OpenAI runs on Microsoft Azure.

OpenAI Codex was trained on publicly available source code **and natural language**, so it understands **both programming and human languages**. Trained on billions of lines of public code Codex is an API-driven AI service that has many more capabilities, which developers can explore — and build into their own apps — when OpenAI opens access to Codex later this year (2021).

millions of lines uploaded by the 65 million users of GitHub, the world’s largest platform for developers to collaborate and share their work. The aim is for Copilot to learn enough about the patterns in that code that it can do some hacking itself. It can take the incomplete code of a human partner and finish the job. For the most part, it appears successful at doing so. GitHub, which was purchased by Microsoft in 2018, plans to sell access to the tool to developers.

GitHub has partnered with OpenAI to expose Codex via an API to programmers using Microsoft's Visual Studio Code programming environment.

## How it Works

You write a human-readable comment describing the logic you want, and you start coding. Copilot will make suggestions to complete the code.  Automatically, seamlessly, and fast enough that your workflow will not be interrupted. GitHub Copilot is a code synthesizer, not a search engine: the vast majority of the code that it suggests is **uniquely generated and has never been seen before**.

![Copilot Diagram](/assets/blog/img/copilot3.jpg)

The GitHub Copilot editor extension sends your comments and code to the GitHub Copilot service, which then uses OpenAI Codex to synthesize and suggest individual lines and whole functions. GitHub Copilot also records whether the suggestions are accepted or rejected. This telemetry is used to improve future versions of the AI system, so that GitHub Copilot can make better suggestions in the future.

![Copilot Quote](/assets/blog/img/copilot2.jpg)

## Virtuous Circle

1. Programmers like to use GitHub to maintain their code repositories.  It is already the de-facto home for Open Source projects and many programmers also keep their personal repositories on GitHub (I do).

2. Copilot was trained on literally billions of lines of code, all taken from GitHub repositories.

3. Microsoft offers a very extensible and widely used Integrated Development Environment (IDE) called Visual Studio Code, or VSCode.  GitHub Copilot is available today only as a Visual Studio Code extension.

Copilot will **drive programmers to use VSCode** because when they use VSCode and Copilot they will be more productive. The code suggestions they choose from Copilot will further train Copilot so eventually it will make even better suggestions. Programers will have an incentive to save their code on GitHub because eventually it will improve Copilot, which further improves their productivity and code quality.  

This virtuous circle is a way to s.  

## You are contributing value, whether you like it not, when you make your code public

Training machine learning models on publicly available data is considered fair use across the machine learning community. The models gain insight and accuracy from the public collective intelligence. 

So programmers are contributing code that through Copilot makes programmers more productive. The only way to extract value back out is to use Copilot yourself.

## Legal issues are uncharted territory

There’s a lot of public code in the world with insecure coding patterns, bugs, or other issues. If you program using Copilot and accept one of it's suggestions, and that specific suggestion creates a security vulnerability in your code, who is liable?  GitHub's position is that you are 100% responsible for your code and Copilot is just a 

## Lower Barriers to Entry

Bringing in more intelligent systems has the potential to bring enormous change to the developer experience. GitHub Copilot has the potential to lower barriers to entry, enabling more people to explore software development and join the next generation of developers. This opens the door for many people who may not otherwise be able to get a developer position, but it will also lower wages for entry level programmers who code in common languages.

### References

[GitHub Copilot](https://copilot.github.com/)
https://www.google.com/search?q=hackernews+github+copilot&oq=hack&aqs=chrome.2.69i57j0i67l2j69i61j69i65l2j69i61l2.4105j0j4&sourceid=chrome&ie=UTF-8
[GitHub’s Commercial AI Tool Was Built From Open Source Code](https://www.wired.com/story/github-commercial-ai-tool-built-open-source-code/)

https://towardsdatascience.com/github-copilot-a-rise-and-fall-story-for-the-software-engineering-industry-524c83694136