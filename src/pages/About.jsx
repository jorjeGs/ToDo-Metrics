import './About.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import WelcomeNavbar from "../components/WelcomeNavbar"

const About = () => {

    const images = [
        '/html.png',
        '/css.png',
        '/js.png',
        '/react.png',
        '/tailwind.png',
        '/github.png',
    ]

    return (
        <>
            <header>
                <WelcomeNavbar />
            </header>
            <div className='h-screen'>
                <div id='first' className="relative bg-white h-1/2">
                    <h2 className='text-xl text-gray-400 text-center'>About</h2>
                    <div className='flex flex-col-reverse md:flex-row justify-center sm:gap-0 gap-3 p-2'>
                        <div className='flex flex-col md:w-1/2 justify-center text-center h-auto mt-3 gap-2'>
                            <h1 className='text-6xl text-black font-bold'>Hi!</h1>
                            <h2 className='sm:text-2xl text-lg text-balance text-center text-black'>This app was developed as a portfolio project for my web developer resume.</h2>
                        </div>
                        <div className='flex flex-col md:w-1/2 justify-end h-full items-center'>
                            <img className='md:w-1/2 w-1/3 mx-auto min-w-40 max-w-52 md:max-w-72 rounded-full border-8 border-gray-300 transform transition duration-300 hover:scale-110' src='/user.png' alt='Jorge Garcia' />
                        </div>
                    </div>
                    <div className="custom-shape-divider-bottom-1703831514 pointer-events-none">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="fill-gray-200"></path>
                        </svg>
                    </div>
                </div>
                <div className="relative bg-gray-200 h-auto min-h-1/2 p-3">
                    <div className='flex flex-col justify-center items-center gap-6'>
                        <div className='flex flex-col justify-center items-center text-center mt-4 md:gap-6 gap-4'>
                            <img className='md:w-1/6 w-3/12 mx-auto' src='/todo-logo.svg' alt='Taskflow' />
                            <h1 className='text-4xl text-black font-bold'>Taskflow</h1>
                            <h2 className='sm:text-xl text-md text-balance text-black'><strong className='text-blue-600'>Taskflow</strong> was made thinking as a Trello-based app with <strong>no registered account need</strong>.</h2>
                            <h2 className='sm:text-xl text-md text-balance text-black'>Organize your daily tasks with your progress <strong>locally storage</strong> in your browser.</h2>
                        </div>
                        <div className='flex flex-wrap justify-center items-center gap-6 mb-9'>
                            <img className='md:max-w-24 max-w-12' src='/html.png' alt='HTML' />
                            <img className='md:max-w-24 max-w-12' src='/css.png' alt='CSS' />
                            <img className='md:max-w-24 max-w-12' src='/js.png' alt='JavaScript' />
                            <img className='md:max-w-24 max-w-12' src='/react.png' alt='React' />
                            <img className='md:max-w-24 max-w-12' src='/tailwind.png' alt='Tailwind' />
                            <img className='md:max-w-24 max-w-12' src='/github.png' alt='GitHub' />
                        </div>
                    </div>
                </div>
                <div className="relative bg-[#004B87] h-auto">
                    <div className='flex flex-col md:flex-row justify-center items-center gap-6 p-2'>
                        <div className='flex flex-col justify-center items-center text-wrap text-center mt-4 gap-6 mb-6'>
                            <p className='text-2xl text-white'>Currently looking for job!</p>
                            <a href='https://jorgegarcia-portfolio.onrender.com' rel='noopener noreferrer' target='_blank' type='button' className='primary-btn bg-white hover:bg-black hover:text-white text-[#004B87]'>Web Portfolio</a>
                            <div className='flex flex-wrap w-full justify-center items-center gap-6 mb-6'>
                                <a className='w-auto' href='https://www.linkedin.com/in/jorge-garcia-serrano-dev/' rel='noopener noreferrer' target='_blank'><FaLinkedin className='text-4xl w-auto text-white transition transform duration-200 hover:scale-110' /></a>
                                <a className='w-auto' href='https://github.com/jorjeGs' rel='noopener noreferrer' target='_blank'><FaGithub className='text-4xl w-auto text-white  transition transform duration-200 hover:scale-110' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About