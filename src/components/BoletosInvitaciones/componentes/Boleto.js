import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicket } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const Boleto = ({ nombre = "John Doe", tipo = "Cortesía", fecha = "25/11/2025", hora = "3:00 PM", estado = "Abierto" }) => {
    return (
        <div className='fila'>
            <div className="contenedor-izquierda">
                <div className="contenedor-icono">
                    <FontAwesomeIcon className=' icono-gris mediano' icon={faTicket} />
                </div>
                <div className="info-ticket">
                    <h3 className="nombre-ticket">{nombre}</h3>
                    <div className="fila-ticket">
                        <p className='tipo-ticket'>{tipo}</p>
                        <FontAwesomeIcon icon={faUser} className='icono-gris' />
                        <p className='rol-usuario'>Admin</p>
                    </div>
                    <div className="fila-ticket">
                        <p className='fecha-ticket'>{fecha}</p>
                        <p className='hora-ticket'>{hora}</p>
                    </div>
                </div>
            </div>
            <div className="contenedor-derecha">
                <p className='estado-ticket'>{estado}</p>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    )
}
