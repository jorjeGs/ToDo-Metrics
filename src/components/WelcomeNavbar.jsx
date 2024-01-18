import { Link } from 'react-router-dom';
import './Navbar.css'

const WelcomeNavbar = () => {

    return (
        <>
            <nav className="menu">
                <ul>
                    <li>
                        <Link to='/' className='hover:bg-gray-200 dark:hover:bg-gray-600' >
                            <svg 
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
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' className='hover:bg-gray-200 dark:hover:bg-gray-500' ><p className='dark:text-white'>About</p></Link>
                    </li >
                </ul>
            </nav>
        </>
    )
}

export default WelcomeNavbar