import { Button, Form, FormGroup, Label, Input, Container, Jumbotron } from 'reactstrap'
import React from 'react'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password: '' }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1 className="display-5">react-cms login</h1>

          <Form method="POST" action="/login">
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" onChange={this.onChange} value={this.state.username} />
              <br />
              <Label for="Password">Password</Label>
              <Input type="password" name="password" onChange={this.onChange} value={this.state.password} />
              <br />
              <Button id="loginButton">Log in</Button>
            </FormGroup>
          </Form>
        </Jumbotron>
      </Container>
    )
  }
}
