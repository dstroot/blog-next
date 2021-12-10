# A statically generated blog using Next.js and Markdown and MDX

This blog showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown and MDX files as the data source.

The blog posts are stored in `/data/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post. Code snippets are stored in `/pages/_snippets` and are MDX files.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark), [`remark-prism`](https://github.com/sergioramos/remark-prism#readme), and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Notes

This blog is deployed on [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

### Made With

- [Tailwind](https://tailwindcss.com/) Styles
- [Next.js](https://nextjs.org/) "The React Framework for Production"
- [Vercel](https://vercel.com/home) Hosting & Analytics
- [React](https://reactjs.org/) For UI components
- [Hero Icons](https://heroicons.com/) Easy Icons in React
- [Remark](https://github.com/remarkjs) Markdown processing
- [MDX Bundler](https://github.com/kentcdodds/mdx-bundler) MDX processing
- [Gray Matter](https://github.com/jonschlinkert/gray-matter) Front Matter processing
- [Next Themes](https://github.com/pacocoursey/next-themes) Easy Dark Mode implementation
- [RSS/Atom Feed](https://github.com/jpmonette/feed) Create RSS 2.0 Feed
- [Megatags](https://megatags.co/) Create and test Open Graph and other Meta Tags
- [Web Code Tools](https://webcode.tools) Meta Tags tools
- [Next Sitemap](https://github.com/iamvishnusankar/next-sitemap) sitemap.xml and robots.txt
- [Dark Mode](https://github.com/pacocoursey/next-themes) Easy Dark Mode

TODO: Checklist

- [x] Add "Edit on GitHub" Link to pages
- [x] Add Syntax Highlighting
- [x] Add emoji support (https://github.com/rhysd/remark-emoji)
- [x] Add "GitHub Flavored Markdown" support (mainly for tables)
- [x] Add Dark/Light Mode (https://github.com/pacocoursey/next-themes)
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
- [ ] Add Privacy and Terms
- [x] Add security and CSP headers (using next.config.js)
- [x] 100 Lighthouse Scores
- [x] Infinite scrolling - scroll in chunks to end of list - greatly speeds initial page load
- [x] Add easy way to embed YouTube, Twitter, etc. by just putting link in Markdown
- [x] Add ability to lint markdown files using https://github.com/remarkjs/remark-lint.
- [ ] Add all the open graph seo meta tags. See megatags or web code tools above. https://ahrefs.com/blog/open-graph-meta-tags/
- [x] Add robots.txt and sitemap.xml using https://github.com/iamvishnusankar/next-sitemap
- [ ] Add production logging (Logtail?)
- [ ] Add production error handling - e.g. Sentry
