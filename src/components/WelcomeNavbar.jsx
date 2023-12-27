import { Link } from 'react-router-dom';
import './Navbar.css'

const WelcomeNavbar = () => {

    return (
        <>
            <nav className="menu">
                <ul>
                    <li>
                        <Link to='/'><img src='/todo-logo.svg' alt='logo' className='w-8' /></Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li >
                </ul>
            </nav>
        </>
    )
}

export default WelcomeNavbar