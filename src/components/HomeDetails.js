import React from 'react'
import Typed from 'react-typed'
import "./Home.css"
// import { Link } from 'react-router-dom';
import resume from '../../src/resume/Resume_23.pdf'



export default function HomeDetails() {
  return (
            <>

                <div>
                    <div className='container'>
                      
                        <div className="below-nav">
                            <h1 className='left'> Hi, My name is Mohd Shadab Khan<div> and I am a skilled in</div><span className='typed'> {<Typed strings={['React Hooks', 'RestFull APIs', 'developing user-interfaces', 'React.js', 'Redux Tools', 'Javascript', 'Typescript', 'Html and CSS', 'Front-End Development']} typeSpeed={60} />}</span><div></div>
                            <a href={resume} download="Shadab Resume">
                            <button className='btn' >
                                Download My Resume
                            </button>
                            </a>
                            </h1><div>
                            </div>
                            {/* <Typed
                    strings={['Here you can find anything jkschhbuiwhfbcrhfbrfibherfbeibvrbruiebriebfuieber']}
                    typeSpeed={60}
                /> */}

                            <img className='img-home' src="img2.webp" alt="" />
                        </div>
                    </div>

                    <hr />
                </div>
            </>
        )

    }

