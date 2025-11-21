import React from 'react';
import { Link } from 'react-router-dom';
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from './Components/Menu'
import Resumen from './Components/Resumen'
function Locatario() {
    const titulo = "Locatario";
    return (
        <div className='locatario-layout'>
            <h1 className='titulo'>{titulo}</h1>
            <div className="contenedor-botones">
                <Link to="/crearBoleto" className='boton-primario'>
                    <FontAwesomeIcon className='icono' icon={faTicket} />
                    Crear Boleto
                </Link>
                <Link to="/crearBoleto" className='boton-primario'>
                    <FontAwesomeIcon className='icono' icon={faTicket} />
                    Crear Boleto
                </Link>


            </div>
            <Resumen />
            <Menu />
        </div>
    );
}

export default Locatario;