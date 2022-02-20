import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'
import Header1 from './../layout/header1';
import Footer1 from './../layout/footer1';
import Bottom from '../element/bottom';

// Image
import about_hero_img from './../../images/background/girl-standing-on-street.jpg';
import CEO_IMAGE from './../../images/team/001.jpg';
import AboutPhoto from './../../images/background/national-building.jpg';
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
                                <img src={AboutPhoto} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6"><br />
                            <div className="service-content m-t-50">
                                <h3>We feel purchasing crypto shouldn't be so difficult.</h3>
                                <p>Bitvent was formed in 2021 with a single objective in mind: to promote cryptocurrency
                                    acceptance. The goal of the company was to develop a simple and safe software solution
                                    that would allow individuals all around the world to engage in the biggest digital
                                    revolution since the internet.</p>
                                
                                <p>Money is important to us all, whether it's in the form of a wage, a pension, or savings
                                    in a piggybank. The freedom to acquire and employ personal resources is an essential 
                                    component of human dignity and a fundamental human right.</p>

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
                            <h3>Blockchain technology is the new revolution in today's financial systems.</h3>
                                <p>We’ve taken up a challenge and turned it into a mission To create an open financial
                                    system
                                    for the world. To achieve this, we are building a team of smart, creative, passionate
                                    optimists, the kind of people who see opportunity
                                    where others see roadblocks.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Popup />
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-two section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="service-img">
                                <img src={about_hero_img} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-content my-5">
                            <h3>Our core values</h3>
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

            <div className="about-two section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="service-content my-5">
                            <h3>Our mission</h3>
                                <p>
                                    We believe that completing our purpose is the most effective method to increase
                                    economic freedom, creativity, efficiency, and equality of opportunity in the globe.
                                    Every member of our team—every engineer, designer, key team member, lawyer, writer,
                                    support coordinator, recruiter, and product manager—is critical to our success.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-img">
                                <img src={future_image} alt="" className="img-fluid" />
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