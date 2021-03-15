import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row w-full lg:p-6 bg-white-700 text-white lg:z-40"> 
         
            <Link href='/'>
              <a className="lg:inline-flex lg:w-auto md:px-5 text-center">
                Footer Link 1
              </a>
            </Link>
          
            <Link href='/'>
              <a className="lg:inline-flex lg:w-auto md:px-5 text-center">
                Footer Link 1
              </a>
            </Link>

            <Link href='/'>
              <a className="lg:inline-flex lg:w-auto md:px-5 text-center">
                Footer Link 3
              </a>
            </Link>
             
          </footer>
    )
}
