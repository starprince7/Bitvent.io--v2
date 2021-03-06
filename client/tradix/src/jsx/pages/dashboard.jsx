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
    // useEffect(() => {
    //     // Get The Refresh Count First!
    //     const num_of_refresh = JSON.parse(localStorage.getItem('num_of_refresh'))

    //      // On Component Mount Persist The Refresh Count onCondition Second
    //     localStorage.setItem('num_of_refresh', JSON.stringify((num_of_refresh >=2 ? -1 : num_of_refresh) + 1))

    //     setTimeout(() => {
    //         if (num_of_refresh <= 1) {
    //             window.location.reload()
    //         }
    //     }, 500)
    // }, [])

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

            <div className="content-body pr-3 py-0 mt-0">
                <div className="pl-3">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-xxl-12">
                            <div className="card balance-widget">
                                <div className="card-header border-0 py-0">
                                    {/* <h4 className="card-title">Your Portfolio </h4> */}
                                </div>
                                <div className="card-body mt-0 pt-0">
                                    <div className="balance-widget ">
                                        <Card
                                          bg="primary"
                                          text="white"
                                          className="text-center">
                                            <Card.Header className="text-capitalize" style={{ fontSize: '0.8rem'}}>{user?.name} { user?.lastname }</Card.Header>
                                            <Card.Footer>
                                                <Card.Title className="pt-2 pb-1">
                                                    <CurrencyFormat
                                                        renderText={(value) => (
                                                            <>
                                                            <p className="text-muted mb-2 mb-sm-3" style={{fontSize: '0.8rem'}}>Total Balance</p>
                                                            <p className="text-white px-4" style={{fontSize: '1.2rem'}}>
                                                                <i className="la la-wallet mr-1"></i>
                                                                <strong>{value} USDT</strong>
                                                            </p>
                                                            </>
                                                        )}
                                                        value={user ? user.wallet : 0}
                                                        decimalScale={2}
                                                        fixedDecimalScale={true}
                                                        thousandSeparator={true}
                                                        displayType={"text"}
                                                    />
                                                    {/* <br /> */}
                                                </Card.Title>
                                                
                                            </Card.Footer>
                                        </Card>
                                        <div className="d-flex justify-content-center">
                                            <Card.Text>
                                                <Link to="/buy-sell" style={{fontSize: '13px'}} className="ml-0 p-2 btn-success bg-success rounded-sm  text-white"><i className="fas fa-dollar-sign mr-1"></i> Deposit</Link>
                                            </Card.Text>
                                            <Card.Text>
                                                <Link to="/buy-sell" style={{fontSize: '13px'}} className="mx-1 p-2 btn-success bg-success rounded-sm text-white"><i class="fas fa-exchange-alt mr-1"></i> Exchange</Link>
                                            </Card.Text>
                                            <Card.Text>
                                                <Link to="/buy-sell" style={{fontSize: '13px'}} className="ml-0 p-2 btn-success bg-success rounded-sm text-white"><i className="fas fa-money-bill-wave mr-1"></i> Withdraw</Link>
                                            </Card.Text>
                                        </div>
                                        <div className="row">
                                            <div className="col col-lg-3 col-xl-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="mt-3 pl-2">
                                                            <p className="text-center font-weight-bold">Account Overview</p>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-xl-12 col-lg-12 col-xxl-12">
                                                                <div className="widget-card">
                                                                    <div className="d-flex justify-content-center text-center align-items-center">
                                                                        <div className="widget-stat">
                                                                            <div className="coin-title">
                                                                                <span><i className="fas fa-money-check-alt"></i></span> <br />
                                                                                <h5 className="d-inline-block ml-2 mb-3">Total Deposit <span>($)</span>
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
                                                                    <div className="d-flex justify-content-center text-center align-items-center">
                                                                        <div className="widget-stat">
                                                                            <div className="coin-title">
                                                                                <span><i className="fas fa-piggy-bank"></i></span> <br />
                                                                                <h5 className="d-inline-block ml-2 mb-3">Total Payouts <span>($)</span>
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
                                                                    <div className="d-flex justify-content-center text-center align-items-center">
                                                                        <div className="widget-stat">
                                                                            <div className="coin-title">
                                                                                <span><i className="fas fa-users"></i></span> <br />
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
                                                                    <div className="d-flex justify-content-center text-center align-items-center">
                                                                        <div className="widget-stat">
                                                                            <div className="coin-title">
                                                                                <span><i className="fas fa-money-bill-wave-alt"></i></span> <br />
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
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className=" pl-2">
                                                            <p className="text-center font-weight-bold text-sm">Cryptocurrency by Market Cap</p>
                                                        </div>
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