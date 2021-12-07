import React from "react";
import { Post } from "../../API/CallAPI";
import { ENDPOINTS } from "../../API/Endpoints";
import {
  NavLink
} from "react-router-dom"

class Album extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={
      data: [],
      pageURL: props.match.params.id
    }
  }
  async getAlbums(){
    const data = {id: this.state.pageURL}
    const albumdata = await Post(ENDPOINTS.GET_ALBUM + this.state.pageURL, data);
    this.setState({
      data: albumdata
    })
  }

  componentDidMount(){
    this.getAlbums();
  }
  render(){
    return(
      <div>
        <div className="game-container">
          {console.log(this.state.data)}
          {
            this.state.data.length ? (
              this.state.data.map((album) => (
                  <div className="image-card">
                  <div className = "fill" >
                        <img src={album.image_url} alt=""/>
                      </div>
                  </div>
              ))
              ):
              (
              <div className="d-flex justify-content-center fixed-top position-fixed p-2 py-5 my-5">
                <h1 className="text-center">
                  THERE ARE NO IMAGES PLEASE CREATE A NEW ONE
                </h1>
              </div>
            )
          }
        </div>
        <div className="d-flex justify-content-center p-2 fixed-bottom position-fixed py-5">
          <NavLink exact to = {"/albums/" + this.state.pageURL + "/newImage"} activeClassName="">Create Image</NavLink>
        </div>
      </div>
    )
  }
}
export default Album;