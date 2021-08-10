import React, { } from 'react';
import { Link } from 'react-router-dom';



function Sidebar() {

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
                                <span><i className="la la-igloo"></i></span>
                                <span style={style}>Overview</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'./buy-sell'} data-toggle="tooltip" data-placement="right" title="Exchange">
                                <span><i className="la la-exchange"></i></span>
                                <span style={style}>Buy & Sell</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'./accounts'} data-toggle="tooltip" data-placement="right" title="Account">
                                <span><i className="la la-user"></i></span>
                                <span style={style}>Accounts</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'./settings'} data-toggle="tooltip" data-placement="right" title="Setting">
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

export default Sidebar;