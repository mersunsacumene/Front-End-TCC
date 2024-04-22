import React from 'react'
import logoBranca from "../assets/logoBranca.png";
import FormLogin from '../components/Forms/FormLogin';

const Login = () => {
 return (
    <div>
      <div className='flex h-screen '>
        <div className=' bg-azul w-1/2  flex items-center justify-center'>
            <img className='hover:h-72' src={logoBranca} alt="" srcset="" />
        </div>
        <div className='w-1/2 flex items-center justify-center'>
             <FormLogin />
        </div>
        </div>


    </div>
 )
}

export default Login

 // <div className="columns-2 h-screen">
  //   <div className="bg-azul h-screen">
  //     <img className=" pl-80 pt-80 " src={logo}></img>
  //   </div>
  //   <div className="h-full place-content-center">
  //   <FormLogin />
  //   </div>
  // </div>