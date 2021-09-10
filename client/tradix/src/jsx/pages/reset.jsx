import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { recoverPassword } from '../../redux/app_state/actions'


function Reset({ recoverPassword, msg, error }) {

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

    const form_ref = useRef(null)
    const recover_btn_ref = useRef(null)

    const handle_forgot_password_submit = (e) => {
        e.preventDefault()
        recover_btn_ref.current.textContent = "Recovering..."
        recover_btn_ref.current.disabled = true
        const email = form_ref.current.email.value
        
        recoverPassword(email)
    }

    useEffect(() => {
        if (msg || error) {
            recover_btn_ref.current.textContent = "Recover"
            recover_btn_ref.current.disabled = false
        }
    }, [msg, error])

    return (
        <>
            <div className="authincation section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            {/* <div className="mini-logo text-center my-5">
                                <Link to={'./'}><img src={require('./../../images/logo.png')} alt="" /></Link>
                            </div> */}
                            <div className="auth-form card">
                                <div className="card-header justify-content-center">
                                    <h4 className="card-title">Forgot Password</h4>
                                </div>
                                <div className="card-body">
                                    { msg && <div class="alert alert-success" role="alert">
                                        { msg }
                                    </div> }
                                    <form ref={form_ref} onSubmit={handle_forgot_password_submit}>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input required type="email" className="form-control" name="email" placeholder="enter your email address" />
                                        </div>
                                        <div className="text-center">
                                            <button ref={recover_btn_ref} type="submit" className="btn btn-success btn-block mb-2">Recover-account</button>
                                        </div>
                                    </form>
                                    <p style={{fontSize: "13px"}}>Re-gain access to your account, follow the prompt!</p>
                                    {/* <div className="new-account mt-3">
                                        <p className="mb-1">Don't Received? </p>
                                        <Link className="text-primary" to={'./reset'}>Resend </Link>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        msg: state.dashboard_state.msg,
        error: state.dashboard_state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        recoverPassword: (email) => dispatch(recoverPassword(email))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset);