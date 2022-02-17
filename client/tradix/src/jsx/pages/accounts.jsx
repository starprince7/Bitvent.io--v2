import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react';
 import { Link } from 'react-router-dom';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import { connect } from 'react-redux'
import CurrencyFormat from 'react-currency-format'
import { Accordion, Tabs,Tab, Card } from 'react-bootstrap';
// Image
import AvatarPlaceholder from '../../images/avatar/avatar_placeholder1.png'
import btc from '../../images/bitvent/crypto_logo/btc.png'
import eth from '../../images/bitvent/crypto_logo/eth.png'
import usdt from '../../images/bitvent/crypto_logo/usdt.png'
import bnb from '../../images/bitvent/crypto_logo/bnb.png'
import ada from '../../images/bitvent/crypto_logo/ada.png'
import ltc from '../../images/bitvent/crypto_logo/ltc.png'
import sol from '../../images/bitvent/crypto_logo/sol.png'
import xrp from '../../images/bitvent/crypto_logo/xrp.png'
import doge from '../../images/bitvent/crypto_logo/doge.png'


function Accounts({ user }) {

    const [total, setTotal] = useState(null)
    // DOM Reference here
    const cryptoTypeRef = useRef(null)
    const cryptoAddressRef = useRef(null)
    const inputRef = useRef(null)
    const buttonRef = useRef(null)

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
        const total = (
            user?.bitcoin_wallet +
            user?.ethereum_wallet +
            user?.tether_wallet +
            user?.binancecoin_wallet +
            user?.cardano_wallet +
            user?.litecoin_wallet +
            user?.solana_wallet +
            user?.ripple_wallet +
            user?.dogecoin_wallet
        )

        setTotal(total)
    }, [user])

    const handle_withdraw_submit = (e) => {
        e.preventDefault()

        
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
                buttonRef.current.textContent = "Withdraw"
                buttonRef.current.disabled = false
                // console.log(result);
                // console.log(result.data);

                result.data && alert(`You have just requested a withdrawal, $${amount} will be sent to your wallet address shortly.`)
                // Reset Withdrawal Form field.
                inputRef.current.value = ""
                cryptoTypeRef.current.value = ""
                cryptoAddressRef.current.value = ""
                
            })
            .catch(error => {
                buttonRef.current.textContent = "Withdraw"
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
                <div className="container-fluid exclude_default_card_style">
                    <div className="mb-4 pl-2 ml-sm-5 pl-sm-4">
                        <p><strong>Portfolio Balance</strong></p>
                        <h2>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                        <strong>{value}</strong>
                                    </>
                                )}
                                value={user ? total : 0}
                                decimalScale={2}
                                fixedDecimalScale={true}
                                thousandSeparator={true}
                                displayType={"text"}
                                prefix={"$"}
                            />
                        </h2>
                        <div className="nav-buttons mb-4 d-flex my-4" style={{fontSize: '13px'}}>
                            <a href="buy-sell" className="rounded-lg btn btn-outline-primary p-2 mr-3">Exchange</a>
                            <a href="buy-sell" className="rounded-lg btn btn-outline-primary p-2 mr-3">Deposit</a>
                        </div>
                    </div>
                    <div className="row ml-md-5">
                        <div className="col-xl-8 col-lg-8 col-md-6">
                            <div className="card profile_card px-3">
                                <div className="card-body buy-sell-widget">
                                    
                                    {/* TABLE SHOWING WALLET BALANCE OF COINS */}
                                    <div className="buy-sell-widget"></div>
                                    <Tabs defaultActiveKey="Assets" id="uncontrolled-tab-example">
                                        <Tab eventKey="Assets" title="Assets">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <th width="10"><img src={btc} alt="crypto Icon" width={30} /></th>
                                                        <td>Bitcoin</td>
                                                        <td>
                                                            <CurrencyFormat
                                                                renderText={(value) => (
                                                                    <>
                                                                        <strong>{value}</strong>
                                                                    </>
                                                                )}
                                                                value={user ? user.bitcoin_wallet : 0}
                                                                decimalScale={2}
                                                                fixedDecimalScale={true}
                                                                thousandSeparator={true}
                                                                displayType={"text"}
                                                                prefix={"$"}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th width="10"><img src={eth} alt="crypto Icon" width={30} /></th>
                                                        <td>Ethereum</td>
                                                        <td>
                                                            <CurrencyFormat
                                                                renderText={(value) => (
                                                                    <>
                                                                        <strong>{value}</strong>
                                                                    </>
                                                                )}
                                                                value={user ? user.ethereum_wallet : 0}
                                                                decimalScale={2}
                                                                fixedDecimalScale={true}
                                                                thousandSeparator={true}
                                                                displayType={"text"}
                                                                prefix={"$"}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th width="10"><img src={usdt} alt="crypto Icon" width={30} /></th>
                                                        <td>Tether</td>
                                                        <td>
                                                            <CurrencyFormat
                                                                renderText={(value) => (
                                                                    <>
                                                                        <strong>{value}</strong>
                                                                    </>
                                                                )}
                                                                value={user ? user.tether_wallet : 0}
                                                                decimalScale={2}
                                                                fixedDecimalScale={true}
                                                                thousandSeparator={true}
                                                                displayType={"text"}
                                                                prefix={"$"}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th width="10"><img src={bnb} alt="crypto Icon" width={30} /></th>
                                                        <td>Binance Coin</td>
                                                        <td>
                                                            <CurrencyFormat
                                                                renderText={(value) => (
                                                                    <>
                                                                        <strong>{value}</strong>
                                                                    </>
                                                                )}
                                                                value={user ? user.binancecoin_wallet : 0}
                                                                decimalScale={2}
                                                                fixedDecimalScale={true}
                                                                thousandSeparator={true}
                                                                displayType={"text"}
                                                                prefix={"$"}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th width="10"><img src={ada} alt="crypto Icon" width={30} /></th>
                                                        <td>Cardano</td>
                                                        <td>
                                                            <CurrencyFormat
                                                                renderText={(value) => (
                                                                    <>
                                                                        <strong>{value}</strong>
                                                                    </>
                                                                )}
                                                                value={user ? user.cardano_wallet : 0}
                                                                decimalScale={2}
                                                                fixedDecimalScale={true}
                                                                thousandSeparator={true}
                                                                displayType={"text"}
                                                                prefix={"$"}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th width="10"><img src={ltc} alt="crypto Icon" width={30} /></th>
                                                        <td>Litecoin</td>
                                                        <td>
                                                            <CurrencyFormat
                                                                renderText={(value) => (
                                                                    <>
                                                                        <strong>{value}</strong>
                                                                    </>
                                                                )}
                                                                value={user ? user.litecoin_wallet : 0}
                                                                decimalScale={2}
                                                                fixedDecimalScale={true}
                                                                thousandSeparator={true}
                                                                displayType={"text"}
                                                                prefix={"$"}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th width="10"><img src={sol} alt="crypto Icon" width={30} /></th>
                                                        <td>Solana</td>
                                                        <td>
                                                            <CurrencyFormat
                                                                renderText={(value) => (
                                                                    <>
                                                                        <strong>{value}</strong>
                                                                    </>
                                                                )}
                                                                value={user ? user.solana_wallet : 0}
                                                                decimalScale={2}
                                                                fixedDecimalScale={true}
                                                                thousandSeparator={true}
                                                                displayType={"text"}
                                                                prefix={"$"}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th width="10"><img src={xrp} alt="crypto Icon" width={30} /></th>
                                                        <td>Ripple</td>
                                                        <td>
                                                            <CurrencyFormat
                                                                renderText={(value) => (
                                                                    <>
                                                                        <strong>{value}</strong>
                                                                    </>
                                                                )}
                                                                value={user ? user.ripple_wallet : 0}
                                                                decimalScale={2}
                                                                fixedDecimalScale={true}
                                                                thousandSeparator={true}
                                                                displayType={"text"}
                                                                prefix={"$"}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th width="10"><img src={doge} alt="crypto Icon" width={30} /></th>
                                                        <td>Dogecoin</td>
                                                        <td>
                                                            <CurrencyFormat
                                                                renderText={(value) => (
                                                                    <>
                                                                        <strong>{value}</strong>
                                                                    </>
                                                                )}
                                                                value={user ? user.doge_wallet : 0}
                                                                decimalScale={2}
                                                                fixedDecimalScale={true}
                                                                thousandSeparator={true}
                                                                displayType={"text"}
                                                                prefix={"$"}
                                                            />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        </Tab>
                                        <Tab eventKey="Withdraw" title="Withdraw">
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
                                                        <div className="form-group">
                                                        <p>Paste your wallet address</p>
                                                            <div className="input-group mb-3">
                                                                <input required ref={cryptoAddressRef} type="text" className="form-control text-center" placeholder="PASTE" />
                                                            </div>
                                                        </div>

                                                        <button ref={buttonRef} className="btn btn-primary btn-block">Withdraw</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="card acc_balance">
                                <div className="card-header">
                                    <h4 className="card-title">Wallet</h4>
                                </div>
                                <div className="card-body">
                                    <span>Available BTC</span>
                                    <h3>0.0230145 BTC</h3>

                                    <div className="d-flex justify-content-between my-4">
                                        <div>
                                            <p className="mb-1">Buy this month</p>
                                            <h4>3.0215485 BTC</h4>
                                        </div>
                                        <div>
                                            <p className="mb-1">Sell this month</p>
                                            <h4>3.0215485 BTC</h4>
                                        </div>
                                    </div>

                                    <div className="btn-group mb-3">
                                        <button className="btn btn-primary">Sell</button>
                                        <button className="btn btn-success">Buy</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <Footer2 />
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.dashboard_state.user
    }
}

export default connect(mapStateToProps)(Accounts);