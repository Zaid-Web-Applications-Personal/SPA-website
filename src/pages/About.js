import React from "react";
import {Layout} from '../layout'
import Logout from "./Logout";
import RegisterButton from "./RegisterButton";

const About = () => (
  <div>
    <Layout>
      This is the About Page
      <Logout/>
      <RegisterButton/>
    </Layout>
  </div>
)

export default About;