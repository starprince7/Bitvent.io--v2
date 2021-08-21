import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchWithdrawRequest } from '../../redux/app_state/actions'



function Sidebar2({ fetchWithdrawRequest, withdraw_request }) {

    const style = {
        fontSize: '11px',
        color: 'white',
        marginLeft: "-10px",
        display: 'inline-flex'
    }

    const icon_style = {
        fontSize: "14px",
        marginLeft: "-10px",
    }

    useEffect(() => {
        fetchWithdrawRequest()
    }, [fetchWithdrawRequest])

    return (
        <>
        {/* ADD BORDER RADIUS IN BOOTSTARP TO SIDE BAR */}
            <div className="sidebar">
                <div className="menu">
                    <ul>
                        <li>
                            <Link to={'./admin_dashboard'} data-toggle="tooltip" data-placement="right" title="Home">
                                <span><i style={icon_style} className="fas fa-users"></i></span><br />
                                <span style={style}>Accounts</span>
                            </Link>
                        </li>
                        {/* <li>
                            <Link to={'#'} data-toggle="tooltip" data-placement="right" title="Exchange">
                                <span><i style={icon_style} className="fas fa-funnel-dollar"></i></span>
                                <span style={style}>Fund Account</span>
                            </Link>
                        </li> */}
                        <li>
                            <Link to={'./admin_withdrawal_request'} data-toggle="tooltip" data-placement="right" title="Account">
                                <span><i style={icon_style} className="fas fa-money-check-alt"></i></span>
                                { withdraw_request?.length !== 0 &&
                                    <span style={{ fontSize: '9px' }} className="badge badge-pill badge-danger text-white">{ withdraw_request?.length }</span> }
                                <span style={style}>Withdraw Request</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'} data-toggle="tooltip" data-placement="right" title="Setting">
                                <span><i className="la la-tools"></i></span>
                                <span style={style}>Settings</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        withdraw_request: state.dashboard_state.withdraw_request
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchWithdrawRequest: () => dispatch(fetchWithdrawRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar2);