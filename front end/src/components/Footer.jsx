import React from 'react'
import {FaInstagram, FaLinkedin} from 'react-icons/fa6'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (<footer class="fixed bottom-0 w-full h-12 ">
    <ul className='bg-azul flex flex-row justify-center space-x-48 '>
      <li class="text-white">
      <Link to="/"></Link><FaInstagram></FaInstagram>
      </li>
      <p class="text-white text-xl"><span>Desenvolvido por Dazzle</span>&copy; 2024</p>
      <li class="text-white">
      <FaLinkedin></FaLinkedin>
      </li>
      
    </ul>
    
   </footer>
  )
}

export default Footer;