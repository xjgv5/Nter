import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import RegresarCabecera from '../RegresarCabecera'
// import ListadoBoletos from './componentes/FiltroBoletos'
import { ListaBoletos } from './componentes/ListaBoletos';
function BoletosInvitaciones() {
    const titulo = "Boletos e Invitaciones";
    const ruta = "/locatario"
    return (
        <div className='boletosInvitaciones-layout'>
            <RegresarCabecera titulo={titulo} ruta={ruta} />
            <div className="contenedor-botones">
                <Link to="/crearBoleto" className='boton-primario'>
                    <FontAwesomeIcon className='icono small' icon={faTicket} />
                    Crear Boleto
                </Link>
            </div>
            <ListaBoletos />
        </div>
    );
}

export default BoletosInvitaciones;