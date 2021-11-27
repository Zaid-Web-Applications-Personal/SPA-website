import React from "react";
import { 
  Container,
  Button,
  Row, 
  Col,
  Form,
  NavLink
} from "react-bootstrap";
import {Post} from '../API/CallAPI'
import {ENDPOINTS} from '../API/Endpoints'
import { withRouter } from "react-router";

class Login extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {
      email: "",
      password : "",
    }
  }
  
  validateForm()
  {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  async loginUser(credentials)
  {
    return Post(ENDPOINTS.LOGIN, credentials);
  }
  handleSubmit = async(e) => {
    e.preventDefault();
    var email = this.state.email;
    var password = this.state.password;
    const token = await this.loginUser({
      email,
      password
    });
    console.log(token)
    sessionStorage.setItem("token", token.token)
    sessionStorage.setItem("auth", token.auth)
    localStorage.setItem("user", token.user.username)
    localStorage.setItem("id", token.user.userId)
    this.props.reload()
    this.props.history.push("/home");
  }
  render(){
    return (
      <div className="Login">
        <Container className="login-container bg-dark my-5">
          <Row>
            <Col>
            <h1 className="text-light text-center">Sign In</h1>
              <Form onSubmit={this.handleSubmit}>
              <Form.Group size="lg" controlId="email">
                <Form.Label className="text-light">Email</Form.Label>
                <Form.Control
                  autoFocus
                  type="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={(e) => this.setState({email: e.target.value})}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
                <Form.Label className="text-light">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={(e) => this.setState({password: e.target.value})}
                />
              </Form.Group>
              <Button 
                className="login-button d-flex justify-content-center" 
                block size="md" 
                type="submit" 
                disabled={!this.validateForm()}
                >
                Sign In
              </Button>
            </Form>
            <div className="text-center text-light">Don't have an account?
              <NavLink activeClassName="">Sign Up</NavLink>
            </div>
            </Col>
          </Row>  
        </Container>
      </div>
    );
  }
}

export default withRouter(Login);

///https://stackoverflow.com/questions/47630163/axios-post-request-to-send-form-data