import React from 'react'

function Menus() {
    //esta es la funcion para poner a todos en una nueva pagina
    const ExternalLink = ({ href, children }) => (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  return (
<div class="container my-24 mx-auto md:px-6">
<h1 className='text-center text-7xl pb-20 text-[rgba(126, 29, 58, 0.95)] font-bold'> Menus </h1> 
  <section class="mb-32 text-center">
    <div class="grid lg:grid-cols-6 lg:gap-x-12">
      <div class="mb-12 lg:mb-0">
        <div  class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.8),0_10px_20px_-2px_rgba(0,0,0,0.1)] bg-slate-100">
        <div class="flex justify-center mb-5">
        <a href="">
            <img src="menus/icons-Correo-01.svg" alt=""  className='h-38 w-36 mt-5'/>
        </a>
        </div>
        </div>
      </div>
      <div class="mb-12 lg:mb-0">
        <div  class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.8),0_10px_20px_-2px_rgba(0,0,0,0.1)] bg-slate-100">
        <div class="flex justify-center mb-5">
          <ExternalLink href={'http://transparencia.cobao.edu.mx/sevac/'}>
          <img src="menus/icons-SEVAC-01.svg" alt="" className='h-38 w-36 mt-5'/>
          </ExternalLink>
        </div>
        </div>
      </div>
      <div class="mb-12 lg:mb-0">
        <div  class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.8),0_10px_20px_-2px_rgba(0,0,0,0.1)] bg-slate-100">
        <div class="flex justify-center mb-5">
          <ExternalLink href={'http://187.217.212.165:8080/SICoBaO/login.html'}>
          <img src="menus/icons-SICOBAO-01.svg" alt="" className='h-38 w-36 mt-5' />  
          </ExternalLink>
        </div>
        </div>
      </div>
      <div class="mb-12 lg:mb-0">
        <div  class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.8),0_10px_20px_-2px_rgba(0,0,0,0.1)] bg-slate-100">
        <div class="flex justify-center mb-5">
          <ExternalLink href={'http://www.cobao.edu.mx/images/PDF/2023/calendarios/CALENDARIOCOBAO2023-2024.pdf'}>
          <img src="menus/icons-Calendario-01.svg" alt="" className='h-38 w-36 mt-5' />
          </ExternalLink>
        </div>
        </div>
      </div>
      <div class="mb-12 lg:mb-0">
        <div  class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.8),0_10px_20px_-2px_rgba(0,0,0,0.1)] bg-slate-100">
        <div class="flex justify-center mb-5">
          <ExternalLink href={'http://www.cobao.edu.mx/index.php/datos-de-interes/unidad-de-genero'}>
          <img src="menus/icons-Unidad-01.svg" alt="" className='h-38 w-36 mt-5'/>
          </ExternalLink>
        </div>
        </div>
      </div>
      <div class="mb-12 lg:mb-0">
        <div  class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.8),0_10px_20px_-2px_rgba(0,0,0,0.1)] bg-slate-100">
        <div class="flex justify-center mb-5">
        <ExternalLink href={'http://aulas.cobao.edu.mx/'}>
        <img src="menus/icons-Plataforma-01.svg" alt="" className='h-38 w-36 mt-5' />   
        </ExternalLink>             
        </div>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default Menus