import { Button, Form, FormGroup, Label, Input, Container, Jumbotron } from 'reactstrap'
import React from 'react'
import Router from 'next/router'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password: '' }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  doLogin = (event) => {
    event.preventDefault();

    fetch('http://localhost:3001/api/v1/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'login': this.state.username,
        'password': this.state.password
      })
    }).then(r => {
      console.log(r.json())
      console.dir(r.json())
      if(r.status === 200) {
        //localStorage.setItem('reactCmsToken', r.body);
        Router.push({pathname: '/'})
      }
    })
  }

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1 className="display-5">react-cms login</h1>

          <Form method="POST" action="/login" onSubmit={this.doLogin}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" onChange={this.onChange} value={this.state.username} />
              <br />
              <Label for="Password">Password</Label>
              <Input type="password" name="password" onChange={this.onChange} value={this.state.password} />
              <br />
              <Button>Log in</Button>
            </FormGroup>
          </Form>
        </Jumbotron>
      </Container>
    )
  }
}
