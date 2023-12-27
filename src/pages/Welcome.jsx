import { Link } from "react-router-dom"
import Home from "./Home"

const Welcome = () => {

    return (
        <>
            <div className='flex sm:flex-row flex-col mx-auto my-auto justify-center items-center sm:gap-6 gap-10 w-full h-full p-4'>
                <div className='flex flex-col sm:gap-6 gap-3 sm:w-1/2 w-full justify-center items-center text-center'>
                    <h1 className="text-4xl sm:text-8xl bold">ToDo MetriXs</h1>
                    <h2><strong>Welcome!</strong></h2>
                    <p>This is just the begining, let's grow <strong>together.</strong></p>
                </div>
                <div className="flex flex-col sm:w-1/2 w-full justify-center items-center">
                    <Link to='/home' className="w-3/5">
                        <button className="primary-btn sm:text-6xl text-3xl w-full sm:px-6 sm:py-8 rounded-full ">Start</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Welcome