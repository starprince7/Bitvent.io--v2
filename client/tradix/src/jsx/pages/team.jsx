import React, { } from 'react';
import Header1 from './../layout/header1';
import Footer1 from './../layout/footer1';
import Bottom from './../element/bottom';
 import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'

// Image import
import bitcoin_img from './../../images/brand/bitcoin.png'
import london_img from './../../images/brand/london.png'
import forbes_img from './../../images/brand/forbes.png'
import crypto_valley_img from './../../images/brand/crypto_valley.png'
import person1 from './../../images/team/1.jpg'



function Team() {

    return (
        <><Header1 />
            <div className="join-team section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="join-team-content text-center">
                                <h2 className="mb-2">Better returns with us</h2>
                                <p className="mb-4">Our trade experts are here to provide you with
                                the most accurate trade analysis.</p>
                                <Link to={'/signup'} className="btn btn-primary px-4 py-2">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-member section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center">
                                <h2>Our Professional Team Of Experts</h2>
                                <p>Our focus is always on finding the best people to work with. Our bar is high
                                 The only smart move now is investing today.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-4">
                            <img src={person1} className="img-fluid rounded shadow-md" alt="...Team" />
                        </div>
                        <div className="col-3">
                            <img src={person1} className="img-fluid rounded shadow-md mb-4" alt="...Team" />
                            <img src={person1} className="img-fluid rounded shadow-md" alt="...Team" />
                        </div>
                        <div className="col-5">
                            <div className="row mb-4">
                                <div className="col-5">
                                    <img src={person1} className="img-fluid rounded shadow-md mb-4" alt="...Team" />
                                </div>
                                <div className="col-7">
                                    <img src={person1} className="img-fluid rounded shadow-md mb-4" alt="...Team" />
                                </div>
                                <div className="col-12">
                                    <img src={person1} className="img-fluid rounded shadow-md" alt="...Team" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="trusted-business py-5 text-center">
                                <h3>Trusted by over <strong>Millions of business</strong> around the world</h3>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-md-12">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={forbes_img} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-8">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={bitcoin_img} alt="bitcoin" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={london_img} alt="london stock" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={crypto_valley_img} alt="" /></Link>
                                    </div>
                                </div>
                                
                                <div className="col-lg-3 col-md-12">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={require('./../../images/brand/5.webp')} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={require('./../../images/brand/5.webp')} alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="interested-join section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="interested-join-content text-center">
                                <h2>New in the market? So is everyone.</h2>
                                <p>Let's grow together get started today.</p>
                                <Link to={'#'} className="btn btn-primary">Sign Up</Link>
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

export default Team;