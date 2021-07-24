---
title: Executable Documentation
excerpt: Every team has manual procedures or checklists that they haven’t gotten
  around to automating yet. Sometimes there are branches and special cases to
  keep track of as you go. Procedures/checklists are frustrating because they’re
  focus-intensive yet require very little thought. They demand our full
  attention, but our attention isn’t rewarded with interesting problems or
  satisfying solutions – just another checkbox checked.
coverImage: /assets/blog/img/exec_doc.png
date: "2019-08-07"
published: true
author:
  name: Dan Stroot
  picture: /assets/blog/authors/dan.jpeg
ogImage:
  url: /assets/blog/img/exec_doc.png
seoURL: https://danstroot.com/2019/08/06/executable-documentation/
---

Every team has manual procedures or checklists that they haven’t gotten around to automating yet. Sometimes there are branches and special cases to keep track of as you go. Procedures/checklists are frustrating because they’re focus-intensive yet require very little thought. They demand our full attention, but our attention isn’t rewarded with interesting problems or satisfying solutions – just another checkbox checked. Procedures like this are called a **slog**.

Slogs are ripe for automation. We know that a computer could do it better than we can, and with less tendency toward practical drift. However, automating slogs feels like an all-or-nothing proposition. Maybe we could write a script to handle step 2, or step 5, but that wouldn’t really make the procedure any less cumbersome. It would lead to a proliferation of single-purpose scripts with different conventions and expectations, and you’d still have to follow a documented multi-step procedure for using those scripts.

This **perception of futility** is the problem we really need to solve in order to escape from these manual slogs. Here's an approach that works. It's called "executable documentation".

Almost any slog can be turned into executable documentation. Executable documentation is a script that encodes the instructions of a slog, encapsulating each step in a function. For example we could write the following executable documentation script:

```shell
#! /bin/sh
# ------------------------------------------------------------------------------
# Copyright (c) 2014 Dan Stroot
# All rights reserved.
# ------------------------------------------------------------------------------
# NAME:           example.sh
# PURPOSE:        example of executable documentation
# VERSION:  1.0   Initial version
# ------------------------------------------------------------------------------
set -e

# Default settings
PROGNAME=$0
VER="1.0"

step_1 () {
    echo "Do step 1, press (y, enter) when complete."
    read -r response
    case $response in
    [yY])
        echo "Step 1 completed.\n"
        ;;
    *)
        echo "Step 1 NOT completed.\n"
        exit 1
        ;;
    esac
}

step_2 () {
    echo "Do step 2, press (y, enter) when complete."
    read -r response
    case $response in
    [yY])
        echo "Step 2 completed.\n"
        ;;
    *)
        echo "Step 2 NOT completed.\n"
        exit 1
        ;;
    esac
}

step_3 () {
    echo "Do step 3, press (y, enter) when complete."
    read -r response
    case $response in
    [yY])
        echo "Step 3 completed.\n"
        ;;
    *)
        echo "Step 3 NOT completed.\n"
        exit 1
        ;;
    esac
}

main() {
    echo "Running: ${PROGNAME}, version ${VER}.\n"
    step_1
    step_2
    step_3
    echo "All Done!"
    echo "Wouldn't it be great if this was automated?"
}

main "$@"
```

Notice this script **doesn’t actually do any of the steps of the procedure**! It feeds the user a step at a time and waits for them to complete each step manually. These scripts will have little logic, and make little use of variables. They can also have a .txt filename to ensure that people understand, that first of all, this is a set of instructions for how to do something, which also just so happens to be a valid shell script.

At first glance, it might not be obvious that this script provides any value, but the value is immense. First, these scripts actually do something: they allow storing and updating the _state_ of a process. By having these scripts run in a shell rather than in your head, the current state is stored in a machine, not your brain.

- It’s now much less likely that you’ll lose your place and skip a step. This makes it easier to maintain focus on the actual work and power through the slog. You can even exit the script and it will tell you where you stopped.
- Each step of the procedure is now encapsulated in a function, which makes it possible to replace the text in any given step with code that actually performs the action.
- Over time, you’ll develop a library of useful steps, which will make future automation tasks more efficient.
- It will lower the inhibition to automation - each run you can just automate one or two more steps.

Executable documentation doesn’t initially save your team any manual effort. However, **it lowers the activation energy for automating tasks**, which allows the team to eliminate toil over time.

For example I have a process to reinstall the operating system on my personal laptop from scratch, based on a checklist. I'd always wanted to automate it but it just seemed like such a daunting task that I never ended up doing it. The frequency of use didn't seem to warrant the effort.

Last time I turned the checklist into a script, telling me what to do at each step. Then, since I was scripting rather writing a document I also implemented the ones that are easy to automate. I planned to automate a few more items each time I ran the checklist, until it's fully automated. A funny thing happened though - after few runs I had autmated a large portion of the steps, and that motivated me to just knock it out and finish. This is the power of executable documentation.

Executable documentation as concept can be very broad - many producst are based around the idea of complex tasks "as code". Products like:

- [AWS Cloudformation](https://aws.amazon.com/cloudformation/)
- [Hashicorp Terraform](https://www.terraform.io)
- [Chef](https://www.chef.io/)
- [Puppet](https://puppet.com)
- [Ansible](https://www.ansible.com/)
- [Jupyter](https://jupyter.org)

So you can take this concept pretty far!

#### Resources

- [Manual work is a bug](https://queue.acm.org/detail.cfm?id=3197520)</br>
- [Record shell sessions](https://www.youtube.com/watch?v=tweyWNr6X18)</br>
- [NYT - The Checklist](https://www.newyorker.com/magazine/2007/12/10/the-checklist)</br>
- [The Simple Genius of Checklists, from B-17 to the Apollo Missions](https://blog.nuclino.com/the-simple-genius-of-checklists-from-b-17-to-the-apollo-missions)
