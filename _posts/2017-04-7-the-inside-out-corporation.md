---
title: The Inside-Out Corporation
excerpt: Most companies still have a separate corporate network, protected by
  firewalls, intrusion prevention/detection, dedicated administrators, VPNs,
  etc. Why is it that I can access information which is the most important,
  private, and precious to me, from any computer, via any network, without all
  that extra cost, complexity, overhead, and effort?
coverImage: /assets/blog/img/citadel.jpg
date: "2017-04-10"
published: true
author:
  name: Dan Stroot
  picture: /assets/blog/authors/dan.jpeg
ogImage:
  url: /assets/blog/img/citadel.jpg
seoURL: https://danstroot.com/2017/04/09/he-inside-out-corporation/
---

Using my personal laptop from any coffee shop, I can:

- Access my bank account(s)
- Access my retirement and brokerage accounts
- Use my credit card to buy things
- Review my medical test results
- Send love notes to my wife

These are the most sensitive and private things I can imagine, and I can do these things **securely from any untrusted network anywhere in the world**.

### Why do corporate networks still exist?

Most companies still have a separate corporate network, protected by firewalls, intrusion prevention/detection, dedicated administrators, VPNs, etc. Why is it that I can access information which is the most important, private, and precious to me, from any computer, via any network, **without all that extra cost, complexity, overhead, and effort?**

Even before the Internet, there were corporate networks. These networks were designed the way medieval castles were designed; as fortresses. They were designed to keep the unwanted out, using a heavily fortified gate (e.g. a firewall - a single point of ingress and egress). Anyone outside is considered dangerous, and anyone inside is trusted. However, anyone who makes it past the drawbridge has the run of the place.

New technology emerged against medieval defenses - scaling ladders; battering rams; siege towers and various types of catapults including the trebuchet. However, the main reason that the medieval castle approach failed was it became impossible to keep expanding a stone perimeter around a growing population. Eventually people had to live "outside the wall".

### Introducing the "Inside Out" corporation

Imagine a company that eliminates the traditional corporate network by turning "inside out" and making **all of it's systems and applications available directly over the Internet**. No more corporate network, no more employee VPNs. In other words, no more castle wall - instead employees live "outside the wall", much like people in modern cities.

Access depends solely on device and user credentials, regardless of a user’s network location — whether it is an enterprise location, a home network, a hotel, or a coffee shop. As a result, all employees, contractors, consultants, etc. can work productively and securely from any network without the need for a traditional VPN connection into a privileged corporate network. Even the concept of local vs. remote access goes away because **the user experience is identical**.

#### The results:

- **Better security**. Because **each service is secured and hardened**. This approach forces application security to be truly effective and not "security theater". When an attacker breaches a corporate network they may find very few internal connections are encrypted and packets can be sniffed easily - and internal services vulnerable to attack. This is called "Tootsie Pop" security - a hard outer shell and soft on the inside. However, using the inside-out model it would be difficult to breach even one service. Delivering services over the Internet requires **each connection to be secured by end-to-end encryption** via Transport Layer Security (TLS).
- **Lower costs**. Lets make a couple simplifying assumptions. First, let's assume that eliminating the corporate network saves money. Let's also assume that making applications hardened so that they can be exposed to the Internet requires additional investment. For the sake of argument let's assume these costs offset each other (although later I will show how a "smart" reverse proxy could eliminate the need to change internal applications). If these costs offset why is it still less expensive?
  - **Lower Risk** - Lower risk = lower cost. Securing a network is done to prevent information leakage. Put another way, companies evaluate the cost of security **relative** to the costs of a breach. If the risk of a breach is reduced, then the potential cost to a company is also reduced.
  - **Higher Productivity** - It cannot be stated strongly enough how even small barriers of time add up to large costs. If it takes an employee 3 minutes to log in via a VPN before they can be productive the cost is not just three minutes of their time, rather it is the risk that they may not log in remotely **at all**. Those extra few minutes cause employees to think "I'll just do this tomorrow when I'm in the office".
  - **Lower Business Continuity Costs** - Business continuity becomes cheaper. If employees can work from anywhere then the need for specialized business continuity support for employees goes away.
  - **Lower Technology Costs over Time** - The Internet is the most reliable technology ever created, and it is arguably the best value. It is nearly free and higher bandwidth costs less every year. The cost of deploying corporate applications over the Internet is only going to decrease over time, while the cost of managing and defending a corporate network is only going to increase.

### Google calls the Inside-Out corporation "BeyondCorp"

#### Google’s BeyondCorp Mission (2011-2017)

To have every Google employee work successfully from untrusted networks without use of a VPN.

#### BeyondCorp Principles

Connecting from a particular network must not determine which services you can access.
Access to services is granted based on what we know about you and your device.
All access to services must be authenticated, authorized and encrypted.

#### High-level Components of BeyondCorp

- User inventory
- Device inventory
- Security policy
- Trust repository
- Access control engine
- Single sign-on
- Identity-aware access proxy

