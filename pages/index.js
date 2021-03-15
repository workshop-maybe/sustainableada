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
            <Image src="/sustainableada.png" alt="sustainable wheel" width={20} height={20} />
            </div>

            
            <Image src="/cardanoSDGs.png" alt="sustainable wheel" width={500} height={500} />
            <div>
              <p className="text-center text-2xl">The Stepping Stones to a Sustainable & Equal World</p>
              
            </div>
          </div>

            <div className="flex flex-col lg:flex-row w-full bg-panorama bg-cover mb-10 justify-center">

            <div className="flex-auto w-full lg:w-1/4 h-20 lg:h-96 lg:mx-10 mt-5 lg:my-20 bg-gray-100 bg-opacity-50">

                <p className="text-center text-4xl mx-auto my-20" > Our Mission</p>
                <p className="text-center text-xl mx-auto my-20" >  - The Sustainable ADA Vision.</p> 
                
             </div>

              <div className="flex-auto w-full lg:w-1/4 h-20 lg:h-96 lg:mx-10 mt-5 lg:my-20 bg-gray-100 bg-opacity-50">
        
                <p className="text-center text-4xl mx-auto my-20" > SustainableADA News Room </p>
                <p className="overflow-y-auto text-center text-xl mx-auto my-20" >   - Stay up to date with new ways cardano is helping make the world a Sustainable place.</p> 
             </div>
          
             <div className="flex-auto w-full lg:w-1/4 h-20 lg:h-96 lg:mx-10 mt-5 mb-5 lg:my-20 bg-gray-100 bg-opacity-50">
              
                <p className="text-center text-4xl mx-auto my-20" > Cardanos Sustainable Connections</p> 
                <p className="overflow-scroll text-center text-xl mx-auto my-auto" >  - Pure Connections to Sustainability.</p> 
              
            </div>
          </div>

      </body>

    </div>
  )
}
