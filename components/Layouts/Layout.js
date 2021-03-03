import Nav from '../Nav'
import Footer from '../Footer'

export default function Layout({ children }) {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <Nav />
            <main className='flex-grow w-full mx-auto pt-16'>
                {children}
            </main>
            <Footer />    
        </div>
    )
}
