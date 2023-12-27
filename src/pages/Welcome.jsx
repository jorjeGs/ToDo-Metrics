import { Link } from "react-router-dom"
import WelcomeNavbar from "../components/WelcomeNavbar"

const Welcome = () => {

    return (
        <>
            <header>
                <WelcomeNavbar />
            </header>
            <div className='flex sm:flex-row flex-col mx-auto my-auto justify-center items-center sm:gap-6 gap-10 w-full h-full p-4'>
                <div className='flex flex-col sm:gap-6 gap-3 sm:w-1/2 w-full justify-center items-center h-full text-center'>
                    <img src='/todo-logo.svg' alt='logo' className='w-1/4' />
                    <h1 className="text-5xl sm:text-8xl bold">ToDo MetriXs</h1>
                </div>
                <div className="flex flex-col sm:w-1/2 w-full h-full justify-center items-center sm:gap-16 gap-6">
                    <div className="flex flex-col text-center gap-3">
                        <h2 className="sm:text-5xl text-4xl"><strong>Welcome!</strong></h2>
                        <p className="sm:text-3xl text-xl">This is just the begining, let's grow <strong>together.</strong></p>
                    </div>
                    <Link to='/home' className="w-3/5">
                        <button className="primary-btn sm:text-6xl text-3xl w-full sm:px-6 sm:py-8 rounded-full ">Start</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Welcome