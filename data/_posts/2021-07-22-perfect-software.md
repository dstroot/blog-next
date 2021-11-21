---
title: Engineering Software is Nothing Like Engineering a Bridge
excerpt: When an engineer designs a bridge, they begin with the load the bridge is intended to bear, and they calculate the various stresses caused by wind, earthquakes, etc. They then apply a safety factor to the calculations. Software meanwhile is discrete, a small error can result in a disproportionately large failure.
coverImage: /assets/blog/img/bridge.jpg
date: '2021-07-22'
published: true
author:
  name: Dan Stroot
  picture: /assets/blog/authors/dan.jpeg
ogImage:
  url: /assets/blog/img/bridge.jpg
seoURL: https://danstroot.com/2021/07/11/github-copilot/
---

### Engineering software is nothing like engineering a bridge

When an engineer designs a bridge, they begin with the load the bridge is intended to bear, and they calculate the various stresses caused by wind, earthquakes, etc. As they choose materials to construct the bridge they have the oportunity to look up a material's properties in a "strength of materials" book, including its ability to withstand an applied load without failure or deformation.

In mechanical engineering one usually deals with smooth functions. As the load increases the material width or thickness needed increases proportionally. A small error (usually) results in a small propensity for failure.

The engineering process also has a safety factor. In engineering, a "factor of safety" (FoS), expresses how much stronger a system is than it needs to be for an intended load. In a vast oversimplification, if we calcuate that a steel beam must be 12 inches wide to bear the load, let's double it to 24 inches "just in case" for safety purposes.

Bridges (all structures really) are intentionally built much stronger than needed for normal usage to allow for small miscalculations, emergency situations, unexpected loads, misuse, and degradation.

### Engineering software is different

Software meanwhile is discrete; a small error can result in a disproportionately large failure. A single typo in a 100,000-line program can cause it to fail catastrophically. Yes, even getting a thousandth of a percent of a program wrong can cause total failure. No bridge ever collapsed because the engineer got a thousandth of a percent of the building material’s properties wrong.

In software development the margin of error is literally undefined behavior.

Software engineers fly blind when it comes to materials. We can't consult a book that will tell us how "thick" our website must be to support 100,000 users. We also frequently design with no real concept what our loads will actually be. If we are creating a new website chances are the initial volumes will be an order of magnitude lower, or higher, than we were told to expect. If it becomes popular it will have another order of magnitude higher traffic than planned.

On the positive side, the cost of changing a structure in virtual space is several orders of magnitude lower than it would be in physical space. Larger software projects are cheaper because we can build reusable components that have tests that ensure certain behaviors of the code & then we rerun them in various environments to make sure our assumptions still hold. We can also more reliably simulate behavior before we ship, which means we can load test our site before going live.

### Safety and Security

Virtual space allows attackers to easily maintain anonymity. Attackers can replicate an attack easily without additional effort/cost on their part. Attackers can purchase "blueprints" for an attack that are basically the same thing as the attack itself. Attacks can be carried out at a distance, and there are many strong financial motives for carrying out the attack. The financial motive is particularly important because it funds the ever growing arms raise between offense & defense. In the physical space this kind of race is only visible in nation states whereas in the virtual space both nation states & private actors participate in this race.

Attacking a bridge, anonymously, from halfway around the world is harder.

Assessing the security of software via the question "is it secure?" is like assessing the structure of a bridge by asking the question "has it collapsed yet?" -- it is the most important question, to be certain, but it also profoundly misses the point.

Engineers design bridges with built-in safety margins to guard against unforeseen circumstances (unexpectedly high winds, corrosion causing joints to weaken, a traffic accident severing support cables, et cetera); secure and reliable software should likewise be designed to tolerate failures within individual components.

The concept of "security in depth" is not new to network administrators; but it's time for software engineers to start applying the same engineering principles within individual applications as well. In the real world where components fail, it can mean the difference between being compromised or not.

### Failure Scenarios

Engineers who design bridges also design for lifespan. It's not discussed often but all structures, including bridges, will eventually fail.

> "We design these things to fail at some regularity because to do otherwise would require an over-investment of resources."

Software engineers design for scalability and reliability and hope their software can stand the test of time. In reality, most software changes so rapidly that its lifespan ends up being far lower than a physical structure. New software languages, engineering techniques, operational platforms (e.g. cloud) drive us towards the decision that sometimes it's easier to rebuild than to continue to maintain.

### References

- [Thinking in events: from databases to distributed collaboration software](https://www.daemonology.net/blog/2009-06-24-encrypt-then-mac.html)
- [Strength of Materials](https://en.wikipedia.org/wiki/Strength_of_materials)
