import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    //esta es la funcion para poner a todos en una nueva pagina
    const ExternalLink = ({ href, children }) => (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  return (
    <>
    <footer className="footer p-10 bg-base-200 text-base-content">
  <nav>
    <header className="footer-title">Aviso De Privacidad</header> 
    <a className="link link-hover" href='http://www.cobao.edu.mx/images/PDF/2023/Datos-de-interes/Aviso-de-privacidad/AVISO-DE-PRIVACIDAD-SIMPLIFICADO.pdf'>Aviso de privacidad Simplificado</a>
    <a className="link link-hover" href='http://www.cobao.edu.mx/images/PDF/2023/Datos-de-interes/Aviso-de-privacidad/AVISO-DE-PRIVACIDAD-INTEGRAL-ESTUDIANTES.pdf'>Aviso de Privacidad Integral respecto de los datos personales de las y los estudiantes</a>
    <a className="link link-hover" href='http://www.cobao.edu.mx/images/PDF/2023/Datos-de-interes/Aviso-de-privacidad/AVISO-DE-PRIVACIDAD-INTEGRAL-TRABAJADORES.pdf'>Aviso de Privacidad Integral respecto de los datos personales de las y los trabajadores</a>
  </nav> 
  <nav>
    <header className="footer-title">Cobao</header> 
    <a className="link link-hover">Acerca de nosotros</a>
    <a className="link link-hover">Contactanos: Oaxaca, Tels/fax:(951)501-5160</a>
    <a className="link link-hover">Colegio de Bachilleres del Estado de Oaxaca, Av. Universidad No. 145 C.P. 71230, Santa Cruz Xoxocotlán</a>
  </nav> 
</footer> 
<footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
  <aside className="items-center grid-flow-col">
    <img src={"img/logo.svg"} alt="logo"  className='w-9 h-10 ml-10' />
    <p>Cobao Web</p>
  </aside> 
  <nav className="md:place-self-center md:justify-self-end">
    <div className={`flex text-4xl justify-around`}>
            <ExternalLink href={'https://www.facebook.com/comunidadcobao'}>
              <FaFacebook className="hover:text-blue-600 mx-2"/>
            </ExternalLink>
            <ExternalLink href={'https://twitter.com/COBAO_GobOax?lang=es'}>
              <FaTwitter className='hover:text-blue-400 mx-2'/>
            </ExternalLink>              
            <ExternalLink href={'https://www.instagram.com/comunidadcobao/'}>
              <FaInstagram className='hover:text-pink-500 mx-2'/>
            </ExternalLink>              
    </div>
  </nav>
</footer>
    </>
  )
}

export default Footer