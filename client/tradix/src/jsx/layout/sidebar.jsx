import React, { } from 'react';
import { a } from 'react-router-dom';



function Sidebar() {

    const style = {
        fontSize: '11px',
        color: 'white',
        marginLeft: "-10px",

        display: 'inline-flex'
    }

    const icon_style = {
        fontSize: "1.3rem",
        fontWeight: '800',
        marginLeft: "-10px",
    }

    const li_style = {
        borderBottom: "none",
        backgroundColor: '#0d39ac',
        padding: '0.6rem 0'
    }

    const sidebar_menu = {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: '7rem'
    }

    return (
        <>
        {/* ADD BORDER RADIUS IN BOOTSTARP TO SIDE BAR */}
            <div className="sidebar" style={sidebar_menu}>
                <div className="menu w-100">
                    <ul>
                        <li style={li_style}>
                            <a href={'./dashboard'} data-toggle="tooltip" data-placement="right" title="Home">
                                <span><i style={icon_style}  className="la la-dashboard"></i></span> <br />
                                {/* <span style={style}>Portal</span> */}
                            </a>
                        </li>
                        <li style={li_style}>
                            <a href={'./buy-sell'} data-toggle="tooltip" data-placement="right" title="Exchange">
                                <span><i style={icon_style}  className="la la-exchange"></i></span><br />
                                {/* <span style={style}>Trade</span> */}
                            </a>
                        </li>
                        <li style={li_style}>
                            <a href={'./account_wallet'} data-toggle="tooltip" data-placement="right" title="Account">
                                <span><i style={icon_style}  className="la la-wallet"></i></span><br />
                                {/* <span style={style}>Wallets</span> */}
                            </a>
                        </li>
                        <li style={li_style}>
                            <a href={'./settings'} data-toggle="tooltip" data-placement="right" title="Setting">
                                <span><i style={icon_style}  className="la la-tools"></i></span><br />
                                {/* <span style={style}>Settings</span> */}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;