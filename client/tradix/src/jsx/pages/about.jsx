import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'
import Header1 from './../layout/header1';
import Footer1 from './../layout/footer1';
import Bottom from '../element/bottom';

// Image
import about_hero_img from './../../images/about/1.jpg';
import CEO_IMAGE from './../../images/team/001.jpg';
import company_meeting from './../../images/team/002.jpg';
import future_image from './../../images/team/future.jpg';
// Video Pop up
import Popup from '../element/popup'




function About() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
        <Header1 />
            <div className="about-one section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="service-img">
                                <img src={company_meeting} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6"><br />
                            <div className="service-content m-t-50">
                                <h3>In Brief</h3>
                                <p>Founded in January of 2013, This is a forex and crypto-currency trading platform where
                                    merchants
                                    and consumers can transact with all currency including many digital currencies like bitcoin, ethereum, and
                                    litecoin.
                                    We're based in the United Kingdom.</p>
                                
                                <p>Here at WealthWiseFx. we are charged with the responsibility of using advance and ethical medium to
                                    bring you the best and most suitable result in your investment.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-ceo py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ceo-content">
                                <div className="media">
                                    <img src={CEO_IMAGE} alt="" className="img-fluid mr-4 rounded-circle" />
                                    
                                </div>
                                <br />
                                <div className="media-body">
                                    <h3>Eric S. Peters</h3>
                                    <span>CEO of WealthWiseFx</span>
                                    <p className="mt-2">Sir Eric S. Peters has over 25+ years of experience working in and around
                                        Financial Technology. He has delivered innovative SaaS systems for some of
                                        today's biggest institutions around payments, identity, and banking
                                        infrastructure. Eric has been in the Blockchain space since 2012 and is
                                        involved in a number of blockchain and fintech businesses both as an investor,
                                        board director, and founder.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-two section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Popup />
                        </div>
                        <div className="col-lg-6">
                            <div className="service-content my-5">
                            <h3>Working at WealthWiseFx.</h3>
                                <p>We’ve taken a huge challenge and made it into our mission: To create an open financial
                                    system
                                    for the world. To achieve this, we are building a team of smart, creative, passionate
                                    optimists, the kind of people who see opportunity
                                    where others see roadblocks.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-img">
                                <img src={about_hero_img} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-two section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="service-content my-5">
                            <h3>Our values</h3>
                                <p>Our values inform our behavior and the choices we make every day. As a result, our
                                    culture is
                                    a model of the world we’re trying to build: transparent, joyful, curious, and
                                    fast-moving.
                                    Our values are a large part of why Tradix
                                    is a great place to work, and why we’ve been successful. They are much more than words
                                    to us
                                (and we have the emojis to prove it).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                    <div className="service-img">
                        <img src={future_image} alt="" className="img-fluid" />
                    </div>
                </div>
            <div className="about-two section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="service-content my-5">
                            <h3>Our mission</h3>
                                <p>We think achieving our mission is the highest leverage way to bring about more economic
                                    freedom, innovation, efficiency, and equality of opportunity in the world. Each member
                                    of
                                    our team—every engineer, designer, kitchen team member,
                                    lawyer, writer, support coordinator, recruiter, and product manager—plays an important
                                    role
                                    in helping us achieve our mission.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-img">
                                <img src={require('./../../images/about/1.jpg')} alt="" className="img-fluid" />
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

export default About;