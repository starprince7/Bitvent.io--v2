import React, { useState,useEffect } from 'react'
import Header2 from "../layout/header2";
import Sidebar2 from "../layout/sidebar2";
import PageTitle from "../element/page-title";
import Footer2 from "../layout/footer2";
import axios from 'axios'
import { connect } from 'react-redux'
import { setLoading } from '../../redux/app_state/actions';

function SingleRoute(props) {
    const { setLoading } = props
    const [user, setUser] = useState(null)
    const email = props.match.params.email

    useEffect(() => {
        setLoading(true)
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
    }, [setLoading, email])
    
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
                            <p className="mb-1"> <span><i class="fas fa-wallet text-primary mr-2"></i></span>
                                { user?.wallet }
                            </p>
                            <p className="mb-1"> <span><i className="fa fa-envelope mr-2 text-primary"></i></span>
                                { user?.email }
                            </p>
                        </div>
                    </div>

                    <ul className="card-profile__info">
                        <li>
                            <h5 className="mr-4">Address</h5>
                                    <span className="text-muted">{ user ? user.address : "Null" }</span>
                        </li>
                        <li className="mb-1">
                            <h5 className="mr-4">Registered on</h5>
                            <span>{ user?.date }</span>
                        </li>
                        <li>
                            <h5 className="text-danger mr-4">Action</h5>
                            <span onClick={() => alert("Not ready yet!")} className="text-danger btn">delete user</span>
                        </li>
                    </ul>

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
