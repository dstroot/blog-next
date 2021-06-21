import Container from "../components/container";
import Header from "../components/header";
import PostTitle from "../components/post-title";
import Layout from "../components/layout";
// import Head from 'next/head'
// import { CMS_NAME } from '../lib/constants'
import Image from "next/image";
import markdownStyles from "../components/markdown-styles.module.css";

export default function About({ preview }) {
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <div className="flex flex-row">
          <div className="flex-initial mr-4">
            <Image
              src="/assets/blog/authors/dan.jpeg"
              alt="Dan Stroot"
              width={80}
              height={80}
              className="rounded-full mt-4"
            />
          </div>
          <div className="flex-initial -mt-3">
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
              of the Internet. I have served in a variety of senior leadership
              roles, including global CIO of Allianz Global Investors. I held a
              leadership role within Accenture where digitally transformed a
              trillion-dollar mutual fund manager’s complete set of trading,
              settlement, portfolio accounting, mutual fund performance & risk
              measurement technology. I helped launch the first Internet Bank
              (Wingspan Bank).
            </p>

            <p>
              I have been a Chief Information Officer for a long time and it’s
              clear that “managing information” is just the price of entry. In
              today’s world CIO means “Chief Innovation Officer”. My ambition is
              to find ways in which technology can be leveraged for more
              effective, more engaging, and more sustainable business growth.
            </p>

            <p>
              What is perhaps most interesting about me is I am still a hands on
              person. I have the I have been actively using Kubernetes and
              Golang for some time now and have built out a library of
              Kubernetes deployment tools.
            </p>

            <p>
              Where I’ve Worked
              <ul>
                <li>Associate Partner: Accenture</li>
                <li>Global CIO: Allianz Global Investors</li>
                <li>
                  Chief Technology Officer: Santa Barbara Tax Products Group
                </li>
              </ul>
              Community Service
              <ul>
                <li>Board Member, Ronald McDonald House, Los Angeles</li>
                <li>
                  Technology Committee Member, Santa Margarita Catholic High
                  School
                </li>
              </ul>
            </p>

            <p>
              Some Example Open Source Contributions Skeleton (maintainer)
              Boostrap (contributor) Kubernetes (contributor) Helmet
              (contributor)
            </p>

            <p>
              I love learning and using new technology, and I am a curious
              person, so I am always interested in what technologies others use
              to create sites - so I thought I might share what tools I am
              using. This site is very simple. It is a static site built using
              Hugo and hosted on GitHub and TLS is provided by Cloudflare. Here
              is a quick list of what I am currently using: Source code and
              content is managed on GitHub Site analytics are provided by Google
              Analytics The build system is Gulp.js The CSS is compiled from
              SCSS Site comments are provided by Disqus
            </p>
            <p>
              <small>
                Dan holds a BA in Economics from the University of California at
                Los Angeles where he graduated Magna Cum Laude and is a member
                of Phi Beta Kappa.
              </small>
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
