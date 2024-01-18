import { useEffect, useState } from "react"
import WelcomeNavbar from "../components/WelcomeNavbar"
import useUser from "../hooks/useUser"

const Welcome = () => {

    const { login, isLogged, theme, handleTheme } = useUser()

    useEffect(() => {
        if (isLogged) window.location.href = '/home'
    }, [isLogged])

    //useEffect for the theme
    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark")
        } else {
            document.body.classList.remove("dark")
        }
    }, [theme])
    

    const handleSubmit = (e) => {
        e.preventDefault()
        //get the input
        const name = e.target.name.value
        //set the user using the hook
        login({ name })
    }

    const handleChangeTheme = () => {
        handleTheme()
    }

    return (
        <>
            <header>
                <WelcomeNavbar />
            </header>
            <div className='flex sm:flex-row flex-col mx-auto my-auto justify-center items-center sm:gap-6 gap-10 w-full h-full p-4'>
                <div className='flex flex-col sm:gap-6 gap-3 sm:w-1/2 w-full justify-center items-center h-full text-center'>
                    <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="320.000000pt" height="320.000000pt" viewBox="0 0 320.000000 320.000000"
                        preserveAspectRatio="xMidYMid meet"
                        className='w-1/4 h-auto fill-black dark:fill-white'
                    >

                        <g transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
                            stroke="none">
                            <path d="M132 3189 c-46 -13 -109 -80 -122 -128 -7 -27 -9 -484 -8 -1483 l3
-1443 24 -38 c13 -21 42 -50 64 -65 l41 -27 1466 0 1466 0 41 27 c22 15 51 44
64 65 l24 38 0 1466 0 1465 -27 41 c-15 22 -44 51 -65 64 l-38 24 -1450 2
c-897 1 -1463 -2 -1483 -8z m2668 -1289 l0 -900 -300 0 -300 0 0 -300 0 -300
-600 0 -600 0 0 300 0 300 -300 0 -300 0 0 900 0 900 1200 0 1200 0 0 -900z"/>
                            <path d="M1735 2080 c-164 -176 -301 -320 -304 -320 -3 0 -66 66 -140 146
l-135 145 -32 -33 c-17 -18 -75 -80 -128 -136 l-96 -104 194 -206 c106 -114
229 -244 272 -289 l79 -83 205 222 c113 122 305 328 427 459 l223 238 -131
141 c-72 77 -132 140 -133 140 -2 0 -137 -144 -301 -320z"/>
                        </g>
                    </svg>
                    <h1 className="text-6xl md:text-8xl bold dark:text-white">Taskflow</h1>
                </div>
                <div className="flex flex-col sm:w-1/2 w-full h-full justify-center items-center sm:gap-16 gap-6">
                    <div className="flex flex-col text-center gap-3 dark:text-white">
                        <h2 className="sm:text-5xl text-4xl"><strong>Welcome!</strong></h2>
                        <p className="sm:text-3xl text-xl">This is just the begining, let's grow <strong>together.</strong></p>
                    </div>
                    <form className="flex flex-col sm:w-3/5 w-full justify-center items-center gap-6" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Your name" name="name" required className="lg:text-5xl text-3xl text-center border-b-4 p-2 w-3/4 sm:w-full bg-inherit dark:text-white" />
                        <button type="submit" className="primary-btn w-full bg-black dark:bg-white dark:hover:bg-black dark:text-black dark:hover:text-white sm:text-4xl text-3xl sm:px-6 sm:py-8 rounded-full">Start</button>
                    </form>
                </div>
                {/* Button to change theme (dark or light), this button will have a position absolute to outcome for the main content */}
                <button className="primary-btn absolute bottom-0 m-4 p-2 rounded-full dark:bg-white dark:hover:bg-black dark:text-black dark:hover:text-white" onClick={() => handleChangeTheme()}>
                    Try {
                        theme === "dark" ? "Light" : "Dark"
                    } Mode
                </button>
            </div>
        </>
    )
}

export default Welcome