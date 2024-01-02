import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import { LuMenuSquare } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { GrPowerShutdown } from "react-icons/gr";
import useUser from '../hooks/useUser'
import './Navbar.css'

const Navbar = () => {

    const { logout } = useUser()

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

    return (
        <>
            <nav className="menu">
                <ul className='sidebar w-full sm:w-64'>
                    <li onClick={hideSidebar}>
                        <a><MdOutlineClose className='text-3xl' /></a>
                    </li>
                    <li onClick={hideSidebar}>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li onClick={hideSidebar}>
                        <Link to='/home/tables'>Tables</Link>
                    </li>
                    {/* <li onClick={hideSidebar}>
                        <Link to='/home/metrics'>Metrics</Link>
                    </li> */}
                    <li onClick={handleShutDown}>
                        <Link to='/'><GrPowerShutdown className='text-3xl text-red-500' /></Link>
                    </li>
                    <li onClick={hideSidebar}>
                        <a href='https://github.com/jorjeGs/ToDo-Metrics' target="_blank" rel="noopener noreferrer"><FaGithub className='text-3xl' /></a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/home'><img src='/todo-logo.svg' className='w-8' alt='logo' /></Link>
                    </li> 
                    <li className='hideOnMobile'>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li className='hideOnMobile'>
                        <Link to='/home/tables'>Tables</Link>
                    </li>
                    {/* <li className='hideOnMobile'>
                        <Link to='/home/metrics'>Metrics</Link>
                    </li> */}
                    <li className='hideOnMobile'>
                        <Link to='/'><GrPowerShutdown onClick={handleShutDown} className='text-3xl text-red-500' /></Link>
                    </li>
                    <li className='hideOnMobile'>
                        <a href='https://github.com/jorjeGs/ToDo-Metrics' target="_blank" rel="noopener noreferrer"><FaGithub className='text-2xl' /></a>
                    </li >
                    <li onClick={showSidebar} className='menu-icon'>
                        <a><LuMenuSquare className='text-3xl' /></a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar