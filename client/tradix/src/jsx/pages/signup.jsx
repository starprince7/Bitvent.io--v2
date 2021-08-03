import React, { } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { RegisterUser } from '../../redux/app_state/actions'
import Footer2 from '../layout/footer2';


function Signup({ registerUser }) {
    const style = {
        marginBottom: '110px'
    }

    const handle_signup_submit = (e) => {
        e.preventDefault();

        // Grab form fields
        const form = document.querySelector('.signup_validate');
        const name = form.name.value;
        const lastname = form.lastname.value;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm_password.value;

        const new_user = {
            name,
            lastname,
            username,
            email,
            password,
            confirmPassword
        }

        registerUser(new_user)
        // console.log(new_user)
    }
    

    return (
        <>
            <div className="authincation" style={style}>
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-10 col-md-10">
                            {/* <div className="mini-logo text-center my-3">
                                <Link to={'./'}><img src={require('./../../images/logo.png')} alt="" /></Link>
                            </div> */}
                            <div className="auth-form card">
                                <div className="card-header justify-content-center">
                                    <h4 className="card-title">Create an Account</h4>
                                </div>
                                <div className="card-body">
                                    {/* ========= Form-Section ======== */}
                                    <form onSubmit={handle_signup_submit} name="myform" className="signup_validate">
                                        <div className="row">
                                            <div className="col-xl-6 col-md-6">
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input type="text" className="form-control" placeholder="Name" name="name" required />
                                                </div>  
                                            </div>
                                            <div className="col-xl-6 col-md-6">
                                                <div className="form-group">
                                                    <label>Last Name</label>
                                                    <input type="text" className="form-control" placeholder="Last name" name="lastname" required />
                                                </div> 
                                            </div>
                                            <div className="col-xl-6 col-md-6">
                                                <div className="form-group">
                                                    <label>Username</label>
                                                    <input type="text" className="form-control" placeholder="username" name="username" required />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-6">
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="email" className="form-control" placeholder="hello@example.com"
                                                        name="email" required />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-6">
                                                <div className="form-group">
                                                    <label>Password</label>
                                                    <input type="password" className="form-control" placeholder="Password"
                                                        name="password" required />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-6">
                                                <div className="form-group">
                                                    <label>Confirm Password</label>
                                                    <input type="password" className="form-control" placeholder="Confirm Password"
                                                        name="confirm_password" required />
                                                </div>
                                            </div>


                                        
                                        
                                        </div>
                                        <div className="text-center mt-4">
                                            <button type="submit" className="btn btn-success btn-block">Sign up</button>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                        <p>Already have an account? <Link className="text-primary" to={'login'}>Sign in</Link>
                                        </p>
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
            <br />
            <br />
            <Footer2 />
        </>
    )
}


const mapDispatchToProps = (dispatch, componentProps) => {
    return {
        registerUser: (user) => dispatch(RegisterUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Signup);