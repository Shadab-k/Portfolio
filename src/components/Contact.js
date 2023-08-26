import React, { useState } from 'react';
// import { useState } from "react"
// import React, from 'react'

import "./Contact.css"
export default function Contact() {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        url: "",
        country: "",
        email: "",
        subject: "" //desciption
    }
    );

    let name, value
    const getUserdata = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value })//Spread Operator
    }

    const postData = async (e) => {
        e.preventDefault();

        const { firstname, lastname, url, country, email, subject } = user;

        if ((firstname && lastname && url && country && email && subject)) {



            const res = await fetch('https://react-login-99f20-default-rtdb.firebaseio.com/react-login.json',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstname,
                        lastname,
                        url,
                        country,
                        email,
                        subject //desciption
                    })
                }
            )
            if (res) {
                setUser({
                    firstname: "",
                    lastname: "",
                    url: "",
                    country: "",
                    email: "",
                    subject: ""

                })
                alert(" Your Data has been Stored to the User Successfully ...")
            }
        }
        else {
            alert("Please fill the all credentials properly")

        }
    }

        //     const nameValidation = ()=>{
        //        let text=newText
        //         if(text===String){
        //             setUser(newText)
        //         }
        //         else{
        //             alert("Invalid Credentials")
        //         }

        //     }


        // }
        // const [text, newText]= useState()



        // // import Footer from './Footer'

        // export default class Contact extends Component {
        //     render() {
        return (
            <>
                <hr />
                <div className="container-contact">
                    <div className="contact">

                        <img className='img-con' src="signup-img.jpg" alt="" />
                        <div className="c1">
                            <br />
                            <form method='POST'>
                                <h1 className='h1class'>Contact Me </h1><br /><br />
                                <label htmlFor="fname" className='word1'>First Name</label>
                                <input type="text" id="fname"
                                    name="firstname" placeholder="Your name.."
                                    value={user.firstname} onChange={getUserdata}
                                    autoComplete='off' required
                                // {nameValidation}
                                />

                                <label htmlFor="lname" className='word2'>Last Name</label>
                                <input type="text"id="lname" name="lastname" placeholder="Your last name.."
                                    value={user.lastname} onChange={getUserdata} autoComplete='off'
                                    required />

                                <label htmlFor="lname" className='word4'>LinkedIn URL</label>
                                <input type="text" id="placeholder" name='url' placeholder="Url ..."
                                    value={user.url}
                                    onChange={getUserdata} autoComplete='off'
                                    required
                                // {...nameValidation}
                                />

                                <label htmlFor="country"
                                    className='word3'>Country</label>
                                <select id="country" name="country"
                                    value={user.country}
                                    onChange={getUserdata}   >
                                    <option value="australia">...</option>
                                    <option value="India">India</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">Australia</option>
                                    <option value="dubai">Dubai</option>
                                </select>

                                <label htmlFor="email" className='word5'>Email</label>
                                <input type="email" id="lname" name='email' placeholder="email123@email.com"
                                    value={user.email} autoComplete='off'
                                    onChange={getUserdata} required />

                                <label htmlFor="subject" className='word4'>Project Description</label>
                                <textarea id="subject" name="subject" placeholder="Write something.."
                                    value={user.subject}
                                    onChange={getUserdata} autoComplete='off'
                                    // {...nameValidation}
                                    required style={{ height: '200px' }}></textarea>

                                <input type="submit" value="Submit" onClick={postData} />

                            </form>

                        </div>
                    </div>

                </div >

                < hr />


            </>
        )

    }
