import React from 'react'
import './CSS/Contact.css'
import { useState } from "react";

const Contact = () => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        phone: '',
        address: '',
        feedback: ''
    })

    function submitInfo() {
        console.log(userInfo)
    }

    return (
        <div className='contact'>
            <h1>Contact Us</h1>
            <div className="contact-inner">
                <div className="p1">
                    <br /><p><b>Contact Us: </b>We value your feedback, inquiries, and suggestions at LIBAAS. Our dedicated customer support team is here to assist you in every step of your shopping experience. Whether you have questions about our products, need help with sizing, or want to provide feedback on your recent purchase, we're just a message away. Your satisfaction is our priority, and we are committed to ensuring you have a seamless and enjoyable experience with us. Feel free to reach out via the contact form below, and we'll get back to you promptly.</p>
                </div>
                <div className="p2">
                    <br /><p><b>Feedback: </b>Your opinions matter to us! We appreciate your valuable insights and strive to continuously improve our services. If you've recently shopped with us, please take a moment to share your thoughts on your experience. Your feedback helps us understand what we're doing well and where we can make enhancements. We welcome both positive comments and constructive criticism as we work towards providing you with the best possible shopping journey. Thank you for being a part of the LIBAAS community.</p>
                </div>
            </div>
            <div className="form">
                <form>
                    <div className="row">
                        <div className="column">
                            <input className='name' value={userInfo.username} onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })} type="text" id='name' placeholder='Full Name' />
                            <input className='phone' value={userInfo.phone} onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })} type="text" id='phone' placeholder='Phone' /><br /><br />
                        </div>
                        <div className="column">
                            <input className='address' value={userInfo.address} onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })} type="text" id='address' placeholder='Address' />
                            <input className='email'  value={userInfo.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} type="email" id='email' placeholder='Email' /><br /><br />
                        </div>
                        <div className="column">
                            <input className='df' value={userInfo.feedback} onChange={(e) => setUserInfo({ ...userInfo, feedback: e.target.value })} type="text" id='df' placeholder='Description / Feedback' />
                        </div>
                    </div>
                    <br /><button onClick={submitInfo} >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact