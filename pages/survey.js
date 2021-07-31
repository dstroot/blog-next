import Head from 'next/head';
import { Container } from '../components/Container';
import { Question } from '../components/Question';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { PostTitle } from '../components/PostTitle';
import { CMS_NAME, ALERT } from '../lib/constants';
import { randomize, randomizeArray } from '../lib/randomizeArray';

export default function Index({ survey }) {
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
            <h2>Welcome!</h2>
            <p>
              This survey will help you assess the amount of corportate bullsh*t
              in your organization. The survey consists of 15 questions,
              presented in random order, and will take you approximately 10
              minutes to thoughtfully answer them.
            </p>
            <p>
              After you complete the survey we will show how your organization
              compares to others. The results will help you diagnose what causes
              the bullsh*t in your organization. Then we provide strategies to
              deal with corportate bullsh*t. For example, how might your
              organization become more data-driven? How might you be able to
              &quot;call bullsh*t&quot; on your boss? There is a lot to explore.
            </p>
            <p>
              We ask for your mobile number to prevent people (or bots) from
              voting multiple times and diluting the value of the overall
              results. Second, we store your survey results keyed by your mobile
              number. If you want to take the survey again and update your
              results we make that possible. We will <em>never</em> call you and
              we will <em>never share or sell your data</em> to any third party
              (we only have a phone number!).
            </p>
            {survey.length > 0 &&
              survey.map((question) => {
                return <Question key={`${question.id}`} question={question} />;
              })}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = require('../lib/questions.json');
  let survey = data.survey;
  randomize(survey); // randomize questions

  return {
    props: { survey },
  };
}
