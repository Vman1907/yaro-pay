import { useEffect } from 'react'
import photo from '../assets/Group-about.png'
import points from '../assets/points.svg'

import '../styles/About.css'

const About = ({ page, setPage }) => {


    useEffect(() => {
        window.scrollTo(0, 0)
        setPage('about')
    })

    return (
        <>
            <div className='about-wrapper'>
                <div className="header row">
                    <div className="content col-lg-5 col-md-6 col-sm-12">
                        <span>A smart investing app for teens</span>
                        <span>Start building a fortune from teenage years.</span>
                        <span>YARO helps you to learn about finance and investment</span>
                        <span>to take care of your financial future.</span>
                    </div>
                    <div className="col-lg-4 col-md-4 sm-12">
                        <img src={photo} alt='' />
                    </div>
                </div>
                <div className='info justify-content-start'>
                    <div className='col3'>?</div>
                    <div className='col7'>
                        <span>Why YARO</span>
                        <span>We strive to empower the upcoming generations with more</span>
                        <span>financial knowledge and maturity.</span>
                        <span>To educate the upcoming generation about money</span>
                        <span> management</span>
                    </div>
                </div>
                <div className='points'>
                    <div className='content'>
                        <div>
                            <span>
                                <img src={points} alt='' />
                            </span>
                        </div>
                        <div>
                            <span>Make use of your Pocket money</span>
                            <span>Start Investing your pocket money for your short or long term goals</span>
                            <span>effortlessly.</span>
                        </div>
                    </div>
                    <div className='content'>
                        <div>
                            <span>
                                <img src={points} alt='' />
                            </span>
                        </div>
                        <div>
                            <span>Invest in stocks in the real world as a teen</span>
                            <span>Gather the experience of real world stock markets from the very start.</span>
                        </div>
                    </div>
                    <div className='content'>
                        <div>
                            <span>
                                <img src={points} alt='' />
                            </span>
                        </div>
                        <div>
                            <span>Learn from the experts about finance in a cool way</span>
                            <span>From industry experts to professionals, YARO has prepared the best to shape</span><span> your financial future.</span>
                        </div>
                    </div>
                    <div className='content'>
                        <div>
                            <span>
                                <img src={points} alt='' />
                            </span>
                        </div>
                        <div>
                            <span>Learn by playing games</span>
                            <span>We have made learning easier than ever by gamifying it – Build a streak,</span>
                            <span> compete with your friends and more.</span>
                        </div>
                    </div>
                    <div className='content'>
                        <div>
                            <span>
                                <img src={points} alt='' />
                            </span>
                        </div>
                        <div>
                            <span>Invest first using the YARO coins in the Virtual Stock Simulator</span>
                            <span>before investing in the real world.  </span>
                            <span>Drop the fear of low experience – start learning real-world stock markets</span>
                            <span>without using money in our smart teen community.</span>
                        </div>
                    </div>
                </div>
                <div className='objective'>
                    <span>What we believe </span>

                    <span>Assisting teens to gain financial literacy can definitely help them to become</span>
                    <span> more responsible towards their spending habits and excel in their money</span>
                    <span> management from a very early age. </span>

                    <span>This will help them build fortune from the very start of their life to secure</span>
                    <span>their future. </span>

                    <div>
                        <span>Teaching teens about finance from an early age makes them more</span>
                        <span>responsible for their spending habits and they become smart in money</span>
                        <span>management.</span>
                    </div>

                    <span>Vision</span>

                    <span>YARO is envisioned to be the partner of every parent to help them shape their</span>
                    <span>child's financial future. </span>

                    <span>Mission</span>

                    <span>Our mission is to help the next generation to live a better financial life.</span>
                </div>
            </div>
        </>
    )
}

export default About