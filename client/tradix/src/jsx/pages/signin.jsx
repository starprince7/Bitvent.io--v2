import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { logUserIn } from '../../redux/app_state/actions'
import Footer2 from '../layout/footer2';
import WWFX_LOGO  from '../../images/wealth_wise.png'


function Signin({ logUserIn }) {

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

    const handle_login_submit = (e) => {
        e.preventDefault()

        // Grab form
        const form = document.querySelector('.signin_validate');
        const email = form.email.value;
        const password = form.password.value;

        const Client = {
            email,
            password
        }

        logUserIn(Client);
        
    }

    return (
        <>
            <div className="authincation">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="mini-logo text-center mb-5">
                                <Link to={'./'}>
                                    <img src={WWFX_LOGO} alt="Logo" />
                                </Link>
                            </div>
                            <div className="auth-form card pb-5">
                                <div className="card-header justify-content-center">
                                    <h4 className="card-title">Log in</h4>
                                </div>
                                <div className="card-body p-4">
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
                                            <button type="submit" className="btn btn-success btn-block">Sign in</button>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
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
        logUserIn: (user) => dispatch(logUserIn(user))
    }
}

export default connect(null, mapDispatchToProps)(Signin);