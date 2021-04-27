import { ReactElement } from 'react'

import Head from 'next/head'
import Image from 'next/image'

// Components
import { Navbar } from '@components/core'
import { Button } from '@components/ui'
import { Like } from '@icons/index'

export const Home = (): ReactElement => (
  <div className="container mx-auto px-2 text-center">
    fix
    <Navbar />
    <Like />
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <h2>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h2>
      <h3>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h3>

      <p className="description text">
        Get started by editing <code>pages/index.tsx</code>
      </p>

      <button
        onClick={() => {
          window.alert('With typescript and Jest')
        }}
      >
        Test Button
      </button>

      <div className="grid">
        <a href="https://nextjs.org/docs" className="card">
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className="card">
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className="card"
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className="card"
        >
          <h3>Deploy &rarr;</h3>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </main>
    <Button />
    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <Image src="/vercel.svg" alt="Vercel Logo" height={'32'} width={'64'} />
      </a>
    </footer>
  </div>
)

export default Home