Google first wrote about the concepts behind the BeyondCorp initiative in 2014, in a paper titled [BeyondCorp: A New Approach to Enterprise Security](https://www.beyondcorp.com/pdf/43231.pdf). They wrote a follow up paper in 2016 titled [BeyondCorp: Design to Deployment at Google](https://www.beyondcorp.com/pdf/44860.pdf) that detailed their migration path and findings along the way. A third paper titled [BeyondCorp: The Access Proxy](https://www.beyondcorp.com/pdf/45728.pdf) goes into detail about a key component of the solution.

BeyondCorp is now **used by most Googlers every day!**

### How to turn Your company "Inside-Out"

As consumers of internet services we understand how to access web sites securely. However many of us struggle with too many different user IDs and passwords. Yet, most of us are familiar with the experience of logging in to one service like Netflix, via an identity and authorization provider like Facebook. Imagine logging into all your services and sites via a single identity!

Google implements Single Sign On via https://accounts.google.com. Once you are logged in, you will be able to access all your Google services like Gmail, YouTube, and Google Docs without entering your credentials again. Imagine having the same experience but with all your company applications.

In order to become an "Inside Out" company the most important thing is an effective **identity management/single-sign on architecture** and the second is an **identity-aware access proxy**.

#### Identity Management, Federation and Single sign-on

The first thing needed is the ability to manage users and authorize those users to access corporate applications. This requires:

- **Unified Directory**. We must begin with **a single repository of all users and user data**. Companies may have many sources of user data, with none of them actually being the superset of all user data. We need the ability to synchronize users with any number of directories, such as Active Directory, LDAP-based directories, Workday, or Google Apps.
- **Simple Authorization Management** - It needs to be simple to grant a user in a specific department, with a defined role, access to the applications they need. This should be driven by HR meta-data so security and application access policies can be applied automatically.

Here are some of the companies that specialize in turning organizations "inside-out":

<table>
  <tr>
    <td><a href="https://auth0.com/"><img src="/assets/blog/img/auth0_logo.png" alt="Auth0" class="img-responsive" width="150"></a></td>
    <td><a href="https://www.okta.com/"><img src="/assets/blog/img/okta_logo.svg" alt="Okta" class="img-responsive" width="150"></a></td>
  </tr>
  <tr>
    <td><a href="https://www.onelogin.com/"><img src="/assets/blog/img/onelogin_logo.png" alt="Onelogin" class="img-responsive" width="150"></a></td>
    <td><a href="https://www.pingidentity.com/en.html"><img src="/assets/blog/img/ping_logo.png" alt="Ping Identity" class="img-responsive" width="150"></a></td>
  </tr>
</table>

Interest in this space is increasing rapidly. On Friday, April 7th, Okta went public and their shares jumped more than 38 percent!

#### Identity-Aware Access Proxy

Another key component of BeyondCorp's solution is a fleet of HTTP/HTTPS reverse proxies that used to be called Google Front Ends (GFEs). GFEs initially provided load balancing and TLS handling “as a service.”

BeyondCorp leverages the GFE as a logically centralized point of access policy enforcement. GFEs were enhanced to provide authentication, authorization, self-service provisioning, and centralized logging. The resulting "enhanced GFE" is called the Access Proxy (AP).

As a result, web applications behind the proxy don't have to have any identity or security built into them - it is "bolted on", or applied at the reverse proxy layer. Web applications can focus on serving requests and largely ignore the details of how requests are routed to them. **This means corporate web applications can be made available to employees via the Internet with no changes!**

Google has made this **available as a free product** called the [Identity-Aware Proxy](https://cloud.google.com/iap/). It works like this:

![Identity-Aware Proxy](/assets/blog/img/iap-lead_2x.png)

Bitly has also open-sourced a project called [oauth2_proxy](https://github.com/bitly/oauth2_proxy). which is described as "a reverse proxy and static file server that provides authentication using Providers (Google, Azure, Facebook, GitHub, and others) to validate accounts by email, domain or group".

Put simply, it is a completely free and open source Identity-Aware reverse proxy. It can be deployed to make any web based application accessible via Oauth2 based authentication. I have configured it to use Github for authentication for access to the Traefik console of my Kubernetes cluster [here](https://traefik.thepishoppe.com).

### Abandoning the castle

Google is one the most intelligent companies that exists today when it comes to understanding and managing IT security, and they are aggressively implementing their BeyondCorp "Inside-Out" model because it makes them more secure.

Isn't it time all companies decide to live "outside the wall"? The corporate perimeter security model is outdated and does not support today's modern mobile and geographically diverse workforce.

Here are the main components summarized:

<div class="row text-center">
	<div class="col-xs-12 col-md-4">
		<h4 class="w700"><i class="fa fa-users" aria-hidden="true"></i> Unified User Directory and Centralized Access Controls</h4>
		<p>We must have a single, unified repository of all users and user data and simple ways to control access to corporate applications.</p>
	</div>
  <div class="col-xs-12 col-md-4">
    <h4 class="w700"><i class="fa fa-exchange" aria-hidden="true"></i> Identity-Aware Proxy</h4>
    <p>A "smart" reverse proxy is placed in front of internal applications, where policies handle authentication and authorization in a consistent manner. The proxy is controlled through our Unified Directory and access controls.</p>
  </div>
  <div class="col-xs-12 col-md-4">
    <h4 class="w700"><i class="fa fa-globe" aria-hidden="true"></i> Perimeterless Architecture/Zero Trust</h4>
    <p>By making internal applications public facing, there is no longer the concept of a privileged network as the primary gatekeeper. Every connection is encrypted, and every request is authenticated and authorized based on changes in user status and device state dynamically.</p>
  </div>
</div>

#### References

- [BeyondCorp: A new approach to enterprise security](https://cloud.google.com/beyondcorp/)
- [No Firewalls, No Problem for Google](https://threatpost.com/no-firewalls-no-problem-for-google/123748/)
- [Fundamentals of the BeyondCorp ‘Zero-Trust’ Security Framework](https://dzone.com/articles/fundamentals-of-the-beyondcorp-zero-trust-security)
- [Google leads the way out of the castle to the cloud](http://blog.code42.com/google-beyondcorp-leads-the-way-out-of-the-castle-to-the-cloud/)
- [Bitly's Oauth2 Proxy](https://github.com/bitly/oauth2_proxy)
- [Ditch your VPN, improve security and go to the cloud](https://www.blog.google/topics/google-cloud/how-use-beyondcorp-ditch-your-vpn-improve-security-and-go-cloud/)
