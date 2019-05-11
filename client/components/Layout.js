import { Container } from 'reactstrap'
import Navigation from '../components/Navigation'

const Layout = (props) => (
  <Container>
    <Navigation />
    {props.children}
  </Container>
)

export default Layout
