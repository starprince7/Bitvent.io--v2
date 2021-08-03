import React, { } from 'react';
 import { Link } from 'react-router-dom';
import { Accordion, Tabs,Tab, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import Popup from '../element/popup';



function BuySell() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
                <div className="container-fluid">
                <div className="col-xl-11 col-lg-12 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="buy-sell-widget">

                                        <Tabs defaultActiveKey="deposit" id="uncontrolled-tab-example">
                                            <Tab eventKey="deposit" title="Deposit">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h4 className="card-title mt-3">Deposit</h4>
                                                    </div>
                                                    <div className="card-body">
                                                        <form action="#">
                                                            <div className="form-group">
                                                                <div className="input-group mb-3">
                                                                    <div className="input-group-prepend">
                                                                        <label className="input-group-text"><i className="fa fa-money"></i></label>
                                                                    </div>
                                                                    <input type="text" name="deposit" className="form-control" placeholder="5000 USD" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <div className="input-group mb-3">
                                                                    <div className="input-group-prepend">
                                                                        <label className="input-group-text"><i className="fa fa-bank"></i></label>
                                                                    </div>
                                                                    <select className="form-control">
                                                                        {/* <option>Bank of America ********45845</option> */}
                                                                        {/* <option>Master Card ***********5458</option> */}
                                                                    <option value="">Choose Financial Plan</option>
                                                                    <option value="">Start up plan 25%</option>
                                                                    <option value="">Business plan 35%</option>
                                                                    <option value="">Corporate plan 50%</option>
                                                                    <option value="">5-star-corporate plan 80%</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <button className="btn btn-primary btn-block">Pay Now</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="withdraw" title="Withdraw">
                                                <div className="card">
                                                        <div className="card-header">
                                                            <h4 className="card-title mt-3">Withdraw</h4>
                                                        </div>
                                                        <div className="card-body">
                                                            <form action="#">
                                                                <div className="form-group">
                                                                    <div className="input-group mb-3">
                                                                        <div className="input-group-prepend">
                                                                            <label className="input-group-text"><i className="fa fa-money"></i></label>
                                                                        </div>
                                                                        <input type="text" className="form-control" placeholder="5000 USD" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="input-group mb-3">
                                                                        <div className="input-group-prepend">
                                                                            <label className="input-group-text"><i className="fa fa-bank"></i></label>
                                                                        </div>
                                                                        <select className="form-control">
                                                                            <option>Bank of America ********45845</option>
                                                                            <option>Master Card ***********5458</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <button className="btn btn-primary btn-block">Withdraw Now</button>
                                                            </form>
                                                    </div>
                                                </div>
                                            </Tab>
                                        </Tabs>
                                        
                                    </div>

                                </div>
                            </div>
                            <p className="p-4">Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate
                            suscipit explicabo voluptas eos in tenetur error temporibus dolorum. Nulla!</p>
                        </div>

                    <div className="row">
                        <div className="col-xl-6 col-xxl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">FAQ</h4>
                                </div>
                                <div className="card-body">

                                    <Accordion defaultActiveKey="0" id="accordion-faq" className="accordion">
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                                <h5>What Shipping Methods are Available?</h5>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>Anim pariatur cliche reprehenderit, enim eiusmod high
                                                    life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                                                    cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                    eiusmod.</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                                <h5>How Long Will it Take To Get My Package?</h5>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>Anim pariatur cliche reprehenderit, enim eiusmod high
                                                    life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                                                    cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                    eiusmod.</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>

                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                                <h5>How Do I Track My Order?</h5>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body>Anim pariatur cliche reprehenderit, enim eiusmod high
                                                    life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                                                    cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                    eiusmod.</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>

                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <Popup />
                        </div>
                    </div>
                </div>
            </div>

            <Footer2 />
        </>
    )
}

export default BuySell;