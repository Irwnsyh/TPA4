import React, { useState } from 'react'
import { SiDatabricks } from 'react-icons/si'
import {Link} from 'react-router-dom'
import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top' className='navbar'>
            <div className="container">
                <div className="logo">
                    <SiDatabricks className='icon' />
                    <h1>IS</h1>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'} style={{color: 'white'}}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link> </li>
                    <li><Link to='/project'>Project</Link></li>
                    <li><Link to='/article'>Article</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
