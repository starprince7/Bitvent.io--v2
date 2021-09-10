import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom'
import { Accordion, Tabs,Tab, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import Popup from '../element/popup';
import { connect } from 'react-redux'
import { checkAmount } from '../../redux/app_state/actions';
import { setInvoice, setError } from '../../redux/app_state/actions';
import axios from 'axios'



function BuySell({ checkAmount, setInvoice, setError, error, user }) {
    // DOM Reference here
    const cryptoTypeRef = useRef(null)
    const cryptoAddressRef = useRef(null)
    const inputRef = useRef(null)
    const buttonRef = useRef(null)
    const history = useHistory()
    const [errorInComponent, setInComponentError] = useState(null)

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
        const plan = form.plan_type.value;
    
        // Import CheckAmount from redux Actions!
        // to check Plan with Amount.
        checkAmount(amount, plan)

    };

    const handle_deposit_submit = (e) => {
        e.preventDefault()

        const button = document.querySelector('.custom_paynow_btn')
        button.textContent = 'Processing...'

        const form = document.querySelector('.form')
        const plan = form.plan_type.value
        const amount = form.deposit_amount.value;
        const email = user?.email

        const options = {
            plan,
            amount,
            email
        }

        if (!plan && !amount) {
            setTimeout(() => button.textContent = 'Pay Now', 2000)
            setError('Please complete the required field')
        } else {
            // Submit deposit to Invoice
            // for payment checkout.
            setInvoice(options)
            setTimeout(() => history.push("/invoice"), 2000)
        }
    }

    const handle_withdraw_submit = (e) => {
        e.preventDefault()

        if (!user?.image) {
            window.alert("Sorry, request failed. You will need to update your profile picture for this account! Goto to settings and update your profile.")
        } else {
            buttonRef.current.textContent = "Processing..."
            buttonRef.current.disabled = true
            
            const email = user?.email
            const amount = inputRef.current.value
            const crypto_type = cryptoTypeRef.current.value
            const wallet_address = cryptoAddressRef.current.value
    
            const options = {
                email,
                amount,
                wallet_address,
                crypto_type
            }
            
            axios.post("/admin/request", options)
                .then(result => {
                    buttonRef.current.textContent = "Withdraw Now"
                    buttonRef.current.disabled = false
                    // console.log(result);
                    // console.log(result.data);
    
                    result.data && alert(`Success! $${amount} has been requested for withdrawal, value will be credited to you shortly.`)
                    // Reset Withdrawal Form field.
                    inputRef.current.value = ""
                    cryptoTypeRef.current.value = ""
                    cryptoAddressRef.current.value = ""
                    
                })
                .catch(error => {
                    buttonRef.current.textContent = "Withdraw Now"
                    buttonRef.current.disabled = false
                    console.log("ERR! Creating Withdrawal request ==>", error)
                })
        }

    }

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
                                                        <form onSubmit={handle_deposit_submit} className="form">
                                                            <div className="form-group">
                                                                <div className="input-group mb-3">
                                                                    <div className="input-group-prepend">
                                                                        <label className="input-group-text"><i className="fa fa-money"></i></label>
                                                                    </div>
                                                                    <input type="text" name="deposit_amount" onChange={ callCheckAmount } className="form-control" placeholder="5000 USD" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <div className="input-group mb-3">
                                                                    <div className="input-group-prepend">
                                                                        <label className="input-group-text"><i className="fa fa-bank"></i></label>
                                                                    </div>
                                                                    <select onChange={ callCheckAmount } name="plan_type" className="form-control">
                                                                        {/* <option>Bank of America ********45845</option> */}
                                                                        {/* <option>Master Card ***********5458</option> */}
                                                                    <option value="">Select Plan</option>
                                                                    <option value="Start-up Plan">Start-up Plan 25% (daily)  $[500 - 5,000] </option>
                                                                    <option value="Business Plan">Business Plan 35% (daily)  $[6,000 - 15,000]</option>
                                                                    <option value="Corporate Plan">Corporate Plan 50% (daily)  $[16,000 - 50,000]</option>
                                                                    <option value="5-Star-Corporate Plan">5-Star-Corporate Plan 80% (daily)  $[50,000 - 10,000]</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <button className="custom_paynow_btn btn btn-primary btn-block">Pay Now</button>
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
                                                            <form onSubmit={handle_withdraw_submit}>
                                                                <div className="form-group">
                                                                    <div className="input-group mb-3">
                                                                        <div className="input-group-prepend">
                                                                            <label className="input-group-text"><i className="fa fa-money"></i></label>
                                                                        </div>
                                                                        <input required ref={inputRef} type="number" className="form-control" placeholder="5000 USD" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="input-group mb-3">
                                                                        <div className="input-group-prepend">
                                                                            <label className="input-group-text"><i className="fas fa-coins"></i></label>
                                                                        </div>
                                                                        <select required ref={cryptoTypeRef} className="form-control">
                                                                            <option value="">Choose Wallet</option>
                                                                            <option value="bitcoin">Bitcoin</option>
                                                                            <option value="ethereum">Ethereum</option>
                                                                            <option value="litecoin">Litecoin</option>
                                                                            <option value="bitcoin cash">Bitcoin Cash</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                <p>Paste your wallet address</p>
                                                                    <div className="input-group mb-3">
                                                                        <input required ref={cryptoAddressRef} type="text" className="form-control text-center" placeholder="PASTE" />
                                                                    </div>
                                                                </div>

                                                                <button ref={buttonRef} className="btn btn-primary btn-block">Withdraw Now</button>
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