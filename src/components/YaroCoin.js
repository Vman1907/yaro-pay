import points from '../assets/points.svg'
import coin from '../assets/coin.svg'
import card from '../assets/card.png'
import girl from '../assets/girl.png'

import '../styles/YaroCoin.css'
import { useEffect } from 'react'

const YaroCoin = ({ page, setPage }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
        setPage('')
    })


    return (
        <>
            <div className='coin-wrapper'>
                <div className='header '>
                    <div className='row justify-content-center'>
                        <span className='col-lg-10'><span className='blue'>YARO</span> Coin</span>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
                            <div className='content'>
                                <div><img src={points} alt='' /></div>
                                <div>
                                    <span>YARO Coin is a native currency exclusive to our smart</span>
                                    <span>teen community advancing them to numerous exciting</span>
                                    <span>benefits and rewards.</span>
                                </div>
                            </div>
                            <div className='content'>
                                <div><img src={points} alt='' /></div>
                                <div>
                                    <span>The best part, YARO coins can be collected by just</span>
                                    <span>sharing YARO app with friends and maintaining</span>
                                    <span>activity on the platform.</span>
                                </div>
                            </div>
                            <div className='content'>
                                <div><img src={points} alt='' /></div>
                                <div>
                                    <span>Access to play Virtual Stock Simulator and learn real</span>
                                    <span>world stock markets in the demo without using real</span>
                                    <span>money.</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <img src={coin} alt='' />
                        </div>
                    </div>
                </div>
                <div className='yaro-card'>
                    <div className='card-image'>
                        <span><span className='blue'>YARO</span> card</span>
                        <img src={card} alt='' />
                    </div>
                    <div className='row justify-content-center'>
                        <div className='content col-lg-10'>
                            <div><img src={points} alt='' /></div>
                            <div>
                                <span>YARO card is our official debit card only for our smart teens allowing them to shop easily</span>
                                <span>and manage their pocket money smartly.</span>
                            </div>
                        </div>
                        <div className='content col-lg-10'>
                            <div><img src={points} alt='' /></div>
                            <div>
                                <span>Transact securely and set a maximum spending limit for extra protection.</span>
                            </div>
                        </div>
                        <div className='content col-lg-10'>
                            <div><img src={points} alt='' /></div>
                            <div>
                                <span>Stand a chance to win exciting incentives and offers just by maintaining activity and using</span>
                                <span>the YARO card.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='yaro-card'>
                    <div className='card-image'>
                        <span><span className='blue'>Virtual</span> stocks simulator</span>
                        <img src={girl} alt='' />
                    </div>
                    <div className='row justify-content-center'>
                        <div className='content col-lg-10'>
                            <div><img src={points} alt='' /></div>
                            <div>
                                <span>Virtual Stock Simulator is built with modern-day AI to train teens in the real-life stock</span>
                                <span>market in the best manner.</span>
                            </div>
                        </div>
                        <div className='content col-lg-10'>
                            <div><img src={points} alt='' /></div>
                            <div>
                                <span>Learn without investing real money and get out with a bundle of experience in risk management,</span>
                                <span>Rupee cost averaging and everything you need to get</span>
                                <span>financially better. </span>
                            </div>
                        </div>
                        <div className='content col-lg-10'>
                            <div><img src={points} alt='' /></div>
                            <div>
                                <span>Learn and implement the learnings to check whether they are working or not without even</span>
                                <span>taking the risk of losing money.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default YaroCoin