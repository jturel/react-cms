import { Container } from 'reactstrap'
import Navigation from '../components/Navigation'
import Error from '../pages/_error.js'

const Layout = (props) => (
  <Container>
    <Navigation />
    {props.children}
  </Container>
)

export default Layout
