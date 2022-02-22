import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header1 from './../layout/header1';
import Footer1 from './../layout/footer1';
import Bottom from './../element/bottom';

import BtcChart from '../charts/btc';
import DashChart from '../charts/dash';
import EosChart from '../charts/eos';
import EthChart from '../charts/eth';
import LtcChart from '../charts/ltc';
import UsdChart from '../charts/usd';
import XrpChart from '../charts/xrp';
import XtzChart from '../charts/xtz';
// NEW CHARTS IMPORTS!
import BinanceChart from '../charts/bnb';
import DogeChart from '../charts/doge.jsx';
import AdaChart from '../charts/ada';

import Testimonial from '../element/testimonial';
import { connect } from 'react-redux'
import CurrencyFormat from 'react-currency-format'
// IMPORT ACTON FROM ACTION-CREATOR
import { fetchCrypto, logUserIn } from '../../redux/app_state/actions'
// LOGO / ICON IMPORTS
import BNB from './../../icons/svg-icons/BNB.svg'
import SOL from './../../icons/image-icon/solana.jpg'
import ProtectIcon from './../../images/svg/protect.svg'
import CyberIcon from './../../images/svg/cyber.svg'
import FinanceIcon from './../../images/svg/finance.svg'
import AndroidIcon from './../../images/android.svg'
import AppleIcon from './../../images/apple.svg'


