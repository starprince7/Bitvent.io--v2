import React, { useRef } from 'react'
import Header2 from "../layout/header2";
import Sidebar2 from "../layout/sidebar2";
import PageTitle from "../element/page-title";
import Footer2 from "../layout/footer2";
import { connect } from 'react-redux'
import { fetchWithdrawRequest } from '../../redux/app_state/actions'
import axios from 'axios'

function WithdrawRequests({ withdraw_request, fetchWithdrawRequest }) {
  const approve_btn_ref = useRef(null)
  const remove_btn_ref = useRef(null)


  const deleteRequest = (id) => {
    // delete Func block.
    const button = () => !window.event.target ? null : window.event.target
    // Dispatch Loader
    if (button) {
      button.textContent = "Deleting..."
      button.disabled = true
    }

    axios
      .delete(`/admin/request/${id}`)
      .then((result) => {
      //  Stop Loader
        if (button) {
          button.textContent = "Delete"
          button.disabled = false
        }
        result.data && alert("Withdrawal request deleted!");
        fetchWithdrawRequest()
      })
      .catch((error) => {
        console.log("ERR! Deleting Request ==>", error);
        // Stop Loader
        if (button) {
          button.textContent = "Delete Error"
          button.disabled = false
        }
      });
  };

  const approve_withdrawal_request = (id, amount, email, walletAddress) => {
    window.event.preventDefault();
    const button = window.event.target
    // Dispatch Loader
    button.textContent = "Loading..."
    button.disabled = true

    let options = {
      amount,
      email,
      walletAddress
    };

    axios.post("/admin/request/approval", options)
      .then(result => {

        const button = window.event.target
        // Dispatch Loader
        button.textContent = "Approved"
        button.disabled = false
      
      if (result.data ) {
        
        setTimeout(() => {       
          deleteRequest(id);  /* The ID is of the Request API and not the Customers APi */
        }, 500)

      }
        
    })
      .catch(error => {
        const button = window.event.target
        // Dispatch Loader
        button.textContent = "Error"
        button.disabled = false
        
        console.log("ERR! Aproving Withdraw Request ==>", error);
    })



  }

    return (
        <>
           <Header2 />
            <Sidebar2 />
            <PageTitle /> 
            <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header border-0">
                  <h4 className="card-title">Withdrawal Requests</h4>
                </div>
                <div className="card-body pt-0">
                  <div className="transaction-table">
                    <div className="table-responsive">
                      <table className="table mb-0 table-responsive-sm">
                        <tbody>
                          {
                            withdraw_request && withdraw_request.map( (request) => (
                              <tr key={request._id}>
                              <td><button ref={approve_btn_ref} onClick={() => approve_withdrawal_request(request._id, request.amount, request.email, request.walletAddress)} className="btn btn-success">Approve</button></td>
                                <td>
                                  <span className="badge badge-info">{ request.email }</span>
                                </td>

                                <td className="text-primary">{ request.amount }</td>
                                <td className="text-primary">{ request.crypto_type }</td>
                                <td className="text-primary">{ request.wallet_address }</td>
                                <td><button ref={remove_btn_ref} data-id={request._id} onClick={() => deleteRequest(request._id)} className="delete_btn btn btn-danger">Delete</button></td>
                            </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            <Footer2 />
        </>
    )
}

const mapStateToProps = state => {
    return {
        withdraw_request: state.dashboard_state.withdraw_request
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWithdrawRequest: () => dispatch(fetchWithdrawRequest())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(WithdrawRequests)
