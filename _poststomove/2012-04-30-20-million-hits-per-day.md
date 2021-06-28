---
author: dan
categories: null
# date: '2012-04-30'
published: true
tags: null
title: 20.5 Million hits a day using an Amazon Micro server ($15 a month) and Node.js
---

I have been building a website recently just to get current with the latest web technologies and scaling.  I  saw this post on Hacker News: [10 Million hits a day with WordPress using a $15 server](http://www.ewanleith.com/blog/900/10-million-hits-a-day-with-wordpress-using-a-15-server "10 Million hits a day with WordPress using a $15 server") and was intrigued.  It was time to benchmark one of my own applications ([vizilinkz.com](http://www.vizilinkz.com/ "ViziLinkz")) since it also runs on an Amazon Micro server for now as my development/production machine.

<!--more-->

First, let’s get this out of the way. Amazon will throttle your micro server into the ground if you actually ran this level of traffic for an extended period of time. This [article ](http://gregsramblings.com/2011/02/07/amazon-ec2-micro-instance-cpu-steal/)explains it rather well. However this experiment still illustrates what is possible with this level of virtual hardware. If you actually have high levels of traffic then you already know a micro instance is not for you.

I’m using an Amazon Linux x86 machine image (ami-31814f58) and the machine type is a “t1.micro” instance ($0.02 per hour – two cents an hour!). This is how Amazon describes a micro instance:

* 613 MB memory
* Up to 2 EC2 Compute Units (for short periodic bursts)
* EBS storage only
* 32-bit or 64-bit platform
* I/O Performance: Low
* API name: t1.micro

I am using a 32 bit instance. I installed MySQL and compiled Node.js and then installed my web application – that’s it. Took me about an hour because I also installed phpMyAdmin and I hadn’t done it in a while.

Some notes before we start testing – my Node.js application uses the Express framework and in the docs I noticed something interesting:

To alter the environment we can set the NODE_ENV environment variable, for example: `$ NODE_ENV=production node app.js`

This is very important, as many caching mechanisms are only enabled when in production.

So I set environment to production and we are ready to start testing. Like the original WordPress post I am also using blitz.io and therefore had to do some housekeeping setting my application to serve their API key (clever since it prevents you from using blitz.io as a DoS tool). Once all that was done I was ready to run my first load test. I wasn’t really sure what to expect.

**Let’s run a blitz.io “rush” to see how we’re doing:**

[![Hit Rate](http://www.wanderingcio.com/wp-content/uploads/2012/04/15-1-300x140.png "15-1")](http://www.wanderingcio.com/wp-content/uploads/2012/04/15-1.png)

_(click the image to see a full size version)_

Note that blitz.io ramps up from 0 to 250 users, and our peak response rate was 238 hits per second as you can see above. This peak rate translates into **20,563,200 hits per day**!

Throughout the test our response rates looked pretty stable and averaged 13ms for the duration of the test:

[![Response Times](http://www.wanderingcio.com/wp-content/uploads/2012/04/15-2-300x139.png "15-2")](http://www.wanderingcio.com/wp-content/uploads/2012/04/15-2.png)

_(click the image to see a full size version)_

Interestingly blitz.io calculates your *average* hit rate during the test and uses that to estimate hits per day rather than your peak rate. I’m not sure why they do it that way. Here is their summary:

[![Summary](http://www.wanderingcio.com/wp-content/uploads/2012/04/15-3-300x44.png "15-3")](http://www.wanderingcio.com/wp-content/uploads/2012/04/15-3.png)

_(click the image to see a full size version)_

So what did we learn here? That Node.js on an Amazon micro instance can run really well?  Well yes I suppose, and this bodes well for true scalability to larger machines and to machine clusters in the future. But the real meat here is the confluence of several trends: ever more efficient web delivery (Nginx, Node.js, Varnish, etc.) , the move away from serving pages to serving data, and finally cloud infrastructure, means it is exceptionally easy to build highly scalable web sites for a very very small investment compared to several years ago.

This has profound implications for "corporate IT"!

_References_

*   [http://www.ewanleith.com/blog/900/10-million-hits-a-day-with-wordpress-using-a-15-server](http://www.ewanleith.com/blog/900/10-million-hits-a-day-with-wordpress-using-a-15-server)
*   [http://gregsramblings.com/2011/02/07/amazon-ec2-micro-instance-cpu-steal/](http://gregsramblings.com/2011/02/07/amazon-ec2-micro-instance-cpu-steal/)
