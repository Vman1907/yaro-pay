/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/aria-role */
// import DeviceDetector from "device-detector-js";

import { Link } from 'react-router-dom'

import logo from '../assets/Logo-Yaro.png'
import search from '../assets/search.svg'
import navMenu from '../assets/nav-menu.svg'
import bubble from '../assets/bubble.png'

import '../styles/Menu.css'

import { useEffect, useState } from 'react'
const Menu = ({ page }) => {
    window.addEventListener('scroll', (e) => {
        const nav = document.querySelector('.navbar');
        if (window.pageYOffset > 60) {
            nav.classList.add("add-shadow");
        } else {
            nav.classList.remove("add-shadow");
        }
    });
    const [deviceType, setDeviceType] = useState("");

    useEffect(() => {
        if (
            /Android|webOS|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
                navigator.userAgent
            )
        ) {
            setDeviceType("Android");
        } else if (
            /iPhone|iPad|iPod/i.test(
                navigator.userAgent
            )
        ) {
            setDeviceType("iOS");
        }
        else if (navigator.userAgent.indexOf('Mac OS X') != -1) {
            setDeviceType("iOS")
        } else {
            setDeviceType('Desktop')
        }
    }, []);

    const [useremail, setUsermail] = useState('')
    const [sent, setSent] = useState(true)
    const [message, setMessage] = useState(true)

    const handleSubmit = e => {

        setSent(false)

        e.preventDefault();

        console.log(useremail)

        fetch('https://api.yaropay.com/storemail', {
            method: 'POST',
            mode: 'no-cors',
            headers: { "Content-Type": "application/json", 'Accept': 'application/json', },
            body: JSON.stringify({ email: useremail })
        })
            .then(() => {
                console.log('successfully sent')
                setSent(true)
                setMessage(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg custom-bg fixed-top">
                <a to='/home' className="navbar-brand" href="https://yaropay.com/">
                    <img style={{ width: '40px' }} src={logo} alt='' /> <span> YARO </span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><img src={navMenu} alt='' /></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to='/home' className={page === 'home' ? "nav-link active" : "nav-link"} href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'./about'} className={page === 'about' ? "nav-link active" : "nav-link"} href="#">About Us</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/ambassador' className={page === 'campus' ? "nav-link active" : "nav-link"} >Campus ambassador</Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="https://tally.so/r/meqrbq">Early Access</a>
                        </li> */}
                        {/* <li className="nav-item">
                            <a classNameName='nav-link' href="https://play.google.com/store/apps/details?id=com.yaro.yaro_app">Get early access</a>
                        </li> */}
                        {/*                         
                        {deviceType === 'iOS' ?

                            <li className="nav-item">
                                <a className='nav-link' data-toggle="modal" data-target="#alertModal">Get early access</a>
                            </li>
                            :
                            <li className="nav-item">
                                <a className='nav-link' href="https://play.google.com/store/apps/details?id=com.yaro.yaro_app">Get early access</a>
                            </li>
                        } */}

                        {deviceType === 'iOS'
                            ?
                            <li className="nav-item">
                                <a className='nav-link download' data-toggle="modal" data-target="#alertModal">Download App</a>
                            </li>
                            :
                            <li className="nav-item">
                                <a className='nav-link download' href="https://play.google.com/store/apps/details?id=com.yaro.yaro_app">Download App</a>
                            </li>
                        }
                        {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li> */}
                    </ul>
                    <img className='search' src={search} alt='' />
                </div>
            </nav>
            <div id='alertModal' className='modal fade' role='dialog'>
                <div className='modal-dialog modal-md' role='content'>
                    <div className='modal-content'>
                        {message ?
                            <>
                                <div>
                                    <img src={bubble} alt='' />
                                    <span>Get notified when we launch our App on iOS</span>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <input type='email' placeholder='Your Email ID' value={useremail} onChange={(e) => { setUsermail(e.target.value) }} />
                                    <div>
                                        <button className='' data-dismiss="modal">Close</button>
                                        {
                                            sent ?
                                                <button className={sent ? 'enabled' : 'disabled'} type='submit'>Subscribe</button>
                                                :
                                                <button className={sent ? 'enabled' : 'disabled'} type='submit' disabled='false'>Sending...</button>
                                        }
                                    </div>
                                </form>
                            </>
                            :
                            <div className='recorded'>
                                <span>Your email has been recorded we'll let you know when we are on Apple Appstore</span>
                                <button className='' data-dismiss="modal">Close</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div id='myModal' className='modal fade' role='dialog'>
                <div className='modal-dialog modal-sm' role='content'>
                    <div className='modal-content'>
                        <span>Coming soon!</span>
                        <span>Team Yaro is working 24/7 to bring the best of us</span>
                        <button className='btn' data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu