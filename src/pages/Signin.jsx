import Form from "../components/Form"

const Signin = () => {

  const signin = async (username, password) => {
    await fetch('http://localhost:8080/auth/signin/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      credentials: 'include',
    }).then(async response => {
      const res = await response.text();
      alert(res);
      window.location.reload(false);
    });
  }

  return (
    <div className="">
      <Form heading={"Sign in"} text={"Sign in to your account"} fplink={"Forgot password?"} text2={"Don't have an account?"} text3={"Sign up"} link={"/signup"} btnText={"Sign in"} userInfo={(username, password) => signin(username, password)} />
    </div>
  )
}

export default Signin;