import React, { } from 'react';
import { Link } from 'react-router-dom';



function Sidebar() {

    const style = {
        fontSize: '12px',
        color: 'white',
        marginLeft: "-10px",
        display: 'inline-flex'
    }

    const icon_style = {
        fontSize: "14px",
        marginLeft: "-15px",
    }

    return (
        <>
        {/* ADD BORDER RADIUS IN BOOTSTARP TO SIDE BAR */}
            <div className="sidebar">
                <div className="menu">
                    <ul>
                        <li>
                            <Link to={'./dashboard'} data-toggle="tooltip" data-placement="right" title="Home">
                                <span><i style={icon_style}  className="la la-igloo"></i></span><br />
                                <span style={style}>Overview</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'./buy-sell'} data-toggle="tooltip" data-placement="right" title="Exchange">
                                <span><i style={icon_style}  className="la la-exchange"></i></span><br />
                                <span style={style}>Buy & Sell</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'./accounts'} data-toggle="tooltip" data-placement="right" title="Account">
                                <span><i style={icon_style}  className="la la-user"></i></span><br />
                                <span style={style}>Accounts</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'./settings'} data-toggle="tooltip" data-placement="right" title="Setting">
                                <span><i style={icon_style}  className="la la-tools"></i></span><br />
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