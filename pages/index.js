import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sustainable Ada</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
          

          <div className="flex flex-col w-full lg:w-1/2 mx-auto my-5">
            <div className="mx-auto">
              <Image src="/cardanoSDGs.png" alt="sustainable wheel" width={500} height={500} />
            </div>
            <div>
              <p className="text-center text-2xl">The Stepping Stones to a Sustainable & Equal World</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-full bg-panorama bg-cover mb-10 justify-center">
            <div className="w-full lg:w-1/4 h-20 lg:h-96 lg:mx-10 mt-5 lg:my-20 bg-yellow-100 bg-opacity-50">
              div 1
            </div>
            <div className="w-full lg:w-1/4 h-20 lg:h-96 lg:mx-10 mt-5 lg:my-20 bg-yellow-100 bg-opacity-50">div 2</div>
            <div className="w-full lg:w-1/4 h-20 lg:h-96 lg:mx-10 mt-5 mb-5 lg:my-20 bg-yellow-100 bg-opacity-50">div 3</div>
          </div>

      </body>

    </div>
  )
}
