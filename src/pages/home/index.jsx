import React from 'react';
import Navbar from '../../componentes/Navbar';
import Banner from '../../componentes/Banner';
import Menus from '../../componentes/Menus'
import Bienvenida from '../../componentes/Bienvenida';
import Educacion from '../../componentes/Educacion';
import Intercolegial from '../../componentes/Intercolegial';
import FeedInsta from '../../componentes/FeedInsta';
import Contacto from '../../componentes/Contacto';
import Footer from '../../componentes/Footer';
import Estudiante from '../../componentes/Estudiante'
import Preguntas from '../../componentes/Preguntas';
import Tramites from '../../componentes/Tramites';

const Home = () => { 
    return (
        <>
    <Navbar/> 
    <Banner/>
    <Menus/>
    <Bienvenida/>
    <Educacion/>
    <Estudiante/>
    <Preguntas/>
    <Tramites/>
    <FeedInsta/>
    <Contacto/>    
    <Footer/>
    
       
        {/*}   
      <Intercolegial/>
          
    {*/}
        </>
      );
}


export default Home;