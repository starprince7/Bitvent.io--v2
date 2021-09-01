import React, { } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import WWFX_LOGO from '../../images/wealth_wise.png'
import MarketCurrencyPrices from '../element/MarketCurrencyPrices'



function Header1() {

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
                                        <img src={WWFX_LOGO} alt="Logo" />
                                    </Link>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse>
                                        <Nav className="ml-auto">

                                            {/* <NavDropdown title="Home">
                                                <NavDropdown.Item><Link to={'/'}>Home 1</Link></NavDropdown.Item>
                                                <NavDropdown.Item><Link to={'/index2'}>Home 2</Link></NavDropdown.Item>
                                            </NavDropdown> */}
                                            <Nav.Item><Link className="text-primary" to={'/about'}>About</Link></Nav.Item>
                                            <Nav.Item><Link className="text-primary" to={'/team'}>Team</Link></Nav.Item>
                                            
                                            

                                            {/* <NavDropdown title="Support">
                                                <NavDropdown.Item><Link to={'/contact'}>Contact us</Link></NavDropdown.Item>
                                                <NavDropdown.Item><Link to={'/helpdesk'}>Help Desk</Link></NavDropdown.Item>
                                            </NavDropdown> */}

                                        <Nav.Item><Link to={'/signup'} className="text-primary">Signup</Link></Nav.Item>
                                        </Nav>
                                        <NavDropdown style={{color: '#506690', fontWeight: '600'}} title="Company">
                                            {/* <NavDropdown.Item><Link to={'/about'}>About us</Link></NavDropdown.Item> */}
                                            {/* <NavDropdown.Item><Link to={'/team'}>Team</Link></NavDropdown.Item> */}
                                            <NavDropdown.Item><Link to={'/faq'}>Faq</Link></NavDropdown.Item>
                                            <NavDropdown.Item><Link to={'/career'}>Career</Link></NavDropdown.Item>
                                        </NavDropdown> 


                                    <div className="signin-btn ml-3 hidden-sm hidden-xs">
                                        <Link className="btn btn-primary" to={'/login'}>Log in</Link>
                                    </div>
                                    </Navbar.Collapse>

                                </Navbar>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header1;