---
title: Is it Secure?
excerpt: Most information security practitioners do a poor job explaining the
  relative nature of security.  Secure relative to what? A bot that looks for
  un-patched systems? A determined hacker? A nation-state?  Security is a "scale
  of difficulty" – like mountain climbing. Everest was thought to be unclimbable
  until Sir Edmund Hillary did it.
coverImage: /assets/blog/img/smart-car-lock.png
date: "2015-09-26"
published: true
author:
  name: Dan Stroot
  picture: /assets/blog/authors/dan.jpeg
ogImage:
  url: /assets/blog/img/smart-car-lock.png
seoURL: ""
---

_**Q**_: Is it secure? <br>
_**A**_: No it is not. Security is never binary.

### There is no such thing as perfect security

Many information security practitioners do a poor job explaining the relative nature of security.  Secure relative to what? A bot that looks for un-patched systems? A determined hacker? A nation-state?

Security is a "scale of difficulty" – like mountain climbing. Everest was thought to be unclimbable until Sir Edmund Hillary did it.  Everest was finally tackled by a massive expedition with enormous resources. The 1953 expedition totaled over 400 people, including 362 porters, 20 Sherpa guides and 10,000 lbs of baggage.  It was analogous to a military assault.

Given enough time and resources **any** security can be defeated.  The main goal of security is to raise the time and resources required to an unreasonable level.  But how do you really know how secure something is?

Like mountain climbing, security can and should be rated/evaluated based on actual experience. Also like mountain climbing there are initial conditions that indicate a “tough climb” or an easy one.

### Conditions for high security levels

1. **The technology is widely deployed/adopted.** Note that being widely deployed does NOT mean the technology is secure (Windows XP was widely deployed). It simply means that we are more likely to have lots of data about its security performance. The more opportunities and incentives for attack will give us more data, which increases our confidence of it's "rating".
2. **The technology or system is attacked frequently with great intensity.** Ideally because of being widely deployed, it would be used is places that expose it to attack. Ideally those attacks are unrelenting.  This also increases our data about its security performance.
3. **The technology is simple to install and configure.** Many supposedly "secure" systems are dependent on how they are installed, or post-install "hardening".  Systems and technologies must be "secure by default" when installed and easily installed properly by non-specialists.
4. **Open code base.** An open code base allows for infinitely many sets of eyes to review the code, and infinitely many developers to fix any vulnerabilities found.  Open code bases do **NOT** mean the code is secure.  However, there are generally fewer issues, and when issues are found they are addressed faster. They also tend to be widely deployed and tend to be less complex to install and maintain.
5. **Bug Bounty Program**. Public, open [Bug Bounty Programs](https://bugcrowd.com/list-of-bug-bounty-programs) encourage vulnerability research in a responsible manner. As an economist by training I believe when the rewards for good behavior are there you tend to get good behavior. If not, only bad behavior is rewarded.

### Conditions for low security levels

1. **Not widely deployed** The less widely the technology is deployed and used the fewer opportunities we have to gather good data about it’s security profile.
2. **Not frequently attacked, or successful attacks are generally not disclosed.** This goes hand in glove with the above point. One issue with vendor sofware used in specialized applications within companies is that successful attacks may not be recognized/known, and/or they may not be disclosed. This gives us low information quality about the actual security performance.
3. **Difficult to install and configure properly.** ERP applications such as SAP are notoriously complex and difficult to install. The database has over 70,000 tables excluding Y and Z tables, the overall system takes days to setup by highly trained specialists. The attack surface is quite large. SAP may not be a good example because security is good by default and we rarely hear about successful breaches - but the risk in the complexity is real.
3. **Closed code base** If you have to ask your vendor “is it secure?” then it’s not.  Security isn't something you can provide an answer to unless you're selling snake oil. If the vendor says: “It's secure. We did not put in any back doors. We audited the code ourselves. There are not any kernel level hacks, root kits, or otherwise. This has been tested against a variety of anti-virus scanners and none of them flagged anything. We're very good. Please, please trust us.” then you should know that they are telling you what you want, or need to hear. You could read the [WinXP pamphlet](https://technet.microsoft.com/en-us/library/bb457059.aspx) on security back when it was released and it had endless bullet points about how secure it was. It was probably the least secure software in the history of computing based on actual attacks after the fact.
