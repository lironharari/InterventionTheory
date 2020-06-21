import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

class NavBar extends React.Component {        
      render() {    
        
      return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white">
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>                        
                        {/* <Nav.Link href="/archive">ארכיון</Nav.Link>                         */}
                        <NavDropdown title="ארכיון" id="collasible-nav-dropdown">                        
                            <NavDropdown.Item href="/Cylinder.Seals">חותמות גליל</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item href="/Megalith">מגלית</NavDropdown.Item>                            
                            <NavDropdown.Item href="/Nephilim">נפילים</NavDropdown.Item>                            
                        </NavDropdown>                         
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