# A statically generated blog using Next.js and Markdown and MDX

This blog showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown and MDX files as the data source.

The blog posts are stored in `data/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post. Code snippets are stored in `data/_snippets` and are MDX files.

To create the blog posts we use [remark](https://github.com/remarkjs/remark), [remark-prism](https://github.com/sergioramos/remark-prism#readme), and [remark-html](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [gray-matter](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Notes

This blog is deployed on [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

### Made With

- [Tailwind](https://tailwindcss.com/) Styles
- [Next.js](https://nextjs.org/) "The React Framework for Production"
- [Vercel](https://vercel.com/home) Hosting & Analytics
- [React](https://reactjs.org/) For UI components
- [Hero Icons](https://heroicons.com/) Icons in React from the makers of Tailwindcss
- [React Icons](https://react-icons.github.io/react-icons/) More React icons
- [Remark](https://github.com/remarkjs) Markdown processing
- [MDX Bundler](https://github.com/kentcdodds/mdx-bundler) MDX processing
- [Gray Matter](https://github.com/jonschlinkert/gray-matter) Front Matter processing
- [Next Themes](https://github.com/pacocoursey/next-themes) Easy Dark Mode implementation
- [RSS/Atom Feed](https://github.com/jpmonette/feed) Create RSS 2.0 Feed
- [Next Sitemap](https://github.com/iamvishnusankar/next-sitemap) sitemap.xml and robots.txt
- [Dark Mode](https://github.com/pacocoursey/next-themes) Easy Dark Mode
- [Google Tag Manager](https://tagmanager.google.com/#/home) Tagging & Analytics

### Helpers

- [Megatags](https://megatags.co/) Create and test Open Graph and other Meta Tags
- [Web Code Tools](https://webcode.tools) Meta Tags tools

### Checklist

- [x] Add "Edit on GitHub" Link to pages
- [x] Add Syntax Highlighting
- [x] Add emoji support ([https://github.com/rhysd/remark-emoji](https://github.com/rhysd/remark-emoji))
- [x] Add "GitHub Flavored Markdown" support (mainly for tables)
- [x] Add Dark/Light Mode ([https://github.com/pacocoursey/next-themes](https://github.com/pacocoursey/next-themes))
- [x] Add About Me Page
- [x] Create a nice footer
- [x] Add a "Read More" link
- [x] Favicon
- [x] Manifest and other images/icons (test with lighthouse)
- [x] Custom 404 page
- [x] Custom Error page
- [x] Add RSS feed
- [x] Add analytics (Vercel, Plausible, GA, or?) - Added Google Tag Manager and Google Analytics
- [x] Add view tracking (using Dynamodb)
- [x] Add Archive page
- [ ] Add Search?
- [ ] Add Privacy and Terms (currently drafted)
- [x] Add security and CSP headers (using next.config.js)
- [ ] 100 Lighthouse Scores - add service worker?
- [x] Infinite scrolling - scroll in chunks to end of list - greatly speeds initial page load
- [x] Add easy way to embed YouTube, Twitter, etc. by just putting link in Markdown
- [x] Add ability to lint markdown files using [https://github.com/remarkjs/remark-lint](https://github.com/remarkjs/remark-lint).
- [ ] How to lint .MDX files?
- [ ] Add all the open graph seo meta tags. See megatags or web code tools above. [https://ahrefs.com/blog/open-graph-meta-tags/](https://ahrefs.com/blog/open-graph-meta-tags/) next-seo
- [x] Add robots.txt and sitemap.xml using [https://github.com/iamvishnusankar/next-sitemap](https://github.com/iamvishnusankar/next-sitemap)
- [ ] Add production logging (Logtail?)
- [ ] Add production error handling - e.g. Sentry
- [ ] Add testing [https://nextjs.org/docs/testing](https://nextjs.org/docs/testing)
- [x] Convert markdown to MDX - simplify site

### Packages

{
"name": "dan-blog",
"version": "1.0.0",
"scripts": {
"dev": "next",
"build": "next build",
"postbuild": "next-sitemap",
"start": "next start",
"lint": "eslint -c .eslintrc.js ./data --ext mdx"
},
"dependencies": {

    "@aws-sdk/client-dynamodb": "^3.38.0",
    "@aws-sdk/lib-dynamodb": "^3.38.0",


    "@google-analytics/data": "^2.8.0",

Mailchimp Newsletter and Metrics:

    "@mailchimp/mailchimp_marketing": "^3.0.72",
    "react-mailchimp-subscribe": "^2.1.3",

    "@mdx-js/react": "^1.6.22",
    "date-fns": "2.27.0",

MDX Related Functionality

    "esbuild": "^0.14.8",
    "mdx-bundler": "^8.0.1",
    "mdx-embed": "^0.0.22",


    "feed": "^4.2.2",
    "grey-matter": "^0.0.0",
    "html-entities": "^2.3.2",

    "millify": "^4.0.0",
    "next": "12.0.7",
    "next-themes": "^0.0.15",
    "prismjs": "^1.25.0",

React

    "react": "^18.0.0-rc.0",
    "react-dom": "^18.0.0-rc.0",



    "react-icons": "^4.3.1",

    "reading-time": "^1.3.0",
    "rehype-code-titles": "^1.0.3",
    "rehype-img-size": "^0.0.1",
    "rehype-prism-plus": "^1.1.1",
    "remark-cli": "^10.0.1",
    "remark-emoji": "^3.0.2",
    "remark-gfm": "^3.0.1",


    "sharp": "^0.29.2",  // Image processing
    "swr": "^1.1.1",     // Stale while revalidate data fetching library


    "yarn.lock": "^0.0.1-security"

},
"devDependencies": {
"autoprefixer": "^10.4.0",

    "eslint": "^8.5.0",
    "eslint-config-next": "^12.0.7",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-mdx": "^1.16.0",


    "next-sitemap": "^1.6.203",


    "postcss": "^8.4.5",
    "postcss-import": "^14.0.2",


    "prettier": "^2.3.2",
    "tailwindcss": "^3.0.7",
    "@tailwindcss/typography": "^0.5.0",
    "cssnano": "^5.0.14"

},
"license": "MIT"
}
