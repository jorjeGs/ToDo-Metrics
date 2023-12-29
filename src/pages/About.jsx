import './About.css'
import WelcomeNavbar from "../components/WelcomeNavbar"

const About = () => {

    return (
        <>
            <header>
                <WelcomeNavbar />
            </header>
            <div className='h-screen'>
                <div className="relative bg-white md:h-3/4 h-1/2">
                    <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
                        <div className='flex flex-col justify-center items-center mt-3'>
                            <h1 className='text-4xl text-black font-bold'>About</h1>
                            <h2 className='text-2xl text-black font-bold'>Welcome to the About page</h2>
                        </div>
                        <div className='flex flex-col justify-end h-full overflow-hidden items-center'>
                            <img className='w-1/2' src='/perrito.png' alt='about' />
                        </div>
                    </div>
                    <div className="custom-shape-divider-bottom-1703831514">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </div>
                <div className="relative bg-[#c2c2c2] md:h-3/4 h-1/2">
                    <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
                        <div className='flex flex-col justify-center items-center mt-3'>
                            <h1 className='text-4xl text-black font-bold'>Contact</h1>
                            <h2 className='text-2xl text-black font-bold'>Coming Soon...</h2>
                        </div>
                    </div>
                    <div className="custom-shape-divider-bottom-1703831514">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About