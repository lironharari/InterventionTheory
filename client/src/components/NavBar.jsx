import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

class NavBar extends React.Component {        
      render() {    
        
      return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" id="top">
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>                                                
                        <NavDropdown title="ארכיון" id="collasible-nav-dropdown">                        
                            <NavDropdown.Item href="/cylinder-seals/">חותמות גליל</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item href="/megalith/">מגלית</NavDropdown.Item>                            
                            <NavDropdown.Item href="/nephilim/">נפילים</NavDropdown.Item>                            
                            <NavDropdown.Item href="/anunnaki/">אנונקי</NavDropdown.Item>                            
                            <NavDropdown.Item href="/man-ape/">אדם/קוף</NavDropdown.Item>
                            <NavDropdown.Item href="/sacred-geometry/">גאומטריה מקודשת</NavDropdown.Item>
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