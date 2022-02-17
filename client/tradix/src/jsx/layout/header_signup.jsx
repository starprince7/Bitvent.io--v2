import React, { } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import BitventLogo from '../../images/bitvent/bitvent-blue-logo.svg'
import MarketCurrencyPrices from '../element/MarketCurrencyPrices'



function HeaderSignUp() {

    return (
        <>
            {/* <MarketCurrencyPrices /> */}
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="navigation">
                                <Navbar bg="light" expand="lg">
                                    <Link className="navbar-brand text-primary" to={'/'}>
                                        <img src={BitventLogo} alt="Logo" />
                                    </Link>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                                </Navbar>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderSignUp;