import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1 className='text-green-100'>
          Welcome to Next Js
        </h1>
      </main>
    </div>
  )
}

export default Home
