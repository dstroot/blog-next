---
title: Mob Programming with 65 Million of Your Peers
excerpt: You are contributing value, whether you like it not, when you make your
  code public. Training machine learning models on publicly available data is
  considered fair use across the machine learning community. The models gain
  insight and accuracy from the public collective intelligence. The only way to
  extract value back out is to use Copilot yourself.
coverImage: /assets/blog/img/copilot.jpg
date: '2021-07-12'
published: true
author:
  name: Dan Stroot
  picture: /assets/blog/authors/dan.jpeg
ogImage:
  url: /assets/blog/img/copilot.jpg
seoURL: https://danstroot.com/2021/07/11/github-copilot/
---

[GitHub](https://github.com/) (owned by [Microsoft](https://www.microsoft.com/en-us/)), has partnered with [OpenAI](https://openai.com/) to create an AI tool called [Copilot](https://copilot.github.com/) that **writes code for you**. It is a plugin to [Visual Studio Code](https://code.visualstudio.com/) which auto-generates code based on the contents of the current file, and your current cursor location.

Open AI developed [Codex](https://arxiv.org/abs/2107.03374), a deep neural network language model that translates natural language into code, and Codex is integrated with Copilot. Side note: _OpenAI runs on Microsoft Azure_.

OpenAI's Codex was trained on publicly available source code and natural language, so it understands **both programming and human languages**. Codex is an API-driven service that has many more capabilities, which developers can explore — and build into their own apps — when OpenAI opens access to Codex later this year (2021).

Codex was trained on billions of lines of code, uploaded by the 65 million users of GitHub. The aim is for Codex to learn enough about the patterns in that code that it can see what you are trying to do and write the code for you. It is like mob programming with 65 million of your peers!

GitHub eventually plans to sell access to Copilot to developers as a productivity tool.

### How it Works

In practice, you write a human-readable comment describing the logic you want, and you start coding. Copilot will make suggestions to complete the code. Automatically, seamlessly, and fast enough that your workflow will not be interrupted. GitHub Copilot is a code **synthesizer**, not a search engine: most of the code that it suggests is **uniquely generated and has never been seen before**. This is very germane to the legal questions we will explore below.

![Copilot Diagram](/assets/blog/img/copilot3.jpg)

The GitHub Copilot editor extension sends your comments and code to the GitHub Copilot service, which then uses OpenAI Codex to synthesize and suggest individual lines and whole functions. GitHub Copilot also records whether the suggestions are accepted or rejected. This telemetry is used to improve future versions of the AI system, so that GitHub Copilot can make better suggestions in the future.

![Copilot Quote](/assets/blog/img/copilot2.jpg)

### You are Contributing Value (whether you like it not)

The models gain insight and accuracy from the public collective intelligence. If you have code that is publicly available you are helping create Copilot, and value for GitHub, and the only way to extract value back out is to use Copilot yourself.

“Fair use” of copyrighted material depends on whether it is “transformed” when it is reused. There are many ways of transforming a work, like using it for parody or criticism or summarizing it.

Training machine learning models on publicly available data is generally considered fair use across the machine learning community. Here is [OpenAI's position, as submitted to the USPTO](https://www.uspto.gov/sites/default/files/documents/OpenAI_RFC-84-FR-58141.pdf) on fair use.

### Virtuous Circle

1. Programmers like to use GitHub to maintain their code repositories. It is already the de-facto home for Open-Source projects and many programmers also keep their personal repositories on GitHub (I do).

2. Copilot was trained on literally billions of lines of code from these GitHub repositories.

3. Microsoft offers a very extensible Integrated Development Environment (IDE) called Visual Studio Code, or VSCode that many programmers already use. GitHub Copilot is available today only as a Visual Studio Code extension.

> For now, we’re focused on delivering the best experience in Visual Studio Code only.

Copilot will create a virtuous circle because **drive programmers to use VSCode** they will be more productive. The code suggestions they choose from Copilot will further train Copilot so it will make even better suggestions. Programmers save their code on GitHub because eventually it will improve Copilot, which further improves their productivity and code quality.

This virtuous circle is a way to solidify GitHub as "the" place to store your code.

### Legal Issues Remain Uncharted Territory

There’s a lot of public code in the world with insecure coding patterns, bugs, or other issues. If you program using Copilot and accept one of its suggestions, and that specific suggestion creates a security vulnerability in your code, who is liable? GitHub's position is that you are 100% responsible for your code and Copilot is just a helpful tool.

In other words, it's like spell check, and when you use spell check in a legal document what if it suggests a word that changes the meaning of the document? Who is liable? Copilot takes this one step further - imagine while writing a document and spell check started suggesting whole paragraphs, or pages of content (hint: _GPT-3 can do this already_)?

The other main concern is that even if Copilot synthesizes code, rather than regurgitating it, it could synthesize code that is an **exact replica** of non-open, protected code. If the Copilot-generated code becomes the reason for infringement, who is accountable? How can anyone prove the code was generated by Copilot and not the project owner?

Today, a human still must review and accept the code suggestions, which providers of Copilot argue transfers all liability. This makes sense for code that may not work properly or be secure because a human (or automated) review could be reasonably expected to handle those situations. But no human, or code review system, can reasonably be expected to know if a code sequence matches an existing, licensed code sequence.

The clear legal issue for users of Copilot discussed by IP lawyer [Kate Downing](https://fossa.com/blog/analyzing-legal-implications-github-copilot/) is that in some cases using Copilot’s suggestions may be a breach of license (or require relicensing your own work under a GPL-compatible license):

> “The more complex and lengthy the suggestion, the more likely it has some sort of copyrightable expression.”

### See Copilot Answer Leetcode Code Interview Questions

Let's watch Copilot in action answering leetcode coding interview questions:

<!-- <div class="aspect-w-16 aspect-h-9">
  <iframe src="https://www.youtube.com/embed/FHwnrYm0mNc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> -->

<!-- You can just paste the youTube share link and it will be handled.  -->

https://youtu.be/FHwnrYm0mNc

### Lower Barriers to Entry for Coders

How disruptive will Copilot be for the Software Engineering Industry? Creating intelligent systems to "co-code" with you will bring enormous change to the developer experience. GitHub Copilot has the potential to lower barriers to entry, enabling more people to explore software development and join the next generation of developers. This opens the door for many people who may not otherwise be able to get a developer position, but it will **almost certainly lower wages for entry level programmers** who code in common languages.

However, **software engineering is not the same thing as writing code**. Software engineering is a much more profound task that implies broad knowledge, problem solving skills, and creativity. Copilot could actually increase demand and increase wages for solution architects, senior lead developers, and others with more experience and specialized skills. As "writing the code" becomes more commoditized, **more experienced people will likely be in higher demand** to "oversee" the work.

### References

- [GitHub Copilot](https://copilot.github.com/)
- [GitHub’s Commercial AI Tool Was Built From Open Source Code](https://www.wired.com/story/github-commercial-ai-tool-built-open-source-code/)
- [Is GitHub Copilot a blessing, or a curse?](https://www.fast.ai/2021/07/19/copilot/)
- [Free Software Foundation: Call for white papers on philosophical and legal questions around Copilot](https://www.fsf.org/blogs/licensing/fsf-funded-call-for-white-papers-on-philosophical-and-legal-questions-around-copilot)
