---
title: Modern Web Development
excerpt: Web development has evolved faster than nearly every other software
  engineering discipline. The pace of innovation has been relentless, and
  front-end developers are confronted with new frameworks, tools, and standards
  for “modern” web development **constantly**. Framework fatigue is real thing.
coverImage: /assets/blog/img/rekit.png
date: "2018-07-20"
published: false
author:
  name: Dan Stroot
  picture: /assets/blog/authors/dan.jpeg
ogImage:
  url: /assets/blog/img/rekit.png
seoURL: ""
---

Web development has evolved faster than nearly every other software engineering discipline. The pace of innovation has been relentless, and front-end developers are confronted with new frameworks, tools, and standards for “modern” web development **constantly**. Framework fatigue is real thing. Even the languages of the web (HTML, CSS, and ECMAScript) have gone through a major modernization effort (and the pace of change increased):

<small>

- HTML > HTML5 > HTML 5.2
- CSS 3 > CSS 4 + SCSS, PostCSS, autoprefixer, etc.
- ECMAScript 5 (2009) > ECMAScript 2015, ECMAScript 2016, ECMAScript 2017, ECMAScript 2018

</small>

The positive aspects of all the "churn" in the web development ecosystem are some truly incredible innovations that have fundamentally changed web development to enable much richer, engaging, and performant web "applications".

One of the best things to come along lately are **progressive web applications**. Progressive web apps are "installable" and provide user experiences that combine the best of the web and the best of apps. They are useful to users from the very first visit in a browser, no install required. They are [responsive](https://danstroot.com/2013/12/31/responsive-design-vs.-mobile-first/) to screen size, pixel density and orientation. They can load quickly (even _without_ an Internet connection), can have an icon on the home screen, and can run as an app with a top-level, full screen experience.

> By the way **this** blog is a progressive web app and has been for a couple years. Boom.

#### A Progressive Web App is:

- **Progressive** - Works for every user, regardless of browser choice because it's built with progressive enhancement as a core tenet.
- **Responsive** - Fits any form factor: desktop, mobile, tablet, and whatever is next.
- **Fast** - Responds quickly to user interactions with silky smooth animations and no janky scrolling.
- **Reliable** - Enhanced with **service workers** to work offline or on low-quality networks.
- **App-like** - Feels like an app rather than a website. More like a natural app on the device, with an immersive user experience.
- **Fresh** - Always up-to-date thanks to the service worker update process.
- **Safe** - Served via HTTPS to prevent snooping and to ensure content hasn't been tampered with.
- **Discoverable** - Is identifiable as an "application" thanks to a W3C manifest and service worker registration scope, allowing search engines to find it.
- **Engaging** - Makes re-engagement easy through features like push notifications.
- **Installable** - Allows users to add apps they find most useful to their home screen on their phone **without using an app store**.
- **Linkable** - Easily share the application via URL, does not require complex installation.

That is a lot to unpack. Let's start with the underlying technology that makes it possible.

#### What is a Service Worker?

Rich offline experiences, periodic background syncs, push notifications — functionality that would normally require a native application are now part of the web-native experience. Service workers provide the technical foundation these features rely on.

A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction. Today, they already include features like push notifications and background sync. In the future, service workers might support other things like geofencing. A core feature is the ability to intercept and handle network requests, including programmatically managing a cache of responses. The reason this is such an exciting API is that it allows you to support offline experiences, giving developers complete control over the experience.

#### Why TLS/HTTPS only?

Service workers give you powerful capabilities. For example you can hijack connections and fabricate responses. While you would use these powers for good (e.g. content caching, working offline), a man-in-the-middle might not. To avoid this, you can only register service workers on pages served over HTTPS, so we know the service worker the browser receives hasn't been tampered with during its journey through the network.

Your site will also rank lower in Google’s search results if it is not served via TLS, and browsers like Chrome are flagging websites that do not have a secure connection. TLS is definitely part of the "modern" web.

The **not** modern web:

![No TLS](/img/no-TLS.png)

#### So how do you build a progressive, TLS-secured, **web application**<br> - that gets **perfect** marks <small>(Lighthouse, Qualys and Securityheaders.com</small>)<br> - over a **weekend**<br> - and deploy it for **free**?

You must stand on the shoulders of giants. Seriously. This project uses the "giants" of modern web development:

<small>

- React
- Yarn
- Babel
- Webpack
- node
- SCSS
- Prettier
- Bootstrap
- FontAwesome
- autoprefixer
- PostCSS
- Etc.

</small>

Given all the tools and complexity, it might take days just to be able to configure a development environment, **or** you can just install `create-react-app`. You are up and running in about 35 seconds with **no build configuration** work.

- `yarn start` runs your app in interactive development mode
- `yarn test` runs your tests
- `yarn build` builds your app for production

"Yarn build" is magical. It bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes (for cachebusting).
By default, it also includes a service worker so that your app is a **full progressive web app** that loads from local cache on future visits.

**Voila! Your app is ready to be deployed.**

My app is very small at the moment. I required:

- react-router (for page routing)
- 6 react "pages" (mainly pure components)
- 8 react components <small>(presentational, dumb, pure, functional... pick your term)</small>

For styling I used:

- Bootstrap
- FontAwesome

It was built over the course of a weekend. I am not a graphic designer, so please excuse the design.

I deployed it using Google Firebase Hosting - deploying your app from a local directory to the web only takes one command. The real draw is that it's 100% free for my usage level - 1 GB of storage (huge in web terms), and 10 GB/month of data, plus a free SSL certificate!

#### The Results ([veritedatascience.com](https://veritedatascience.com)):

:thumbsup: Full source is available on [GitHub](https://github.com/dstroot/react-vds).

Perfect Lighthouse scores:

![Lighthouse](/img/Lighthouse_Report.png)

A+ Qualys Score:

![Qualys SSL Labs](/img/SSL_Labs.png)

A+ Security Headers Score:

![Security Headers](/img/security_headers.png)

#### References

* [Google: Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/)
* [Google: HTTPS as a ranking signal](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html)
* [Firebase: Pricing](https://firebase.google.com/pricing/)
