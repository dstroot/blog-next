+++
title = "I Feel the Need for Speed"
description = ""
keywords = [
]
categories = [
]
date = "2017-01-10T10:25:35-08:00"

+++

![San Francisco MOMA](/img/speed.png)

Today google released a [new tool](https://testmysite.withgoogle.com) to test how mobile friendly your website is.  Since I recently rebuilt this site and been using a variety of tools to test it I was excited to see how well the site scored.  The UI is very nice but you have to opt-in to email to get your detailed report. I am definitely not a fan of that "dark pattern".

Usually my go-to benchmark is the the venerable [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/). PageSpeed Insights is very clear about delivering actionable steps you can take to improve overall speed and performance.  Not too long ago Google also added a mobile section to give you insight about your mobile page performance as well.

However I recently adopted Google's [Lighthouse](https://github.com/GoogleChrome/lighthouse) tool and found that to be exceptionally useful, particularly since it is service worker aware.  As a result this site will now run even when the network connection is severed on your mobile device. (Service workers should be a separate article)

<!--more-->

Google has pushed hard to support the unprecedented move to mobile device browsing. In November 2014, Google started labeling sites as “mobile-friendly” to denote which pages are optimized for phones. In February 2015, Google announced plans to roll out mobile ranking changes on April 21 (an unprecedented move — the company almost never announces algorithm changes in advance).

Recently (May 2016) Google announced it is rolling out an update to mobile search results that “increases the effect” of its mobile-friendly ranking signal. The goal is to “help our users find even more pages that are relevant and mobile-friendly,".

So it is crystal clear that making your site mobile-friendly will help your rankings, but guess what?  Making your site mobile-friendly makes it a **better experience for everyone, all the time**.  

Why?

* Performance benefits everyone. Don't waste the time of visitors to your site.
* Responsiveness benefits everyone.  I rarely if ever have the browser on my laptop at full screen.  
* Making your site handle network issues benefits everyone.

In other words making your site run well on a phone means it will run great on more capable hardware with more reliable networking and your page ranking will reflect it.  

#### References: 

* https://testmysite.withgoogle.com
* https://github.com/GoogleChrome/lighthouse
* http://venturebeat.com/2016/03/16/google-will-start-ranking-mobile-friendly-sites-even-higher-in-may/
* https://developers.google.com/speed/pagespeed/insights/
