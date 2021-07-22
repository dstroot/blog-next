---
title: Event Based Systems
excerpt: You are contributing value, whether you like it not, when you make your
  code public. Training machine learning models on publicly available data is
  considered fair use across the machine learning community. The models gain
  insight and accuracy from the public collective intelligence. The only way to
  extract value back out is to use Copilot yourself.
coverImage: /assets/blog/img/copilot.jpg
date: "2021-07-22"
published: false
author:
  name: Dan Stroot
  picture: /assets/blog/authors/dan.jpeg
ogImage:
  url: /assets/blog/img/copilot.jpg
seoURL: https://danstroot.com/2021/07/11/github-copilot/
---

### Engineering Software is nothing like engineering a building

When an engineer designs a bridge, they begin with the load the bridge is intended to bear, and they calculate the various stresses caused wind, earthquakes, etc. As they choose materials to construct the bridge they have the oportunity to open a "strength of materials" book and look up a material's properties, including its ability to withstand an applied load without failure or plastic deformation.

In mechanical engineering one usually deals with smooth functions. As the load increases the material width or thickness needed increases proportionally. A small error (usually) results in a small propensity for failure.

At some point a safety factor will be introduced. In engineering, a factor of safety (FoS), expresses how much stronger a system is than it needs to be for an intended load. In a vast oversimplification, if we calcuate that a steel beam must be 12 inches wide, let's double it for safety purposes.

Bridges (all structures really) are intentionally built much stronger than needed for normal usage to allow for small miscalculations, emergency situations, unexpected loads, misuse, or degradation (reliability).

Engineers also design for lifespan. It's not discussed often but all structures, including bridges, are designed to eventually fail.

> "We design these things to fail at some regularity because to do otherwise would require an over-investment of resources."

### Software is Nothing Like This

Software meanwhile is discrete, a small error can result in a disproportionately large failure. One small typo in a 100,000 line program can cause it to fail catastrophically. Yes, even getting a thousandth of a percent of a program wrong could cause total failure. No bridge ever collapsed because the engineer got a thousandth of a percent of the building material’s properties wrong. In software development the margin of error is literally undefined behavior.

Software engineers fly blind when it comes to materials. We can't consult a book that will tell us how "thick" our website must be to support 100,000 users. Not only that but we frequently design with no real concept what our loads will actually be. If we are creating a new website chances are the initial volumes will be an order of magnitude lower than we were told to expect, and if it becomes popular it will have an order of magnitude higher traffic than we designed.

Changing a blueprint in virtual space is nearly identical from changing the actual "building" itself & the cost is several orders of magnitude lower than it would be in physical space. Larger software projects are cheaper because we can build reusable components that have tests that ensure certain behaviors of the code & then we rerun them in various environments to make sure our assumptions still hold. We can also more easily simulate behavior in the real world before we actually ship to production.

I'll conclude with a philosophical note about software design: Assessing the security of software via the question "can we find any security flaws in it?" is like assessing the structure of a bridge by asking the question "has it collapsed yet?" -- it is the most important question, to be certain, but it also profoundly misses the point.

Engineers design bridges with built-in safety margins in order to guard against unforeseen circumstances (unexpectedly high winds, corrosion causing joints to weaken, a traffic accident severing support cables, et cetera); secure software should likewise be designed to tolerate failures within individual components. Using a MAC to make sure that an attacker cannot exploit a bug (or a side channel) in encryption code is an example of this approach: If everything works as designed, this adds nothing to the security of the system; but in the real world where components fail, it can mean the difference between being compromised or not. The concept of "security in depth" is not new to network administators; but it's time for software engineers to start applying the same engineering principles within individual applications as well.

3pt14159 1 day ago [–]

There are of course many nuanced differences because no analogy is perfect, but I think the main tangible difference is that one is in the physical space while the other is in the virtual space. Virtual space doesn't operate the same way because the limits are different. Attackers can easily maintain anonymity, attackers can replicate an attack easily without additional effort/cost on their part, attackers can purchase "blueprints" for an attack that are basically the same thing as the attack itself, attacks can be carried out at a distance, & there are many strong financial motives for carrying out the attack. The financial motive is particularly important because it funds the every growing arms raise between offence & defense. In the physical space this kind of race is only visible in nation states whereas in the virtual space both nation states & private actors participate in this race.

Similarly, that's why IT development is a bit different from construction. Changing a blueprint in virtual space is nearly identical from changing the actual "building" itself & the cost is several orders of magnitude lower than it would be in physical space. Larger software projects are cheaper because we can build reusable components that have tests that ensure certain behaviors of the code & then we rerun them in various environments to make sure our assumptions still hold. We can also more easily simulate behavior in the real world before we actually ship to production. In the physical space you have to do that testing upfront to qualify a part. Then if you need a new part, you're sharing less of the design whereas in virtual space you can share largely the same design (or even the exact same design) across very different environments. & there's no simulation - you build & patch, but you generally don't change your foundation once you've built half the building.

### References

- [Thinking in events: from databases to distributed collaboration software](https://www.daemonology.net/blog/2009-06-24-encrypt-then-mac.html)
  [](https://en.wikipedia.org/wiki/Strength_of_materials)
