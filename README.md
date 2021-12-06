# A statically generated blog using Next.js and Markdown

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark), [`remark-prism`](https://github.com/sergioramos/remark-prism#readme), and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Notes

This blog-starter uses [Tailwind CSS](https://tailwindcss.com). To control the generated stylesheet's filesize, this example uses Tailwind CSS' v2.0 [`purge` option](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css) to remove unused CSS.

This project is deployed on [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

https://github.com/vercel/next.js/tree/canary/examples/blog-starter

Made With:

- [Tailwind](https://tailwindcss.com/)
- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/home) Hosting & Analytics
- [React](https://reactjs.org/)
- [Hero Icons](https://heroicons.com/)
- [Remark](https://github.com/remarkjs) Markdown processing
- [Gray Matter](https://github.com/jonschlinkert/gray-matter) YAML Front Matter processing
- [Megatags](https://megatags.co/)
- [Web Code Tools](https://webcode.tools)
- [Next Sitemap](https://github.com/iamvishnusankar/next-sitemap) sitemap.xml and robots.txt

TODO: Checklist

- [x] Add "Edit on GitHub" Link to pages
- [x] Add Syntax Highlighting
- [x] Add emoji support (https://github.com/rhysd/remark-emoji)
- [x] Add "GitHub Flavored Markdown" support (mainly for tables)
- [x] Add Dark/Light Mode
- [x] Add About Me Page
- [x] Create a nice footer
- [x] Add a "Read More" link
- [x] Favicon
- [x] Manifest and other images/icons (test with lighthouse)
- [x] Custom 404 page
- [x] Custom Error page
- [x] Add RSS feed
- [ ] Add analytics (Vercel, Plausible, GA, or?) - Added Google Tag Manager and Google Analytics
- [x] Add Archive page
- [ ] Add Search?
- [ ] Add Privacy and Terms
- [x] 100 Lighthouse Scores
- [x] Infinite scrolling - scroll in chunks to end of list - greatly speeds initial page load
- [x] Add easy way to embed YouTube, Twitter, etc. by just putting link in Markdown
- [x] Add ability to lint markdown files using https://github.com/remarkjs/remark-lint.
- [ ] Add all the open graph seo meta tags. See megatags or web code tools above. https://ahrefs.com/blog/open-graph-meta-tags/
- [x] Add robots.txt and sitemap.xml using https://github.com/iamvishnusankar/next-sitemap
