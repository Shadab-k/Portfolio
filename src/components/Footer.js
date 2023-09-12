import { Link } from "react-router-dom"
import "./Footer.css"
import React from 'react'

export default function Footer() {
        return (
            <div>

                <div>
                    <div className="footer">
                        <h2 className='fheading'> For more Details</h2>
                        <br />
                        <ul>
                            <li className='fhome'><img className='git-icon' src="git-icon.png" alt="" /><Link to='https://github.com/Shadab-k'> GitHub </Link></li>
                            <li className='fabout'><img className='insta-image' src="insta-image.jpg" alt="" /><Link to='https://www.instagram.com/accounts/login/'> Instagram </Link></li>
                            <li className='fcontact'><img className='gmail-img' src="gmail-img.png" alt="" /><Link to='https://www.google.com/account/about/'> Gmail</Link></li>
                            <li className='fprojects'><img className='feed-img' src="linkedin-img.png" alt="" /><Link to='https://www.linkedin.com/in/mohd-shadab-khan-011992216'> LinkedIn</Link></li>
                        </ul>
                        <p className='para'>Copyright | All right Reserved &copy; | 2023</p>
                    </div>
                </div>
            </div>

        )
    }