function Homepage({ crypto, fetchCrypto, logUserIn }) {

    const [btc, setBtc] = useState(null)
    const [eth, setEth] = useState(null)
    const [ltc, setLtc] = useState(null)
    const [bnb, setBnb] = useState(null)
    const [ada, setAda] = useState(null)
    const [xrp, setXrp] = useState(null)
    const [doge, setDoge] = useState(null)
    const [sol, setSol] = useState(null)
    
    const btn_ref = useRef()

    // FUNCTION TO ADD 5% ONTOP EVERY CRYPTO PRICE
    function spreadToAddPerctentage(object, percentage) {
        return {
            ...object,
            USD: {
                ...object.USD,
                PRICE: (( percentage / 100 ) * object.USD.PRICE) + object.USD.PRICE
            }
        }
    }

    useEffect(() => {
        crypto && crypto.forEach(oneCoin => {
            console.log('Selected coins >>>', oneCoin)
            // Add percentage here
            let coin = spreadToAddPerctentage(oneCoin, 5)

            if(coin.USD.FROMSYMBOL === 'BTC') setBtc(coin)
            if(coin.USD.FROMSYMBOL === 'ETH') setEth(coin)
            if(coin.USD.FROMSYMBOL === 'LTC') setLtc(coin)
            if(coin.USD.FROMSYMBOL === 'BNB') setBnb(coin)
            if(coin.USD.FROMSYMBOL === 'ADA') setAda(coin)
            if(coin.USD.FROMSYMBOL === 'XRP') setXrp(coin)
            if(coin.USD.FROMSYMBOL === 'SOL') setSol(coin)
            if(coin.USD.FROMSYMBOL === 'DOGE') setDoge(coin)
        })
    }, [crypto])

    useEffect(() => {
        fetchCrypto()
    }, [fetchCrypto])

     const handle_login_submit = (e) => {
         e.preventDefault()
         const button = btn_ref.current

        // Grab form
        const form = document.querySelector('.signin_validate');
        const email = form.email.value;
        const password = form.password.value;

        const Client = {
            email,
            password
        }

        logUserIn(Client, button);
        
    }

    return (
        <>
            <Header1 />
            <div className="intro">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-6 col-lg-6 col-12">
                            <div className="intro-content">
                                <h1>Trade with <strong className="text-primary">Bitvent</strong>. <br /> Buy and sell
                                    cryptocurrency
                            </h1>
                                <p>Fast and secure way to purchase or exchange select cryptocurrencies</p>
                            </div>

                            <div className="intro-btn">
                                <Link to={'#login'} className="btn btn-primary">Buy</Link>
                                <Link to={'#login'} className="btn btn-outline-primary">Sell</Link>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-12">
                            <div id="login" className="intro-form-exchange">
                                <form onSubmit={handle_login_submit} name="myform" className="signin_validate" action="#">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="Enter your email"
                                            name="email" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Password"
                                            name="password" required />
                                    </div>
                                    <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                        <div className="form-group mb-0">
                                            <label className="toggle">
                                                <input className="toggle-checkbox" type="checkbox" />
                                                <span className="toggle-switch"></span>
                                                <span className="toggle-label">Remember me</span>
                                            </label>
                                        </div>
                                        <div className="form-group mb-0">
                                            <Link to="/reset" style={{fontSize: '13px'}}>Forgot Password?</Link>
                                        </div>
                                    </div>
                                    <div className="text-center mt-4">
                                        <button ref={btn_ref} type="submit" className="btn btn-success btn-block">Sign in</button>
                                    </div>
                                    <div className="new-account mt-4 text-center">
                                        <p>Don't have an account? <Link className="text-primary" to='/signup'>Sign
                                            up</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="trade-app section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center">
                                <h2>Trade. Anywhere</h2>
                                <p> All of our products are ready to go, easy to use and offer great value to any kind of
                                    business
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="card trade-app-content">
                                <div className="card-body">
                                    <span><i className="la la-mobile"></i></span>
                                    <h4 className="card-title">Mobile</h4>
                                    <p>All the power of Bitvent's cryptocurrency exchange, in the palm of your hand. Download
                                        the
                                    Bitvent mobile crypto trading app today</p>

                                    <Link to={'#'}> Know More <i className="la la-arrow-right"></i> </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="card trade-app-content">
                                <div className="card-body">
                                    <span><i className="la la-desktop"></i></span>
                                    <h4 className="card-title">Desktop</h4>
                                    <p>Powerful crypto trading platform for those who mean business. The Bitvent crypto
                                        trading
                                    experience, tailor-made for your Windows or MacOS device.</p>

                                    <Link to={'#'}> Know More <i className="la la-arrow-right"></i> </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="card trade-app-content">
                                <div className="card-body">
                                    <span><i className="la la-connectdevelop"></i></span>
                                    <h4 className="card-title">API</h4>
                                    <p>The Bitvent API is designed to provide an easy and efficient way to integrate your
                                        trading
                                    application into our platform.</p>

                                    <Link to={'#'}> Know More <i className="la la-arrow-right"></i> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-xl-12">
                            <div className="trusted-business py-5 text-center">
                                <h3>Trusted by Our <strong>Partners & Investors</strong></h3>
                            </div>
                            <div className="brand_container"></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="price-grid section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="media">
                                        <span><i className="cc BTC"></i></span>
                                        <div className="media-body">
                                            Bitcoin (BTC)
                                    </div>
                                    </div>
                                    <p className="mb-0"> 24h</p>
                                </div>
                                <div className="card-body">
                                    <h3>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <>
                                                    <strong>{value}</strong>
                                                </>
                                            )}
                                            value={btc ? btc.USD.PRICE : 0}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            thousandSeparator={true}
                                            displayType={"text"}
                                            prefix={"$"}
                                        />
                                    </h3>
                                    <span>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <>
                                                    <span className={`${Math.sign(Number( btc?.USD.CHANGEPCTHOUR)) === -1 ||
                                                     Math.sign(Number(btc?.USD.CHANGEPCTHOUR)) === 0  ? 'text-danger' : 'text-success'}`}>
                                                    { value }%</span>
                                                </>
                                            )}
                                            value={btc ? btc?.USD.CHANGEPCTHOUR : 0}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            thousandSeparator={true}
                                            displayType={"text"}
                                        />
                                    </span>
                                    <BtcChart />
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="media">
                                        <span><i className="cc ETH"></i></span>
                                        <div className="media-body">
                                            Ethereum (ETH)
                                    </div>
                                    </div>
                                    <p className="mb-0"> 24h</p>
                                </div>
                                <div className="card-body">
                                    <h3>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <>
                                                    <strong>{value}</strong>
                                                </>
                                            )}
                                            value={eth ? eth.USD.PRICE : 0}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            thousandSeparator={true}
                                            displayType={"text"}
                                            prefix={"$"}
                                        />
                                    </h3>
                                    <span>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <>
                                                    <span className={`${Math.sign(Number(eth?.USD.CHANGEPCTHOUR)) === -1 ||
                                                     Math.sign(Number(eth?.USD.CHANGEPCTHOUR)) === 0  ? 'text-danger' : 'text-success'}`}>
                                                    { value }%</span>
                                                </>
                                            )}
                                            value={eth ? eth.USD.CHANGEPCTHOUR : 0}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            thousandSeparator={true}
                                            displayType={"text"}
                                        />
                                    </span>

                                    <EthChart />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="media">
                                        <span><i className="cc LTC"></i></span>
                                        <div className="media-body">
                                            Litecoin (LTC)
                                    </div>
                                    </div>
                                    <p className="mb-0"> 24h</p>
                                </div>
                                <div className="card-body">
                                <h3>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <>
                                                    <strong>{value}</strong>
                                                </>
                                            )}
                                            value={ltc ? ltc.USD.PRICE : 0}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            thousandSeparator={true}
                                            displayType={"text"}
                                            prefix={"$"}
                                        />
                                    </h3>
                                    <span>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <>
                                                    <span className={`${Math.sign(Number(ltc?.USD.CHANGEPCTHOUR)) === -1 ||
                                                     Math.sign(Number(ltc?.USD.CHANGEPCTHOUR)) === 0  ? 'text-danger' : 'text-success'}`}>
                                                    { value }%</span>
                                                </>
                                            )}
                                            value={ltc ? ltc.change : 0}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            thousandSeparator={true}
                                            displayType={"text"}
                                        />
                                    </span>
                                    <LtcChart />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="media crypto_coin_logo">
                                        <img src={ BNB } alt="coin logo" className='custom_logo_width' />
                                        <div className="media-body">
                                            Binance Coin (BNB)
                                    </div>
                                    </div>
                                    <p className="mb-0"> 24h</p>
                                </div>
                                <div className="card-body">
                                    <h3>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <>
                                                    <strong>{value}</strong>
                                                </>
                                            )}
                                            value={bnb ? bnb.USD.PRICE : 0}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            thousandSeparator={true}
                                            displayType={"text"}
                                            prefix={"$"}
                                        />
                                    </h3>
                                    <span>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <>
                                                    <span className={`${Math.sign(Number(bnb?.USD.CHANGEPCTHOUR)) === -1 ||
                                                     Math.sign(Number(bnb?.USD.CHANGEPCTHOUR)) === 0  ? 'text-danger' : 'text-success'}`}>
                                                    { value }%</span>
                                                </>
                                            )}
                                            value={bnb ? bnb.USD.CHANGEPCTHOUR : 0}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            thousandSeparator={true}
                                            displayType={"text"}
                                        />
                                    </span>
                                    <BinanceChart />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="media">
                                        <span><i className="cc XRP"></i></span>
                                        <div className="media-body">
                                            Ripple (XRP)
                                    </div>
                                    </div>
                                    <p className="mb-0"> 24h</p>
                                </div>
                                <div className="card-body">
                                    <h3>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <>
                                                    <strong>{value}</strong>
                                                </>
                                            )}
                                            value={xrp ? xrp.USD.PRICE : 0}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            thousandSeparator={true}
                                            displayType={"text"}
                                            prefix={"$"}
                                        />
                                    </h3>
                                    <span>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <>
                                                    <span className={`${Math.sign(Number(xrp?.USD.CHANGEPCTHOUR)) === -1 ||
                                                     Math.sign(Number(xrp?.USD.CHANGEPCTHOUR)) === 0  ? 'text-danger' : 'text-success'}`}>
                                                    { value }%</span>
                                                </>
                                            )}
                                            value={xrp ? xrp.USD.CHANGEPCTHOUR : 0}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            thousandSeparator={true}
                                            displayType={"text"}
                                        />
                                    </span>
                                    <XrpChart />
                                </div>
                            </div>
                        </div>


                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="media">
                                        <span><i className="cc ADA"></i></span>
                                        <div className="media-body">
                                            Cardano (ADA)
                                    </div>
                                    </div>
                                    <p className="mb-0"> 24h</p>
                                </div>
                                <div className="card-body">
                                    <h3>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <>
                                                    <strong>{value}</strong>
                                                </>
                                            )}
                                            value={ada ? ada.USD.PRICE : 0}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            thousandSeparator={true}
                                            displayType={"text"}
                                            prefix={"$"}
                                        />
                                    </h3>
                                    <span>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <>
                                                    <span className={`${Math.sign(Number(ada?.USD.CHANGEPCTHOUR)) === -1 ||
                                                     Math.sign(Number(ada?.USD.CHANGEPCTHOUR)) === 0  ? 'text-danger' : 'text-success'}`}>
                                                    { value }%</span>
                                                </>
                                            )}
                                            value={ada ? ada.USD.CHANGEPCTHOUR : 0}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            thousandSeparator={true}
                                            displayType={"text"}
                                        />
                                    </span>
                                    <AdaChart />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="media">
                                        <span><i className="cc DOGE"></i></span>
                                        <div className="media-body">
                                            Doge Coin (DOGE)
                                    </div>
                                    </div>
                                    <p className="mb-0"> 24h</p>
                                </div>
                                <div className="card-body">
                                    <h3>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <>
                                                    <strong>{value}</strong>
                                                </>
                                            )}
                                            value={doge ? doge.USD.PRICE : 0}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            thousandSeparator={true}
                                            displayType={"text"}
                                        />
                                    </h3>
                                    <span>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <>
                                                    <span className={`${Math.sign(Number(doge?.USD.CHANGEPCTHOUR)) === -1 ||
                                                     Math.sign(Number(doge?.USD.CHANGEPCTHOUR)) === 0  ? 'text-danger' : 'text-success'}`}>
                                                    { value }%</span>
                                                </>
                                            )}
                                            value={doge ? doge.USD.CHANGEPCTHOUR : 0}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            thousandSeparator={true}
                                            displayType={"text"}
                                        />
                                    </span>
                                    <DogeChart />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="media crypto_coin_logo">
                                        <img src={ SOL } alt="coin logo" className='custom_logo_width' />
                                        <div className="media-body">
                                            Solana (SOL)
                                    </div>
                                    </div>
                                    <p className="mb-0"> 24h</p>
                                </div>
                                <div className="card-body">
                                    <h3>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <>
                                                    <strong>{value}</strong>
                                                </>
                                            )}
                                            value={sol ? sol.USD.PRICE : 0}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            thousandSeparator={true}
                                            displayType={"text"}
                                            prefix={"$"}
                                        />
                                    </h3>
                                    <span>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <>
                                                    <span className={`${Math.sign(Number(sol?.USD.CHANGEPCTHOUR)) === -1 ||
                                                     Math.sign(Number(sol?.USD.CHANGEPCTHOUR)) === 0  ? 'text-danger' : 'text-success'}`}>
                                                    { value }%</span>
                                                </>
                                            )}
                                            value={sol ? sol.USD.CHANGEPCTHOUR : 0}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            thousandSeparator={true}
                                            displayType={"text"}
                                        />
                                    </span>
                                    <XtzChart />
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>

            {/* <div className="getstart section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title">
                                <h2>Get started in a few minutes</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="getstart-content">
                                <span><i className="la la-user-plus"></i></span>
                                <h3>Create an account</h3>

                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="getstart-content">
                                <span><i className="la la-bank"></i></span>
                                <h3>Link your bank account</h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="getstart-content">
                                <span><i className="la la-exchange"></i></span>
                                <h3>Start buying & selling</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio section-padding" data-scroll-index="2">
                <div className="container">
                    <div className="row py-lg-5 justify-content-center">
                        <div className="col-xl-7">
                            <div className="section-title text-center">
                                <h2>Create your cryptocurrency portfolio today</h2>
                                <p>Bitvent has a variety of features that make it the best place to start trading</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-7 col-lg-6">
                            <div className="portfolio_list">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="media">
                                            <span className="port-icon"> <i className="la la-bar-chart"></i></span>
                                            <div className="media-body">
                                                <h4>Manage your portfolio</h4>
                                                <p>Buy and sell popular digital currencies, keep track of them in the one
                                                    place.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="media">
                                            <span className="port-icon"> <i className="la la-calendar-check-o"></i></span>
                                            <div className="media-body">
                                                <h4>Recurring buys</h4>
                                                <p>Invest in cryptocurrency slowly over time by scheduling buys daily,
                                                    weekly,
                                                    or monthly.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="media">
                                            <span className="port-icon"> <i className="la la-lock"></i></span>
                                            <div className="media-body">
                                                <h4>Vault protection</h4>
                                                <p>For added security, store your funds in a vault with time delayed
                                                    withdrawals.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="media">
                                            <span className="port-icon"> <i className="la la-mobile"></i></span>
                                            <div className="media-body">
                                                <h4>Mobile apps</h4>
                                                <p>Stay on top of the markets with the Bitvent app for <Link
                                                    to={'#'}>Android</Link>
                                                    or
                                                <Link to={'#'}>iOS</Link>.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="portfolio_img">
                                <img src={require('./../../images/portfolio.png')} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            {/* Testimonial-Section */}
            <div className="testimonial section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title">
                                <h2>What our customer says</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="testimonial-content">
                                <Testimonial />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="promo section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title text-center">
                                <h2>The most trusted cryptocurrency platform</h2>
                                <p> Here are a few reasons why you should choose Bitvent
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center py-5">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="promo-content">
                                <div className="promo-content-img">
                                    <img className="img-fluid" src={ProtectIcon} alt="" />
                                </div>
                                <h3>Secure storage </h3>
                                <p>We store the vast majority of the digital assets in secure offline storage.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="promo-content">
                                <div className="promo-content-img">
                                    <img className="img-fluid" src={CyberIcon} alt="" />
                                </div>
                                <h3>Protected by insurance</h3>
                                <p>Cryptocurrency stored on our servers is covered by our insurance policy.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="promo-content">
                                <div className="promo-content-img">
                                    <img className="img-fluid" src={FinanceIcon} alt="" />
                                </div>
                                <h3>Industry best practices</h3>
                                <p>Bitvent supports a variety of the most popular digital currencies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="appss section-padding">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-7 col-lg-6 col-md-6">
                            <div className="appss-content">
                                <h2>The secure app to store crypto yourself</h2>
                                <ul>
                                    <li><i className="la la-check"></i> All your digital assets in one place</li>
                                    <li><i className="la la-check"></i> Use Decentralized Apps</li>
                                    <li><i className="la la-check"></i> Pay friends, not addresses</li>
                                </ul>
                                <div className="mt-4">
                                    <Link to={'#'} className="btn btn-primary my-1 waves-effect">
                                        <img src={AndroidIcon} alt="Android Icon" />
                                    </Link>
                                    <Link to={'#'} className="btn btn-primary my-1 waves-effect">
                                        <img src={AppleIcon} alt="AppStore Icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-6">
                            <div className="appss-img">
                                <img className="img-fluid" src="https://trustwallet.com/assets/images/buy/buy.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="blog section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center">
                                <h2>Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="blog-grid">
                                <div className="card">
                                    <img className="img-fluid" src={require('./../../images/blog/1.jpg')} alt="" />
                                    <div className="card-body">
                                        <Link href="blog-single.html">
                                            <h4 className="card-title">Why does Litecoin need MimbleWimble?</h4>
                                        </Link>
                                        <p className="card-text">Cras chinwag brown bread Eaton cracking goal so I said a load
                                            of
                                        old tosh baking cakes.!</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="meta-info">
                                            <Link to={'#'} className="author"><img src={require('./../../images/avatar/5.jpg')} alt="" /> Admin</Link>
                                            <Link to={'#'} className="post-date"><i className="la la-calendar"></i> 31 July, 2019</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="blog-grid">
                                <div className="card">
                                    <img className="img-fluid" src={require('./../../images/blog/2.jpg')} alt="" />
                                    <div className="card-body">
                                        <Link href="blog-single.html">
                                            <h4 className="card-title">How to securely store your HD wallet seeds?</h4>
                                        </Link>
                                        <p className="card-text">Cras chinwag brown bread Eaton cracking goal so I said a load
                                            of
                                        old tosh baking cakes.!</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="meta-info">
                                            <Link to={'#'} className="author"><img src={require('./../../images/avatar/6.jpg')} alt="" /> Admin</Link>
                                            <Link to={'#'} className="post-date"><i className="la la-calendar"></i> 31 July, 2019</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="blog-grid">
                                <div className="card">
                                    <img className="img-fluid" src={require('./../../images/blog/3.jpg')} alt="" />
                                    <div className="card-body">
                                        <Link href="blog-single.html">
                                            <h4 className="card-title">Exclusive Interview With Xinxi Wang Of Litecoin</h4>
                                        </Link>
                                        <p className="card-text">Cras chinwag brown bread Eaton cracking goal so I said a load
                                            of
                                        old tosh baking cakes.!</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="meta-info">
                                            <Link to={'#'} className="author"><img src={require('./../../images/avatar/7.jpg')} alt="" /> Admin</Link>
                                            <Link to={'#'} className="post-date"><i className="la la-calendar"></i> 31 July, 2019</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="get-touch section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title">
                                <h2>Get in touch. Stay in touch.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="get-touch-content">
                                <div className="media">
                                    <span><i className="fa fa-shield"></i></span>
                                    <div className="media-body">
                                        <h4>24 / 7 Support</h4>
                                        <p>Got a problem? Just get in touch. Our support team is available 24/7.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="get-touch-content">
                                <div className="media">
                                    <span><i className="fa fa-cubes"></i></span>
                                    <div className="media-body">
                                        <h4>Bitvent Blog</h4>
                                        <p>News and updates from the world’s leading cryptocurrency exchange.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="get-touch-content">
                                <div className="media">
                                    <span><i className="fa fa-certificate"></i></span>
                                    <div className="media-body">
                                        <h4>Careers</h4>
                                        <p>Help build the future of technology. Start your new career at Bitvent.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="get-touch-content">
                                <div className="media">
                                    <span><i className="fa fa-life-ring"></i></span>
                                    <div className="media-body">
                                        <h4>Community</h4>
                                        <p>Bitvent is global. Join the discussion in our worldwide communities.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Bottom />

            <Footer1 />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        crypto: state.dashboard_state.cryptoPriceData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCrypto: () => dispatch(fetchCrypto()),
        logUserIn: (user, button) => dispatch(logUserIn(user, button))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);