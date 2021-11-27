import React from "react";
import {Layout} from '../layout'
import {Get} from '../API/CallAPI'
import {ENDPOINTS} from '../API/Endpoints'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  async componentDidMount() {
    // const data = await Get(ENDPOINTS.HOME)
    // this.setState({data: data.string})
  }
  render() {
    const { data } = this.state;
    return (
        <div>
          <Layout>
            <h1>MY MESSAGE:</h1>
            <ul>
              {
              data ?
              data
              :
              "no data to display"
            }
            </ul>
          </Layout>
        </div>
    );
  }
}

export default Home;
