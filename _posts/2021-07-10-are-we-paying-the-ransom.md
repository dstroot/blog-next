---
title: Are we Paying the Ransom or Not?
excerpt: The answer will depend primarily on how quickly the technology team
  contained the infection, how much effort it will be to eradicate the malware
  and restore the systems and data, and whether backups are immutable.
  Many victims still pay the ransom even when they have the means to restore
  everything from backups on their own. Why?
coverImage: /assets/blog/img/ransomware.jpg
date: '2021-07-10'
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

Companies that are attacked, and pay the ransom, are typically less secure than most. However even with robust security, it will [never be perfect](/posts/2015-09-26-is-it-secure). Therefore, preparation and recovery should be a higher focus, even for highly secure companies.

Without thorough preparation many victims **still pay the ransom even when they have the means to restore everything**.

### Why Pay?

Reasons ransomware targets still pay (even when they have reliable backups) are:

1. **Nobody bothered to test in advance how long the data restoration process might take**. For example, what if an organization stores backups on AWS Glacier? If they get attacked by ransomware, they may suddenly discover they have terabytes (or petabytes) of data to restore over the Internet, and that even with a fast connection it’s going to take months to download all the backup data. Many technology teams don't even have a back-of-the-napkin calculation of how long it would take for a full, complete restore.

2. Sometimes victims that have off-site, encrypted backups of their data but discover that **the digital keys needed to decrypt their backups were stored on the same local file-sharing network that was encrypted by the ransomware**.

3. Maybe you have the data backed up and accessible, but your **software was stored on the same local file-sharing network that got encrypted by the ransomware**. You have backups, but the application to do the restoration is encrypted, or the software you need to reinstall is encrypted.

4. Finally, **many companies don’t know their systems dependencies**, and so they don’t know in which order they should build/restore systems. Nor do they have a clear repeatable process to configure systems - they find they have been cloning a build image Larry created before he left last year.

If you haven't thought about these things then **yes, you are paying the ransom**.

### Ransomware Protection

There are three themes to get right to protect your organization against ransomware: Prevention, Preparation and Recovery.

1. **Prevention** stops attacks before they happen.
2. **Preparation** ensures backups are good, accessible, and restorable in a reasonable timeframe.
3. **Recovery** minimizes the damage, speeds rebuilding, and avoids paying the ransom.

Organizations seem to be thinking mainly about how to prevent getting hit by ransomware, or recovery. This article will cover all three areas but mainly focus on preparation.

### Prevention

There is nothing special about ransomware prevention. It is "Security 101". All normal security and anti-malware practices apply.

For example:

- Keep software updated and patched.
- Use anti-virus and anti-malware software.
- Use security policies to prevent malware from launching.
- Use good email hygiene. Train your employees against phishing.
- Keep your administrative surface area small. This means not giving your users admin privileges.
- Use multi-factor authentication (Google introduced MFA logins for users and eliminated the threat of phishing).

There is a wealth of information about security best practices on the web. No need to repeat it here.

### Preparation

#### 1. You Need People Who Understand Technology

This is number one - **ransomware is a professional business**. Criminals literally earn their living by attacking companies like yours. Companies need skilled technical people because of the sheer aggregation of risk; they are your last line of defense. If you do get hit with ransomware you want people on payroll, and on site, ASAP. You don't want to call your technology sourcing partner when you get hit and have them put you on hold while they take calls from their bigger clients that have also been hit with the same malware. Or worse, they have been hit too.

You probably don't need a group of Rockstar 10x-types, but you do need solid, fundamental IT knowledge and ability to solve technical challenges. There's no glamour or glory busines continuity, and no easy sources of funding like for information security.

#### 2. Clean House

Scrub old data you don't need. Backups will be an order of magnitude smaller, easier to manage, more reliable, cheaper, and **faster to restore**. In the event of a ransomware attack recovery speed is paramount. This is so fundamental **and yet so hard to do** in many companies. I could say more here but my instinct is just to repeat the first sentence over and over.

#### 3. Automate System Provisioning and Configuration

In the old days machine configurate was a hand-crafted art. In many cases systems were configured as an artist molds clay. Little bits added and changed over time but recreating the steps would be impossible. Especially when they were configured by Frank, but he left 2 years ago, and he never documented anything.

If we virtualized the configured machine, the entire machine can now be copied and/or backed up - it's **exact** configuration is preserved. That is step one. Most machines are already virtual these days though, and you really must have a process to create machines in a repeatable manner.

