import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { DropdownButton, } from 'react-bootstrap'
// Error popup
import ErrorPopup from '../element/error-popup'
// Action
import { logUserOut } from '../../redux/app_state/actions'

import { setUser } from '../../redux/app_state/actions'
import axios from 'axios'
import WWFX_LOG0 from '../../images/wealth_wise.png'
import CurrencyFormat from 'react-currency-format';
// Image
import AvatarPlaceholder from '../../images/avatar/avatar_placeholder1.png'


function Header2({ user, logUserOut, setUser, cryptoPrice }) {
    // Authenticate the App First!
    // Server does the Bouncing
    useEffect(() => {
        // authenticate App with Server!
        axios.get("/verify-cookie")
        .then(response => {
            if (response.data.redirect) {
                alert("Session expired, Please Login!")
                window.location.assign(response.data.redirect)
            }

            if (response.data.customer) setUser(response.data.customer)
        })
        .catch(e => {
            console.log(e)
        })
    }, [])


    useEffect(() => {
        // grab user ID from localStorage.
        // Try-catch for Privacy settings restriction.
        try {
            const user = localStorage.getItem("user")
            // console.log('I have the user ID >>>',  user)
            // console.log('I have the user ID >>>',  JSON.parse(user))

            if (user) {
                const userId = JSON.parse(user);

                if (userId !== undefined) {
                    axios.get(`admin/customer/${userId}`)
                    .then((response) => {
                        // Now 'dispatch' this
                        // data to the App State!
                        // After condition.
                        if (!response.data.redirect) {
                            setUser(response.data.customer)
                            // dispatch(setLoading(false))
                        } else {
                            window.location.assign(response.data.redirect);
                        };
                    })
                }
                    
            } else return
            
        } catch (e) {
            console.log(e)
        }
    }, [])

    const handle_logout = () => {
        // Call logout logic from Redux
        logUserOut()
    }
    

    return (
        <>
            <ErrorPopup />
            <div className="header dashboard">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <nav className="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
                                <Link className="navbar-brand" to={'/'}>
                                    <img src={WWFX_LOG0} alt="Logo" />
                                </Link>

                                <div className="dashboard_log my-2">
                                    <div className="d-flex align-items-center">
                                        <div className="account_money">
                                            <ul>
                                                <li className="crypto">
                                                    <span>0.0025</span>
                                                    <i className="cc BTC"></i>
                                                </li>
                                                <li className="usd">
                                                        <CurrencyFormat
                                                            renderText={(value) => (
                                                            <>
                                                                <span>
                                                                <strong>{value}</strong>
                                                                </span>
                                                            </>
                                                            )}
                                                            value={cryptoPrice?.btc.price}
                                                            decimalScale={2}
                                                            fixedDecimalScale={true}
                                                            thousandSeparator={true}
                                                            displayType={"text"}
                                                            prefix={"$"}
                                                        />
                                                </li>
                                            </ul>
                                        </div>
                                        <img className="mr-3 rounded-circle mr-0 mr-sm-3" src={ user?.image ? '/' + user?.image : AvatarPlaceholder } width="30"
                                            height="30" alt="profile" />
                                        <DropdownButton
                                            alignRight
                                            title={'profile'}
                                            className="profile_log"
                                        >
                                            <Link to={'./accounts'} className="dropdown-item">
                                                <i className="la la-user"></i> <span style={{fontSize: "9px"}}>{user?.email}</span> 
                                            </Link>
                                            {/* <Link to={'./history'} className="dropdown-item">
                                                <i className="la la-book"></i> History
                                            </Link> */}
                                            <Link to={'./settings'} className="dropdown-item">
                                                <i className="la la-cog"></i> Setting
                                            </Link>
                                            <Link to={'./lock'} className="dropdown-item">
                                                <i className="la la-lock"></i> Lock
                                            </Link>
                                            <Link to={'#'} onClick={handle_logout} className="dropdown-item logout">
                                                <i className="la la-sign-out"></i> Logout
                                            </Link>
                                        </DropdownButton>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        logUserOut: () => dispatch(logUserOut()),
        setUser: (user) => dispatch(setUser(user))
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.dashboard_state.user,
        cryptoPrice: state.dashboard_state.cryptoPrice,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header2);