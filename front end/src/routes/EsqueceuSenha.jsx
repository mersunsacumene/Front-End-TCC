import React from 'react'
import logo from "../assets/logoBranca.png";
import EsqueceuSenhaCom from '../components/EsqueceuSenhaCom';

const EsqueceuSenha = () => {
 return (
    <div className="columns-2 h-screen">
    <div className="bg-gradient-to-t from-blue-950 to-azulClaro h-screen">
      <img className=" pl-80 pt-80 " src={logo}></img>
    </div>
    <div className="h-full place-content-center">
    <EsqueceuSenhaCom />
    </div>
  </div>
 )
}

export default EsqueceuSenha;