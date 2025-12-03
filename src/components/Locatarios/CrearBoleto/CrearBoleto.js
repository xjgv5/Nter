import React from 'react';
import { RegresarCabecera } from '../RegresarCabecera';
import { Formulario } from './componentes/Formulario';

function CrearBoleto() {
    const titulo = "Nuevo Boleto";
    const ruta = "/boletos-invitaciones"
    return (
        <div className='crearBoleto-layout'>
            <RegresarCabecera titulo={titulo} ruta={ruta} />
            <Formulario />
        </div>
    );
}

export default CrearBoleto;