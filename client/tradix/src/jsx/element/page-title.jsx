import React, { } from 'react';
import { connect } from 'react-redux';



function PageTitle({ user }) {

    return (
        <>
            <div className="page-title dashboard">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-title-content">
                                <p>Welcome,
                                <span> {user?.name} </span>
                                <span> {user?.lastname} </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.dashboard_state.user
    }
}

export default connect(mapStateToProps)(PageTitle);