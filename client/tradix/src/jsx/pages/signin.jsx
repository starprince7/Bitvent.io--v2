import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { logUserIn } from '../../redux/app_state/actions'
import Footer2 from '../layout/footer2';
import HeaderSignUp from '../layout/header_signup'


function Signin({ logUserIn }) {

    const btn_ref = useRef(null)

    const handle_login_submit = (e) => {
        e.preventDefault()

        // Grab form
        const form = document.querySelector('.signin_validate');
        const email = form.email.value;
        const password = form.password.value;
        const button = btn_ref.current

        const Client = {
            email,
            password
        }

        logUserIn(Client, button);
        
    }

    return (
        <>
            <HeaderSignUp />
            <div className="authincation card">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="auth-form card pb-5">
                                <div className="card-body p-4">
                                    <div className="card-header justify-content-center">
                                        <h4 className="card-title">Log in</h4>
                                    </div>
                                    <form onSubmit={handle_login_submit} name="myform" className="signin_validate" action="#">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" placeholder="Enter your email"
                                                name="email" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="Password"
                                                name="password" required />
                                        </div>
                                        <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                            <div className="form-group mb-0">
                                                <label className="toggle">
                                                    <input className="toggle-checkbox" type="checkbox" />
                                                    <span className="toggle-switch"></span>
                                                    <span className="toggle-label">Remember me</span>
                                                </label>
                                            </div>
                                            <div className="form-group mb-0">
                                                <Link to="/reset" style={{fontSize: '13px'}}>Forgot Password?</Link>
                                            </div>
                                        </div>
                                        <div className="text-center mt-4">
                                            <button type="submit" ref={btn_ref} className="btn btn-success btn-block">Sign in</button>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3 text-center">
                                        <p>Don't have an account? <Link className="text-primary" to='/signup'>Sign
                                            up</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer2 />
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logUserIn: (user, button) => dispatch(logUserIn(user, button))
    }
}

export default connect(null, mapDispatchToProps)(Signin);