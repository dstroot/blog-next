import ErrorPage from "next/error";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";

import { useRouter } from "next/router";
import { Container } from "../../components/Container";
import { PostBody } from "../../components/PostBody";
import { Header } from "../../components/Header";
import { PostHeader } from "../../components/PostHeader";
import { Layout } from "../../components/Layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import { PostTitle } from "../../components/PostTitle";

import { CMS_NAME, REPO, ALERT } from "../../lib/constants";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  const githubPath = REPO + "/blob/master/_posts/" + post.fileName;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout alert={ALERT}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-6 md:mb-10 mt-6 md:mt-10">
              <Head>
                <title>
                  {CMS_NAME} · {post.title}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                time={post.stats.text}
              />
              <PostBody content={post.content} path={githubPath} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "fileName",
    "stats",
  ]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
