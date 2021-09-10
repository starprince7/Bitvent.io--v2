import React, { useState, useRef, useEffect } from 'react'
import Header2 from "../layout/header2";
import Sidebar2 from "../layout/sidebar2";
import PageTitle from "../element/page-title";
import Footer2 from "../layout/footer2";
import axios from 'axios'
import { connect } from 'react-redux'
import { setLoading } from '../../redux/app_state/actions';
import CurrencyFormat from 'react-currency-format'

function SingleRoute(props) {

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

    const inputRef = useRef(null)
    const { setLoading } = props
    const [user, setUser] = useState(null)
    const [updateType, setUpdateType] = useState('')
    const email = props.match.params.email

    useEffect(() => {
        setLoading(true)
        const searchQuery = email;

        axios
          .post("/admin/customer", { searchQuery })
          .then((result) => {
            //   console.log("Single Route == >", result.data);
              setLoading(false)
              setUser(result.data);
    
          })
          .catch((error) => {
            console.log(error);
            setLoading(false)
          });
    }, [setLoading, email])


    const fund_customer_wallet = (e) => {
        e.preventDefault()
        setLoading(true)
        const amount = inputRef.current.value

        const options = {
            searchQuery: user.email,
            amount,
            depositCondition: updateType
          };
      
          axios
            .post("/admin/all-customers", options)
            .then((result) => {
                console.log(result.data);
                //   setUser(result.data);
                result.data.msg && alert("Success! Wallet updated");
                
        
                // Fire Same Function-Block inside the "useEffect" Hook.
                const searchQuery = email;
                axios
                .post("/admin/customer", { searchQuery })
                .then((result) => {
                    console.log("Single Route == >", result.data);
                    setLoading(false)
                    setUser(result.data); 
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false)
                });
      
      
            })
            .catch(e => {
                setLoading(false)
                console.log(e)
            })
    }


    const deleteUser = (user) => {
        if (user.role !== 'admin') {
            const user_response = window.confirm(
            'You are about to delete a Customer click "OK" to continue with this task! '
          );
          
          if (user_response) {
                // Start Loader here first!
                setLoading(true)
        
                axios
                .delete(`/admin/customer/${user._id}`)
                .then((result) => {
                // console.log("RESPONSE!! for Delete request", result.data.msg);
        
                    setLoading(false)
                    alert("Customer deleted permanently!");
                    props.history.push("/admin_dashboard")
                })
                .catch((error) => {
                    console.log("ERR! Deleting A User! ==>", error);
                    setLoading(false)
                });
            }
    
        } else {
            alert("Sorry, cannot delete admin account!")
        }
    
    };
    
    // Calc. Deposits
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
            <Sidebar2 />
            <PageTitle />
            <div className="content-body">
                <div className="container-fluid">
                <div className="card profile_card">
                <div className="card-body">
                    <div className="media">
                        <img className="mr-3 rounded-circle mr-0 mr-sm-3" src={require('./../../images/profile/2.png')} width="60"
                            height="60" alt="" />
                        <div className="media-body">
                            <span>Hello</span>
                            <h4 className="mb-2">{ user?.name } { user?.lastname }</h4>
                            <p className="mb-1"> <span><i className="text-muted fas fa-wallet text-primary mr-2"></i>Customer Wallet :</span>
                                <CurrencyFormat
                                    renderText={(value) => (
                                    <>
                                        <p>
                                        <strong>{value}</strong>
                                        </p>
                                    </>
                                    )}
                                    value={ user?.wallet }
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                    thousandSeparator={true}
                                    displayType={"text"}
                                    prefix={"$"}
                                />
                            </p>
                            <p className="mb-1"> <span><i className="fa fa-envelope mr-2 text-primary"></i></span>
                                { user?.email }
                            </p>
                        </div>
                    </div>

                    <ul className="card-profile__info">
                        <li>
                            <h5 className="mr-4">Total Deposits:</h5>
                            <span className="text-muted">
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
                            </span>
                        </li>
                        <li>
                            <h5 className="mr-4">Total Payouts:</h5>
                            <span className="text-muted">
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
                            </span>
                        </li>
                        <li className="mb-1">
                            <h5 className="mr-4">Registered on:</h5>
                            <span>{ user?.date }</span>
                        </li>
                        <li className="mb-1">
                            <h5 className="mr-4">Last Logged in:</h5>
                            <span>{ user?.lastLogin }</span>
                        </li>
                        {/* <li>
                            <h5 className="text-danger mr-4">Action</h5>
                            <span onClick={() => deleteUser(user)} className=" btn btn-danger"><strong>Delete Account</strong></span>
                        </li> */}
                    </ul>

                </div>
                <div className="card-body">
                        <form className="form" onSubmit={fund_customer_wallet}>
                            <p className="mr-sm-2">Fund Wallet</p>
                            <div className="form-group mb-5">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        {/* <label className="input-group-text"><i className="fa fa-money"></i></label> */}
                                </div>
                                    <input ref={inputRef} type="number" name="deposit_amount"  className="form-control text-center" placeholder="Enter Amount" />
                                </div>
                            </div>
                                <div className="form-group">
                                <p className="mr-sm-2">Fund Options</p>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text"><i className="text-muted fas fa-money-bill-wave-alt"></i></label>
                                    </div>
                                    <select required onChange={(e) => setUpdateType(e.target.value)}  name="plan_type" className="form-control">
                                        {/* <option>Bank of America ********45845</option> */}
                                        {/* <option>Master Card ***********5458</option> */}
                                        <option value="">wallet update type </option>
                                        <option value="topUp">Daily Top-up  ( for daily trade top-up )</option>
                                        <option value="add">Add-Fund</option>
                                        <option value="subtract">Subtract-Fund</option>
                                    </select>
                                </div>
                            </div>

                            <button  type="submit" name="submit" className="btn btn-success btn-block mt-1">Update Wallet</button>
                        </form>
                    </div>
                    <div className="container-fluid">
                        <h3 className="text-primary my-5">Danger Zone</h3>
                        <span onClick={() => deleteUser(user)} className=" btn btn-danger"><strong>Delete Account</strong></span>
                    </div>
            </div>
                </div>
            </div>
            <Footer2 />
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setLoading: (boolean) => dispatch(setLoading(boolean))
    }
}

export default connect(null, mapDispatchToProps)(SingleRoute)
