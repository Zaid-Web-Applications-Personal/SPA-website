import React from "react";
import {Layout} from '../layout'
import Logout from "./Logout";
import RegisterButton from "./RegisterButton";

const Contact = () => (
  <div>
    <Layout>
      This is the Contact Page
      <Logout/>
      <RegisterButton/>
    </Layout>
  </div>
)
export default Contact;