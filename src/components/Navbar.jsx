import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { LuMenuSquare } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { GrPowerShutdown } from "react-icons/gr";
import useUser from '../hooks/useUser'
import './Navbar.css'

const Navbar = () => {

    const { logout, theme } = useUser()

    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }

    const hideSidebar = () => {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    }

    const handleShutDown = () => {
        //hide the sidebar
        hideSidebar()
        //remove the user from the local storage
        localStorage.removeItem('user')
        localStorage.removeItem('tables')
        localStorage.removeItem('tasks')
        //using the hook to logout
        logout()
    }

    //useEffect for theme
    useEffect(() => {
        if (theme === "dark") {
            document.querySelector('html').classList.add("dark")
        } else {
            document.querySelector('html').classList.remove("dark")
        }
    }, [theme])

    return (
        <>
            <nav className="menu dark:text-white">
                <ul className='sidebar w-full sm:w-64'>
                    <li onClick={hideSidebar}>
                        <a className='hover:bg-gray-200 dark:hover:bg-gray-600'><MdOutlineClose className='text-3xl' /></a>
                    </li>
                    <li onClick={hideSidebar}>
                        <Link to='/home' className='hover:bg-gray-200 dark:hover:bg-gray-600'>Home</Link>
                    </li>
                    <li onClick={hideSidebar}>
                        <Link to='/home/tables' className='hover:bg-gray-200 dark:hover:bg-gray-600'>Tables</Link>
                    </li>
                    {/* <li onClick={hideSidebar}>
                        <Link to='/home/metrics'>Metrics</Link>
                    </li> */}
                    <li onClick={handleShutDown}>
                        <Link to='/' className='hover:bg-gray-200 dark:hover:bg-gray-600'><GrPowerShutdown className='text-3xl text-red-500' /></Link>
                    </li>
                    <li onClick={hideSidebar}>
                        <a href='https://github.com/jorjeGs/ToDo-Metrics' target="_blank" rel="noopener noreferrer" className='hover:bg-gray-200 dark:hover:bg-gray-600'><FaGithub className='text-3xl' /></a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/home' className='hover:bg-gray-200 dark:hover:bg-gray-600'><svg 
                                version="1.0" 
                                xmlns="http://www.w3.org/2000/svg"
                                width="320.000000pt" height="320.000000pt" viewBox="0 0 320.000000 320.000000"
                                preserveAspectRatio="xMidYMid meet"
                                className='w-8 h-auto fill-black dark:fill-white'
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
                            </svg></Link>
                    </li>
                    <li className='hideOnMobile'>
                        <Link to='/home' className='hover:bg-gray-200 dark:hover:bg-gray-600'>Home</Link>
                    </li>
                    <li className='hideOnMobile'>
                        <Link to='/home/tables' className='hover:bg-gray-200 dark:hover:bg-gray-600'>Tables</Link>
                    </li>
                    {/* <li className='hideOnMobile'>
                        <Link to='/home/metrics'>Metrics</Link>
                    </li> */}
                    <li className='hideOnMobile'>
                        <Link to='/' className='hover:bg-gray-200 dark:hover:bg-gray-600'><GrPowerShutdown onClick={handleShutDown} className='text-3xl text-red-500' /></Link>
                    </li>
                    <li className='hideOnMobile'>
                        <a href='https://github.com/jorjeGs/ToDo-Metrics' target="_blank" rel="noopener noreferrer" className='hover:bg-gray-200 dark:hover:bg-gray-600'><FaGithub className='text-2xl' /></a>
                    </li >
                    <li onClick={showSidebar} className='menu-icon'>
                        <a className='hover:bg-gray-200 dark:hover:bg-gray-600'><LuMenuSquare className='text-3xl' /></a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar