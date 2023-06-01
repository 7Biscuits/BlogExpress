import Form from "../components/Form"

const Signup = () => {

  const signup = async (username, password) => {
    await fetch('http://localhost:8080/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password })
    }).then(async response => alert(await response.text()));
  }

  return (
    <Form heading={"Sign up"} label1={"Username"} label2={"Password"} footerA1={""} footerText={"Already have an account?"} footerA2={"Login"} redirectLink={"/"} userInfo={(username, password) => signup(username, password)} />
  )
}

export default Signup