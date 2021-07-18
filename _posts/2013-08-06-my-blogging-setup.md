---
title: My Blogging Setup
excerpt: Blogs need a core concept that will engage your audience.  Placing a
  post how to install Python on Windows, along with a picture of your favorite
  band and an assessment of Apple's business strategy all in the same place
  means you probably won't appeal to anyone in particular.  However a blog
  called "Ant Farm" that has *every* post focused on raising healthy and happy
  ants - well that will build an audience for sure.  So if you have, or want,
  separate audiences you will need separate blogs.
coverImage: /assets/blog/authors/dan.jpeg
date: "2013-08-06"
published: false
author:
  name: Dan Stroot
  picture: /assets/blog/authors/dan.jpeg
ogImage:
  url: /assets/blog/authors/dan.jpeg
seoURL: https://danstroot.com/2013/08/05/my-blogging-setup/
---

Blogs need a core concept that will engage your audience. Placing a post how to install Python on Windows, along with a picture of your favorite band and an assessment of Apple's business strategy all in the same place means you probably won't appeal to anyone in particular. However a blog called "Ant Farm" that has _every_ post focused on raising healthy and happy ants - well that will build an audience for sure. So if you have, or want, separate audiences you will need separate blogs.

## My Audiences

1. _Personal:_ personal thoughts, pictures, etc. (Is this even necessary in the Facebook era?)
2. _WanderingCIO:_ Blog about more strategic thoughts and ideas regarding managing technology
3. _Technical Stuff:_ "How to" type posts. Stuff I want to remember and I might as well share. How to install Ruby on Windows for example.

## Linkage

1. Personal Blog > Personal Twitter > Personal Facebook (somehow this should all reinforce)
2. WanderingCIO > WanderingCIO Twitter (Engagement) **Do I really want to maintain a seperate blog for this?** My name should be my brand shouldn't it?
3. Technical Blog (it's out there if anyone wants to search for it)
4. Company site > Company blog > Company Twitter > Company Facebook (somehow this should all reinforce the brand and create engagement)

### Weapons of Choice / Stakes in the ground

[Markdown][1]. Why? All the cool kids are using it. Markdown syntax is easy to read and learn. It's completely independent of what system you use because it's actually just a plain text file. This way all you need is an editor that can edit plain text. This means it's very portable. I also don't want my blog posts to become mired in someone else's blogging platform/system. I want to have the content easily and readily accessible anywhere, which leads me to my next choice.

[Dropbox][2]. This is where I will store my raw posts as well as my blog image files. This way they are accessible across all platforms and devices.

> **PROTIP:**
> You can serve your blog images directly from Dropbox no matter where
> your posts actually end up being published (and the links don't change).
> The caveat is they must be in your Dropbox "public" folder somewhere.
>
> I created a "blog-images" sub-folder and just drop the images there.
> Then you just right click the file on Dropbox and select "copy public
> link". Dropbox even has a URL shortening service so they can also
> give you a shortened link.

### Blogging Engines

1. Wordpress. The grandaddy. The OG. Tons of addins, plugins and whatnot.
2. Tumblr. Can use [markdown][1] as a post format. Pretty much full control over your theme as long as you know HTML and CSS.
3. Roll your own, use a static blog engine. Static blog engines turn markdown files into a useable blog. Jekyll might be the most widely used engine out there. Octopress is a framework based on Jekyll. Octopress comes with HTML templates, CSS, Javascript and a default configuration/theme that you can start to use right away.
4. [Scriptogr.am][3] and [Calepin.co/][4] are two online services using markdown and dropbox to host your blog. Neither is very polished yet. Scriptogr.am is far more developed but I can't seem to delete my test account.

### Hosting

1. Github (free)
2. Heroku (free)
3. Amazon S3 and optionally CloudFront (cheap)

### More About Tumblr

#### Tumblr Themes

Github is great resource: https://github.com/search?q=tumblr&ref=cmdform&type=Repositories
Docs:

- http://www.tumblr.com/docs/en/custom_themes

Commercial:

- Provenance Theme is my favorite http://provenance-theme.tumblr.com/

### More About Wordpress

#### Themes

[Studiopress][3] Genesis Framework is recommended by [Yoast][4].
I like these themes:

- http://my.studiopress.com/themes/minimum/
- http://demo.appfinite.com/epik/hello-world/

### Engagement

- _Disqus_ - I am convinced that allowing/encouraging people to comment is a good thing. So then the question becomes what comment system and do you plan to moderate? I really like Disqus.
- _Mailchimp_ - specifically you want to a) allow people to sign up for blog posts by email. b) deliver new posts to the people who signed up! Steps go something like this: create list, create custom form so people can add themselves to the list, then use http://mailchimp.com/features/rss-to-email/ to create automatic emails.
- _Twitter_ - Do you want to Tweet every post?
- _Facebook_ - Do you want to post on Facebook also?

### References

[1]: http://daringfireball.net/projects/markdown/
[2]: http://www.dropbox.com
[3]: http://www.studiopress.com/
[4]: http://yoast.com/schema-org-genesis-2-0/
