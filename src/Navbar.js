import React from 'react';
import img1 from './images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container } from 'reactstrap';

 class Header extends React.Component {
  render() {
    return (
      
        <Container>
        <Navbar className="header" color="light" light expand="md">
          <row><img  src={img1} alt="#"/></row>
          <NavbarBrand className="headerLogo" style={{fontSize:'25px'}} href="#"><strong><font color="#00b39b"> Docplanner</font> <font color="#747474">Group</font></strong> </NavbarBrand>
          <NavbarToggler/>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/"> <font color="#00b39b">About us</font></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Career</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                Departments
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <a className="headerLinks" href='#'>
                      Marketing & PR
                    </a>
                  </DropdownItem>
                  <DropdownItem>
                  <a className="headerLinks" href='#'>
                    Customer Success & Sales 
                  </a>
                  </DropdownItem>
                  <DropdownItem>
                  <a className="headerLinks" href='#'>
                    IT, Product, Design & UX
                  </a>
                  </DropdownItem>
                  <DropdownItem>
                  <a className="headerLinks" href='#'>
                    Finance & Administration
                  </a>
                  </DropdownItem>
                  <DropdownItem>
                  <a className="headerLinks" href='#'>
                    HR & more
                  </a>  
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        </Container>
    );
  }
}
export default Header