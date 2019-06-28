import { Button, Form, FormGroup, Label, Input, Container, Jumbotron } from 'reactstrap'
import React from 'react'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  doLogin = (event) => {
    event.preventDefault();

    fetch('http://localhost:3001/api/v1/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'login': 'admin',
        'password': 'changeme'
      })
    }).then(r => {
    })
  }

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1 className="display-5">react-cms login</h1>

          <Form onSubmit={this.doLogin}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" />
              <br />
              <Label for="Password">Password</Label>
              <Input type="password" name="password" />
              <br />
              <Button>Log in</Button>
            </FormGroup>
          </Form>
        </Jumbotron>
      </Container>
    )
  }
}
