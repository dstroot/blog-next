---
title: Are we Paying the Ransom or Not?
excerpt: The answer will depend primarily on how quickly the technology team
  contained the infection, how much effort it will be to eradicate the malware
  and restore the systems and data, and whether backups are immutable.
  Interestingly, it takes the same amount of time if you pay the ransom or not!
coverImage: /assets/blog/img/ransomware.jpg
date: '2021-07-10'
published: false
author:
  name: Dan Stroot
  picture: /assets/blog/authors/dan.jpeg
ogImage:
  url: /assets/blog/img/ransomware.jpg
seoURL: https://danstroot.com/2021/07/09/are-we-paying-the-ransom/
---

The first question executives will ask when told their company has fallen victim to ransomware is "Are we paying the ransom or not?". The answer will depend primarily on how quickly the technology team contained the infection, if it's possible to recover the data from backups (are backups immutable?), and how much effort it will be to eradicate the malware and rebuild the systems/restore the data?

The Colonial Pipeline breach that crippled the East Coast’s fuel supply recently was not particularly sophisticated. It has been traced back to a VPN login that was compromised. The credentials had leaked already and appeared in a dark web password cache. The VPN credentials allowed the attackers to gain access to Colonial's network by simply logging in (multi-factor authentication was not in use). Once inside they were able to gain elevated privileges to encrypt files.

Companies that are attacked, and pay the ransom, are typically less secure than most. However even with robust security, it will [never be perfect](/posts/2015-09-26-is-it-secure). Therefore, **recovery** should be a higher focus.

- Can we respond in the containment phase fast enough?
- Do we know our data is backed up in immutable format?
- Can we reinstall our software - do we have the correct software media and version, license keys, etc.?
- Do our business continuity plans drill specifically for this scenario?

## Steps in a Typical Ransomware Attack

1. Infection: After it has been delivered to the system via email attachment, phishing email, infected application or other method, the ransomware installs itself on the endpoint and any network devices it can access.
2. Secure Key Exchange: The ransomware contacts the command and control server operated by the cybercriminals behind the attack to generate the cryptographic keys to be used on the local system.
3. Encryption: The ransomware starts encrypting any files it can find on local machines and the network.
4. Extortion: With the encryption work done, the ransomware displays instructions for extortion and ransom payment, threatening destruction of data if payment is not made.
5. Unlocking: Organizations can either pay the ransom and hope for the cybercriminals to actually decrypt the affected files, or they can attempt recovery by removing infected files and systems from the network and restoring data from clean backups. Unfortunately, negotiating with cyber criminals is often a lost cause as a recent report found that 42% of organizations who paid a ransom did not get their files decrypted.

### Ransomware Protection

Protection falls into two categories: Prevention and Recovery.

- **Prevention** stops attacks before they happen, and
- **Recovery** minimizes the damage, speeds recovery, and avoids paying the ransom.

#### Prevention

There is nothing special about ransomware protection. It is "Security 101". All normal security and anti-malware practices apply. For example:

- Keep software updated and patched
- Keep you administrative surface area small. This means not giving your users admin privileges.
- Use multi-factor authentication (Google introduced MFA logins for users and eliminated the threat of phishing).

There is a **wealth** of information about security best practices. No need to repeat it here.

## How to Defeat Ransomware

1. Isolate the Infection: Prevent the infection from spreading by separating all infected computers from each other, shared storage, and the network.
2. Identify the Infection: From messages, evidence on the computer, and identification tools, determine which malware strain you are dealing with.
3. Report: Report to the authorities to support and coordinate measures to counter attack.
4. Determine Your Options: You have a number of ways to deal with the infection. Determine which approach is best for you.
5. Restore and Refresh: Use safe backups and program and software sources to restore your computer or outfit a new platform.
6. Plan to Prevent Recurrence: Make an assessment of how the infection occurred and what you can do to put measures into place that will prevent it from happening again.

#### Recovery

This is where is gets interesting. Most disaster scenarios do not contemplate rebuilding all of your systems starting in a cleanroom. How many companies practice recovery? How many feel truly prepared?

There are three main steps in recovery:

1. **Containment** - involves rapid response by severing network connections and taking systems offline so they don’t infect other systems.
2. **Eradication** - means wiping the malware from the system and/or completely rebuilding the system. Executives might think, why rebuild the system? However, as we know some malware embeds itself into systems in ways that make it impossible to eradicate without rebuilding the system from scratch. In any case, this process takes time. And interestingly it takes the **same amount of time if you pay the ransom or not** because in either case you have to rebuild your systems to eradicate the ransomware.
3. **Recovery** - This a very delicate process because if the malware was not fully eradicated you will re-infect yourself. Each system must be brought online and validated in as isolated a manner as possible.

None of this is possible if your backups were not immutable and they were also encrypted. Then, yes **you are paying the ransom**.

https://www.backblaze.com/blog/complete-guide-ransomware/
