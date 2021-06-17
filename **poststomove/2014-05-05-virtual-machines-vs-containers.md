+++
date = "2014-05-05T10:00:00-00:00"
title = "Virtual Machines vs Containers"
draft = false
description = ""
+++

![Docker](/img/docker.png)

Three driving forces of infrastructure efficiency in a large, distributed environment were:

- Data center consolidation _(KPI: How many DCs do you have?)_
- Host virtualization _(KPI: what percentage of your servers are virtual?)_
- "Cloud" in its various forms _(KPI: How many servers are you still running?)_

Assuming you have been aggresive you may not have any data centers left.  You may be buying services rather than servers, and/or all of your remaining machines might be virtualized and hosted in someone else's data center. Now what?  

<!--more-->

### Where is the next level of infrastructure efficiency going to come from?

Personally I think the next wave of infrastructure efficiency will be driven by Linux container technology (LinuX Containers = LXC). The LXC container approach does **not** require a hypervisor - instead you run isolated "containers" on a Linux host.  

LXC provides operating system-level virtualization, but instead of creating a full-fledged virtual machine LXC containers leverage cgroups (control groups) to completely isolate application's view of the operating environment, including process trees, network, user ids and mounted file systems. Cgroups are a Linux kernel feature to limit, account, and isolate resource usage (CPU, memory, disk I/O, etc.) of process groups.

This work was started by engineers at Google and in late 2007 it was merged into kernel version 2.6.24. LXC also relies on other kinds of namespace-isolation functionality, which have been developed and integrated into the mainline Linux kernel since then. It looks something like this:

![Docker](/img/dockervsvm.png)

### Is LXC Technology Really Better?

Here are some of the major benefits of Linux Containers from my perspective:

#### Fast

- Runtime performance at near bare metal speeds (typically 97+ percent of bare metal).
- Management operations (boot, stop, start, reboot, etc.) in seconds or milliseconds.

#### Agile

- VM-like agility -- it's still "virtualization".
- With VMs we often touted our ability to ship a machine "over the wire" since a virtual machine is basically just a large file.  It also allows better business recovery scenarios where I can have a snapshot of my production machine(s) copied to a different datacenter at regular intervals. Guess what? LXC containers are an order of magnitude smaller!
- Developers can essentially use the exact same containers as those deployed into production.

#### Lightweight

- Just enough Operating System (JeOS); include only what you need reducing image and container bloat.
- Minimal per container penalty which equates to greater density and hence greater returns on existing assets -- imagine packing 100s or 1000s of containers on a single host node!

#### Inexpensive

- Open source -- free -- lower TCO.
- Supported with out-of-the-box modern Linux kernels.
- LXC hosting likely to drive the next wave of cloud products.

#### Ecosystem

- Growing in popularity -- just checkout the google trends for docker or LXC.
- Vibrant community and numerous 3rd party applications (1000s of prebuilt images on docker index and 100s of open source apps on github or other public sources).

#### Benchmarks

- Average boot time: LXC 1.5x faster
- Average reboot time: LXC 18.9x faster
- LXC CPU growth 26x lower than VM (per machine)
- LXC Memory group 3x lower than VM (per machine)
- LXC images 3.2x smaller than VM

### Summary

The next wave of server density is likely to be driven by LXC technology instead of traditional VM technology.  This technology may also increase further an organizations agility, developer productivity and even business continuity. However, LXC technology is not yet as mature or "manageable" as VM technology, but tools like Docker are developing quickly.

_Sources:_

* [KVM and Docker LXC Benchmarking with OpenStack](http://bodenr.blogspot.com/2014/05/kvm-and-docker-lxc-benchmarking-with.html)
