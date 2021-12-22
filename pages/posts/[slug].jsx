import { SEO } from '../../components/Seo';
import { Header } from '../../components/Header';
import { PostBody } from '../../components/PostBody';
import { Container } from '../../components/Container';
import { PostHeader } from '../../components/PostHeader';
import { usePageView } from '../../hooks/usePageView';
import { getMDXFileBySlug } from '../../lib/processMDX';
import { CMS_NAME, BASE_URL } from '../../lib/constants';
import { getFilesByExtension } from '../../lib/getAllFiles';

// TODO: add section for "more posts" at bottom of page

export default function Index({ code, frontMatter }) {
  const seo = {
    title: `${CMS_NAME} · ${frontMatter.title}`,
    url: `${BASE_URL}/posts/${frontMatter.slug}`,
    description: frontMatter.excerpt,
    image: `${BASE_URL}${frontMatter.coverImage}`,
    publishedDate: frontMatter.date,
    author: frontMatter.author.name,
    ogType: 'article',
    twHandle: '@danstroot',
  };

  usePageView(frontMatter.slug);

  return (
    <>
      <SEO {...seo} />
      <Container>
        <Header />
        <article className='mb-6 mt-6 md:mb-10 md:mt-10'>
          <PostHeader
            title={frontMatter.title}
            coverImage={frontMatter.coverImage}
            date={frontMatter.date}
            author={frontMatter.author}
            time={frontMatter.stats.text}
          />
          <PostBody
            code={code}
            title={frontMatter.title}
            slug={frontMatter.slug}
            path={frontMatter.github}
          />
        </article>
      </Container>
    </>
  );
}

// https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
// Next.js will statically pre-render all the paths specified
// for each path the params will be fed into "getStaticProps"
export async function getStaticPaths() {
  const posts = getFilesByExtension('data/_posts', '.mdx');

  // urls/slugs should not have a file extension
  const paths = posts.map((p) => ({
    params: {
      slug: p.replace(/\.mdx/, ''),
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

// for each path in "getStaticPaths" the params will be
// fed into "getStaticProps" to render each page.
export async function getStaticProps({ params }) {
  const post = await getMDXFileBySlug(params.slug, 'data/_posts');
  return { props: { ...post } };
}
