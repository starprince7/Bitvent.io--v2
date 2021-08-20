import React, { } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import person_one from './../../images/testimonial/1.jpg'
import person_two from './../../images/testimonial/2.jpg'



function Testimonial() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <Slider {...settings}>
                <>
                    <div className="row align-items-center" style={{ "display": "flex!important;" }}>
                        <div className="col-xl-6 col-lg-6">
                            <div className="customer-img">
                                <img className="img-fluid" src={person_one} width={300} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="customer-review">
                                <img className="img-fluid" src={require('./../../images/brand/2.webp')} alt="" />
                                <p>A great opportunity to start earning from stocks and shares in the market.</p>
                                <div className="customer-info">
                                    <h6>Mr Dave Mckenzie</h6>
                                    <p>Investment Banker</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

                <>
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="customer-img">
                                <img className="img-fluid" src={person_two} width={300} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="customer-review">
                                <img className="img-fluid" src={require('./../../images/brand/3.webp')} alt="" />
                                <p>
                                    Works like a charm i would highly recommend going for a Standard plan
                                     to increase chances of earning more.
                                </p>
                                <div className="customer-info">
                                    <h6>Mr Mathew Holmes</h6>
                                    <p>CEO, DAP Plc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Slider>
        </>
    )
}

export default Testimonial;