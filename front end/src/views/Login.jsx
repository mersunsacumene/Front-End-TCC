import React from 'react'
import logo from "../assets/logoBranca.png";
import FormLogin from '../components/FormLogin';

const Login = () => {
 return (
  <div className="columns-2 h-screen">
    <div className="bg-azul h-screen">
      <img className=" pl-80 pt-80 " src={logo}></img>
    </div>
    <div className="h-full place-content-center">
    <FormLogin />
    </div>
  </div>
 )
}

export default Login