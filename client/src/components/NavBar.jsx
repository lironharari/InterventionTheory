import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
//import NavDropdown from 'react-bootstrap/NavDropdown'

class NavBar extends React.Component {        
      render() {    
        
      return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white">
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>                        
                        <Nav.Link href="/archive">ארכיון</Nav.Link>                        
                        {/* <NavDropdown title="תוכן" id="collasible-nav-dropdown">                        
                            <NavDropdown.Item href="/sumer">שומר</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/creation">יצירת האדם</NavDropdown.Item>                            
                            <NavDropdown.Item href="/nephilim">נפילים</NavDropdown.Item>                            
                            <NavDropdown.Item href="/anunnaki">ענונקי</NavDropdown.Item>                            
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/knowledge">ידע</NavDropdown.Item>                                                                                    
                            <NavDropdown.Item href="/technology">טכנולוגיה</NavDropdown.Item>                                                        
                        </NavDropdown>                          */}
                        {/* <Nav.Link href="/essentials">עקרונות</Nav.Link> */}
                    </Nav>
                    <Nav className="mr-auto">
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="/">תאוריית ההתערבות</Navbar.Brand>                
            </Navbar>
        </div>        
        );
    }
  }

export default NavBar;