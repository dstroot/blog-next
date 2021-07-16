---
title: Mob programming with 65 million of your peers
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

[Microsoft](https://www.microsoft.com/en-us/), who owns [GitHub](https://github.com/) has partnered with [OpenAI](https://openai.com/) who developed Codex, an AI that translates natural language into code.  Side note: OpenAI runs on Microsoft Azure.

OpenAI Codex was trained on publicly available source code **and natural language**, so it understands **both programming and human languages**. Codex is an API-driven AI service that has many more capabilities, which developers can explore — and build into their own apps — when OpenAI opens access to Codex later this year (2021).

Codex was trained on billions of lines of public code, uploaded by the 65 million users of GitHub. The aim is for Copilot to learn enough about the patterns in that code that it can do some hacking itself. It can take the incomplete code of a human partner and finish the job. For the most part, it appears successful at doing so. GitHub eventually plans to sell access to the tool to developers.

## How it Works

In practice, you write a human-readable comment describing the logic you want, and you start coding. Copilot will make suggestions to complete the code.  Automatically, seamlessly, and fast enough that your workflow will not be interrupted. GitHub Copilot is a code **synthesizer**, not a search engine: the vast majority of the code that it suggests is **uniquely generated and has never been seen before**.

![Copilot Diagram](/assets/blog/img/copilot3.jpg)

The GitHub Copilot editor extension sends your comments and code to the GitHub Copilot service, which then uses OpenAI Codex to synthesize and suggest individual lines and whole functions. GitHub Copilot also records whether the suggestions are accepted or rejected. This telemetry is used to improve future versions of the AI system, so that GitHub Copilot can make better suggestions in the future.

![Copilot Quote](/assets/blog/img/copilot2.jpg)

## You are contributing value, whether you like it not, when you make your code public

Training machine learning models on publicly available data is considered fair use across the machine learning community. The models gain insight and accuracy from the public collective intelligence. 

So programmers are contributing code that Copilot then uses to make them more productive. The only way to extract value back out is to use Copilot yourself.

## Virtuous Circle

1. Programmers like to use GitHub to maintain their code repositories.  It is already the de-facto home for Open Source projects and many programmers also keep their personal repositories on GitHub (I do).

2. Copilot was trained on literally billions of lines of code, all taken from GitHub repositories.

3. Microsoft offers a very extensible and widely used Integrated Development Environment (IDE) called Visual Studio Code, or VSCode.  GitHub Copilot is available today only as a Visual Studio Code extension.

> For now, we’re focused on delivering the best experience in Visual Studio Code only.

Copilot will **drive programmers to use VSCode** because when they use VSCode and Copilot they will be more productive. The code suggestions they choose from Copilot will further train Copilot so it will make even better suggestions. Programers will have an incentive to save their code on GitHub because eventually it will improve Copilot, which further improves their productivity and code quality.  

This virtuous circle is a way to solidify GitHub as "the" place to store your code.

## Legal issues are uncharted territory

There’s a lot of public code in the world with insecure coding patterns, bugs, or other issues. If you program using Copilot and accept one of it's suggestions, and that specific suggestion creates a security vulnerability in your code, who is liable?  GitHub's position is that you are 100% responsible for your code and Copilot is just a helpful tool.  

In other words it's like spell check, you may use spell check to correct words in a legal document - if spell check suggests a word that changes the meaning of the document who is liable? So far, not the provider of spell check. After all, a human "accepted" the suggestion.  Copilot takes this one step further - imagine while writing a document spell check started suggesting whole paragraphs, or pages of content (hint: GPT-3 can do this already) and you accept the whole page?  

I think the saving grace is that a human still has to review and accept the code suggestions but this will be an area to watch closely.  




- if generated code becomes the reason for infringement, who gets the blame or legal action?
- how can anyone prove the code was actually generated by Copilot and not the project owner?
- if a project member does not agree with the usage of Copilot, what should we do as a team?
- can Copilot copy code from other projects and use that excerpt code?
- if yes, *WHY* ?!
- who is going to deal with legalese for something he or she was not responsible in the first place?
- what about conflicts of interest?
- can GitHub guarantee that Copilot won't use proprietary code excerpts in FOSS-ed projects that could lead to new "Google vs Oracle" API cases?



## Lower Barriers to Entry

Creating intelligent systems to "co-code" with you will bring enormous change to the developer experience. GitHub Copilot has the potential to lower barriers to entry, enabling more people to explore software development and join the next generation of developers. This opens the door for many people who may not otherwise be able to get a developer position, but it will also lower wages for entry level programmers who code in common languages. It also may increase the desire to move coding jobs to lower cost locations in the world because the resulting code quality would be more normalized if it was developed using Copilot.  

It also has the possible outcome of increasing wages for solution architects, senior lead developers, and others with more specialized skills. As basic software development becomes more commoditized more experienced people will be in demand to "oversee" the work.  

### References

- [GitHub Copilot](https://copilot.github.com/)

- [search](https://www.google.com/search?q=hackernews+github+copilot&oq=hack&aqs=chrome.2.69i57j0i67l2j69i61j69i65l2j69i61l2.4105j0j4&sourceid=chrome&ie=UTF-8)

- [GitHub’s Commercial AI Tool Was Built From Open Source Code](https://www.wired.com/story/github-commercial-ai-tool-built-open-source-code/)

- [gggg](https://towardsdatascience.com/github-copilot-a-rise-and-fall-story-for-the-software-engineering-industry-524c83694136)

- [OpenAI's position, as submitted to the USPTO](https://www.uspto.gov/sites/default/files/documents/OpenAI_RFC-84-FR-58141.pdf)

- [HN](https://news.ycombinator.com/item?id=27676939)