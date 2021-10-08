---
title: Human Denial of Service Attacks
excerpt:
  Can companies create human "denial of service" attacks against their own employees?
  They can and they do - all in the name of 'making the business better'. If you work
  in a large organization you will recognize the pattern. Here's how it works...
coverImage: /assets/blog/img/ddos-attack.jpg
date: '2021-10-08'
published: true
author:
  name: Dan Stroot
  picture: /assets/blog/authors/dan.jpeg
ogImage:
  url: /assets/blog/img/ddos-attack.jpg
seoURL: https://danstroot.com/2021/07/11/github-copilot/
---

Suppose you have a service that responds to requests. A "denial of service" (DoS) attack is a type of threat where you flood the service with requests, overwhelming it's ability to respond. New service requests are never acknowledged or completed, and are simply dropped by the service, because its ability to perform its function has been compromised.

It's a very simple attack that relies on the attacker's ability to "out scale" the service, causing resource depletion and ultimately failure of the service. We can depict it like this:

```shell
Attacker -(requests)-> Sevice
```

A "distributed" denial of service (DDoS) attack is the same thing, using multiple attackers to amplify the request flood. The more "distributed" the attack is (i.e. the more attackers) the more likely it is to succeed, and the harder it is to find and take down all the attackers.

```shell
Attacker ---\
Attacker ---|-(requests)-> Service
Attacker ---/
```

If you can't fend off the attackers you need "buffers" and/or "rate limiters" that can fend off the attack by buffering or dropping spurious requests:

```shell
Attacker ---\
Attacker ---|-(requests)->[rate limiter]-[buffer]->Service
Attacker ---/
```

Now suppose you have a person, or department, in an organization who, being very nice and service oriented, dutifully accepts every single meeting they are invited to attend. Now suppose the person or department is inside the subsidiary of a large organization. It looks like this:

```shell
+-----------------+
|  "Corporate"    |
+-----------------+
| Human Resources |--"I'd like a meeting"--\
| Finance         |--"I'd like a meeting"--\
| Compliance      |--"I'd like a meeting"--\     +-----------------+
| Legal           |--"I'd like a meeting"--\     |  "Subsidiary"   |
| Procurement     |--"I'd like a meeting"--|---> +-----------------+
| Internal Audit  |--"I'd like a meeting"--/     |   Department    |
| Technology      |--"I'd like a meeting"--/     +-----------------+
| Risk            |--"I'd like a meeting"--/
| Etc.            |--"I'd like a meeting"--/
+-----------------+
```

Can you recognize the pattern? Yes, it's a distributed denial of service attack.

Of course none of the corporate departments intends to cause a DDoS attack, in fact generally there is limited visibility across areas, so each thinks "it's just one meeting".

It gets worse:

```shell
.                                    +-----------------+
                                     |    Your Team    |
+-----------------+                  +-----------------+
|  "Corporate"    |                           |
+-----------------+                 "Can we have meetings?"
| Human Resources |--"meeting"--\             |
| Finance         |--"meeting"--\             v
| Compliance      |--"meeting"--\     +-----------------+
| Legal           |--"meeting"--\     |  "Subsidiary"   |                  +------------------+
| Procurement     |--"meeting"--|---> +-----------------+ <---"meetings!"-- | Vendors/Partners |
| Internal Audit  |--"meeting"--/     |   Department    |                  +------------------+
| Technology      |--"meeting"--/     +-----------------+
| Risk            |--"meeting"--/             ^
| Etc.            |--"meeting"--/             |
+-----------------+               "Can we have meetings too?"
                                   |                    |
                          +-----------------+   +-----------------+
                          |  Subs. Dept.'s  |   |   Committees    |
                          +-----------------+   +-----------------+
```

We can't have the people who actually "do the work" attend hundreds of hours of meetings per week. We need a spokesperson, or a leader, who will attend on their behalf, and who will respond appropriately for them, and who will let them know if anything important was discussed. This is exactly what happens - and why companies create hierarchy.

The worse the DDoS attack the deeper the hierachy must be. The hierarchy is the "buffer" or "rate limiter" of the system.

In the middle of the hierarchy stack are the "profesional meeting attenders". The middle managers who everyone wonders "what is their job?" and "why don't they accomplish anything?". Their job is simply to absorb the DDoS attacks so the people below them can work normally and respond to service requests.

Those at the top of the organization see their roles as 'agents of change' and they launch initiatives in their areas to 'make the business better' but of course this is the primary source of the DDoS attacks. These programs generate hundreds (thousands?) of hours of meetings each across the organization.

Ironically, lauching too many 'make the business better' programs at once inevitably makes it worse. It requires more layers of middle management to absorb the DDoS attack on it's employees that ensues. Or they simply get overwhelmed and the underlying services suffer resource depletion and ultimately stop responding.

This is the paradox of change, too little and you fall behind, too much and you overwhelm your capacity and slow everything down. The truly enlightened organizations lead change from the top in a limited fashion because they have the right metrics and incentives that drive consistent **change, innovation and excellence inside the business areas themselves.** No meetings necessary.

ps - If you think this looks sensationalized, or you think there is no person or department that everyone wants to meet with with sadly you are wrong. I have led technology teams for 30 years. Everyone wants to meet with technology - all the time. Risk, compliance, legal, audit, finance, every committee, every operations area, every distribution area, countless vendors, countless consultants, etc. It's worse than I show above, and worse than you imagine.
