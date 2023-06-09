import { redirect } from "react-router-dom";
import Form from "../components/Form"
// import { session } from "express-session";

const Signin = () => {

  const signin = async (username, password) => {
    await fetch('http://localhost:8080/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      credentials: 'include',
    }).then(async response => {
      const res = await response.text();
      alert(res);
    });
  }

  return (
    <Form heading={"Sign in"} label1={"Username"} label2={"Password"} footerA1={"Forgot password?"} footerText={"Don't have an account?"} footerA2={"Sign up"} redirectLink={"/signup"} userInfo={(username, password) => signin(username, password)} />
  )
}

export default Signin;