import { Link } from 'react-router-dom'

import '../styles/Footer.css'

import logo from '../assets/Logo.png'
import email from '../assets/envelope.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import facebook from '../assets/facebook.svg'
import { useState } from 'react'

const Footer = () => {

    const [useremail, setUsermail] = useState('')

    const handleSubmit = e => {

        e.preventDefault();

        console.log(useremail)

        fetch('https://gorest.co.in/public/v2/users', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(useremail)
        })
            .then(() => {
                console.log('successfully sent')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <div className='row footer justify-content-between'>
                <div className='col-lg-3 col-md-8 col-sm-12 logo-content'>
                    <div>
                        <span>
                            <img className='logo' src={logo} alt='' />
                            YARO
                        </span>
                        <span>India's First Investing And Banking App For Teens</span>
                    </div>
                    <span className='copyright-logo'>© 2022 by YARO</span>
                </div>
                <div className='col-lg-8 col-md-8 col-sm-12 content'>
                    <div className='newsletter'>
                        <form onSubmit={handleSubmit}>
                            <span>
                                Subscribe Newsletter
                            </span>
                            <input type='email' placeholder='Your Email ID' value={useremail} onChange={e => setUsermail(e.target.value)} />
                            <button type='submit'>Subscribe</button>
                        </form>
                    </div>
                    <div className='content-inner'>
                        <div className='services'>
                            <span>Services</span>
                            <span><Link to='/' className='footer-links' data-toggle="modal" data-target="#alertModal" style={{ cursor: 'pointer' }}>About</Link></span>
                            <span><Link to='/' className='footer-links' data-toggle="modal" data-target="#alertModal" style={{ cursor: 'pointer' }}>Products</Link></span>
                            <span><Link to='/' className='footer-links' data-toggle="modal" data-target="#alertModal" style={{ cursor: 'pointer' }}>Contact Us</Link></span>
                            <span><Link to='/' className='footer-links' data-toggle="modal" data-target="#alertModal" style={{ cursor: 'pointer' }}>Blog</Link></span>
                        </div>
                        <div className='resources'>
                            <span>Resources</span>
                            <span><Link to='/' className='footer-links' data-toggle="modal" data-target="#alertModal" style={{ cursor: 'pointer' }}>App</Link></span>
                            <span><Link to='/' className='footer-links' data-toggle="modal" data-target="#alertModal" style={{ cursor: 'pointer' }}>Developer</Link></span>
                            <span><Link to='/' className='footer-links' data-toggle="modal" data-target="#alertModal" style={{ cursor: 'pointer' }}>Integration</Link></span>
                        </div>
                        <div className='privacy'>
                            <span>Policies</span>
                            <span><Link className='footer-links' to='/policies' style={{ cursor: 'pointer' }}>Privacy Policies</Link></span>
                            <span><Link className='footer-links' style={{ cursor: 'pointer' }} to='/terms'>Terms</Link></span>
                            <span><Link to='/' className='footer-links' data-toggle="modal" data-target="#alertModal" style={{ cursor: 'pointer' }}>FAQ</Link></span>
                        </div>
                        <div className='contact'>
                            <span>Contact</span>
                            <span><img src={email} alt='' /><a href="mailto:info@yaropay.com" target="_self">info@yaropay.com</a></span>
                            <span>
                                <a className='footer-links' href='https://www.instagram.com/yaropay.official/'><img src={instagram} alt='' /></a>
                                <a className='footer-links' href='https://www.facebook.com/yaropayofficial'><img src={facebook} alt='' /></a>
                                <a className='footer-links' href='https://twitter.com/tech_yaro'><img src={twitter} alt='' /></a>
                                <a className='footer-links' href='https://www.linkedin.com/company/yaropay/'><img src={linkedin} alt='' /></a>
                            </span>
                        </div>
                    </div>
                    <div className='copyright'>© 2022 by YARO</div>
                </div>
            </div>
        </>
    )
}

export default Footer