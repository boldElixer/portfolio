import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import 'font-awesome/css/font-awesome.min.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div className='navbar'>
            <div className='logo'>
                <img draggable="false" src="https://see.fontimg.com/api/renderfont4/519DV/eyJyIjoiZnMiLCJoIjo0MSwidyI6MTM3NSwiZnMiOjMwLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/IEFzaHdpbiBLb3JhZGUg/better-grade.png"></img>
            </div>
            <button className='mobile-toggle' onClick={handleClick}><i className={click ? "fa fa-times" : "fa fa-bars"}></i></button>
            <nav>
                <ul className={click ? "mobile" : "not-mobile"}>
                    <li>
                        <Link to="/portfolio" className='nav-item'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio/about" className='nav-item'>
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio/projects" className='nav-item'>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio/contact" className='nav-item'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
