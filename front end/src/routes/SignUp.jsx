import React from 'react'
import logo from "../assets/logo.png";
import FormSignUp from '../components/FormSignUp'

const SignUp = () => {
  return (
    <div className="columns-2 h-screen">
    <div className="bg-azul h-screen">
      <img className=" pl-80 pt-80 " src={logo}></img>
    </div>
    <div className="h-full place-content-center">
    <FormSignUp />
    </div>
  </div>
 )
}

export default SignUp