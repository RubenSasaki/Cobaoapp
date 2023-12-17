import React from 'react'

function Tramites() {
      //esta es la funcion para poner a todos en una nueva pagina
  const ExternalLink = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
  return (
    <>
    {/*component*/} 
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-3">
    <div class="md:flex">
        <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-[rgba(126, 29, 58, 0.95)] font-semibold"><h1 className='text-center text-4xl pb-5 text-[rgba(126, 29, 58, 0.95)] font-bold uppercase'> Certificado Parcial </h1></div>
        <p class="block mt-1 text-lg leading-tight font-semibold text-black">El certificado de de estudios parciales, es el documento oficial que el COBAO expide al estudiante que acreditó parcialmente el Plan de Estudio de las modalidades que imparte, según sea el caso.
        Para tal caso la o el interesado deberán cubrir los siguientes requisitos:</p>            
        <p class="mt-2 font-semibold text-gray-700">Solicitud de certificado de estudios parciales</p>
        <p class="mt-2 font-semibold text-gray-700">Dos fotografías recientes tamaño infantil no instantánea, sin retoque, blanco y negro, papel mate, de frente, sin aretes, collares, piercings, lentes; con frente y orejas descubiertas, sin maquillaje, cabello recogido en el caso de mujeres y cabello corto para hombres y sin bigote con camisa o blusa blanca</p>
        <p class="mt-2 font-semibold text-gray-700">Recibo de pago de la cuota correspondiente establecida por la Secretaría de Finanzas del Gobierno del Estado de Oaxaca</p>
        </div>
    </div>
    </div>
    {/*end componente*/} 
    {/*component*/} 
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-3">
    <div class="md:flex">
        <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        <h1 className='text-center text-4xl pb-5 text-[rgba(126, 29, 58, 0.95)] font-bold uppercase'> Autenticidad </h1>            
        </div>
        <p class="block mt-1 text-lg leading-tight font-semibold text-black">Las y los estudiantes egresados del Colegio podrán solicitar carta de autenticidad 
        de certificado de terminación de estudios en las oficinas del Departamento de Control Escolar cubriendo los siguientes requisitos:
        </p>            
        <p class="mt-2 font-semibold text-gray-700"> Presentar solicitud dirigida a la Dirección Académica del COBAO.</p>
        <p class="mt-2 font-semibold text-gray-700"> Presentar copia fotostática por ambos lados del certificado a autentificar.</p>
        <p class="mt-2 font-semibold text-gray-700">Presentar recibo de pago de la cuota correspondiente establecida por la 
        Secretaría de Finanzas del Gobierno del Estado de Oaxaca</p>
        </div>
    </div>
    </div>
    {/*end componente*/}
    {/*component*/} 
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-3">
    <div class="md:flex">
        <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        <h1 className='text-center text-4xl pb-5 text-[rgba(126, 29, 58, 0.95)] font-bold uppercase'>  Duplicado de Certificado Parcial o de Terminación de Estudios </h1>             
        </div>
        <p class="block mt-1 text-lg leading-tight font-semibold text-black">La o el interesado podrá solicitar duplicado del certificado de terminación de estudios o de estudios parciales, las veces que lo requiera, siempre que cubra la cuota correspondiente establecida por la Secretaría de Finanzas del Gobierno del Estado de Oaxaca, y siempre que no se haya solicitado por rectificación de datos personales.
        La o el interesado deberá entregar a la URSE los siguientes requisitos:</p>            
        <p class="mt-2 font-semibold text-gray-700">Solicitud de duplicado de certificado de terminación o de estudios parciales</p>
        <p class="mt-2 font-semibold text-gray-700">Dos fotografías recientes tamaño infantil no instantánea, sin retoque, blanco y negro, papel mate, de frente, sin aretes, collares, piercings, lentes; con frente y orejas descubiertas, sin maquillaje, cabello recogido en el caso de mujeres y cabello corto para hombres y sin bigote; con camisa o blusa blanca;</p>
        <p class="mt-2 font-semibold text-gray-700">Copia de la credencial de elector expedida por el Instituto Nacional Electoral</p>
        <p class="mt-2 font-semibold text-gray-700">Recibo de pago de la cuota correspondiente establecida por la Secretaría de Finanzas del Gobierno del Estado de Oaxaca</p>
        </div>
    </div>
    </div>
    {/*end componente*/}  
    {/*componente*/}      
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden justify-center md:max-w-4xl m-3">
    <div class="md:flex text-center">
        <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        <h1 className='text-center text-4xl pb-5 text-[rgba(126, 29, 58, 0.95)] font-bold uppercase'>  Nuevo Ingreso </h1>            
        </div>
        <button class="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#C08F3C] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            <ExternalLink href={'http://www.cobao.edu.mx/images/PDF/2023/NuevoIngreso/Convocatoria-nuevo-ingreso-OK-1.pdf'}>
            Convocatoria
            </ExternalLink>
        </button>
        </div>
    </div>
    </div>
    {/*end componente*/}  
    {/*componente*/}      
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-3">
    <div class="md:flex">
        <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        <h1 className='text-center text-4xl pb-5 text-[rgba(126, 29, 58, 0.95)] font-bold uppercase'>  Portabilidad</h1>              
        </div>
        <button class="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#C08F3C] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
        <ExternalLink href={'http://www.cobao.edu.mx/images/PDF/2023/Formatos/requisitos-portabilidad-2023.pdf'}>
        REQUISITOS DE PORTABILIDAD 
        </ExternalLink>       
        </button>
        <button class="mt-5 lg:ml-3 md:ml-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#C08F3C] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
        <ExternalLink href={'http://www.cobao.edu.mx/images/PDF/2023/Formatos/solicitud-portabilidad--2023.pdf'}>
        SOLICITUD DE PORTABILIDAD DE ESTUDIOS
        </ExternalLink>        
        </button>
        <button class="mt-5 lg:ml-3 md:ml-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#C08F3C] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
        <ExternalLink href={'http://www.cobao.edu.mx/images/PDF/2023/Datos-de-interes/Aviso-de-privacidad/AVISO-DE-PRIVACIDAD-SIMPLIFICADO.pdf'}>
        AVISO DE PRIVACIDAD SIMPLIFICADO
        </ExternalLink>        
        </button>
        </div>
    </div>
    </div>
    {/*end componente*/} 
    {/*componente*/}      
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-3">
    <div class="md:flex">
        <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        <h1 className='text-center text-4xl pb-5 text-[rgba(126, 29, 58, 0.95)] font-bold uppercase'> Revalidación de Estudios</h1>              
        </div>
        <p class="block mt-1 text-lg leading-tight font-semibold text-black">Para el caso de la o el estudiante que haya efectuado estudios en el extranjero, deberá presentar la resolución de Revalidación de Estudios que emita la autoridad educativa.La revalidación de estudios consiste en el reconocimiento que otorga validez oficial a los estudios cursados en el extranjero, equiparables a la educación de Nivel Medio Superior.</p>
        <p class="block mt-1 text-lg leading-tight font-semibold text-black">Este trámite lo podrán efectuar ante la Coordinación de Educación Media Superior y Superior Ciencia y Tecnología del Estado de Oaxaca, para el caso de estudios parciales de bachillerato .</p>
        <p class="block mt-1 text-lg leading-tight font-semibold text-black">Para el caso de quienes hayan concluido estudios de secundaria en el extranjero y deseen ingresar a cursar estudios del nivel medio superior al COBAO deberán efectuar su trámite de revalidación de estudios ante el IEEPO.</p>        
        </div>
    </div>
    </div>
    {/*end componente*/} 
    {/*componente*/}      
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-3">
    <div class="md:flex">
        <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        <h1 className='text-center text-4xl pb-5 text-[rgba(126, 29, 58, 0.95)] font-bold uppercase'>  Cambio de plantel </h1>              
        </div>
        <p class="block mt-1 text-lg leading-tight font-semibold text-black">El cambio de Plantel sólo se podrá tramitar al inicio de cada semestre,
        durante los períodos señalados en el calendario escolar vigente; siempre que
        no se rebase la capacidad de atención del Plantel receptor, de acuerdo a la
        matrícula escolar autorizada y/o disponible, y siempre que se cuente con la
        autorización de la Dirección Académica.
        El estudiante deberá presentar dentro de las fechas establecidas en el
        calendario escolar vigente, los siguientes requisitos:
        </p>
        <p class="mt-2 font-semibold text-gray-700">Entregar formato de solicitud debidamente requisitado a la Dirección del
        Plantel de procedencia (Descargar formato).</p>
        <p class="mt-2 font-semibold text-gray-700">Copia de historial académico (Sin asignaturas reprobadas).</p>
        <p class="mt-2 font-semibold text-gray-700">Copia de credencial de elector del padre, madre o tutor.</p>
        <p class="mt-2 font-semibold text-gray-700">Copia de comprobante de domicilio. </p>
        <p class="block mt-1 text-lg leading-tight font-semibold text-black">Para el caso de los estudiantes de tercero a quinto semestre que soliciten
        cambio de plantel, procederá siempre y cuando el Plantel solicitado cuente con
        el cupo en el componente de formación para el trabajo que cursa actualmente,
        además de cumplir con los requisitos anteriormente mencionados.
        </p>
        <button class="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#C08F3C] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
           <ExternalLink href={'http://www.cobao.edu.mx/images/PDF/2023/Formatos/FORMATO-SOLICITUD-DE-CAMBIO-DE-PLANTEL.pdf'}>FORMATO SOLICITUD DE CAMBIO DE PLANTEL</ExternalLink>
        </button>
        <button class="mt-5 ml-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#C08F3C] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            <ExternalLink href={'http://www.cobao.edu.mx/images/PDF/2023/Datos-de-interes/Aviso-de-privacidad/AVISO-DE-PRIVACIDAD-SIMPLIFICADO.pdf'}>AVISO DE PRIVACIDAD SIMPLIFICADO</ExternalLink>
        </button>
        </div>
    </div>
    </div>
    {/*end componente*/}
    {/*componente*/}      
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden justify-center md:max-w-4xl m-3">
    <div class="md:flex text-center">
        <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        <h1 className='text-center text-4xl pb-5 text-[rgba(126, 29, 58, 0.95)] font-bold uppercase'>  Solicitud de Servicio -Sistemas </h1>             
        </div>
        <button class="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#C08F3C] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            <ExternalLink href={'http://www.cobao.edu.mx/images/PDF/2023/Hoja-de-Servico-Sistemas.pdf'}>
            Solicitud
            </ExternalLink>
        </button>
        </div>
    </div>
    </div>
    {/*end componente*/}   
    {/*componente*/}      
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-3">
    <div class="md:flex">
        <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        <h1 className='text-center text-4xl pb-5 text-[rgba(126, 29, 58, 0.95)] font-bold uppercase'>  Formatos </h1>             
        </div>
        <button class="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#C08F3C]  hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
        <ExternalLink href={'http://www.cobao.edu.mx/images/PDF/2023/Formatos/Hoja-Membrete-2023-Solicitud-de-Inscripcion.pdf'}>
        INSCRIPCION 
        </ExternalLink>
        </button>
        <button class="mt-5 ml-3 md:ml-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#C08F3C] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
        <ExternalLink href={'http://www.cobao.edu.mx/images/PDF/2023/Formatos/Hoja-Membrete-2023-Solicitud-de-Reinscripcion.pdf'}>
        REINSCRIPCION
        </ExternalLink>
        </button>
        <button class="mt-5 ml-3 md:ml-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#C08F3C] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
        <ExternalLink href={'http://www.cobao.edu.mx/images/PDF/2023/Formatos/Hoja-Membrete-2023-Solicitud-de-Baja-Definitiva2.pdf'}>
        BAJA DEFINITIVA
        </ExternalLink> 
        </button>
        <button class="mt-5 ml-3 md:ml-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#C08F3C] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
        <ExternalLink href={'http://www.cobao.edu.mx/images/PDF/2023/Formatos/Hoja-Membrete-2023-Solicitud-Baja-Temporal.pdf'}>
        BAJA TEMPORAL
        </ExternalLink> 
        </button>  
        <button class="mt-5 ml-3 md:ml-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#C08F3C] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
        <ExternalLink href={'http://www.cobao.edu.mx/images/menus/tramites/AVISO-DE-PRIVACIDAD-SIMPLIFICADO.pdf'}>
        AVISO DE PRIVACIDAD SIMPLIFICADO
        </ExternalLink> 
        </button>          
        </div>
    </div>
    </div>
    {/*end componente*/}
    {/*componente}      
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-3">
    <div class="md:flex">
        <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Portabilidad</div>
        <p class="block mt-1 text-lg leading-tight font-medium text-black">Appointment Time: 13:00 - 14:00</p>
        <p class="mt-2 font-semibold text-gray-700">Doctor: Dr. John Doe</p>
        <button class="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            View Details
        </button>
        <button class="mt-5 ml-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Cancel Appointment
        </button>

        </div>
    </div>
    </div>
    {end componente*/} 

</>
  )
}

export default Tramites