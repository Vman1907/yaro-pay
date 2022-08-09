/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/aria-role */
import { Link } from 'react-router-dom'

import logo from '../assets/Logo-Yaro.png'
import search from '../assets/search.svg'
import navMenu from '../assets/nav-menu.svg'
import '../styles/Menu.css'

const Menu = () => {

    window.addEventListener('scroll', (e) => {
        const nav = document.querySelector('.navbar');
        if (window.pageYOffset > 60) {
            nav.classList.add("add-shadow");
        } else {
            nav.classList.remove("add-shadow");
        }
    });

    return (
        <>
            <nav class="navbar navbar-expand-lg custom-bg fixed-top">
                <Link to='/home' class="navbar-brand" href="#">
                    <img style={{ width: '40px' }} src={logo} alt='' /> <span> Yaro </span></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><img src={navMenu} alt='' /></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to='/home' class="nav-link" href="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <a data-toggle="modal" data-target="#alertModal" class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a data-toggle="modal" data-target="#alertModal" class="nav-link" href="#">YAROVERSE</a>
                        </li>
                        <li class="nav-item active">
                            <Link to='/ambassador' class="nav-link" >Campus ambassador</Link>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link" href="https://tally.so/r/meqrbq">Early Access</a>
                        </li> */}
                        <li class="nav-item">
                            <a className='nav-link' href="https://play.google.com/store/apps/details?id=com.yaro.yaro_app">Get early access</a>
                        </li>
                        <li class="nav-item">
                            <a className='nav-link' href="https://play.google.com/store/apps/details?id=com.yaro.yaro_app">Download App</a>
                        </li>
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
                <div className='modal-dialog modal-sm' role='content'>
                    <div className='modal-content'>
                        <span>Coming Soon</span>
                        <span>Team Yaro is working 24/7 to bring the best of us</span>
                        <button className='btn btn-warning close' data-dismiss="modal">ok</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu