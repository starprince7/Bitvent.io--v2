import React from 'react'
import Header2 from "../layout/header2";
import Sidebar2 from "../layout/sidebar2";
import PageTitle from "../element/page-title";
import Footer2 from "../layout/footer2";
import { connect } from 'react-redux'
import { fetchWithdrawRequest } from '../../redux/app_state/actions'

function WithdrawRequests({ withdraw_request }) {
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
                              <td><button onClick={() => alert("Not-working for now!")} className="btn btn-success">Approve</button></td>
                                <td>
                                  <span className="badge badge-info">{ request.email }</span>
                                </td>

                                <td className="text-primary">{ request.amount }</td>
                                <td className="text-primary">{ request.crypto_type }</td>
                                <td className="text-primary">{ request.wallet_address }</td>
                                <td><button onClick={() => alert("Not-working for now!")} className="btn btn-danger">Delete</button></td>
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


export default connect(mapStateToProps)(WithdrawRequests)