Step two automates machine provisioning ([pets vs. cattle](https://cloudscaling.com/blog/cloud-computing/the-history-of-pets-vs-cattle/)). Using tools like Git, Chef, Ansible, and Terraform, it is possible to create a fully automated process to instantiate machines in a repeatable manner. I've seen an Ansible playbook that does 200 administrative tasks for each of the servers for a particular environment - all the configuration is version-controlled within Git repositories. Changes are applied by CI, all the process thoroughly documented.

Everything from installing packages, creating or removing user accounts, setting up firewall rules, setting up directories and sending the necessary configuration, systemd services for legacy stuff, container clusters, container deployments, monitoring, container registries, analytics, APM and so on are handled this way.

No one should have write access on the server itself (unless explicitly given in the playbook, or the admins) and even the servers themselves can be wiped and reinstalled with a newer OS version (mostly thanks to Docker), plus all of the changes are auditable, since they coincide with the Git repo history.

Automated configuration means it's repeatable, can be tested, and can be done in the event of an emergency (**as long as your tools and scripts were not encrypted by the ransomware!**).

#### 4. Immutable Backups

Mirroring and data replication are great for availability but bad for backup purposes - if the files being replicated become encrypted via ransomware it is possible the mirroring will just copy the freshly encrypted file(s) or data to the other location.

In fact, you should monitor disk activity. If you get hit your disk usage will suddenly skyrocket as it rewrites/encrypts all your files. Your mirroring or replication network traffic will also spike up.

Keep immutable, offline, air gapped backups:

1. Use a CoW (copy-on-write) filesystem like btrfs or ZFS

2. Set up snapshots to be taken periodically (hourly/daily) and sent to a different host or volume with some type of immutable file system.

3. Manually backup snapshots or the full volume to offline, air gapped storage every N days/weeks/months.

4. Figure out how you'll stop a someone who gets in from deleting or accessing your backups. Assume they'll be attacked. Understand what the backup solutions offer in terms of security. Can you use protection on an S3 storage bucket to prevent deletion, even with the access key? Don't let **anything** delete or format any backup volumes.

5. If you're going to use encrypted backups, understand where the keys are stored and how they're used. More importantly, understand how you'll have the keys to decrypt the backups after a disaster. Can you use asymmetric crypto so only public keys get stored on your servers?

6. Make the offsite backup 'pull' based - so the credentials to access the data already backed up do not exist on the system being backed up.

7. Ensure you have enough copies. One isn't enough - what if the payment card on your storage account expires, or you get locked out? Three backups in two locations, at least one off-premises.

8. There's all sorts of other things to consider like data consistency and whether operations on your systems are atomic (what happens if the backup snapshot is taken mid-operation in your app?) that you'll want to think about too.

#### 5. Monitor Your Backup Processes

Set up monitoring so you know when something goes wrong with your backups. Gather and expose enough information to know exactly what's going on. This could be as simple as an automated email every morning, showing the duration of the backup job, and the amount of data written, and amount changed since last time. But you need to monitor this. Don't just go for a failure alarm (have one of those and make it fail-safe so it alerts if the backup didn't succeed, even if the backup script didn't run at all) also notify yourself on success so you are aware of the backups and what normal metrics look like.

#### 6. Test Restoration

Assume your backup will not be restorable unless proven otherwise. Practice restoring to a non-production environment to see what you missed. Document everything. In the old days tape media went bad, tape catalogs became corrupted, the label on the tape didn't match the contents. Today there are much better technologies but assume your systems cannot be restored unless this has been recently tested.

#### 7. Define Rebuild Steps

When rebuilding a new "cleanroom" environment there are many prerequisites and "order of operation" issues. You need DNS to access the Internet and DHCP services to assign IP addresses to machines. You need authentication, and many other dependencies will soon become apparent.

Start with tabletop exercises to simply think through and document your systems dependencies and order of operations necessary to rebuild. Document this process and store copies documentation in a place that is separate, and air gapped from your main environment.

Divide the rebuild into stages:

1. Prepare cleanroom
2. Establish new network perimeter
3. Establish new core services (DHS, DHCP, Authentication, etc.) inside perimeter
4. Initialize rebuild process, create new admin accounts...
5. Etc.

It may not be feasible to test a full rebuild scenario but even testing and practicing the initial stages is very important for an accelerated recovery. These steps are typically the ones that trip up ransomware victims.

### Recovery

**This is where is gets interesting**. Most disaster scenarios do not contemplate rebuilding all your systems starting in a cleanroom. How many companies practice this specific kind of recovery? How many feel truly prepared?

There are three main steps in recovery:

1. **Containment** - involves rapid response by severing network connections and taking systems offline so they don’t infect other systems.

2. **Eradication** - means wiping the malware from the system and/or completely rebuilding the system. Executives might think, why rebuild the system? However, as we know some malware embeds itself into systems in ways that make it impossible to eradicate without rebuilding the system from scratch. In any case, this process takes time. And interestingly it may take the **same amount of time if you pay the ransom or not because in either case you must rebuild all your systems to eradicate the ransomware** - this is often the most time-consuming step. Of course, the manner of infection must be tracked down and the vulnerability addressed, or you will be reinfected.

3. **Recovery** - Once they systems are rebuilt in a cleanroom the data can be restored and the system brought online. This a very delicate process because if the malware was not fully eradicated you will re-infect yourself. Each system must be brought online and validated in as isolated a manner as possible, in the correct sequence.

If you haven't thought about and tested ransomware recovery scenarios prior to becoming infected then **yes, you are paying the ransom**.

### References

- [The Tao of Backup](http://www.taobackup.com/)
