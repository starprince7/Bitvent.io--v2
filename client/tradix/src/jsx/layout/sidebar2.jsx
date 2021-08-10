import React, { } from 'react';
import { Link } from 'react-router-dom';



function Sidebar2() {

    const style = {
        fontSize: '12px',
        color: 'white',
        display: 'inline-flex'
    }

    return (
        <>
        {/* ADD BORDER RADIUS IN BOOTSTARP TO SIDE BAR */}
            <div className="sidebar">
                <div className="menu">
                    <ul>
                        <li>
                            <Link to={'./dashboard'} data-toggle="tooltip" data-placement="right" title="Home">
                                <span><i class="fas fa-users"></i></span>
                                <span style={style}>Accounts</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'} data-toggle="tooltip" data-placement="right" title="Exchange">
                                <span><i class="fas fa-funnel-dollar"></i></span>
                                <span style={style}>Fund Account</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'} data-toggle="tooltip" data-placement="right" title="Account">
                                <span><i class="fas fa-money-check-alt"></i></span>
                                <span style={style}>Withdraw Request</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'} data-toggle="tooltip" data-placement="right" title="Setting">
                                <span><i className="la la-tools"></i></span>
                                <span style={style}>Settings</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar2;