import React from "react";
import { Post } from "../../API/CallAPI";
import { ENDPOINTS } from "../../API/Endpoints";
import {
  NavLink
} from "react-router-dom"

class Albums extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={
      data: [],
    }
  }
  async getAlbums(){
    const id = localStorage.getItem('id')
    const data = {id: id}
    const albumdata = await Post(ENDPOINTS.GET_ALBUMS, data);
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
          this.state.data.length ? (
            this.state.data.map((album) => (
                <NavLink exact to = {"/albums/" + album.id} activeClassName="">
                  <div className="image-card">
                    <div className = "fill" >
                      <img src={album.image} alt=""/>
                    </div>
                      <h3>
                        {album.name}
                      </h3>
                  </div>
                </NavLink>
            ))
            ):
            (
              <div className="d-flex justify-content-center fixed-top position-fixed p-2 py-5 my-5">
                <h1 className="text-center">
                  THERE ARE NO ALBUMS PLEASE CREATE A NEW ONE
                </h1>
              </div>
              )
            }
        </div>
        <div className="d-flex justify-content-center p-2 fixed-bottom position-fixed py-5">
          <NavLink exact to = {"/create-album"} activeClassName="">New Album</NavLink>
        </div>
      </div>
    )
  }
}
export default Albums;