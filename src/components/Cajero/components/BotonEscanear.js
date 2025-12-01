import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faQrcode } from "@fortawesome/free-solid-svg-icons"

export const BotonEscanear = () => {
    return (
        <div className='boton-escanear-contenedor'>
            <button className='boton-escanear'>
                <FontAwesomeIcon icon={faQrcode} />
            </button>
        </div>
    )
}

export default BotonEscanear

