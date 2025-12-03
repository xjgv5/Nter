import React from 'react';
import { Link } from 'react-router-dom';
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from './components/Menu'
import Resumen from './components/Resumen'
import RegresarCabecera from '../RegresarCabecera'
function Locatario() {
    const titulo = "Locatario";
    const ruta = "/"
    return (
        <div className='locatario-layout'>
            <RegresarCabecera titulo={titulo} ruta={ruta} />
            <div className="contenedor-botones">
                <Link to="/crearBoleto" className='boton-primario'>
                    <FontAwesomeIcon className='icono small' icon={faTicket} />
                    Crear Boleto
                </Link>
                <Link to="/crearBoleto" className='boton-primario'>
                    <FontAwesomeIcon className='icono small' icon={faTicket} />
                    Crear Boleto
                </Link>


            </div>
            <Resumen />
            <Menu />
        </div>
    );
}

export default Locatario;