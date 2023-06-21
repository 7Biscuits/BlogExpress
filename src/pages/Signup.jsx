import { useNavigate } from "react-router-dom";
import Form from "../components/Form"

const Signup = () => {

  const navigate = useNavigate();

  const signup = async (username, password) => {
    await fetch('http://localhost:8080/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password })
    }).then(async response => {
        alert(await response.text());
        navigate("/signin")
      });
  }

  return (
    <Form heading={"Sign up"} text={"Create an account"} btnText={"Sign up"} text2={"Already have an account?"} text3={"Sign in"} link={"/signin"} userInfo={(username, password) => signup(username, password)} />
  )
}

export default Signup