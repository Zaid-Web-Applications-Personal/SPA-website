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
      data: null,
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
          this.state.data ? (
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
              <></>
              )
            }
        </div>
      </div>
    )
  }
}
export default Albums;