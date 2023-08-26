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
                        <img src="coder1.png" width="60px" height="50px" alt="" />
                        <div className='heading' ><h2>Portfolio</h2></div>
                        <div className="Navbar">
                            <ul>
                                <li> <Link to='/home' > Home </Link></li>
                                <li> <Link to='/about' > About Me</Link></li>
                                <li> <Link to='/contact'> Contact</Link></li>
                                
                            </ul>
                        </div >
                    </nav>
                </header>
             


            </>
        );
    }

