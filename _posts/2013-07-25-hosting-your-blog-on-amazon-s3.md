---
title: 'Hosting your Blog on Amazon S3'
excerpt: 'In order to serve your site from S3 you need to first create a bucket to hold the content. So, using the S3 web console create a bucket. Next we need to setup the bucket for web hosting. Click the properties button to edit the properties of your new bucket.  Then go to the Static Website Hosting section and click "Enabled website hosting". I am also using a redirect rule to redirect all errors back to the root of my blog.  That way no one ever gets a 404.  Cool right?'
coverImage: '/assets/blog/img/aws_hosting.png'
date: '2013-07-25T15:15:42-08:00'
author:
  name: Dan Stroot
  picture: '/assets/blog/authors/dan.jpeg'
ogImage:
  url: '/assets/blog/img/aws_hosting.png'
---

One of the cleanest designed blogs I have seen in a while belongs to [Karma Mobility](http://blog.yourkarma.com/).  So I asked in the comments on a particularly interesting post by Stefan Borsje and he very nicely responded "Thanks Daniel! This blog uses Jekyll and is hosted on S3."

Hmmm.  That's two cool things at once.


So let's do this! I know a little about Jekyll and I know it's engine behind GitHub Pages, plus on Github you can host it for free. But it has two disadvantages I know of:

* You can not use custom Jekyll plugins with GitHub Pages. Your site is generated with `--safe`.
* There is no possibility to redirect requests. This is vital if you do not want to lose any link traffic when fixing a typo in your URL.

### Jekyll on Amazon S3

In order to serve your site from S3 you need to first create a bucket to hold the content. So, using the S3 web console create a bucket.

Next we need to setup the bucket for web hosting. Click the properties button to edit the properties of your new bucket.  Then go to the Static Website Hosting section and click "Enabled website hosting". Note the Endpoint of your site and remember to save!

You also need to set your index document.  I chose index.html for my index document and nothing for my error document since I am using a redirect rule to redirect all errors back to the root of my blog.  That way no one ever gets a 404.  Cool right?

The rule is simple:

``` xml
<RoutingRules>
  <RoutingRule>
  <Condition>
    <HttpErrorCodeReturnedEquals>403</HttpErrorCodeReturnedEquals >
  </Condition>
  <Redirect>
    <HostName>error.html</HostName>
  </Redirect>
  </RoutingRule>
</RoutingRules>
```

In the "Permissions" section you also need to add a bucket policy that makes your bucket content publicly available:

``` json
{
  "Version": "2008-10-17",
  "Statement": [
      {
          "Sid": "PublicReadForGetBucketObjects",
          "Effect": "Allow",
          "Principal": {
              "AWS": "*"
          },
          "Action": "s3:GetObject",
          "Resource": "arn:aws:s3:::snapvotr-blog/*"
      }
  ]
}
```

Now you could click Upload next and push your site up on S3.

### But we have another trick up our sleeve

[s3_website](https://github.com/laurilehmijoki/s3_website)

First if you are already running Jekyll then you should have all the dependencies already setup.  So just run:

`gem install s3_website`


To configure s3_website, make sure you are in your website’s root directory, then run:

`s3_website cfg create`


This generates a configuration file called `s3_website.yml`. Open it in a text editor and change the values to your AWS secret and key ID.  This is where you also name your Amazon S3 bucket.  I used "blog.mywebsite.com" since I was setting up my site's blog.

``` yaml
s3_id: [YOUR AWS S3 ACCESS KEY ID]
s3_secret: [YOUR AWS S3 SECRET ACCESS KEY]
s3_bucket: [BUCKET NAME]
```

Next, save the file and run this command in your Terminal.

`s3_website cfg apply`

The S3 bucket will be automatically created for you by this command. The command will also ask if you want to use Amazon's CloudFront CDN.  I said "y".

In hindsight I would have kept it simple and made sure everything was working properly from S3 first.  If you do enable it there are some additional steps you have to do on Amazon:

* You have to tell CloudFront what CNAME(s) you will be using.  So Login, edit your new CloudFront distribution and fill in the "Alternate Domain Names (CNAMEs)" field. Since I was creating a blog I used "blog.website.com" with my own domain of course. ![Amazon management console](/img/CloudFront_Management_Console.png)
* You also need to tweak the origin per the link in the references - you need a **custom origin*** pointing to your S3 bucket.

Now, deploying your website is as simple as running:

`s3_website push`


When I am done adding content or tweaking I can build and deploy with two commands:

``` sh
jekyll build
s3_website push
```

That my friends is AWESOME!

### Setup your CNAME with your DNS provider

You must be able to point a CNAME at CloudFront.  I was creating a blog so it was easy.  You do this via your DNS provider, which in many cases is your domain registrar unless you already moved your DNS hosting elsewhere.  I created a blog CNAME (so my URL will end up being blog.website.com) pointing to the Amazon CloudFront domain that was assigned.  It looks like this: xxxxxxxxxxxx.cloudfront.net.  Boom! done.

### References
- [Hosting a static website using Amazon S3](http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html)
- [Using custom URLs on AWS](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html)
