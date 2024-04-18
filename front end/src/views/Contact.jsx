import React from 'react'
import Footer from '../components/Footer'
import logo from "../assets/logoBranca.png";
import logo2 from "../assets/logoAzul.png";
const Contact = () => {
    return (
       
        <div class="flex flex-row ">
       <div className=" w-full h-lvh text-center mt-96">
        <p>Olá, somos o grupo DAZZLE, contate-nos!</p>
    </div>
        <div class="bg-white w-1/2 max-w-4xl p-16">
          <form class=" border-4 border-azul mt-40 rounded-xl w-full max-w-4xl p-8 shadow-lg space-y-6" action="#" method="POST">
          <div>
              <label for="name" class="block text-sm font-medium leading-6 text-white">Nome completo </label>
              <div class="mt-2">
                <input id="name" name="name"  type='text' placeholder="Nome completo" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-azul placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-white">Email </label>
              <div class="mt-2">
                <input id="email" name="email" type="email" placeholder="Email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-azul placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
            </div>
            <div>
              <label for="name" class="block text-sm font-medium leading-6 text-white">Mensagem </label>
              <div class="mt-2">
                <input id="text" type='text' placeholder="Digite sua mensagem" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-azul placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-azul sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
             <button type="submit" class="flex w-full justify-center rounded-md bg-azul text-white px-3 py-1.5 text-sm font-semibold leading-6 text-azul shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar Mensagem</button>
            </div>
          </form>
        </div>
        <div className="bg-white w-1/3 h-lvh">
      
    </div>
   
        <Footer />
        </div>
        
    )
    
}

export default Contact