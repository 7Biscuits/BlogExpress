import Form from "../components/Form"

const Login = () => {
  return (
    <Form heading={"Login"} label1={"Username"} label2={"Password"} footerA1={"Forgot password?"} footerText={"Don't have an account?"} footerA2={"Sign up"} redirectLink={"/signup"} />
  )
}

export default Login