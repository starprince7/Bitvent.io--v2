import React, { useEffect, useState } from 'react';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchUser, fetchCrypto } from '../../redux/app_state/actions'
// Currency Module
import CurrencyFormat from 'react-currency-format'
import { Card } from 'react-bootstrap'



function Dashboard({ user, crypto, fetchUser, fetchCrypto }) {

    const [_crypto, setCrypto] = useState(null)

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

        if (user === null) {
            fetchUser();
        }

        // Note: check useCallback!
    }, [user, fetchUser])


    // Sum Deposits
    const totalDeposits =
      user &&
      user.deposit.reduce((acc, elem) => {
      return acc + elem;
    }, 0);

    // Sum Payouts
    const totalPayouts =
      user &&
      user.payouts.reduce((acc, elem) => {
      return acc + elem;
    }, 0);

    // FUNCTION TO ADD 5% ONTOP EVERY CRYPTO PRICE
    function spreadToAddPerctentage(object, percentage) {
        return {
            ...object,
            USD: {
                ...object.USD,
                PRICE: (( percentage / 100 ) * object.USD.PRICE) + object.USD.PRICE
            }
        }
    }

    useEffect(() => {
        fetchCrypto()
    }, [])

    useEffect(() => {
        crypto && setCrypto(crypto)
    }, [crypto])


    const tableData = _crypto && _crypto.map((oneCoin, index) => {
        let coin = spreadToAddPerctentage(oneCoin, 5)

        return (
            <tr key={coin.USD.FROMSYMBO}>
                <th scope='row'> { index + 1 } </th>
                <td><img src={`https://www.cryptocompare.com/${coin.USD.IMAGEURL}`} width="20" /> {coin.USD.FROMSYMBOL}</td>
                {/* COIN -PRICE- */}
                <td>
                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                                <strong>{value}</strong>
                            </>
                        )}
                        value={coin.USD.PRICE}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        thousandSeparator={true}
                        displayType={"text"}
                        prefix={"$"}
                    />
                </td>
                {/* COIN PRICE CHANGE */}
                <td>
                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                                <span className={`${Math.sign(Number(coin.USD.CHANGEPCTHOUR)) === -1 ||
                                    Math.sign(Number(coin.USD.CHANGEPCTHOUR)) === 0  ? 'text-danger' : 'text-success'}`}>
                                { value }%</span>
                            </>
                        )}
                        value={coin.USD.CHANGEPCTHOUR}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        thousandSeparator={true}
                        displayType={"text"}
                    />
                </td>
                <td><a href="/buy-sell"><button className="btn btn-success">Buy</button></a></td>
            </tr>
        )
    })

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
                <div className="pl-3">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-xxl-12">
                            <div className="exclude_default_card_style balance-widget">
                                <div className="card-header border-0 py-0">
                                    {/* <h4 className="card-title">Your Portfolio </h4> */}
                                </div>
                                <div className="card-body pt-0">
                                    <div className="balance-widget ">
                                        <Card
                                          bg="primary"
                                          text="white"
                                          className="text-center">
                                            <Card.Header style={{fontSize: '0.8rem', padding: 'none'}}>Wallet Balance</Card.Header>
                                            <Card.Footer>
                                                <Card.Title className="">
                                                    <CurrencyFormat
                                                        renderText={(value) => (
                                                            <>
                                                            <p className="text-white px-4 py-2" style={{fontSize: '1.5rem'}}>
                                                                <strong>{value}</strong>
                                                            </p>
                                                            </>
                                                        )}
                                                        value={user ? user.wallet : 0}
                                                        decimalScale={2}
                                                        fixedDecimalScale={true}
                                                        thousandSeparator={true}
                                                        displayType={"text"}
                                                        prefix={"$"}
                                                    />
                                                    {/* <br /> */}
                                                </Card.Title>
                                                <div className="d-flex justify-content-center">
                                                    <Card.Text>
                                                        <Link to="/buy-sell" style={{fontSize: '13px'}} className="ml-0 p-1 btn-success bg-success rounded-lg  text-white">DEPOSIT</Link>
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <Link to="/buy-sell" style={{fontSize: '13px'}} className="mx-2 p-1 btn-success bg-success rounded-lg  text-white">TRANSFER</Link>
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <Link to="/buy-sell" style={{fontSize: '13px'}} className="ml-0 p-1 btn-success bg-success rounded-lg text-white">WITHDRAW</Link>
                                                    </Card.Text>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                        <div className="row">
                                            <div className="col col-lg-3 col-xl-4">
                                                <div className=" border-0 mb-1 pl-2">
                                                    <h4 className="card-title">Account Overview</h4>
                                                </div>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-xl-12 col-lg-12 col-xxl-12">
                                                                <div className="widget-card">
                                                                    <div className="d-flex justify-content-between align-items-center">
                                                                        <div className="widget-stat">
                                                                            <div className="coin-title">
                                                                                <span><i className="fas fa-money-check-alt"></i></span>
                                                                                <h5 className="d-inline-block ml-2 mb-3">All-time Deposit <span>($)</span>
                                                                                </h5>
                                                                            </div>
                                                                            <h4>
                                                                                <CurrencyFormat
                                                                                    renderText={(value) => (
                                                                                    <>
                                                                                        <p>
                                                                                        <strong>{value}</strong>
                                                                                        </p>
                                                                                    </>
                                                                                    )}
                                                                                    value={user ? totalDeposits : 0}
                                                                                    decimalScale={2}
                                                                                    fixedDecimalScale={true}
                                                                                    thousandSeparator={true}
                                                                                    displayType={"text"}
                                                                                    prefix={"$"}
                                                                                />
                                                                                {totalDeposits > 2000 && (<span className="badge badge-success ml-2">+ 0.2%</span>)}
                                                                            </h4>
                                                                        </div>
                                                                        {/* <BtcChart /> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-xxl-12">
                                                                <div className="widget-card">
                                                                    <div className="d-flex justify-content-between align-items-center">
                                                                        <div className="widget-stat">
                                                                            <div className="coin-title">
                                                                                <span><i className="fas fa-piggy-bank"></i></span>
                                                                                <h5 className="d-inline-block ml-2 mb-3">All-time Payouts <span>($)</span>
                                                                                </h5>
                                                                            </div>
                                                                            <h4>
                                                                                <CurrencyFormat
                                                                                    renderText={(value) => (
                                                                                    <>
                                                                                        <p>
                                                                                        <strong>{value}</strong>
                                                                                        </p>
                                                                                    </>
                                                                                    )}
                                                                                    value={user ? totalPayouts : 0}
                                                                                    decimalScale={2}
                                                                                    fixedDecimalScale={true}
                                                                                    thousandSeparator={true}
                                                                                    displayType={"text"}
                                                                                    prefix={"$"}
                                                                                />
                                                                                {totalPayouts > 500 && (<span className="badge badge-success ml-2">+ 0.6%</span>)}
                                                                            </h4>
                                                                        </div>
                                                                        {/* <EthChart /> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-xxl-12">
                                                                <div className="widget-card">
                                                                    <div className="d-flex justify-content-between align-items-center">
                                                                        <div className="widget-stat">
                                                                            <div className="coin-title">
                                                                                <span><i className="fas fa-users"></i></span>
                                                                                <h5 className="d-inline-block ml-2 mb-3">Referrals <span>(accounts)</span>
                                                                                </h5>
                                                                            </div>
                                                                            <h4>{ user?.referral }</h4>
                                                                        </div>
                                                                        {/* <LtcChart /> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 col-xxl-12">
                                                                <div className="widget-card">
                                                                    <div className="d-flex justify-content-between align-items-center">
                                                                        <div className="widget-stat">
                                                                            <div className="coin-title">
                                                                                <span><i className="fas fa-money-bill-wave-alt"></i></span>
                                                                                <h5 className="d-inline-block ml-2 mb-3">Bonus <span>($)</span>
                                                                                </h5>
                                                                            </div>
                                                                            <h4>
                                                                                <CurrencyFormat
                                                                                    renderText={(value) => (
                                                                                    <>
                                                                                        <p>
                                                                                        <strong>{value}</strong>
                                                                                        </p>
                                                                                    </>
                                                                                    )}
                                                                                    value={user?.bonus}
                                                                                    decimalScale={2}
                                                                                    fixedDecimalScale={true}
                                                                                    thousandSeparator={true}
                                                                                    displayType={"text"}
                                                                                    prefix={"$"}
                                                                                />
                                                                                {user?.bonus > 500 && (<span className="badge badge-success ml-2">+ 0.6%</span>)}
                                                                            </h4>
                                                                        </div>
                                                                        {/* <XrpChart /> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col col-lg-9 col-xl-8">
                                                <br />
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">#</th>
                                                                        <th scope="col">Name</th>
                                                                        <th scope="col">Price</th>
                                                                        <th scope="col">Change</th>
                                                                        <th scope="col">Trade</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    { tableData }
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                        {/* --- Referral Link --- */}
                        <span className="p-2">
                            <strong>Referral Link:</strong><br />
                        </span>
                        <p className="p-2" style={{fontSize: "10px"}}>
                            
                            { `${window.location.hostname}/signup?ref=${user?._id}` }
                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xl-3 col-lg-12 col-xxl-12">
                        <ul className="list-unstyled">
                            <li className="media">
                                <i className="cc BTC mr-3"></i>
                                <div className="media-body">
                                    <h5 className="m-0">Bitcoin</h5>
                                </div>
                                <div className="text-right">
                                    <h5>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                            <>
                                                <p>
                                                <strong>{value}</strong>
                                                </p>
                                            </>
                                            )}
                                            value={cryptoPrice ? cryptoPrice.btc.price : 0}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            thousandSeparator={true}
                                            displayType={"text"}
                                            prefix={"$"}
                                        />
                                    </h5>
                                    <span>{Math.round(cryptoPrice ? cryptoPrice.btc.volume : 0)} (Volume)</span>
                                </div>
                            </li>
                            <li className="media">
                                    <i className="cc ETH mr-3"></i>
                                    <div className="media-body">
                                        <h5 className="m-0">Ethereum</h5>
                                    </div>
                                    <div className="text-right">
                                    <h5>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                            <>
                                                <p>
                                                <strong>{value}</strong>
                                                </p>
                                            </>
                                            )}
                                            value={cryptoPrice ? cryptoPrice.eth.price : 0}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            thousandSeparator={true}
                                            displayType={"text"}
                                            prefix={"$"}
                                        />
                                        </h5>
                                        <span>{Math.round(cryptoPrice ? cryptoPrice.eth.volume : 0)} (Volume)</span>
                                </div>
                            </li>
                            <li className="media">
                                <i className="cc LTC mr-3"></i>
                                <div className="media-body">
                                    <h5 className="m-0">Litecoin</h5>
                                </div>
                                <div className="text-right">
                                    <h5>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                            <>
                                                <p>
                                                <strong>{value}</strong>
                                                </p>
                                            </>
                                            )}
                                            value={cryptoPrice ? cryptoPrice.ltc.price : 0}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            thousandSeparator={true}
                                            displayType={"text"}
                                            prefix={"$"}
                                        />
                                    </h5>
                                    <span>{Math.round(cryptoPrice ? cryptoPrice.ltc.volume : 0)} (Volume)</span>
                                </div>
                            </li>

                            <li className="media">
                                <i className="cc BCH mr-3"></i>
                                <div className="media-body">
                                    <h5 className="m-0">Bitcoin Cash</h5>
                                </div>
                                <div className="text-right">
                                    <h5>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                            <>
                                                <p>
                                                <strong>{value}</strong>
                                                </p>
                                            </>
                                            )}
                                            value={cryptoPrice ? cryptoPrice.bch.price : 0}
                                            decimalScale={2}
                                            fixedDecimalScale={true}
                                            thousandSeparator={true}
                                            displayType={"text"}
                                            prefix={"$"}
                                        />
                                    </h5>
                                    <span>{Math.round(cryptoPrice ? cryptoPrice.bch.volume : 0)} (Volume)</span>
                                </div>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>

            <Footer2 />
        </>
    )
}

const mapStateToProps = (state, compOwnProp) => {
    return {
        user: state.dashboard_state.user,
        crypto: state.dashboard_state.cryptoPriceData
    }
}

const mapDispatchToProps = (dispatch, compOwnProp) => {
    return {
        fetchUser: () => dispatch(fetchUser()),
        fetchCrypto: () => dispatch(fetchCrypto()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);