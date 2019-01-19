import {
  Collapse,
  Tooltip,
  Container,
  NavbarBrand,
  Nav,
  NavItem, 
  NavLink,
  Navbar,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarToggler } from 'reactstrap'
import Link from 'next/link'
import React from 'react'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: true
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <Link href="/" passHref>
          <NavbarBrand>react cms</NavbarBrand>
        </Link>
        <Nav navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Users
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                Add
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <Link href="/sites" passHref>
              <NavLink>Sites</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/about" passHref>
              <NavLink>About</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}
