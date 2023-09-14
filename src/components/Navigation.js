// import React, { Component } from 'react'
// import "./Navbar.css"
// import { Link } from 'react-router-dom';
// import React from 'react'

import "./Navbar.css"
import { Link } from 'react-router-dom';



// export default class Navigation extends Component {
//     render() {

import React from 'react'

export default function Navigation() {
    return (
        <>
            <header>
                <nav>
                    <img src="coder1.png" className="img"alt="" />
                    <div className='heading' ><h2>Portfolio</h2></div>
                    <div className="Navbar">
                        <ul>
                            <li className="li1"> <Link to='/home' > Home </Link></li>
                            <li className="li2"> <Link to='/about' > AboutMe</Link></li>
                            <li  className="li3"> <Link to='/contact'> Contact</Link></li>

                        </ul>
                    </div >
                
                </nav>
            </header>
       



        </>
    );
}

