// import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../components/container'

import Header from '../components/header'
// import PostHeader from '../components/post-header'
import Layout from '../components/layout'
// import Head from 'next/head'
// import { CMS_NAME } from '../lib/constants'


export default function About({ preview }) {
  return (
    <Layout preview={preview}>
      <Container>
        <Header /> Hello
            {/* <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} /> 
            </article> */}
      </Container>
    </Layout>
  )
}

