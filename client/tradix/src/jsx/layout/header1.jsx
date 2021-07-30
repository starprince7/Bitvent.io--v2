import React, { } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'



function Header1() {

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="navigation">
                                <Navbar bg="light" expand="lg">
                                    <Link className="navbar-brand text-primary" to={'/'}><h3>WealthWiseFx.</h3></Link>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse>
                                        <Nav className="ml-auto">
                                            {/* <NavDropdown title="Home">
                                                <NavDropdown.Item><Link to={'/'}>Home 1</Link></NavDropdown.Item>
                                                <NavDropdown.Item><Link to={'/index2'}>Home 2</Link></NavDropdown.Item>
                                            </NavDropdown> */}
                                            <Nav.Item><Link to={'/team'}>Team</Link></Nav.Item>
                                            <Nav.Item><Link className="mx-2" to={'/about'}>About</Link></Nav.Item>
                                            <Nav.Item><Link to={'/faq'}>FAQ</Link></Nav.Item>
                                            
                                            <NavDropdown title="Company">
                                                {/* <NavDropdown.Item><Link to={'/about'}>About us</Link></NavDropdown.Item> */}
                                                {/* <NavDropdown.Item><Link to={'/team'}>Team</Link></NavDropdown.Item> */}
                                                <NavDropdown.Item><Link to={'/blog'}>Blog</Link></NavDropdown.Item>
                                                <NavDropdown.Item><Link to={'/career'}>Career</Link></NavDropdown.Item>
                                            </NavDropdown>

                                            <NavDropdown title="Support">
                                                <NavDropdown.Item><Link to={'/contact'}>Contact us</Link></NavDropdown.Item>
                                                <NavDropdown.Item><Link to={'/helpdesk'}>Help Desk</Link></NavDropdown.Item>
                                                {/* <NavDropdown.Item><Link to={'/faq'}>FAQ</Link></NavDropdown.Item> */}
                                            </NavDropdown>
                                            
                                            {/* <Nav.Item><Link to={'/dashboard'}>Dashboard</Link></Nav.Item> */}
                                        </Nav>

                                    </Navbar.Collapse>

                                    <div className="signin-btn ml-2">
                                        <Link className="btn btn-primary" to={'/signin'}>Sign in</Link>
                                    </div>
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