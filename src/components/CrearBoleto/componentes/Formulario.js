import React, { useState } from 'react'
import { RadioBtn } from './RadioBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode, faFloppyDisk, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
    const [fecha, setFecha] = useState('');
    const [notas, setNotas] = useState('');
    const [mostrarModal, setMostrarModal] = useState(false);

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

    const obtenerFechaActual = () => {
        const hoy = new Date();
        const año = hoy.getFullYear();
        const mes = String(hoy.getMonth() + 1).padStart(2, '0');
        const dia = String(hoy.getDate()).padStart(2, '0');
        return `${año}-${mes}-${dia}`;
    };

    const redirigir = useNavigate();

    const generarQR = (e) => {
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

    const guardarPlantilla = (e) => {
        e.preventDefault();

        const nuevaPlantilla = {
            id: Date.now(),
            nombre,
            duracion: opcionSeleccionada,
            fecha,
            notas,
            fechaCreacion: new Date().toISOString()
        };

        const plantillasExistentes = JSON.parse(localStorage.getItem('plantillas')) || [];
        const nuevasPlantillas = [...plantillasExistentes, nuevaPlantilla];
        localStorage.setItem('plantillas', JSON.stringify(nuevasPlantillas));

        console.log('Plantilla guardada:', nuevaPlantilla);
        console.log('Total de plantillas:', nuevasPlantillas.length);

        // Mostrar el modal en lugar del alert
        setMostrarModal(true);
    };

    const cerrarModal = () => {
        setMostrarModal(false);
    };

    const verPlantillas = () => {
        setMostrarModal(false);
        redirigir('/plantillas');
    };

    return (
        <>
            <form onSubmit={generarQR}>
                <div className="menu-layout">
                    <h3 className="subtitulo">LLENE EL FORMULARIO</h3>

                    <label htmlFor="nombre">Nombre del invitado</label>
                    <input
                        type="text"
                        id="nombre"
                        placeholder='Nombre completo'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
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
                        min={obtenerFechaActual()}
                        onChange={(e) => setFecha(e.target.value)}
                        required
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

                <button className='boton-secundario enviar' type="button" onClick={guardarPlantilla}>
                    <FontAwesomeIcon icon={faFloppyDisk} />
                    Guardar como plantilla
                </button>
            </form>

            {/* Modal de confirmación */}
            {mostrarModal && (
                <div className="modal-overlay">
                    <div className="modal-contenido">
                        <button className="modal-cerrar" onClick={cerrarModal}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>

                        <div className="modal-icono">
                            <FontAwesomeIcon icon={faFloppyDisk} size="3x" />
                        </div>

                        <h3>¡Plantilla guardada!</h3>
                        <p>La plantilla se ha guardado correctamente en tu lista de plantillas.</p>

                        <div className="modal-botones">
                            <button className="boton-secundario" onClick={cerrarModal}>
                                Cerrar
                            </button>
                            <button className="boton-primario" onClick={verPlantillas}>
                                Ver plantillas
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}