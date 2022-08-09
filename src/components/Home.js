/* eslint-disable jsx-a11y/aria-role */
import '../styles/Home.css'
import iphone from '../assets/iPhone.svg'
import iphone2 from '../assets/iphone2.svg'
import iphone3 from '../assets/iphone3.svg'
import pic1 from '../assets/pic1.svg'
import pic2 from '../assets/pic2.svg'
import pic3 from '../assets/pic3.svg'
import pic4 from '../assets/pic4.svg'
import background from '../assets/background.svg'
import ellipse from '../assets/Ellipse.svg'
import Ellipse2 from '../assets/Ellipse2.svg'
import ellipse3 from '../assets/ellipse 3.svg'
import Ellipse4 from '../assets/Ellipse4.svg'
import ellipse5 from '../assets/ellipse5.svg'
import ellipse6 from '../assets/ellipse6.svg'
import info1 from '../assets/info1.svg'
import info2 from '../assets/info2.svg'
import info3 from '../assets/info3.svg'
// import line from '../assets/Vector 7.svg'
import growth from '../assets/growth.svg'
import invest from '../assets/invest.svg'
import rejesh from '../assets/rajesh.png'
import adani from '../assets/adani.png'
import warren from '../assets/warren.png'
import line2 from '../assets/line2.svg'
import bullet from '../assets/bullet.svg'
import yaroCard from '../assets/yaro-card.svg'
import coin from '../assets/coin.svg'
import ring from '../assets/rings.svg'

