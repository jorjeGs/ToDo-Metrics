import { useEffect } from "react"
import WelcomeNavbar from "../components/WelcomeNavbar"
import useUser from "../hooks/useUser"

const Welcome = () => {

    const { login, isLogged } = useUser()

    useEffect(() => {
        if(isLogged) window.location.href = '/home'
    }, [isLogged])

    const handleSubmit = (e) => {
        e.preventDefault()
        //get the input
        const name = e.target.name.value
        //set the user using the hook
        login({name})
    }

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
                    <form className="flex flex-col sm:w-3/5 w-full justify-center items-center gap-6" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Your name" name="name" required className="lg:text-5xl text-3xl text-center border-b-4 p-2 w-3/4 sm:w-full" />
                        <button type="submit" className="primary-btn w-full bg-black sm:text-4xl text-3xl sm:px-6 sm:py-8 rounded-full">Start</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Welcome