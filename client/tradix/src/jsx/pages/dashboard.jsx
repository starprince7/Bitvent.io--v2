import React, { useEffect } from 'react';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
// import BtcChart from '../charts/btc';
// import EthChart from '../charts/eth';
// import LtcChart from '../charts/ltc';
// import XrpChart from '../charts/xrp';
import AreaChart from '../charts/area';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/app_state/actions'
// Currency Module
import CurrencyFormat from 'react-currency-format'
import axios from 'axios'



function Dashboard({ user, fetchUser }) {

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

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-xxl-4">
                            <div className="card balance-widget">
                                <div className="card-header border-0 py-0">
                                    <h4 className="card-title">Your Portfolio </h4>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="balance-widget">
                                        <div className="total-balance">
                                            <h3>
                                                <CurrencyFormat
                                                    renderText={(value) => (
                                                        <>
                                                        <p>
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
                                            </h3>
                                            <h6>Total Balance</h6>
                                        </div>
                                        
                                <div className="card">
                                    <div className="card-header border-0 py-0">
                                        {/* <h4 className="card-title">Account Overview</h4> */}
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-6 col-xxl-6">
                                                <div className="widget-card">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="widget-stat">
                                                            <div className="coin-title">
                                                                <span><i className="fas fa-money-check-alt"></i></span>
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
                                            <div className="col-xl-12 col-lg-6 col-xxl-6">
                                                <div className="widget-card">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="widget-stat">
                                                            <div className="coin-title">
                                                                <span><i class="fas fa-piggy-bank"></i></span>
                                                                <h5 className="d-inline-block ml-2 mb-3">Total Payout <span>($)</span>
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
                                            <div className="col-xl-12 col-lg-6 col-xxl-6">
                                                <div className="widget-card">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="widget-stat">
                                                            <div className="coin-title">
                                                                <span><i class="fas fa-users"></i></span>
                                                                <h5 className="d-inline-block ml-2 mb-3">Referrals <span>(accounts)</span>
                                                                </h5>
                                                            </div>
                                                            <h4>{ user?.referral }</h4>
                                                        </div>
                                                        {/* <LtcChart /> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-6 col-xxl-6">
                                                <div className="widget-card">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="widget-stat">
                                                            <div className="coin-title">
                                                                <span><i class="fas fa-money-bill-wave-alt"></i></span>
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
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-8 col-xxl-8">
                            <div className="card profile_chart">
                                <div className="card-header py-0">
                                    <div className="chart_current_data">
                                        <h3>254856 <span>USD</span></h3>
                                        <p className="text-success">125648 <span>USD (20%)</span></p>
                                    </div>
                                    {/* <div className="duration-option">
                                        <Linkid="all" className="active">ALL</Link>
                                        <Linkid="one_month" className="">1M</Link>
                                        <Linkid="six_months">6M</Link>
                                        <Linkid="one_year" className="">1Y</Link>
                                        <Linkid="ytd" className="">YTD</Link>
                                    </div> */}
                                </div>
                                <div className="card-body">
                                    <AreaChart />
                                    <div className="chart-content text-center">
                                        <div className="row">
                                            <div className="col-xl-3 col-sm-6 col-6">
                                                <div className="chart-stat">
                                                    <p className="mb-1">24hr Volume</p>
                                                    <h5>$1236548.325</h5>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6 col-6">
                                                <div className="chart-stat">
                                                    <p className="mb-1">Market Cap</p>
                                                    <h5>19B USD</h5>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6 col-6">
                                                <div className="chart-stat">
                                                    <p className="mb-1">Circulating Supply</p>
                                                    <h5>29.4M BTC</h5>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6 col-6">
                                                <div className="chart-stat">
                                                    <p className="mb-1">All Time High</p>
                                                    <h5>19.783.06 USD</h5>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6 col-6">
                                                <div className="chart-stat">
                                                    <p className="mb-1">Typical hold time </p>
                                                    <h5>88 days</h5>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6 col-6">
                                                <div className="chart-stat">
                                                    <p className="mb-1">Trading activity </p>
                                                    <h5>70% buy </h5>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6 col-6">
                                                <div className="chart-stat">
                                                    <p className="mb-1">Popularity </p>
                                                    <h5>#1 most held </h5>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-sm-6 col-6">
                                                <div className="chart-stat">
                                                    <p className="mb-1">Popularity </p>
                                                    <h5>#1 most held </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Account Overview */}
                        <div className="col-xl-3 col-lg-12 col-xxl-12">
                        <ul className="list-unstyled">
                                            <li className="media">
                                                <i className="cc BTC mr-3"></i>
                                                <div className="media-body">
                                                    <h5 className="m-0">Bitcoin</h5>
                                                </div>
                                                <div className="text-right">
                                                    <h5>0.000242 BTC</h5>
                                                    <span>0.125 USD</span>
                                                </div>
                                            </li>
                                            <li className="media">
                                                <i className="cc LTC mr-3"></i>
                                                <div className="media-body">
                                                    <h5 className="m-0">Litecoin</h5>
                                                </div>
                                                <div className="text-right">
                                                    <h5>0.000242 LTC</h5>
                                                    <span>0.125 USD</span>
                                                </div>
                                            </li>
                                            <li className="media">
                                                <i className="cc XRP mr-3"></i>
                                                <div className="media-body">
                                                    <h5 className="m-0">Ripple</h5>
                                                </div>
                                                <div className="text-right">
                                                    <h5>0.000242 XRP</h5>
                                                    <span>0.125 USD</span>
                                                </div>
                                            </li>
                                            <li className="media">
                                                <i className="cc DASH mr-3"></i>
                                                <div className="media-body">
                                                    <h5 className="m-0">Dash</h5>
                                                </div>
                                                <div className="text-right">
                                                    <h5>0.000242 XRP</h5>
                                                    <span>0.125 USD</span>
                                                </div>
                                            </li>
                                        </ul>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-xl-3 col-lg-4 col-xxl-4">
                            <div className="card">
                                <div className="card-header border-0 py-0">
                                    <h4 className="card-title">Deposit</h4>
                                </div>
                                <div className="card-body">
                                    <div className="buy-sell-widget">
                                        <form method="post" name="myform" className="currency_validate">
                                            <div className="form-group">
                                                <label className="mr-sm-2">Currency</label>
                                                <div className="input-group mb-3">
                                                    <select name='currency' className="form-control">
                                                        <option data-display="Bitcoin" value="bitcoin">Bitcoin</option>
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
                                                        <option data-display="Bitcoin" value="bitcoin">Bitcoin</option>
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
                                            <button type="submit" name="submit" className="btn btn-success btn-block">Exchange
                                            Now</button>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-xxl-4">
                            <div className="card">
                                <div className="card-header border-0 py-0">
                                    <h4 className="card-title">Withdraw</h4>
                                </div>
                                <div className="card-body">
                                    <div className="buy-sell-widget">
                                        <form method="post" name="myform" className="currency_validate">
                                            <div className="form-group">
                                                <label className="mr-sm-2">Currency</label>
                                                <div className="input-group mb-3">
                                                    <select name='currency' className="form-control">
                                                        <option data-display="Bitcoin" value="bitcoin">Bitcoin</option>
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
                                                        <option data-display="Bitcoin" value="bitcoin">Bitcoin</option>
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
                                            <button type="submit" name="submit" className="btn btn-success btn-block">Exchange
                                            Now</button>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> */}
                </div>
            </div>

            <Footer2 />
        </>
    )
}

const mapStateToProps = (state, compOwnProp) => {
    return {
        user: state.dashboard_state.user
    }
}

const mapDispatchToProps = (dispatch, compOwnProp) => {
    return {
        fetchUser: () => dispatch(fetchUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);