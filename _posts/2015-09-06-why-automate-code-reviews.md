---
title: Why Automate Code Reviews?
excerpt: Ask a programmer to review 10 lines of code, they'll make 10
  suggestions. Ask them to review 1,000 lines of code and they'll say "it looks
  good!"
coverImage: /assets/blog/img/better_code.png
date: "2015-09-06"
published: "true"
author:
  name: Dan Stroot
  picture: /assets/blog/authors/dan.jpeg
ogImage:
  url: /assets/blog/img/better_code.png
seoURL: ""
---

>Ask a programmer to review 10 lines of code, they'll make 10 suggestions. Ask them to review 1,000 lines of code and they'll say "it looks good!"

Many people have begun integrating bots into the GitHub ecosystem for code review. For example the folks who created the Bootstrap UI framework created a bot called [rorshach](https://github/twbs/rorshach) to perform sanity checks on pull requests. If the sanity check fails it leaves a nice informative comment, explaining the issue and how to fix it.

There is another example at [BetterDiff](https://betterdiff.com/). The idea there is that instead of having humans go through and give cursory reviews, you have a round of automated review by bots (using normal, industry-standard tooling) and it comments on the pull request just like a reviewer would.

Pretty soon I expect to see "when tests pass, and code reviews pass, then go ahead and merge the code" bots.

Welcome to the future.
