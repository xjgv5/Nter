import React, { useState } from 'react'
import { RadioBtn } from './RadioBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
    const [fecha, setFecha] = useState('');
    const [notas, setNotas] = useState('');

    const opcionesDuracion = [
        { value: '1 hora', label: '1 hora' },
        { value: '2 horas', label: '2 horas' },
        { value: '3 horas', label: '3 horas' },
        { value: '4 horas', label: '4 horas' },
        { value: '5 horas', label: '5 horas' },
        { value: '6 horas', label: '6 horas' },
        { value: '7 horas', label: '7 horas' },
        { value: '8 horas', label: '8 horas' },
        { value: '9 horas', label: '9 horas' },
        { value: '10 horas', label: '10 horas' }
    ];

    const redirigir = useNavigate();

    const enviarDatosFormulario = (e) => {
        e.preventDefault();

        const datosFormulario = {
            nombre,
            duracion: opcionSeleccionada,
            fecha,
            notas
        };

        console.log('Datos del formulario:', datosFormulario);

        localStorage.setItem('datosFormulario', JSON.stringify(datosFormulario));

        redirigir('/boleto');
    };

    return (
        <form onSubmit={enviarDatosFormulario}>
            <div className="menu-layout">
                <h3 className="subtitulo">LLENE EL FORMULARIO</h3>

                <label htmlFor="nombre">Nombre del invitado</label>
                <input
                    type="text"
                    id="nombre"
                    placeholder='Nombre completo'
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

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
                <input
                    type="date"
                    id="fecha"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />

                <label htmlFor="notas">Notas</label>
                <textarea
                    id="notas"
                    rows="4"
                    placeholder='Ingrese alguna nota a recordar'
                    value={notas}
                    onChange={(e) => setNotas(e.target.value)}
                ></textarea>

            </div>

            <button className='boton-primario enviar' type="submit">
                <FontAwesomeIcon icon={faQrcode} />
                Aceptar y generar QR
            </button>
        </form>
    )
}