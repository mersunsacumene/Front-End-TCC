import {Link} from "react-router-dom";
import logo from "../assets/logoBranca.png";
const Navbar = () => {
  return (

    //  <Link to="/">Home</Link>
    //<Link to="/contact">Contatos</Link>
    //<Link to="/about">Sobre</Link>
    
    
    <nav class="bg-azul">
  <div class="mx-16">
    <div class=" relative flex h-16 items-center justify-between ">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify- sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
         <img className="w-7"src={logo}/>
        </div>
        <div class=" absolute right-32 hidden sm:ml-6 sm:block ">
          <div class="flex space-x-10 " >
            <a class="text-branco hover:bg-branco hover:text-azul rounded-xl px-2 py-0.5 text-xl font-medium "><Link to="/">Home</Link></a>
            <a class="text-branco hover:bg-branco hover:text-azul rounded-xl px-2 py-0.5 text-xl font-medium"><Link to="/about">Sobre</Link></a>
            <a class="text-branco hover:bg-branco hover:text-azul rounded-xl px-2 py-0.5 text-xl font-medium"><Link to="/contact">Contatos</Link></a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div class="relative ml-3 ">
          <div>
          <Link to="/login">
            <button type="button" class=" relative flex rounded-full bg-gray-800 text-sm " id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </button>
            </Link>
            <div />
          </div>
          
          {/*<div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
        
           
        <a href="" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Login</a> 
          </div>
  */}
        </div>
      </div>
    </div>
  </div>
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      <a href="#" class="text-branco hover:bg-branco hover:text-azul block rounded-md px-3 py-2 text-base font-medium"><Link to="/">Home</Link></a>
      <a href="#" class="text-branco hover:bg-branco hover:text-azul block rounded-md px-3 py-2 text-base font-medium"><Link to="/about">Sobre</Link></a>
      <a href="#" class="text-branco hover:bg-branco hover:text-azul block rounded-md px-3 py-2 text-base font-medium"><Link to="/contact">Contatos</Link></a>
    </div>
  </div>
</nav>
  )
}

export default Navbar