import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { CMS_NAME } from '../lib/constants';

// images
import maker from '../public/assets/blog/img/maker.jpg';
import me from '../public/assets/blog/authors/dan.jpeg';

export default function Index() {
  return (
    <>
      <Head>
        <title>{CMS_NAME} · About</title>
      </Head>

      <Container>
        <Header />
        <div className='invisible xl:visible fixed left-top mt-36 ml-10'>
          <Image
            src={maker}
            alt={CMS_NAME}
            height={662}
            width={200}
            layout='intrinsic'
            placeholder='blur'
          />
        </div>
        <div className='flex flex-row items-center mb-8 md:mb-12'>
          <div className='flex-initial mr-4 image-container w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 relative'>
            <Image
              src={me}
              alt={CMS_NAME}
              className='rounded-full image'
              layout='fill'
              placeholder='blur'
            />
          </div>
          <div className='flex-initial'>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left'>
              About Me
            </h1>
          </div>
        </div>
        <div className='max-w-2xl mx-auto'>
          <div className='prose prose-lg dark:prose-dark max-w-none'>
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
              spend. I held a leadership role within Accenture where I led a
              team of over 100 people who digitally transformed a
              trillion-dollar mutual fund manager’s complete set of trading,
              settlement, portfolio accounting, fund performance & risk
              measurement systems. I helped launch the first Internet Bank
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
              different languages and technologies. I actually still miss my
              days as a programmer where I could focus on a single problem
              domain.
            </p>
            <h3>Where I’ve Worked</h3>
            <ul>
              <li>
                Chief Information Officer: Retirement Services Division,{' '}
                <a href='https://www.pacificlife.com/'>Pacific Life</a>
              </li>
              <li>
                Founder:{' '}
                <a href='https://veritedatascience.com/'>Verite Data Science</a>
              </li>
              <li>
                Chief Technology Officer:{' '}
                <a href='https://www.sbtpg.com/'>
                  Santa Barbara Tax Products Group
                </a>
              </li>
              <li>
                Global Chief Information Officer:{' '}
                <a href='https://www.allianzgi.com/'>
                  Allianz Global Investors
                </a>
              </li>
              <li>
                Associate Partner:{' '}
                <a href='https://www.accenture.com/us-en'>Accenture</a>
              </li>
            </ul>
            <h3>Community Service</h3>
            <ul>
              <li>
                Technology Committee Member,{' '}
                <a href='https://www.smhs.org/'>
                  Santa Margarita Catholic High School
                </a>
              </li>
              <li>
                Board Member,{' '}
                <a href='https://rmhcsc.org/'>
                  Ronald McDonald House, Los Angeles
                </a>
              </li>
            </ul>
            <h3>Example Open Source Contributions</h3>
            <ul>
              <li>
                <a href='https://github.com/dstroot/skeleton'>Skeleton</a>{' '}
                (maintainer)
              </li>
              <li>
                <a href='https://getbootstrap.com/'>Bootstrap</a> (contributor)
              </li>
              <li>
                <a href='https://kubernetes.io/'>Kubernetes</a> (contributor)
              </li>
              <li>
                <a href='https://helmetjs.github.io/'>Helmet</a> (contributor)
              </li>
            </ul>
            <div className='mt-8 mb-8 text-xl block'>
              <Link href='/archive'>
                <a>[ Post Archive ]</a>
              </Link>
              <a href='https://dstroot.github.io/readme/'> [ My Readme ]</a>
            </div>
            <p className='mt-10 leading-none'>
              <small>
                <em>
                  Dan holds a BA in Economics from the University of California
                  at Los Angeles where he graduated Magna Cum Laude and is a
                  member of Phi Beta Kappa.
                </em>
              </small>
            </p>
            <p className='mt-10 leading-none'>
              <small>
                <em>
                  Opinions expressed here are solely my own. They do not reflect
                  the views of my employer, nor are they endorsed by my
                  employer, or any organization with which I am affiliated.
                </em>
              </small>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
