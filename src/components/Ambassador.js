import pic1 from '../assets/ambassador-pic-1.png'
import frame from '../assets/Frame.svg'
import frame2 from '../assets/Frame1.svg'
import frame1 from '../assets/Frame2.svg'
import reward from '../assets/reward.png'
import gift from '../assets/gift.png'
import dollar from '../assets/dollar.png'
import arrow from '../assets/Vector 12.svg'

import '../styles/Ambassador.css'
import { useEffect } from 'react'

const Ambassador = ({ page, setPage }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
        setPage('campus')
    })


    return (
        <div className="ambassador-wrapper">
            <div className='intro row'>
                <div className='col-lg-5 col-md-6 col-sm-12'>
                    <img className='floating-img-1' src={frame} alt='' />
                    <img className='floating-img-2' src={frame2} alt='' />
                    <div className='content'>
                        <span>You might be the <span style={{ color: '#684EED' }}>Perfect Yaro</span></span>
                        <span>Ambassador</span>
                    </div>
                    <button className='custom-btn' ><a href='https://forms.gle/X2PF3zsQvAgerQzs9'>Join Yaro Now</a></button>
                    <img className='floating-img-3' src={frame1} alt='' />
                </div>
                <div className='col-lg-5 col-md-4 col-sm-12'>
                    <img src={pic1} alt='' />
                </div>
            </div >
            <div className='info'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8 col-md-7 col-sm-12 header'>
                        <span>Earn unlimited prizes</span>
                        <span>The Yaro App is an investment app for teens that rewards</span>
                        <span>you with points every time you make a successful</span>
                        <span>referal.</span>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-12'>
                        <img src={gift} alt='' />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-lg-2 col-md-4 col-sm-12'>
                        <img src={reward} alt='' />
                    </div>
                    <div className='col-lg-8 col-md-7 col-sm-12 header'>
                        <span>Get Rewarded for Referring Your Friends</span>
                        <span>Yaro is an app that helps teens be active in their finances. For</span>
                        <span>every friend they refer who downloads the app and verify their</span>
                        <span>email, they earn unlimited rewards — including cash, discounts</span>
                        <span>and more.</span>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-lg-8 col-md-7 col-sm-12 header'>
                        <span>Investing for the future</span>
                        <span>Yaro offers a great way to save, invest and grow your money</span>
                        <span>while making smart decisions.</span>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-12'>
                        <img src={dollar} alt='' />
                    </div>
                </div>
            </div>
            <div className='working'>
                <span >How it works</span>
                <span>Yaro is the smartest way to invest your money. Invest in stocks, bonds</span>
                <span>and ETFs from just (amount) with a swipe. You can also refer friends and</span>
                <span>win unlimited rewards!</span>
                <span>1. Download the Yaro app</span>
                <img src={arrow} alt='' />
                <span>2. Signup for an account</span>
                <img src={arrow} alt='' />
                <span>3. Refer your friends to Yaro App</span>
                <button className='custom-btn'><a href='https://forms.gle/X2PF3zsQvAgerQzs9'><span>Get started to become an</span><span> ambassador </span></a></button>
            </div>
            <div className='more-info'>
                <span>More about the Campus Ambassador Program </span>
                <span>We are excited to offer the Yaro Campus Ambassador</span>
                <span>Program to high-school and college students passionate</span>
                <span>about learning new skills, investment and</span>
                <span>financial literacy.</span>

                <span>As an Ambassador, you'll have direct access to our team.</span>
                <span>You'll also be joining a community of eager </span>
                <span>students to learn more about these topics. If</span>
                <span>you're ready to take your skills to the next level, apply</span>
                <span>today!</span>

            </div>
        </div >
    )
}

export default Ambassador