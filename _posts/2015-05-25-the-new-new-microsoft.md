---
title: 'The "New" New Microsoft'
excerpt: "I've been a fan of Microsoft during my whole technical career.  However I don't recommend Microsoft any longer for server workloads, and haven't for years due to the fact that the Linux ecosystem is far less expensive and has more innovative people working on it and sharing what they do openly. However, I am very impressed with the direction and leadership of Satya Nadella."
coverImage: '/assets/blog/img/satya-nadella-microsoft-ceo.jpg'
date: '2015-05-25T10:00:00-00:00'
author:
  name: Dan Stroot
  picture: '/assets/blog/authors/dan.jpeg'
ogImage:
  url: '/assets/blog/img/satya-nadella-microsoft-ceo.jpg'
---

I've been a fan of Microsoft during my whole technical career.  However I don't recommend Microsoft any longer for server workloads, and haven't for years due to the fact that the Linux ecosystem is far less expensive and has more innovative people working on it and sharing what they do openly. However, I am very impressed with the direction and leadership of Satya Nadella.

<!--more-->

### Windows Package Manager

>In Windows 10 we are launching a new Package Management feature (formerly referred to as OneGet) that enables ITPros or DevOps to automate software discovery, installation, and inventory (SDII), locally or remotely, no matter what the installer technology is and where the software is located.

>So why are we implementing Package Management? In the Linux world, people are familiar with package managers such as Apt-Get, YUM, RPM, etc, for different Linux distros.  In the Windows world, however, there are quite a few installer technologies, each having their own way to install software, such as MSI, MSU, APPX, and the list goes on and on. This creates a challenge for ITPros and DevOps and a need for a tool to automate the software deployment experience.  PackageManagement is aimed at solving this problem.

### .NET for Linux and Mac

>.NET Core supports Windows, OS X and Linux. You can write Universal apps on Windows 10 and ASP.NET 5 and Console apps on all of the three OSes. FreeBSD support is in progress, led by the .NET open source community. We expect that the community will create other OS ports. In fact, the OS X port has also been community led.

>.NET Core supports x86, x64 and ARM CPUs in order to support device, cloud and console app scenarios. We expect that to see more chips come online, particularly given the LLILC LLVM integration project. LLILC will (in theory) make it possible to port .NET Core to all of the chips that LLVM supports.

**The .NET Core is open source on GitHub!**

### Visual Studio Code

This marks the first time that Microsoft offers developers a true cross-platform code editor. The full Visual Studio is still Windows-only, but today’s announcement shows the company’s commitment to supporting other platforms.  What is really fascinating is they built it with SAME basic architecture as GitHub's Atom editor!

> Architecturally, Visual Studio Code combines the best of web, native, and language-specific technologies. Using the **GitHub Electron Shell, Code combines web technologies such as JavaScript and Node.js with the speed and flexibility of native apps**. Code uses a newer, faster version of the same industrial-strength HTML-based editor that has powered the “Monaco” cloud editor, Internet Explorer's F12 Tools, and other projects. And Code uses a tools service architecture that enables it to use many of the same technologies that power Visual Studio, including Roslyn for .NET, TypeScript, the Visual Studio debugging engine, and more. In future previews, as we continue to evolve and refine this architecture, Visual Studio Code will include a public extensibility model that lets developers build and use plug-ins, and richly customize their edit-build-debug experience.

This is all incredible coming from Microsoft.  Way to go!

_Sources:_

* [Microsoft Launches Visual Studio Code](http://techcrunch.com/2015/04/29/microsoft-shocks-the-world-with-visual-studio-code-a-free-code-editor-for-os-x-linux-and-windows/)
* [Visual Studio Docs](https://code.visualstudio.com/Docs)
* [Microsoft Launches Its .NET Distribution For Linux And Mac](http://techcrunch.com/2015/04/29/microsoft-launches-its-net-distribution-for-linux-and-mac/)
* [Introducing PackageManagement in Windows 10](http://blogs.technet.com/b/packagemanagement/archive/2015/04/29/introducing-packagemanagement-in-windows-10.aspx)
