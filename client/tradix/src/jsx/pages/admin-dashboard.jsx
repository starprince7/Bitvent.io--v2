import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header2 from "../layout/header2";
import Sidebar2 from "../layout/sidebar2";
import PageTitle from "../element/page-title";
import Footer2 from "../layout/footer2";
import { connect } from "react-redux";
import { fetchAllUsers } from '../../redux/app_state/actions';

function Accounts(props) {
  const { users, fetchAllUsers } = props
  
  useEffect(() => {
    // Get All Users onComponent mount
    users === null && fetchAllUsers()
  }, [fetchAllUsers, users])
  
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
                  <h4 className="card-title">{ users?.length } Registered Account(s)</h4>
                </div>
                <div className="card-body pt-0">
                  <div className="transaction-table">
                    <div className="table-responsive">
                      <table className="table mb-0 table-responsive-sm">
                        <tbody>
                          {
                            users && users.map( (user) => (
                              <tr key={user._id}>
                                <td>
                                  <span className="sold-thumb">
                                    <i className="la la-arrow-down"></i>
                                  </span>
                                </td>

                                <td>
                                  <span className="badge badge-danger">{ user.email }</span>
                                </td>

                                <td className="text-danger">{ user.date }</td>
                                <td><Link to={'/'+user.email}>View</Link></td>
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
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.dashboard_state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
