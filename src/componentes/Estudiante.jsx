import React from 'react'

function Becas() {
  return (
    <>
<div class="container my-24 mx-auto md:px-6">
  <section class="mb-32">
  <h1 className='text-center text-7xl pb-20 text-[rgba(126, 29, 58, 0.95)] font-bold'>Estudiante</h1> 

    <div class="mb-16 flex flex-wrap">
      <div class="mb-6  w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
        <div
          class="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src="img/STUDENTCOBAOfinal.png" class="w-full" alt="Louvre" />
          <a href="https://becasmediasuperior.sep.gob.mx/" target='_blank'>
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
            </div>
          </a>
        </div>
      </div>

      <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
        <h3 class="mb-4 text-2xl font-bold">Becas</h3>
        <div class="mb-4 flex items-center text-sm font-medium text-danger dark:text-danger-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" class="mr-2 h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
          </svg>
          Educación
        </div>
        <p class="mb-6 text-neutral-500 dark:text-neutral-600">
          Solicita tu Beca ala hora de ingresar al COBAO
        </p>
        <p class="text-neutral-500 dark:text-neutral-600 pb-10">
        El Programa de Becas Elisa Acuña, dependiente de la Subsecretaría de Educación Media Superior,
         es la instancia encargada de otorgar estímulos económicos a las y los estudiantes del Bachillerato
          Tecnológico o Profesional Técnico Bachiller que deseen realizar su Servicio Social,
           Prácticas Profesionales y Educación Dual.
        </p>
        <a href="https://becasmediasuperior.sep.gob.mx/" target='_blank'>
        <button className="btn btn-outline btn-accent">Solicitar Beca</button>
        </a>
      </div>
    </div>

    <div class="mb-16 flex flex-wrap lg:flex-row-reverse">
      <div class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
        <div
          class="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src="img/celia.jfif" class="w-full" alt="Salud" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
            </div>
          </a>
        </div>
      </div>

      <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
        <h3 class="mb-4 text-2xl font-bold">¿Qué es el Seguro de Salud para estudiantes?</h3>
        <div class="mb-4 flex items-center text-sm font-medium text-primary dark:text-primary-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" class="mr-2 h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
          </svg>
          Salud
        </div>
        <p className='mb-6 text-neutral-500 dark:text-neutral-600'>
        El Seguro de Salud para estudiantes es un esquema de aseguramiento médico que otorga el IMSS, de forma gratuita, a los estudiantes de las instituciones públicas de los niveles medio superior, superior y de postgrado.
        </p>
        <p class="text-neutral-500 dark:text-neutral-600">
        ¿Qué debo hacer para obtener el beneficio?
            Lo primero que debes hacer es obtener tu Número de Seguridad Social (NSS), que es para toda la vida. Es muy sencillo y tienes tres alternativas para hacerlo:
        </p>
        <div class="w-auto">
        <a href="https://www.imss.gob.mx/apps" target='_blank'  class="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-[#7e1d3a] focus:text-neutral-500 focus:ring-0 ">
        Web: Utiliza el trámite de asignación o localización del Número de Seguridad Social. Para ello necesitas tener a la mano CURP, comprobante de domicilio y correo electrónico;</a>
        <a href="https://www.imss.gob.mx/apps" target='_blank'  class="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0">
             App: Descarga el App IMSS Digital en tu celular, y genéralo en la sesión de trámites y servicios. También necesitas tu CURP, comprobante de domicilio y correo electrónico,
        </a>
        <a  href="https://www.imss.gob.mx/directorio" target='_blank' class="block w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0">
            Subdelegación: Acude a alguna de las Subdelegaciones del IMSS con los mismos documentos, además de una identificación oficial y acta de nacimiento.
        </a>

      </div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
        <div
          class="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src="img/2.jfif" class="w-full" alt="Louvre" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
            </div>
          </a>
        </div>
      </div>

      <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
        <h3 class="mb-4 text-2xl font-bold">Orientacion Educativa</h3>
        <div class="mb-4 flex items-center text-sm font-medium text-yellow-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" class="mr-2 h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
          </svg>
          Plataformas
        </div>
        <ul className="menu menu-lg bg-base-200 w-56 rounded-box">
         <li><a>Redes Escolares</a></li>
         <li><a href='https://construye-t.org.mx/' target='_blank'>ConstruyeT</a></li>
         <li><a href='http://www.sems.gob.mx/swb/sems/yo_no_abandono' target='_blank'>Yo no Abandono</a></li>
         <li><a>Tutoria</a></li>
        </ul>
      </div>
    </div>
  </section>

</div>

</>
  )
}

export default Becas