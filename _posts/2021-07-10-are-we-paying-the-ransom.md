---
title: Are we Paying the Ransom or Not?
excerpt: The answer will depend primarily on how quickly the technology team
  contained the infection, how much effort it will be to eradicate the malware
  and restore the systems and data, and whether backups are immutable.
  Interestingly, it takes the same amount of time if you pay the ransom or not!
coverImage: /assets/blog/img/ransomware.jpg
date: "2021-07-10"
published: true
author:
  name: Dan Stroot
  picture: /assets/blog/authors/dan.jpeg
ogImage:
  url: /assets/blog/img/ransomware.jpg
seoURL: https://danstroot.com/2021/07/09/are-we-paying-the-ransom/
---

The first question executives will ask when they find out their company has fallen victim to ransomware is "_Are we paying the ransom or not?_".

The Colonial Pipeline breach that crippled the East Coast’s fuel supply recently was not particularly sophisticated. It has been traced back to a VPN login that was compromised. The credentials had leaked already and appeared in a dark web password cache. The VPN credentials allowed the attackers to gain access to Colonial's network by simply logging in (multi-factor authentication was not in use). Once inside they were able to gain elevated privileges to encrypt files.

Companies that are attacked, and pay the ransom, are typically less secure than most. However even with robust security, it will [never be perfect](/posts/2015-09-26-is-it-secure). Therefore, **recovery** should be a higher focus for even highly secure companies:

- Can we respond in the containment phase fast enough?
- Do we know our data is backed up in immutable format? If our backups are encrypted where are the decryption keys?
- Can we reinstall our software - do we have the correct software media and version, license keys, etc.? Is it also in immutable format?
- Do our business continuity plans drill specifically for this scenario?

That last bullet is one of the most important. Many victims still pay the ransom **even when they have the means to restore everything from backups on their own**.

## Why Pay the Ransom

The biggest reasons ransomware targets still pay even when they have reliable backups are:

1. **Nobody at the victim organization bothered to test in advance how long this data restoration process might take**. For example, what if an organization is storing backups on AWS Glacier? If they get attacked by ransomware they may suddenly discover thay have petabytes of data to restore over the Internet, and they realize that even with their fast connections **it’s going to take months to download all the backup files**. Many technology teams don't even have a back-of-the-napkin calculation of how long it would take for a full, complete restore.

2. The next most-common scenario involves victims that have off-site, encrypted backups of their data but discover that **the digital key needed to decrypt their backups was stored on the same local file-sharing network that got encrypted by the ransomware**.

3. Maybe you have the data backed up and accessible, but your **software was stored on the same local file-sharing network that got encrypted by the ransomware** You have backups, the data is there, but the application to actually do the restoration is encrypted, or the software you need to reinstall is encrypted.

4. Finally, **many companies don’t know their systems dependencies**, and so they don’t know in which order they should build/restore systems.

If you haven't thought about and tested the scenarios above then **yes, you are paying the ransom**.

## Steps in a Typical Ransomware Attack

1. **Infection**: After it has been delivered to the system via email attachment, phishing email, infected application or other method, the ransomware installs itself on the endpoint and any network devices it can access.
2. **Secure Key Exchange**: The ransomware contacts the command and control server operated by the criminals behind the attack to generate the cryptographic keys to be used on the local system.
3. **Encryption**: The ransomware starts encrypting any files it can find on local machines and the network.
4. **Extortion**: With the encryption work done, the ransomware displays instructions for extortion and ransom payment, threatening destruction of data if payment is not made.
5. **Unlocking**: Organizations can either pay the ransom and hope the criminals to actually decrypt the affected files, or they can attempt recovery by removing infected files and systems from the network and restoring data from clean backups.

Unfortunately, negotiating with criminals is often a lost cause as a recent report found that 42% of organizations who paid a ransom did not get their files decrypted.

### Ransomware Protection

Protection falls into two categories: Prevention and Recovery.

- **Prevention** stops attacks before they happen, and
- **Recovery** minimizes the damage, speeds recovery, and avoids paying the ransom.

#### Prevention

There is nothing special about ransomware prevention. It is "Security 101". All normal security and anti-malware practices apply. For example:

- Keep software updated and patched
- Use anti-virus and anti-malware software
- Use security policies to prevent malware from launching
- Keep you administrative surface area small. This means not giving your users admin privileges.
- Use multi-factor authentication (Google introduced MFA logins for users and eliminated the threat of phishing).

There is a **wealth** of information about security best practices. No need to repeat it here.

#### Recovery

**This is where is gets interesting**. Most disaster scenarios do not contemplate rebuilding all of your systems starting in a cleanroom. How many companies practice this specific kind of recovery? How many feel truly prepared?

There are three main steps in recovery:

1. **Containment** - involves rapid response by severing network connections and taking systems offline so they don’t infect other systems.
2. **Eradication** - means wiping the malware from the system and/or completely rebuilding the system. Executives might think, why rebuild the system? However, as we know some malware embeds itself into systems in ways that make it impossible to eradicate without rebuilding the system from scratch. In any case, this process takes time. And interestingly it takes the **same amount of time if you pay the ransom or not** because in either case **you have to rebuild all of your systems to eradicate the ransomware** and this is often the most time consuming step. Of course, the manner of infection must be tracked down and the vulnerability addressed or you will be reinfected.
3. **Recovery** - Once they systems are rebuilt in a cleanroom the data can be restored and the system brought online. This a very delicate process because if the malware was not fully eradicated you will re-infect yourself. Each system must be brought online and validated in as isolated a manner as possible, in the correct sequence. Immutable backup options such as Object Lock offer users a way to maintain truly air-gapped backups. The data is fixed, unchangeable, and cannot be deleted within the time frame set by the end-user.

If you haven't thought about and tested ransomware recovery scenarios prior to becoming infected then **yes, you are paying the ransom**.

### References

- [The Tao of Backup](http://www.taobackup.com/)
- [Complete Guide to Ransonware](https://www.backblaze.com/blog/complete-guide-ransomware/)
