import Form from "../components/Form"

const Signup = () => {
  return (
    <Form heading={"Sign up"} label1={"Username"} label2={"Password"} footerA1={""} footerText={"Already have an account?"} footerA2={"Login"} redirectLink={"/"} />
  )
}

export default Signup