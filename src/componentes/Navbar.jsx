import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

import 'tailwindcss/tailwind.css';


const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState('bg-white');
  const [textColor, setTextColor] = useState('text-black');
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen1, setIsSubMenuOpen1] = useState(false);
  const [isSubMenuOpen2, setIsSubMenuOpen2] = useState(false);
  const [isSubMenuOpen3, setIsSubMenuOpen3] = useState(false);
  //submenus del mobile
  const [isSubMenuOpenm1, setIsSubMenuOpenm1] = useState(false);
  const [isSubMenuOpenm2, setIsSubMenuOpenm2] = useState(false);
  const [isSubMenuOpenm3, setIsSubMenuOpenm3] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  //esta es la funcion para poner a todos en una nueva pagina
  const ExternalLink = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarColor('bg-orange-950');
      setTextColor('text-white');
    } else {
      setNavbarColor('bg-white');
      setTextColor('text-black');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-[100] ${navbarColor} transition-colors  duration-200 ease-in-out items-center`}>
      <div className="flex justify-between items-center p-5">
        <div>
          <img src={"img/logo.svg"} alt="Logo"  className='w-10'/>          
        </div>
        {isMobile ? (
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`h-6 w-6 ${textColor}`}
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
            {/**esto es la pantalla de web */}
          </button>          
        ) : (            
          <>
            <ul className={`flex space-x-4 font-bold ${textColor}`}>
              <li className='hover:text-[#C08F3C]' onMouseEnter={() => setIsSubMenuOpen1(true)} onMouseLeave={() => setIsSubMenuOpen1(false)}>
                <a href="">
                 Conócenos
                 </a>
                {isSubMenuOpen1 && (
                  <ul className={`absolute p-2 px-5 rounded shadow ${navbarColor}`}>
                    <li className={`hover:text-[#C08F3C] ${textColor}`}>
                        <ExternalLink href={'http://www.cobao.edu.mx/images/PDF/2023/Conocenos/MIsion-Vision-02.jpg'}>
                        Filosofía 
                        </ExternalLink>
                    </li>
                    <li className={`hover:text-[#C08F3C] ${textColor} my-3 space-y-4`}>Marco Normativo</li>
                    <li className={`hover:text-[#C08F3C] ${textColor} my-3 space-y-4`}>Oferta Educativa</li>
                    <li className={`hover:text-[#C08F3C] ${textColor} my-3 space-y-4`}>
                        <ExternalLink href={'http://www.cobao.edu.mx/images/PDF/2023/Conocenos/Oficio-y-Estructura-Orgnica-21-junio-23.pdf'}>
                            Esctructura Orgánica
                        </ExternalLink>
                    </li>
                    <li className={`hover:text-[#C08F3C] ${textColor} my-3 space-y-4`}>
                        <ExternalLink href={'https://sisei.oaxaca.gob.mx:8081/public/principal/6102249073fc8229308e6a9d'}>
                        Comité de Ética
                        </ExternalLink>
                    </li>
                    <li className={`hover:text-[#C08F3C] ${textColor} my-3 space-y-4`}>
                        <ExternalLink href={'http://www.cobao.edu.mx/index.php/cobao/cocoi'}>
                            COCOI
                        </ExternalLink>
                    </li>
                    <li className={`hover:text-[#C08F3C] ${textColor} my-3 space-y-4`}>
                        <ExternalLink href={'http://www.cobao.edu.mx/images//PDF/2023/Conocenos/valores-1.pdf'}>
                            Valores
                        </ExternalLink>
                    </li>
                  </ul>
                )}
              </li>
              <li className='hover:text-[#C08F3C]'>
                <Link to="section2" smooth={true} duration={1000}>
                  Estudiantes
                </Link>
              </li>
              <li className='hover:text-[#C08F3C]'>
              <ExternalLink href="http://www.cobao.edu.mx/index.php/docentes">
                Docentes
                </ExternalLink>
              </li>
              <li className='hover:text-[#C08F3C]'>
                <Link to="section3" smooth={true} duration={1000}>
                  Trámites
                </Link>
              </li>
              <li className='hover:text-[#C08F3C]'>
              <ExternalLink href="https://scco.oaxaca.gob.mx/transparencia/?dep=6">
                Transparencia
            </ExternalLink>
              </li>
              <li className='hover:text-[#C08F3C]' onMouseEnter={() => setIsSubMenuOpen2(true)} onMouseLeave={() => setIsSubMenuOpen2(false)}>
               <a href="">
                 SEA
                 </a>
                {isSubMenuOpen2 && (
                  <ul className={`absolute p-2 px-5 rounded shadow ${navbarColor}`}>
                    <li className={`hover:text-[#C08F3C] ${textColor} my-3 space-y-4`}>
                        <ExternalLink href="http://www.cobao.edu.mx/index.php/cea-s/programas-de-estudio">
                         Programas de estudio
                        </ExternalLink>
                    </li>
                    <li className={`hover:text-[#C08F3C] ${textColor} my-3 space-y-4`}>
                        <ExternalLink href={'http://www.cobao.edu.mx/images/PDF/2023/SEA/CalendarioSEAcobao2023-2024-1.pdf'}>
                            Calendario
                            </ExternalLink>
                            </li>
                    <li className={`hover:text-[#C08F3C] ${textColor} my-3 space-y-4`}>
                        <ExternalLink href="http://www.cobao.edu.mx/index.php/cea-s/ubicacion">
                         Directorio
                        </ExternalLink>
                    </li>                    
                    <li className={`hover:text-[#C08F3C] ${textColor} my-3 space-y-4`}>
                        <ExternalLink href="http://www.cobao.edu.mx/index.php/cea-s/filosofia">
                         Filosofía
                        </ExternalLink>
                    </li> 
                    <li className={`hover:text-[#C08F3C] ${textColor} my-3 space-y-4`}>
                        <ExternalLink href="http://www.cobao.edu.mx/index.php/cea-s/mapa-curricular">
                         Mapa curricular
                        </ExternalLink>
                    </li> 
                    <li className={`hover:text-[#C08F3C] ${textColor} my-3 space-y-4`}>
                        <ExternalLink href="http://www.cobao.edu.mx/index.php/cea-s/apoyo-academico">
                         Apoyo Académico
                        </ExternalLink>
                    </li>                        
                    <li className={`hover:text-[#C08F3C] ${textColor} my-3 space-y-4`}>
                        <ExternalLink href="http://www.cobao.edu.mx/index.php/cea-s/mapa-curricular">
                         Trámite
                        </ExternalLink>
                    </li>                       
                  </ul>
                )}
              </li>
              <li className='hover:text-[#C08F3C]' onMouseEnter={() => setIsSubMenuOpen3(true)} onMouseLeave={() => setIsSubMenuOpen3(false)}>
                <a href="">
                 Datos de interés
                 </a>
                {isSubMenuOpen3 && (
                  <ul className={`absolute p-2 px-5 rounded shadow ${navbarColor}`}>
                    <li className={`hover:text-[#C08F3C] ${textColor} my-3 space-y-4`}>
                        <ExternalLink href="http://www.cobao.edu.mx/index.php/cea-s/programas-de-estudio">
                         Unidad de Transparencia
                        </ExternalLink>
                    </li>
                    <li className={`hover:text-[#C08F3C] ${textColor}  my-3 space-y-4`}>
                        <ExternalLink href={'http://www.transparenciapresupuestaria.oaxaca.gob.mx/'}>
                            Transparencia Presupuestaria
                            </ExternalLink>
                            </li>
                    <li className={`hover:text-[#C08F3C] ${textColor}  my-3 space-y-4`}>
                        <ExternalLink href="http://www.cobao.edu.mx/index.php/datos-de-interes/informe-de-evaluacion">
                         Informe de Evaluación
                        </ExternalLink>
                    </li>                    
                    <li className={`hover:text-[#C08F3C] ${textColor}  my-3 space-y-4`}>
                        <ExternalLink href="http://www.cobao.edu.mx/index.php/datos-de-interes/aviso-de-privacidad">
                         Aviso de Privacidad
                        </ExternalLink>
                    </li>  
                    <li className={`hover:text-[#C08F3C] ${textColor} my-3 space-y-4`}>
                        <ExternalLink href="http://www.cobao.edu.mx/index.php/datos-de-interes/otros-datos">
                         Otros Datos
                        </ExternalLink>
                    </li>  
                    <li className={`hover:text-[#C08F3C] ${textColor} my-3 space-y-4`}>
                        <ExternalLink href="http://www.cobao.edu.mx/index.php/datos-de-interes/convocatorias/promocion-administrativa-2020">
                         Convocatorias
                        </ExternalLink>
                    </li> 
                    <li className={`hover:text-[#C08F3C] ${textColor} my-3 space-y-4`}>
                        <ExternalLink href="http://www.cobao.edu.mx/index.php/datos-de-interes/reportes-de-gestion">
                         Reportes de Gestión
                        </ExternalLink>
                    </li>                        
                    <li className={`hover:text-[#C08F3C] ${textColor} my-3 space-y-4`}>
                        <ExternalLink href="http://www.cobao.edu.mx/index.php/datos-de-interes/unidad-de-genero">
                         Undiad de Género
                        </ExternalLink>
                    </li>                       
                  </ul>
                )}
              </li>
            </ul>
            <div className={`flex ${textColor} text-4xl justify-around`}>
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
          </>
        )}
      </div>
      {/**dispositivos mobiles */}
      {isOpen && (
        <>
    <ol className={`flex flex-col space-y-4 p-2 px-5  font-bold  ${textColor} items-center`}>
         <li className='my-3 space-y-4' onClick={() => setIsSubMenuOpenm1(!isSubMenuOpenm1)}>
         Conócenos
         {isSubMenuOpenm1 && (
        <ul className=''>
          <li className='my-3 space-y-4'>
          <ExternalLink href={'http://www.cobao.edu.mx/images/PDF/2023/Conocenos/MIsion-Vision-02.jpg'}>
            Filosofia 
          </ExternalLink>
          </li>
          <li className='my-3 space-y-4'>Marco Normativo</li>
          <li className='my-3 space-y-4'>Oferta Educativa</li>
          <li className='my-3 space-y-4'>
          <ExternalLink href={'http://www.cobao.edu.mx/images/PDF/2023/Conocenos/Oficio-y-Estructura-Orgnica-21-junio-23.pdf'}>
                            Esctructura Orgánica
          </ExternalLink>
          </li>
          <li className='my-3 space-y-4'>
          <ExternalLink href={'https://sisei.oaxaca.gob.mx:8081/public/principal/6102249073fc8229308e6a9d'}>
                        Comité de Ética
          </ExternalLink>
          </li>
          <li className='my-3 space-y-4'>
          <ExternalLink href={'http://www.cobao.edu.mx/index.php/cobao/cocoi'}>
                            COCOI
          </ExternalLink>
          </li>
          <li className='my-3 space-y-4'>
          <ExternalLink href={'http://www.cobao.edu.mx/images//PDF/2023/Conocenos/valores-1.pdf'}>
                            Valores
          </ExternalLink>
          </li>
        </ul>
         )}
        </li>
        <li className='my-3 space-y-4'>Estudiantes</li>
        <li className='my-3 space-y-4'>
        <ExternalLink href="http://www.cobao.edu.mx/index.php/docentes">
                Docentes
        </ExternalLink>
        </li>
        <li>Trámites</li>
        <li>
        <ExternalLink href="https://scco.oaxaca.gob.mx/transparencia/?dep=6">
                Transparencia
        </ExternalLink>
        </li>
        <li className='my-3 space-y-4' onClick={() => setIsSubMenuOpenm2(!isSubMenuOpenm2)}>
         SEA
         {isSubMenuOpenm2 && (
              <ul>
                <li className="my-3 space-y-4">
                <ExternalLink href="http://www.cobao.edu.mx/index.php/cea-s/programas-de-estudio">
                         Programas de estudio
                </ExternalLink>
                </li>
                <li className="my-3 space-y-4">
                <ExternalLink href={'http://www.cobao.edu.mx/images/PDF/2023/SEA/CalendarioSEAcobao2023-2024-1.pdf'}>
                            Calendario
                </ExternalLink>
                </li>
                <li className="my-3 space-y-4">
                <ExternalLink href="http://www.cobao.edu.mx/index.php/cea-s/ubicacion">
                         Directorio
                </ExternalLink>
                </li>
                <li className="my-3 space-y-4">
                <ExternalLink href="http://www.cobao.edu.mx/index.php/cea-s/filosofia">
                         Filosofía
                </ExternalLink>
                </li>
                <li className="my-3 space-y-4">
                <ExternalLink href="http://www.cobao.edu.mx/index.php/cea-s/mapa-curricular">
                         Mapa curricular
                </ExternalLink>
                </li>
                <li className="my-3 space-y-4">
                <ExternalLink href="http://www.cobao.edu.mx/index.php/cea-s/apoyo-academico">
                         Apoyo Académico
                </ExternalLink>
                </li>
                <li className="my-3 space-y-4">
                <ExternalLink href="http://www.cobao.edu.mx/index.php/cea-s/mapa-curricular">
                         Trámite
                </ExternalLink>
                </li>
              </ul>

         )}
        </li>
        <li className='my-3 space-y-4' onClick={() => setIsSubMenuOpenm3(!isSubMenuOpenm3)}>
        Datos de interés
         {isSubMenuOpenm2 && (
            <ul>
                <li className="my-3 space-y-4">
                <ExternalLink href="http://www.cobao.edu.mx/index.php/cea-s/programas-de-estudio">
                         Unidad de Transparencia
                </ExternalLink>
                </li>
                <li className="my-3 space-y-4">
                <ExternalLink href={'http://www.transparenciapresupuestaria.oaxaca.gob.mx/'}>
                            Transparencia Presupuestaria
                </ExternalLink>
                </li>
                <li className="my-3 space-y-4">
                <ExternalLink href="http://www.cobao.edu.mx/index.php/datos-de-interes/informe-de-evaluacion">
                         Informe de Evaluación
                </ExternalLink>
                </li>
                <li className="my-3 space-y-4">
                <ExternalLink href="http://www.cobao.edu.mx/index.php/datos-de-interes/aviso-de-privacidad">
                         Aviso de Privacidad
                </ExternalLink>
                </li>
                <li className="my-3 space-y-4">
                <ExternalLink href="http://www.cobao.edu.mx/index.php/datos-de-interes/otros-datos">
                         Otros Datos
                </ExternalLink>
                </li>
                <li className="my-3 space-y-4">
                <ExternalLink href="http://www.cobao.edu.mx/index.php/datos-de-interes/convocatorias/promocion-administrativa-2020">
                         Convocatorias
                </ExternalLink>
                </li>
                <li className="my-3 space-y-4">
                <ExternalLink href="http://www.cobao.edu.mx/index.php/datos-de-interes/reportes-de-gestion">
                         Reportes de Gestión
                </ExternalLink>
                </li>
                <li className="my-3 space-y-4">
                <ExternalLink href="http://www.cobao.edu.mx/index.php/datos-de-interes/unidad-de-genero">
                         Undiad de Género
                </ExternalLink>
                </li>
            </ul>
         )}
        </li>          
    </ol>
    <div className={`flex ${textColor} text-4xl justify-around my-5`}>
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
    </>
)}
      {/** end dispositivos mobiles */}
    </nav>
  );
};

export default Navbar;
