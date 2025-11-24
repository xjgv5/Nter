import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export const RegresarCabecera = ({ titulo, ruta }) => {
    return (
        <div className="regresar-cabecera">
            <Link to={ruta} className='boton-regresar'>
                <FontAwesomeIcon className='icono small' icon={faArrowLeft} />
            </Link>
            <h1 className='titulo'>{titulo}</h1>
        </div>
    )
}

export default RegresarCabecera