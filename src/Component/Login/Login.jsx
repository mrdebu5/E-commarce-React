import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const checkLog= ()=> {
    console.log(email,password);
  }

return (
  <>
    <MDBContainer className="mr-5"  ><br/><br/><br/><br/><br/><br/>
      <MDBRow>
      <MDBCol md="6">
        <form>
          <p className="h5 text-center mb-4">Sign in</p>
          <div className="grey-text">
            <MDBInput label="Type your email" onChange={(e)=>setEmail(e.target.value)} icon="envelope" group type="email" validate error="wrong"
              success="right" />
            <MDBInput label="Type your password" onChange={(e)=>setPassword(e.target.value)} icon="lock" group type="password" validate />
          </div>
          <div className="text-center">
            <MDBBtn type="submit" onClick={checkLog()} >Login</MDBBtn>
          </div>
        </form>
      </MDBCol>
      </MDBRow>
    </MDBContainer>
  </>
);

};

export default Login;