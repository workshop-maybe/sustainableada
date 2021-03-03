import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Site Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
          <div className="flex grid grid-cols-1 lg:grid-cols-2 mx-auto w-full xl:w-5/6 m-5">
            <h1>This template will get you started with Next.js and Tailwind CSS</h1>
          </div>
      </body>

    </div>
  )
}
