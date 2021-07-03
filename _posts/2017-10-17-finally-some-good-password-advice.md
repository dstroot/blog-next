---
title: "Finally: Some Sane Password Advice"
excerpt: 'In every organization I have worked with managing user authentication
  and passwords was a huge challenge.  The key issue was that the "old" password
  best practices were **failed attempts to fix the user, not the system**. '
coverImage: /assets/blog/img/password.jpg
date: "2017-10-16"
published: true
author:
  name: Dan Stroot
  picture: /assets/blog/authors/dan.jpeg
ogImage:
  url: /assets/blog/img/password.jpg
seoURL: ""
---

In every organization I have worked with managing user authentication and passwords was a huge challenge.  The key issue was that the "old" password best practices were **failed attempts to fix the user, not the system**. 

In order for passwords to be difficult to crack they should be both long and complex. Since people have a very hard time remembering long passwords we have accommodated shorter passwords - by adding rules to ensure a minimum level of complexity. Unfortunately this makes the resulting password challenging for a person to remember. 

Length is actually more relevant to cracking difficulty than complexity. For short passwords we can literally try every possibility, thus complexity does not even matter. It is **much better to have longer passwords** (with less enforced complexity), i.e. a "pass phrase".  E.g. "ilovewatchingthesopranos" is much more secure than "Xc$1>".

We also required users to change their passwords periodically. Why? Just in case their password was compromised because we lacked the sophistication to **know** if their password was compromised!  

Each time a password change was required it would cause a flood of service desk calls because the person would forget the new password and try multiple times resulting in a locked account.  So we required then to change their password monthly, because we could not tell if their account was compromised, which would invariably cause a denial of service to our own employees. 

We also worked hard to train our users not to re-use the same ID and Password across different systems.  This was the proverbial straw that broke the camel's back. There is no way a human is going to remember unique, long, and complex passwords across the typical 200 or so sites they use.  

This created the opportunity for "Password Managers" to remember our ID's and Password's for us.  However that comes with its own risks - what if your password manager is hacked and **all your accounts are compromised?**  There have been few security practitioners that were willing to say the overall risk was lower by using a password manager since it assumes responsible use of the password manager tool itself and that the tool chosen is as secure as possible. Nor have many companies been willing to accept any liability if they were to provide a password manager to employees and that tool was hacked. But if you use your own password manager many companies will no allow you to install your own software on company machines.   

### How do people cope with these challenges?

They resort to bad practices like:

* Keeping the same password and adding the month as a prefix or suffix in those places that require monthly password changes.
* Writing the password down (Tip: look for post-it's under the keyboard).  Or keeping a spreadsheet of user IDs and Passwords...
* Using the same ID and Password across multiple accounts.  This is a **very bad** practice as it is certain that some of your accounts will be compromised and the attackers know this tendency and will try your credentials **everywhere** to see if they can get in.

There are many others, but in short we can say that if a person is not using a password manager then they are very likely to be using some set of questionable practices.

<!--more-->

### New Guidelines from NIST

The US National Institute for Standards and Technology (NIST) recently published its four-volume SP800-63-3 Digital Identity Guidelines. They make three new and different suggestions when it comes to passwords:

1. **Stop it with the annoying password complexity rules.** They make passwords harder to remember. They increase errors because artificially complex passwords are harder to type in. And they don't help that much. It's better to allow people to use pass phrases.
2. **Stop it with password expiration.** That was an old idea for a time when we were not sophisticated enough to know when a password was compromised. Today, don't make people change their passwords unless there's indication of compromise.
3. **Let people use password managers.** This is how we deal with all the passwords we need.

All I can say is that it is about time we had some sane advice.  These changes will have a huge positive impact on both overall security and end-user satisfaction.  

#### References

[NIST Special Publication 800-63-3](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63-3.pdf)<br>
[Stop Trying to Fix the User](http://ieeexplore.ieee.org/document/7676198/)<br>
[Why Password Expiration is Bad](https://securingthehuman.sans.org/blog/2017/03/23/time-for-password-expiration-to-die)<br>
[Why Password Complexity Rules are Bad](https://www.wsj.com/articles/the-man-who-wrote-those-password-rules-has-a-new-tip-n3v-r-m1-d-1502124118)<br>
[Changes in Password Best Practices](https://www.schneier.com/blog/archives/2017/10/changes_in_pass.html)<br>

