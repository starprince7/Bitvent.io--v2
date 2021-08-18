import React, { } from 'react';
 import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'
import Header1 from './../layout/header1';
import Footer1 from './../layout/footer1';
import Bottom from './../element/bottom';
import Testimonial from '../element/testimonial';

// Image
import bitcoin_bag_img from './../../images/bitcoin_bag.jpg';
import { connect } from 'react-redux'
import { logUserIn } from '../../redux/app_state/actions'



function Homepage2({ logUserIn }) {

    const handle_login_submit = (e) => {
        e.preventDefault()

        // Grab form
        const form = document.querySelector('.signin_validate');
        const email = form.email.value;
        const password = form.password.value;

        const Client = {
            email,
            password
        }

        logUserIn(Client);
        
    }

    return (
        <>
            <Header1 />
            <div className="intro2"  id="intro" data-scroll-index="0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-12">
                            <div className="intro-content text-center">
                                <h1>World Class Finance Planning</h1>
                                <p>Financial Freedom without Boundaries</p>
                                <div className="intro-form">
                                    <form action="#">
                                        <input type="text" className="form-control" placeholder="Subscribe Now" />
                                        <button type="submit">
                                            <i className="la la-arrow-right first"></i>
                                            <i className="la la-arrow-right second"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="exchange-form">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-7 col-lg-7">
                            <div className="intro-form-exchange">
                            <div className="auth-form card pb-5">
                                <div className="card-header justify-content-center">
                                    <h4 className="card-title">Let's get you started</h4>
                                </div>
                                <div className="card-body p-4">
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
                                                <Link href="reset.html">Forgot Password?</Link>
                                            </div>
                                        </div>
                                        <div className="text-center mt-4">
                                            <button type="submit" className="btn btn-success btn-block">Sign in</button>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                        <p>Don't have an account? <Link className="text-primary" to='/signup'>Sign
                                            up</Link></p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="market section-padding page-section" data-scroll-index="1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title text-center">
                                <h2>The World's Leading Financial Platform</h2>
                                <p>Join thousands of investors world wide earning from our financial plans.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="market-table">
                                <h3 className="text-center">Latest transcations</h3>
                                <div className="table-responsive">
                                    <table className="table mb-0 table-responsive-sm table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Clients</th>
                                                <th>Currency</th>
                                                <th>Amount</th>
                                                <th>Rate</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td className="coin_icon">
                                                    <span>Brian Philips</span>
                                                </td>
                                                <td className="coin_icon">
                                                    <i className="cc BTC"></i>
                                                    <span>Bitcoin <b>BTC</b></span>
                                                </td>

                                                <td>
                                                    USD 680,175.06
                                                </td>
                                                <td>
                                                    <span className="text-success">+1.13%</span>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td className="coin_icon">
                                                    <span>Claire Cole</span>
                                                </td>
                                                <td className="coin_icon">
                                                    <i className="cc ETH"></i>
                                                    <span>Ethereum <b>ETH</b></span>
                                                </td>

                                                <td>
                                                    USD 680,175.06
                                            </td>
                                                <td>
                                                    <span className="text-success">+1.13%</span>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td className="coin_icon">
                                                    <span>Nicole Hart</span>
                                                </td>
                                                <td className="coin_icon">
                                                    <i className="cc ETH"></i>
                                                    <span>Ethereum <b>ETH</b></span>
                                                </td>

                                                <td>
                                                    USD 680,175.06
                                            </td>
                                                <td>
                                                    <span className="text-success">+1.13%</span>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td className="coin_icon">
                                                    <span>Oliver Tomson</span>
                                                </td>
                                                <td className="coin_icon">
                                                    <i className="cc BCH-alt"></i>
                                                    <span>Bitcoin Cash <b>BCH</b></span>
                                                </td>

                                                <td>
                                                    USD 680,175.06
                                            </td>
                                                <td>
                                                    <span className="text-success">+1.13%</span>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td className="coin_icon">
                                                    <span>Judith Carlson</span>
                                                </td>
                                                <td className="coin_icon">
                                                    <i className="cc LTC"></i>
                                                    <span>Litecoin <b>LTC</b></span>
                                                </td>

                                                <td>
                                                    USD 67,275.07
                                                </td>
                                                <td>
                                                    <span className="text-danger">-0.47%</span>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td className="coin_icon">
                                                    <span>Anastasia Hayes</span>
                                                </td>
                                                <td className="coin_icon">
                                                    <i className="cc BTC"></i>
                                                    <span>Bitcoin <b>BTC</b></span>
                                                </td>

                                                <td>
                                                    USD 80,105.06
                                                </td>
                                                <td>
                                                    <span className="text-success">+1.15%</span>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td className="coin_icon">
                                                    <span>Rhaye Daniel</span>
                                                </td>
                                                <td className="coin_icon">
                                                    <i className="cc LTC"></i>
                                                    <span>Litecoin <b>LTC</b></span>
                                                </td>

                                                <td>
                                                    USD 95,275.07
                                                </td>
                                                <td>
                                                    <span className="text-success">+2.41%</span>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                            <div className="info-content">
                                <span><i className="la la-shield"></i></span>
                                <h4>Best rates on the market</h4>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                            <div className="info-content">
                                <span><i className="la la-cubes"></i></span>
                                <h4>Transparent 0.25% fee</h4>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                            <div className="info-content">
                                <span><i className="la la-clock-o"></i></span>
                                <h4>Quick and easy fund withdraw</h4>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                            <div className="info-content">
                                <span><i className="la la-exchange"></i></span>
                                <h4>Profitable exchanges</h4>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                            <div className="info-content">
                                <span><i className="la la-support"></i></span>
                                <h4>24/7 live chat support</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="product-feature section-padding">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="section-title">
                                <h2 className="text-left">24-hour statistics</h2>
                                <p>We are dedicated to providing you with the best possible trade analysis with a <i>100% </i> 
                                success rate, create a business portfolio with us today.</p>
                            </div>
                            <div className="product-feature-content">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="product-feature-text">
                                            <h4><span><i className="fa fa-shield"></i></span> 40 %</h4>
                                            <p>New users</p>
                                        </div>
                                        <div className="product-feature-text">
                                            <h4><span><i className="fa fa-adjust"></i></span> 83 %</h4>
                                            <p>Regular users</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div id="sparkline11"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="product-feature-box">
                                        <span className="bg-primary"><i className="la la-exchange"></i></span>
                                        <h4>1900</h4>
                                        <p>Transactions made</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="product-feature-box">
                                        <span className="bg-secondary"><i className="la la-trophy"></i></span>
                                        <h4>ETH-BTC</h4>
                                        <p>Today's champion pair</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="product-feature-box">
                                        <span className="bg-success"><i className="la la-user"></i></span>
                                        <h4>15,000+</h4>
                                        <p>Registered customers</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="product-feature-box">
                                        <span className="bg-info"><i className="la la-clock-o"></i></span>
                                        <h4>14.0 minutes</h4>
                                        <p>Average processing time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Get - Started - Section */}
            <div className="getstart section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title">
                                <h2>Get started in few minutes</h2>
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
                                <h3>Pick a financial plan</h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="getstart-content">
                                <span><i className="la la-exchange"></i></span>
                                <h3>Earn income</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Get - Started - Section Bottom */}

            <div className="portfolio section-padding" data-scroll-index="2">
                <div className="container">
                    <div className="row py-lg-5 justify-content-center">
                        <div className="col-xl-7">
                            <div className="section-title text-center">
                                <h2>Create your cryptocurrency portfolio today</h2>
                                <p>WWFX. has a variety of features that make it the best place to start trading</p>
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
                                                <h4>We manage your portfolio</h4>
                                                <p>Choose a suitable investment plan and jump start your portfolio today.
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
                                                <p>For added security, we store your funds in a vault with time delayed
                                                    withdrawals.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="media">
                                            <span className="port-icon"> <i className="la la-mobile"></i></span>
                                            <div className="media-body">
                                                <h4>Mobile access</h4>
                                                <p>Stay on top of the markets with through our platform, using
                                                 any device of your choice.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="portfolio_img">
                                <img src={bitcoin_bag_img} alt="bitcoin_bag" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="trust section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="trust-content">
                                <span><i className="fa fa-shield"></i></span>
                                <h4>EASY</h4>
                                <p>Create an account, choose your crypto, input your receiving address, and send your funds
                            </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="trust-content">
                                <span><i className="fa fa-cubes"></i></span>
                                <h4>SECURE</h4>
                                <p>As a non-custodial exchange, we don’t hold your deposits, so your funds are never
                                vulnerable to hacks</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="trust-content">
                                <span><i className="fa fa-life-ring"></i></span>
                                <h4>SAFE</h4>
                                <p>Our exchange rates are updated in real time. What you see is what you get--with no
                                additional fees</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="appss section-padding">
                <div className="container">
                    <div className="section-title">
                        <h2>Our pricing plan</h2>
                    </div>
                    <div className="row align-items-center justify-content-between">
                        {/* <div className="col-xl-5 col-lg-5 col-md-12">
                            <div className="appss-img">
                                <img className="img-fluid" src={require('./../../images/app2.png')} alt="" />
                            </div>
                        </div> */}
                        {/* WORK ON THE BOOTSTRAP COLUMNS NOW! ASAP!!! */}
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="appss-content">
                                <h3>Start Up Plan 25 %</h3>
                                <ul>
                                    <li><i className="la la-check"></i> Minimum deposit: $500</li>
                                    <li><i className="la la-check"></i> Maximum deposit: $5,000</li>
                                    <li><i className="la la-check"></i> Duration:  7days</li>
                                    <li><i className="la la-check"></i> 25 %  daily</li>
                                    <li><i className="la la-check"></i> Free support</li>
                                </ul>
                                <div className="mt-4">
                                    <Link to={'/login'} className="btn btn-success my-1 waves-effect">
                                        Invest
                                    </Link>

                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 mt-5">
                                <div className="appss-content">
                                    <h3>Business Plan 35 %</h3>
                                    <ul>
                                        <li><i className="la la-check"></i> Minimum deposit: $5,000</li>
                                        <li><i className="la la-check"></i> Maximum deposit: $15,000</li>
                                        <li><i className="la la-check"></i> Duration:  7days</li>
                                        <li><i className="la la-check"></i> 35 %  daily</li>
                                        <li><i className="la la-check"></i> Free support</li>
                                    </ul>
                                    <div className="mt-4">
                                        <Link to={'/login'} className="btn btn-success my-1 waves-effect">
                                            Invest
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 mt-5">
                                <div className="appss-content">
                                    <h3>Corporate Plan 50 %</h3>
                                    <ul>
                                        <li><i className="la la-check"></i> Minimum deposit: $15,000</li>
                                        <li><i className="la la-check"></i> Maximum deposit: $50,000</li>
                                        <li><i className="la la-check"></i> Duration:  7days</li>
                                        <li><i className="la la-check"></i> 50 %  daily</li>
                                        <li><i className="la la-check"></i> Free support</li>
                                    </ul>
                                    <div className="mt-4">
                                        <Link to={'/login'} className="btn btn-success my-1 waves-effect">
                                            Invest
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 mt-5">
                                <div className="appss-content">
                                    <h3>5-Star-Corporate Plan 80 %</h3>
                                    <ul>
                                        <li><i className="la la-check"></i> Minimum deposit: $50,000</li>
                                        <li><i className="la la-check"></i> Maximum deposit: $100,000</li>
                                        <li><i className="la la-check"></i> Withdrawal interval: 1</li>
                                        <li><i className="la la-check"></i> 80 %  daily</li>
                                        <li><i className="la la-check"></i> Free support</li>
                                    </ul>
                                    <div className="mt-4">
                                        <Link to={'/login'} className="btn btn-success my-1 waves-effect">
                                            Invest
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

            <div className="contact-form section-padding" data-scroll-index="4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7">
                            <div className="section-title text-center">
                                <span>Ask Question</span>
                                <h2>Let us hear from you directly!</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-4 col-sm-12">
                            <div className="info-list">
                                <h4 className="mb-3">Address</h4>
                                <ul>
                                    <li><i className="fa fa-map-marker"></i>  2-7 Clerkenwell Green, Farringdon London</li>
                                    <li><i className="fa fa-phone"></i> (+880) 1243 665566</li>
                                    <li><i className="fa fa-envelope"></i> hello@example.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-md-8 col-sm-12">
                            <form method="post" name="myform" className="contact_validate">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label>
                                                Full name
                                        </label>
                                            <input type="text" className="form-control" id="contactName" placeholder="Full name"
                                                name="firstname" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label>
                                                Email
                                        </label>
                                            <input type="email" className="form-control" name="email"
                                                placeholder="hello@domain.com" />

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea className="form-control p-3" name="message" rows="5"
                                                placeholder="Tell us what we can help you with!"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary px-4 py-2">
                                    Send message
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

           <Bottom />

            <Footer1 />

        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logUserIn: (user) => dispatch(logUserIn(user))
    }
}

export default connect(null, mapDispatchToProps)(Homepage2);