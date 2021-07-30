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
                                                <h3 className="text-center mt-5">Make Deposit</h3>
                                                <form method="post" name="myform" className="currency_validate">
                                                    <div className="form-group">
                                                        <label className="mr-sm-2">Currency</label>
                                                        <div className="input-group mb-3">
                                                            <select name='currency' className="form-control">
                                                                <option data-display="Bitcoin" value="bitcoin">Bitcoin
                                                            </option>
                                                                <option value="litecoin">Litecoin</option>
                                                            </select>
                                                            <input type="text" name="usd_amount" className="form-control"
                                                                value="125.00 USD" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="mr-sm-2">Payment Method</label>
                                                        <div className="input-group mb-3">
                                                            <select name='currency' className="form-control">
                                                                <option data-display="Bitcoin" value="bitcoin">Bitcoin
                                                            </option>
                                                                <option value="litecoin">Litecoin</option>
                                                            </select>
                                                            <input type="text" name="usd_amount" className="form-control"
                                                                value="125.00 USD" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="mr-sm-2">Enter your amount</label>
                                                        <div className="input-group">
                                                            <input type="text" name="currency_amount" className="form-control"
                                                                placeholder="0.0214 BTC" />
                                                            <input type="text" name="usd_amount" className="form-control"
                                                                placeholder="125.00 USD" />
                                                        </div>
                                                        <div className="d-flex justify-content-between mt-3">
                                                            <p className="mb-0">Monthly Limit</p>
                                                            <h6 className="mb-0">$49750 remaining</h6>
                                                        </div>
                                                    </div>
                                                    <button type="submit" name="submit"
                                                        className="btn btn-success btn-block">Exchange
                                                    Now</button>

                                                </form>
                                            </Tab>
                                            <Tab eventKey="withdraw" title="Withdraw">
                                            <h3 className="text-center mt-5">Withdraw Fund</h3>
                                                <form method="post" name="myform" className="currency2_validate">
                                                    <div className="form-group">
                                                        <label className="mr-sm-2">Currency</label>
                                                        <div className="input-group mb-3">
                                                            <select name='currency' className="form-control">
                                                                <option data-display="Bitcoin" value="bitcoin">Bitcoin
                                                            </option>
                                                                <option value="litecoin">Litecoin</option>
                                                            </select>
                                                            <input type="text" name="usd_amount" className="form-control"
                                                                value="125.00 USD" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="mr-sm-2">Payment Method</label>
                                                        <div className="input-group mb-3">
                                                            <select name='currency' className="form-control">
                                                                <option data-display="Bitcoin" value="bitcoin">Bitcoin
                                                            </option>
                                                                <option value="litecoin">Litecoin</option>
                                                            </select>
                                                            <input type="text" name="usd_amount" className="form-control"
                                                                value="125.00 USD" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="mr-sm-2">Enter your amount</label>
                                                        <div className="input-group">
                                                            <input type="text" name="currency_amount" className="form-control"
                                                                placeholder="0.0214 BTC" />
                                                            <input type="text" name="usd_amount" className="form-control"
                                                                placeholder="125.00 USD" />
                                                        </div>
                                                        <div className="d-flex justify-content-between mt-3">
                                                            <p className="mb-0">Monthly Limit</p>
                                                            <h6 className="mb-0">$49750 remaining</h6>
                                                        </div>
                                                    </div>
                                                    <button type="submit" name="submit"
                                                        className="btn btn-success btn-block">Exchange
                                                    Now</button>

                                                </form>
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