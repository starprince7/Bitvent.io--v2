import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom'
import { Accordion, Tabs,Tab, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import Popup from '../element/popup';
import { connect } from 'react-redux'
import { checkAmount, makeAccountDeposit } from '../../redux/app_state/actions';
import { setInvoice, setError } from '../../redux/app_state/actions';
import axios from 'axios'



function BuySell({ checkAmount, makeAccountDeposit, setInvoice, setError, error, user }) {
    // DOM Reference here
    const cryptoTypeRef = useRef(null)
    const cryptoAddressRef = useRef(null)
    const inputRef = useRef(null)
    const buttonRef = useRef(null)
    const history = useHistory()
    const [errorInComponent, setInComponentError] = useState(null)

    useEffect(() => {
        if (error) setInComponentError(error)
        const paynow_btn = window.document.querySelector(".custom_paynow_btn");
        if (errorInComponent) paynow_btn.disabled = true
        if(!errorInComponent) paynow_btn.disabled = false
        
    }, [error, errorInComponent])
    

    const callCheckAmount = (e) => {
        // clear Component error here.
        setInComponentError(null)
        
        const form = document.querySelector(".form");
        const amount = form.deposit_amount.value;
        const plan = form.currency_type.value;
    
        // Import CheckAmount from redux Actions!
        // to check Plan with Amount.
        checkAmount(amount, plan)

    };

    const handle_deposit_submit = (e) => {
        e.preventDefault()

        const button = document.querySelector('.custom_paynow_btn')
        button.textContent = 'Processing...'

        const form = document.querySelector('.form')
        const currency_type = form.currency_type.value
        const amount = form.deposit_amount.value;
        const email = user?.email

        const options = {
            currency_type,
            amount,
            email
        }

        if (!currency_type && !amount) {
            setTimeout(() => button.textContent = 'Pay Now', 2000)
            setError('Please complete the required field')
        } else {
            // Call redux action to make post request to the backend.
            makeAccountDeposit(amount, currency_type, email)
            // setInvoice(options)
            // setTimeout(() => history.push("/invoice"), 2000)
        }
    }

    const handle_exchange_submit = (e) => {
        e.preventDefault()

        buttonRef.current.textContent = "Processing..."
        buttonRef.current.disabled = true
        
        const id = user?._id
        const email = user?.email
        const amount = inputRef.current.value
        const currency = cryptoTypeRef.current.value

        const options = {
            id,
            email,
            amount,
            currency
        }
        console.log('Data sent to backend', options)
        
        axios.post("/exchange", options)
            .then(result => {
                buttonRef.current.textContent = "Exchange"
                buttonRef.current.disabled = false
                console.log(result);
                console.log(result.data);
                
                // CHECK FOR ERROR RESPONSE
                if (result.data.error) {
                    alert(result.data.error)
                }

                // CHECK FOR SUCCESS RESPONSE
                if (result.data.msg) {
                    alert(result.data.msg)
                }

                // Reset Withdrawal Form field.
                inputRef.current.value = ""
                cryptoTypeRef.current.value = ""
                cryptoAddressRef.current.value = ""
                
            })
            .catch(error => {
                buttonRef.current.textContent = "Exchange"
                buttonRef.current.disabled = false
                console.log("ERR! Creating Withdrawal request ==>", error)
            })

    }

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
                <div className="container-fluid card">
                <div className="col-xl-10 col-lg-10 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="buy-sell-widget">

                                        <Tabs defaultActiveKey="deposit" id="uncontrolled-tab-example">
                                            <Tab eventKey="deposit" title="Deposit">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <form onSubmit={handle_deposit_submit} className="form">
                                                            <div className="form-group">
                                                                <p >Pay crypto (USDT) to fund your account and commence the buying and selling of  assets</p>
                                                                <div className="input-group mb-3 mt-md-5">
                                                                    <div className="input-group-prepend">
                                                                        <label className="input-group-text"><i className="fas fa-coins"></i></label>
                                                                    </div>
                                                                    <input type="text" name="deposit_amount" onChange={ callCheckAmount } className="form-control" placeholder="Enter Amount" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <div className="input-group mb-3">
                                                                    <div className="input-group-prepend">
                                                                        <label className="input-group-text"><i className="fa fa-money"></i></label>
                                                                    </div>
                                                                    <select name="currency_type" className="form-control">
                                                                        <option value="USDT" selected>USD</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <button className="custom_paynow_btn btn btn-primary btn-block">Deposit</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="withdraw" title="Exchange">
                                                <div className="card">
                                                        <div className="card-body">
                                                            <form onSubmit={handle_exchange_submit}>
                                                                <div className="form-group">
                                                                    <p >Purchase crypto with ease, simply select your choice of crypto enter an amount and get selected crypto in your 
                                                                    In-chain wallet.</p>
                                                                    <div className="input-group mb-3">
                                                                        <div className="input-group-prepend">
                                                                            <label className="input-group-text"><i className="fa fa-money"></i></label>
                                                                        </div>
                                                                        <input required ref={inputRef} type="number" className="form-control" placeholder="Amount (USD)" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="input-group mb-3">
                                                                        <div className="input-group-prepend">
                                                                            <label className="input-group-text"><i className="fas fa-coins"></i></label>
                                                                        </div>
                                                                        <select required ref={cryptoTypeRef} className="form-control">
                                                                            <option value="BTC">BTC</option>
                                                                            <option value="ETH">ETH</option>
                                                                            <option value="USDT">USDT</option>
                                                                            <option value="BNB">BNB</option>
                                                                            <option value="ADA">ADA</option>
                                                                            <option value="LTC">LTC</option>
                                                                            <option value="SOL">SOL</option>
                                                                            <option value="XRP">XRP</option>
                                                                            <option value="DOGE">DOGE</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <button ref={buttonRef} className="btn btn-primary btn-block">Exchange</button>
                                                            </form>
                                                    </div>
                                                </div>
                                            </Tab>
                                        </Tabs>
                                        
                                    </div>

                                </div>
                            </div>
                            {/* <p className="p-4">Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate
                            suscipit explicabo voluptas eos in tenetur error temporibus dolorum. Nulla!</p> */}
                        </div>

                    {/* <div className="row">
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
                    </div> */}
                </div>
            </div>

            <Footer2 />
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        makeAccountDeposit: (amount, currency, email) => dispatch(makeAccountDeposit(amount, currency, email)),
        checkAmount: (amount, plan) => dispatch(checkAmount(amount, plan)),
        setInvoice: (options) => dispatch(setInvoice(options)),
        setError: (e) => dispatch(setError(e))
    }
}

const mapStateToProps = state => {
    return {
        error: state.dashboard_state.error,
        user: state.dashboard_state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuySell);