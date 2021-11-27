import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Layout} from '../layout'
import {Post} from '../API/CallAPI'
import {ENDPOINTS} from '../API/Endpoints'
import { useHistory } from "react-router";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  async function loginUser(credentials) {
    return Post(ENDPOINTS.REGISTER, credentials)
   }

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      email,
      password
    });
    sessionStorage.setItem("token", token.token)
    sessionStorage.setItem("auth", token.auth)
    localStorage.setItem("user", token.user.username)
    localStorage.setItem("id", token.user.userId)
    history.push("/");
  }

  return (
    <div className="Login">
      <Layout>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="lname">
            <Form.Label>Username</Form.Label>
            <Form.Control
              autoFocus
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Register
          </Button>
        </Form>
      </Layout>
    </div>
  );
}

///https://stackoverflow.com/questions/47630163/axios-post-request-to-send-form-data