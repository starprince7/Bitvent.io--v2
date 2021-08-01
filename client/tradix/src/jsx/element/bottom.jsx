import React, { } from 'react';
import { Link } from 'react-router-dom';



function Bottom() {

    return (
        <>
            <div className="bottom section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="bottom-logo">
                                <img className="pb-3" src={require('./../../images/logo-white.png')} alt="" />

                                <p>We are here to guide you at every step of your investment.</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                            <div className="bottom-widget">
                                <h4 className="widget-title">Company</h4>
                                <ul>
                                    <li><Link to={'/about'}>About</Link></li>
                                    <li><Link to={'/signin'}>Career</Link></li>
                                    <li><Link to={'#'}>Affiliate</Link></li>
                                    <li><Link to={'#'}>Our Partner</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                            <div className="bottom-widget">
                                <h4 className="widget-title">Support</h4>
                                <ul>
                                    <li><Link to={'/signin'}>Ticket</Link></li>
                                    <li><Link to={'/faq'}>FAQ</Link></li>
                                    <li><Link to={'#'}>Blog</Link></li>
                                    <li><Link to={'#'}>Helpdesk</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="bottom-widget">
                                <h4 className="widget-title">Exchange Pair</h4>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <ul>
                                            <li><Link to={'/signin'}>ETH to BTC</Link></li>
                                            <li><Link to={'/signin'}>BTC to ETH</Link></li>
                                            <li><Link to={'/signin'}>LTC to ETH</Link></li>
                                            <li><Link to={'/signin'}>USDT to BTC</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <ul>
                                            <li><Link to={'#'}>BTC to USDT</Link></li>
                                            <li><Link to={'#'}>LTC to BTC</Link></li>
                                            <li><Link to={'#'}>XMR to BTC</Link></li>
                                            <li><Link to={'#'}>ETC to DASH</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bottom;