import React, { useState } from 'react'
import { RadioBtn } from './RadioBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';

export const Formulario = () => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

    const opcionesDuracion = [
        { value: '1hr', label: '1 hr' },
        { value: '2hr', label: '2 hrs' },
        { value: '3hr', label: '3 hrs' },
        { value: '4hr', label: '4 hrs' },
        { value: '5hr', label: '5 hrs' },
        { value: '6hr', label: '6 hrs' },
        { value: '7hr', label: '7 hrs' },
        { value: '8hr', label: '8 hrs' },
        { value: '9hr', label: '9 hrs' },
        { value: '10hr', label: '10 hrs' }
    ];

    return (
        <form>
            <div className="menu-layout">
                <h3 className="subtitulo">LLENE EL FORMULARIO</h3>

                <label htmlFor="nombre">Nombre del invitado</label>
                <input type="text" id="nombre" placeholder='Nombre completo' />

                <label>Duración de la estadía</label>

                <div className="radio-grupo">
                    {opcionesDuracion.map((opcion) => (
                        <RadioBtn
                            key={opcion.value}
                            value={opcion.value}
                            label={opcion.label}
                            name="duracion"
                            selectedValue={opcionSeleccionada}
                            onChange={setOpcionSeleccionada}
                        />
                    ))}
                </div>

                <label htmlFor="fecha">Fecha de uso</label>
                <input type="date" id="fecha" />

                <label htmlFor="notas">Notas</label>
                <textarea id="notas" rows="4" placeholder='Ingrese alguna nota a recordar'></textarea>

            </div>

            <button className='boton-primario enviar' type="submit">
                <FontAwesomeIcon icon={faQrcode} />
                Aceptar y generar QR
            </button>
        </form>
    )
}