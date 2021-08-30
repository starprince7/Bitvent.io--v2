import React, { } from 'react';
 import { Link } from 'react-router-dom';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import { connect } from 'react-redux'
// Image
import AvatarPlaceholder from '../../images/avatar/avatar_placeholder1.png'


function Accounts({ user }) {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="card profile_card">
                                <div className="card-body">
                                    <div className="media">
                                        <img className="mr-3 rounded-circle mr-0 mr-sm-3" src={ user?.image ? '/' + user?.image : AvatarPlaceholder } width="60"
                                            height="60" alt="" />
                                        <div className="media-body">
                                            <span>Hello</span>
                                            <h4 className="mb-2">{ user?.name } { user?.lastname }</h4>
                                            {/* <p className="mb-1"> <span><i className="fa fa-phone mr-2 text-primary"></i></span> +1
                                            235 5547</p> */}
                                            <p className="mb-1"> <span><i className="fa fa-envelope mr-2 text-primary"></i></span>
                                                { user?.email }
                                            </p>
                                        </div>
                                    </div>

                                    <ul className="card-profile__info">
                                        {/* <li>
                                            <h5 className="mr-4">Address</h5>
                                            <span className="text-muted">House 14, Road 9, Gulshan, Dhaka</span>
                                        </li>
                                        <li className="mb-1">
                                            <h5 className="mr-4">Total Log</h5>
                                            <span>103 Time (Today 5 Times)</span>
                                        </li> */}
                                        <li>
                                            <h5 className="text-danger mr-4">Last Log</h5>
                                            <span className="text-danger">{ user?.lastLogin }</span>
                                        </li>
                                    </ul>
                                    <div className="social-icons">
                                        <Link className="facebook text-center" to={'#'}><span><i
                                            className="fa fa-facebook"></i></span></Link>
                                        <Link className="twitter text-center" to={'#'}><span><i
                                            className="fa fa-twitter"></i></span></Link>
                                        <Link className="youtube text-center" to={'#'}><span><i
                                            className="fa fa-youtube"></i></span></Link>
                                        <Link className="googlePlus text-center" to={'#'}><span><i
                                            className="fa fa-google"></i></span></Link>
                                    </div>
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