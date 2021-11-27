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
      data: null,
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
          {
            this.state.data ? (
              this.state.data.map((album) => (
                  <div className="image-card">
                  <div className = "fill" >
                        <img src={album.image_url} alt=""/>
                      </div>
                  </div>
              ))
              ):
              (
                <>
                {}
                </>
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