import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { verifyUrl, saveNewPassword } from '../../redux/app_state/actions'


function ResetPassword({ verifyUrl, saveNewPassword, msg, error, user }) {

    const form_ref = useRef(null)
    const save_button_ref = useRef(null)
    
    useEffect(() => {
        // Grab the full window URL
        const URL = window.location.href

        verifyUrl(URL)
    }, [verifyUrl])

    const handle_reset_password_submit = (e) => {
        e.preventDefault()
        save_button_ref.current.textContent = "Saving..."
        save_button_ref.current.disabled = true
        const newPassword = form_ref.current.password.value
        const confirmPassword = form_ref.current.confirm_password.value
        
        const password_options = {
            newPassword,
            confirmPassword,
            _id: user._id
        }
        
        saveNewPassword(password_options)
    }

    useEffect(() => {
        if (error) {
            save_button_ref.current.textContent = "Save password"
            save_button_ref.current.disabled = false
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
                                    <h4 className="card-title">Enter a new password</h4>
                                </div>
                                <div className="card-body">
                                    { msg && <div class="alert alert-success" role="alert">
                                        { msg }
                                    </div> }
                                    <form ref={form_ref} onSubmit={handle_reset_password_submit}>
                                        <div className="form-group">
                                            <label>New Password</label>
                                            <input required type="password" className="form-control" name="password" placeholder="enter new password" />
                                        </div>
                                        <div className="form-group">
                                            <label>Confirm Password</label>
                                            <input required type="password" className="form-control" name="confirm_password" placeholder="please re-enter password" />
                                        </div>
                                        <div className="text-center">
                                            <button ref={save_button_ref} type="submit" className="btn btn-success btn-block">Save password</button>
                                        </div>
                                    </form>
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
        error: state.dashboard_state.error,
        user: state.dashboard_state.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        verifyUrl: (url) => dispatch(verifyUrl(url)),
        saveNewPassword: (option) => dispatch(saveNewPassword(option))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);