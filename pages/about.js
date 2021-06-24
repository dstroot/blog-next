import Container from "../components/container";
import Header from "../components/header";
import PostTitle from "../components/post-title";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Image from "next/image";
import markdownStyles from "../components/markdown-styles.module.css";

export default function About({ preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{CMS_NAME} · About</title>
      </Head>
      <Container>
        <Header />
        <div className="flex flex-row">
          <div className="flex-initial mr-4 image-container w-10 md:w-16 lg:w-20">
            <Image
              src="/assets/blog/authors/dan.jpeg"
              alt={CMS_NAME}
              className="rounded-full mt-4 image"
              layout="fill"
            />
          </div>
          <div className="flex-initial -mt-2 md:-mt-1 lg:-mt-3">
            <PostTitle>About Me</PostTitle>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className={markdownStyles["markdown"]}>
            <h2>
              I love building things. Made in California. Family man,
              technologist and Hacker News aficionado. Eternally curious.
            </h2>
            <p>
              I have been very fortunate in my career to have experienced
              several major waves of technology innovation, including the birth
              of the Internet (really). I have served in a variety of senior
              leadership roles, including Global CIO of Allianz Global Investors
              where I was accountable for over $500M USD in annual technology
              spend. I held a leadership role within Accenture where digitally
              transformed a trillion-dollar mutual fund manager’s complete set
              of trading, settlement, portfolio accounting, fund performance &
              risk measurement systems. I helped launch the first Internet Bank
              (Wingspan Bank).
            </p>
            <p>
              I have been a Chief Information Officer/Chief Technology Officer
              for a long time and it’s clear that &quot;managing
              information&quot; is just the price of entry. In today’s world CIO
              means &quot;Chief Innovation Officer&quot;. Its what drives me and
              what I love about my work.
            </p>
            <p>
              What is interesting about me is I am still a &quot;hands-on&quot;
              leader. I have over 150 code repositories on GitHub; spanning many
              different languages and technologies. I have contributed to open
              source projects where possible to give back, but also simply
              because I enjoy it. I LOVE building things, for example this
              website, and I actually still miss my days as a programmer where I
              could focus on a single problem domain.
            </p>
            <small>
              <h3>Example Open Source Contributions:</h3>
              <ul>
                <li>Skeleton (maintainer)</li>
                <li>Boostrap (contributor)</li>
                <li>Kubernetes(contributor)</li>
                <li>Helmet (contributor)</li>
              </ul>
              <h3>Where I’ve Worked</h3>
              <ul>
                <li>Associate Partner: Accenture</li>
                <li>Global CIO: Allianz Global Investors</li>
                <li>
                  Chief Technology Officer: Santa Barbara Tax Products Group
                </li>
                <li>Founder: Verite Data Science</li>
                <li>
                  Chief Information Officer: Retirement Services Division,
                  Pacific Life
                </li>
              </ul>
              <h3>Community Service</h3>
              <ul>
                <li>Board Member, Ronald McDonald House, Los Angeles</li>
                <li>
                  Technology Committee Member, Santa Margarita Catholic High
                  School
                </li>
              </ul>
            </small>
            <p className="mt-10">
              <small>
                <em>
                  Dan holds a BA in Economics from the University of California
                  at Los Angeles where he graduated Magna Cum Laude and is a
                  member of Phi Beta Kappa.
                </em>
              </small>
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
