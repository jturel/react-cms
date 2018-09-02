import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link'
import Document, { Head, Main, NextScript } from 'next/document'
import { Container, Collapse, NavbarBrand, Nav, NavItem, NavLink, Navbar } from 'reactstrap'

export default class DefaultDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <title>ReactCMS</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">react cms</NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink href="/users/">Users</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sites/">Sites</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Container>
          <Main />
          <NextScript />
        </Container>
      </html>
    )
  }
}
