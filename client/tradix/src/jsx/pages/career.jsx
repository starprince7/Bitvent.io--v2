import React, { useEffect } from 'react';
 import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'
import Header1 from './../layout/header1';
import Footer1 from './../layout/footer1';
import Bottom from './../element/bottom';
// VIDEO POP UP
import Popup from '../element/popup'
// IMAGE
import future_image from './../../images/team/future.jpg';
import about_hero_img from './../../images/about/1.jpg';




function Career() {

    // Purpose of this func
    // After Code-Spliting the bundled files
    // The App does not load the single page completely.
    // SOLUTION:
    // 1. Reload page after the first complete DOM load-up
    useEffect(() => {
        // Get The Refresh Count First!
        const num_of_refresh = JSON.parse(localStorage.getItem('num_of_refresh'))

         // On Component Mount Persist The Refresh Count onCondition Second
        localStorage.setItem('num_of_refresh', JSON.stringify((num_of_refresh >=2 ? -1 : num_of_refresh) + 1))

        setTimeout(() => {
            if (num_of_refresh <= 1) {
                window.location.reload()
            }
        }, 500)
    }, [])


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <><Header1 />
            <div className="intro-video section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="custom_bg">
                                <div className="play-btn">
                                    <Link><i className="fa fa-play"></i></Link>
                                </div>
                            </div>
                            <div className="intro-video-content text-center mt-5">
                                <h2>We saved a seat for you</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="career section-padding">
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
            </div>

            <div className="choose-team section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center">
                                <h2>Choose your team</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-xxl-12">
                            <div id="accordion-faq" className="accordion">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="mb-0 collapsed c-pointer" data-toggle="collapse"
                                            data-target="#collapseOne1">
                                            <i className="fa"></i>Business Development & Sales</h4>
                                    </div>
                                    <div id="collapseOne1" className="collapse show" data-parent="#accordion-faq">
                                        <div className="card-body">
                                            <div>
                                                <h5 className="text-primary">Business Development Director</h5>
                                                <span>San Francisco, CA</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="mb-0 collapsed c-pointer" data-toggle="collapse"
                                            data-target="#collapseTwo2">
                                            <i className="fa"></i>Engineering - Frontend</h4>
                                    </div>
                                    <div id="collapseTwo2" className="collapse" data-parent="#accordion-faq">
                                        <div className="card-body">
                                            <div>
                                                <h5 className="text-primary">Frontend Engineer, Identity</h5>
                                                <span>San Francisco, CA</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="mb-0 collapsed c-pointer" data-toggle="collapse"
                                            data-target="#collapseThree3">
                                            <i className="fa"></i>Marketing & Communications</h4>
                                    </div>
                                    <div id="collapseThree3" className="collapse" data-parent="#accordion-faq">
                                        <div className="card-body">
                                            <div>
                                                <h5 className="text-primary">Head of Product and Performance Marketing</h5>
                                                <span>San Francisco, CA</span>
                                            </div>
                                        </div>
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

export default Career;