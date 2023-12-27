import { Link } from 'react-router-dom';
import { LuMenuSquare } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import './Navbar.css'

const Navbar = () => {

    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }

    const hideSidebar = () => {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    }

    return (
        <>
            <nav className="menu">
                <ul className='sidebar w-full sm:w-64'>
                    <li onClick={hideSidebar}>
                        <a><MdOutlineClose className='text-3xl' /></a>
                    </li>
                    <li>
                        <Link to='/'><p className='text-red-500'>Logout</p></Link>
                    </li>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/home/tables'>Tables</Link>
                    </li>
                    <li>
                        <Link to='/home/metrics'>Metrixs</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/'><p className='text-red-500'>Logout</p></Link>
                    </li>
                    <li className='hideOnMobile'>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li className='hideOnMobile'>
                        <Link to='/home/tables'>Tables</Link>
                    </li>
                    <li className='hideOnMobile'>
                        <Link to='/home/metrics'>Metrixs</Link>
                    </li>
                    <li className='hideOnMobile'>
                        <Link to='/about'>About</Link>
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