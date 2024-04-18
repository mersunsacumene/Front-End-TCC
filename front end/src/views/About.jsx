import React from 'react'
import sobre from "../assets/sobre.jpg"
const About = () => {
    return (
       <div>
        <div className='static'> 
            <img className='w-full h-1/2 fixed opacity-50'src={sobre}/>
            </div>

            <div className='flex flex-col text-center fixed top-48 '>
                <div>Sobre o Dazzle</div>
                <div>Somos um grupo criado na fiec e desenvolvemos uma ferramenta chamada For M.E.I para ajudar os prestadores de serviços e aqueles que precisam dos serviços</div>
            </div>
        
            <div className='flex flex-col-3 fixed justify-center top-2/3 ml-40 mr-40 space-x-16'>

                <div><p>Quem somos</p>
                    <p className='text-lg text-justify text-wrap'>Somos um grupo de estudantes da FIEC que juntos criamos uma plataforma para ajudar o trabalhador que precisa de divulgação e também o cliente que precisa de serviços</p>
                </div>
                <div>O que fazemos?</div>
                <div>Quer se associar</div>

            </div>
        

            <div>

            </div>
       </div>
    )
}

export default About