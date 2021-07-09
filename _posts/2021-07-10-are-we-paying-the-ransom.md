---
title: Are we Paying the Ransom or Not?
excerpt: The answer will 
  depend primarily on how quickly the technology team contained the infection, how much effort 
  it will be to eradicate the malware and restore the systems and data, and whether backups are immutable.
  Interestingly, it takes the same amount of time if you pay the ransom or not!
coverImage: /assets/blog/img/ransomware.jpg
date: "2021-07-10"
published: true
author:
  name: Dan Stroot
  picture: /assets/blog/authors/dan.jpeg
ogImage:
  url: /assets/blog/img/ransomware.jpg
seoURL: ""
---

The first question executives will ask when told their company has fallen victim to ransomware is "Are we paying the ransom or not?". The answer will depend primarily on how quickly the technology team contained the infection, if it's possible to recover the data from backups (are backups immutable?), and how much effort it will be to eradicate the malware and rebuild the systems/restore the data?

The Colonial Pipeline breach that crippled the East Coast’s fuel supply recently was not particularly sophisticated. It has been traced back to a VPN login that was compromised. The credentials had leaked already and appeared in a dark web password cache. The VPN credentials allowed the attackers to gain access to Colonial's network by simply logging in (multi-factor authentication was not in use). Once inside they were able to gain elevated privileges to encrypt files.

Companies that are attacked, and pay the ransom, are typically less secure than most. However even with robust security, it will [never be perfect](/posts/2015-09-26-is-it-secure).  Therefore, **recovery** should be a higher focus.

* Can we respond in the containment phase fast enough?
* Do we know our data is backed up in immutable format?
* Can we reinstall our software - do we have the correct software media and version, license keys, etc.?
* Do our business continuity plans drill specifically for this scenario?

### Ransomware Protection

Protection falls into two categories: Prevention and Recovery.

* **Prevention** stops attacks before they happen, and
* **Recovery** minimizes the damage, speeds recovery, and avoids paying the ransom.

#### Prevention

There is nothing special about ransomware protection. It is "Security 101". All normal security and anti-malware practices apply.  For example:

* Keep software updated and patched
* Keep you administrative surface area small. This means not giving your users admin privileges.
* Use multi-factor authentication (Google introduced MFA logins for users and eliminated the threat of phishing).

There is a **wealth** of information about security best practices.  No need to repeat it here.  

#### Recovery

This is where is gets interesting. Most disaster scenarios do not contemplate rebuilding all of your systems starting in a cleanroom. How many companies practice recovery?  How many feel truly prepared?

There are three main steps in recovery:

1. **Containment** - involves rapid response by severing network connections and taking systems offline so they don’t infect other systems.
2. **Eradication** - means wiping the malware from the system and/or completely rebuilding the system. Executives might think, why rebuild the system? However, as we know some malware embeds itself into systems in ways that make it impossible to eradicate without rebuilding the system from scratch. In any case, this process takes time.  And interestingly it takes the **same amount of time if you pay the ransom or not** because in either case you have to rebuild your systems to eradicate the ransomware.
3. **Recovery** - This a very delicate process because if the malware was not fully eradicated you will re-infect yourself. Each system must be brought online and validated in as isolated a manner as possible.

None of this is possible if your backups were not immutable and they were also encrypted.  Then, yes **you are paying the ransom**.