import Tilt from 'react-parallax-tilt'
import { useEffect } from 'react'
// import { useTransition } from 'react'
// import Loading from './Loading'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    // const [isPending, startTransition] = useTransition();

    return (
        <>
            {/* {isPending && <Loading />} */}
            <div className='page-wrapper'>
                <div className='row header-wrapper justify-content-center'>
                    <div className='col-lg-4 col-md-3 col-sm-6 col-7 header-info'>
                        <span>Introducing</span>
                        <span>India's<span style={{ color: '#5334F3' }}> First investing App</span></span>
                        {/* <span>& investing App</span> */}
                        <span>for Teens</span>
                        <button className='custom-btn'><a href='https://play.google.com/store/apps/details?id=com.yaro.yaro_app'>Get Early Access</a></button>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-10 col-12 row justify-content-center align-items-center'>
                        <div className='col-1 floating-image'>
                            <img style={{ width: '200px' }} src={pic1} alt='' />
                            <img style={{ width: '100px' }} src={pic2} alt='' />
                            <img style={{ width: '220px' }} src={pic3} alt='' />
                            <img style={{ width: '200px' }} src={pic4} alt='' />
                        </div>
                        <img className='rings' src={ring} alt='' />
                        <div className='image'>
                            <img className='iphone-bg' src={background} alt='' />
                            <Tilt style={{ height: 'min-content' }}>
                                <img className='iphone' src={iphone} alt='' />
                            </Tilt>
                        </div>
                    </div>
                </div>
                <img src={ellipse} alt='' />
                <div className='values'>
                    <img className='ellipse' style={{ position: 'absolute' }} src={Ellipse2} alt='' />
                    <div className='values-wrapper'>
                        <span className='header'>Why<span style={{ color: '#5334F3' }}> Yaro</span></span>
                        <div className='values-info'>
                            <span>
                                <img style={{ width: '60px' }} src={info1} alt='' />
                                <span className='info-header'>Build a good money habit</span>
                                <span className='info-content'>Start learning about investing and money management from an early age.</span>
                            </span>
                            <span>
                                <img style={{ width: '60px' }} src={info2} alt='' />
                                <span className='info-header'>Real world investing from an early age</span>
                                <span className='info-content'>On Yaro, teens learn about investment by doing it in real world under parental control.</span>
                            </span>
                            <span>
                                <img style={{ width: '60px' }} src={info3} alt='' />
                                <span className='info-header'>Compounding Effect</span>
                                <span className='info-content'>Yaro helps you to start building wealth from an early age by compounding it.</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='blank-space'>
                    <img src={ellipse3} alt='' style={{ position: 'absolute', right: '0', width: '120px' }} />
                </div>
                <div className='invest'>
                    {/* <img src={line} alt='' /> */}
                    <div className='invest-wrapper row justify-content-center'>
                        <div className='col-lg-4 invest-image'>
                            <Tilt>
                                <img className='iphone2' src={iphone2} alt='' />
                            </Tilt>
                        </div>
                        <div className='col-lg-4 invest-content align-items'>
                            <span><span style={{ color: '#5334F3' }}>Grow</span> Your Pocket Money With <span style={{ color: '#5334F3' }}>Yaro</span></span>
                            <div className='row'>
                                <div className='col-lg-6 col-md-4 col-sm-4 col-6'>
                                    <Tilt>
                                        <img style={{ width: '50PX' }} src={growth} alt="" />
                                        <span>Invest your money in stocks and grow your money</span>
                                    </Tilt>
                                </div>
                                <div className='col-lg-6 col-md-4 col-sm-4 col-6'>
                                    <Tilt>
                                        <img style={{ width: '50PX' }} src={invest} alt='' />
                                        <span>Buy stocks of the leading companies</span>
                                    </Tilt>
                                </div>
                            </div>
                            <a href='https://play.google.com/store/apps/details?id=com.yaro.yaro_app' >Learn how to invest <i className='fa fa-arrow-right'></i></a>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='ellipse' src={ellipse} alt='' />
                </div>
                <div>
                    <img className='ellipse' style={{ position: 'relative', left: '94%' }} src={Ellipse4} alt='' />
                </div>
                <div className='compounding row justify-content-end'>
                    <div className='col-lg-6 col-md-7 col-sm-7'>
                        <span className='compounding-header'>Learn From Our Experts The Power Of <span style={{ color: '#5334F3' }}>Compounding</span></span>
                        <div className='compounding-inner'>
                            <div>
                                <div className='name-line'></div>
                            </div>
                            <div>
                                <span style={{ marginTop: '1rem' }}>
                                    <img style={{ width: '60px', margin: '1rem 1rem 2rem 0' }} src={adani} alt='' />
                                    <span>Gautam Adani</span>
                                </span>
                                <span>
                                    <img style={{ width: '60px', margin: '1rem 1rem 2rem 0' }} src={rejesh} alt='' />
                                    <span>Rajesh Jhunjhunwala</span>
                                </span>
                                <span>
                                    <img style={{ width: '60px', margin: '1rem 1rem 2rem 0' }} src={warren} alt='' />
                                    <span>Warren Buffett</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-2 col-sm-2'>
                        <img className='line2' src={line2} alt='' />
                        <Tilt>
                            <img className='iphone3' src={iphone3} alt='' />
                        </Tilt>
                    </div>
                </div>
                <img src={ellipse5} alt='' />
                <div>
                    <img className='ellipse' style={{ position: 'absolute', right: '93%' }} src={ellipse6} alt='' />
                </div>
                <div className='yaro-coin'>
                    <span><span style={{ color: '#5334F3' }}>Yaro </span> Coin</span>
                    <span>Earn Yaro coins by participating in stock competitions and completing chores.</span>
                    <span>  You can use your coins to buy stocks or to buy your dream products.</span>
                    <img className='yaro-coin-img' src={coin} alt='' />
                    <button data-toggle="modal" data-target="#alertModal">Learn More</button>
                    <img className='ellipse' style={{ position: 'absolute', left: '93%' }} src={ellipse3} alt='' />
                </div>
                <div className='yaro-card'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-lg-7 col-md-5 col-12'>
                            <div>
                                <span>Our upcoming <span style={{ color: '#684EED' }}> special features</span> on Yaro</span>
                            </div>
                            <span>
                                <img style={{ width: '30px', marginRight: '1rem' }} src={bullet} alt='' />
                                Get a smart card for your expenses and get cashback in your gullak.
                            </span>
                            <span>
                                <img style={{ width: '30px', marginRight: '1rem' }} src={bullet} alt='' />
                                Virtual Stock Simulator - to invest virtually and learn in a better way.
                            </span>
                            {/* <span>
                                <img style={{ width: '30px', marginRight: '1rem' }} src={bullet} alt='' />
                                Instantly Activate
                            </span>
                            <span>
                                <img style={{ width: '30px', marginRight: '1rem' }} src={bullet} alt='' />
                                5% Cashback Gaurantee
                            </span> */}
                        </div>
                        <div className='col-lg-4 col-md-5 col-12'>
                            <Tilt>
                                <img src={yaroCard} alt='' />
                            </Tilt>
                        </div>
                    </div>
                    <img className='ellipse' style={{ position: 'relative', right: '1%', width: '100px' }} src={ellipse6} alt='' />
                </div>
            </div>
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

export default Home;