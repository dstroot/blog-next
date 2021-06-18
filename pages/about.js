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
              I have been a Chief Information Officer for a long time and it’s
              clear that “managing information” is just the price of entry. In
              today’s world I believe CIO should mean “Chief Innovation
              Officer”. My ambition is to find ways in which technology can be
              leveraged for more effective, more engaging, and more sustainable
              business growth.
            </p>

            <p>
              Some examples I am interested are: Harnessing the consumerization
              of technology for the enterprise. Encouraging and managing
              corporate data “curation” and ownership - a precursor to better
              analytics. Otherwise known as data governance, but this term does
              not do justice to ownership. How to propagate ideas, mass
              collaboration and the social enterprise. Social brand development,
              social capital and online reputation. Frictionless security - i.e.
              security that will not be actively resisted by employees.
              Development approaches that are rapid, iterative & nimble -
              basically how to use open source style collaboration for corporate
              development. Scale computing in all forms, shapes and sizes. I
              have been actively using Kubernetes and Golang for some time now
              and have built out a library of Kubernetes deployment tools. Where
              I’ve Worked Associate Partner: Accenture Global CIO: Allianz
              Global Investors Chief Technology Officer: Santa Barbara Tax
              Products Group Community Service Board Member, Ronald McDonald
              House, Los Angeles Technology Committee Member, Santa Margarita
              Catholic High School Education University of California at Los
              Angeles, BA Economics, 1985 Magna Cum Laude Phi Beta Kappa Some
              Example Open Source Contributions Skeleton (maintainer) Boostrap
              (contributor) Kubernetes (contributor) Helmet (contributor) A
              Little More on Me - the Personal Side I’ve been happily married to
              Julie for over twenty-five years, and have I have two children,
              Matt and Elise, who make me very proud. Julie and I met at UCLA.
              Go Bruins! My favorites movies are Princess Bride and Dead Poets
              Society. I actually have “Carpe Diem” imprinted on my custom iPad
              cover. I love driving/riding anything with a motor and enjoy both
              dirt and street motorcycing and yes I probably go too fast. I
              generally love anything outdoors. Seems I have really gotten into
              hiking lately. I appreciate a good 10-15 mile summit hike and have
              hit most of the local southern California peaks. It’s good to get
              your heart rate up for 4-8 hours! My favorite place on earth is
              Hawaii, so a big mahalo to all of you who feel the same way. There
              is no place else where I can literally step off the plane and feel
              the weight lift from my shoulders and my spirit open up. Technical
              Details About This Site We are all standing on the back of giants
              and I am constantly amazed at the quality and diversity of the
              open source tools available now. I love learning and using new
              technology, and I am a curious person, so I am always interested
              in what technologies others use to create sites - so I thought I
              might share what tools I am using. This site is very simple. It is
              a static site built using Hugo and hosted on GitHub and TLS is
              provided by Cloudflare. Here is a quick list of what I am
              currently using: Source code and content is managed on GitHub Site
              analytics are provided by Google Analytics The build system is
              Gulp.js The CSS is compiled from SCSS Site comments are provided
              by Disqus
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
