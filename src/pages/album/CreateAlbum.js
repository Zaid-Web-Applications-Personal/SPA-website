import React from "react";
import { 
  Container,
  Button,
  Row, 
  Col,
  Form,
} from "react-bootstrap";
import {Post} from '../../API/CallAPI'
import {ENDPOINTS} from '../../API/Endpoints'
import { withRouter } from "react-router";

class CreateAlbum extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {
      album: "",
      image : "",
    }
  }
  
  validateForm()
  {
    return this.state.album.length > 0 && this.state.image.length > 0;
  }

  async createAlbum(credentials)
  {
    return await Post(ENDPOINTS.CREATE_ALBUM, credentials);
  }
  handleSubmit = async(e) => {
    e.preventDefault();
    var name = this.state.album;
    var image = this.state.image;
    var id = localStorage.getItem('id')
    const data = await this.createAlbum({
      name: name,
      image: image,
      id: id
    });
    console.log(data)
    this.props.history.push("/albums/" + data.id);
  }
  render(){
    return (
      <div>
        <Container className="login-container bg-dark my-5">
          <Row>
            <Col>
            <h1 className="text-light text-center">Create Album</h1>
              <Form onSubmit={this.handleSubmit}>
              <Form.Group size="lg" controlId="album">
                <Form.Label className="text-light">Album Name</Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                  placeholder="Enter Album Name"
                  value={this.state.album}
                  onChange={(e) => this.setState({album: e.target.value})}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="image">
                <Form.Label className="text-light">image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Image URL"
                  value={this.state.image}
                  onChange={(e) => this.setState({image: e.target.value})}
                />
              </Form.Group>
              <Button 
                className="login-button d-flex justify-content-center" 
                block size="md" 
                type="submit" 
                disabled={!this.validateForm()}
                >
                Submit
              </Button>
            </Form>
            </Col>
          </Row>  
        </Container>
      </div>
    );
  }
}

export default withRouter(CreateAlbum);

///https://stackoverflow.com/questions/47630163/axios-post-request-to-send-form-data