import Head from 'next/head';
import { Container } from '../components/Container';
import { Question } from '../components/Question';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { PostTitle } from '../components/PostTitle';
import { CMS_NAME, ALERT } from '../lib/constants';

export default function Index({ questions }) {
  return (
    <>
      <Head>
        <title>{CMS_NAME} · Survey</title>
      </Head>
      <Layout alert={ALERT}>
        <Container>
          <Header />
          <PostTitle>Survey</PostTitle>
          <div className='max-w-2xl mx-auto mb-10 prose prose-lg dark:prose-dark'>
            {questions.questions.length > 0 &&
              questions.questions.map((question) => {
                return (
                  <div key={`${question.id}`}>
                    <Question question={question} />
                  </div>
                );
              })}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const questions = require('../lib/questions.json');

  return {
    props: { questions },
  };
}
