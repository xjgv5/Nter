import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Plantilla from './components/Plantilla';
import RegresarCabecera from '../RegresarCabecera';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSync } from '@fortawesome/free-solid-svg-icons';
import { eliminarPlantilla, cargarPlantillas } from '../../Helpers/PlantillasHelper';
import ModalConfirmacion from './components/ModalConfirmacion';
import { toast, ToastContainer } from 'react-toastify';
import SinPlantillas from './components/SinPlantillas';

export const ListadoPlantillas = () => {
    const titulo = "Plantillas";
    const ruta = "/crearBoleto";
    const navigate = useNavigate();

    const [plantillas, setPlantillas] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [modalConfirmacion, setModalConfirmacion] = useState({
        isOpen: false,
        plantillaAEliminar: null,
        titulo: '',
        mensaje: ''
    });


    useEffect(() => {
        cargarPlantillasDesdeStorage();
    }, []);

    // toastify
    const notify = (mensaje) => toast(mensaje);


    const cargarPlantillasDesdeStorage = () => {
        setCargando(true);
        try {
            const plantillasCargadas = cargarPlantillas();
            setPlantillas(plantillasCargadas);


        } catch (error) {
            console.error('Error al cargar plantillas:', error);
            toast.error('Error al cargar las plantillas', {
                position: "top-right",
                autoClose: 3000,
            });
        } finally {
            setCargando(false);
        }
    };

    const abrirModalEliminacion = (plantilla) => {
        setModalConfirmacion({
            isOpen: true,
            plantillaAEliminar: plantilla,
            titulo: '¿Eliminar plantilla?',
            mensaje: `¿Estás seguro de eliminar la plantilla "${plantilla.nombre}"? Esta acción no se puede deshacer.`
        });
    };

    const cerrarModal = () => {
        setModalConfirmacion({
            isOpen: false,
            plantillaAEliminar: null,
            titulo: '',
            mensaje: ''
        });
    };

    const confirmarEliminacion = () => {
        if (modalConfirmacion.plantillaAEliminar) {
            const { id, nombre } = modalConfirmacion.plantillaAEliminar;

            try {
                eliminarPlantilla(id);
                // Actualizar el estado local
                setPlantillas(prev => prev.filter(p => p.id !== id));

                // Mostrar toast de éxito
                notify(`Plantilla "${nombre}" eliminada correctamente`);

            } catch (error) {
                console.error('Error al eliminar:', error);
                // Mostrar toast de error
                toast.error('Error al eliminar la plantilla', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } finally {
                cerrarModal();
            }
        }
    };

    const handleUsarPlantilla = (plantilla) => {
        try {
            const datosParaQR = {
                nombre: plantilla.nombre,
                duracion: plantilla.duracion,
                fecha: plantilla.fecha,
                notas: plantilla.notas
            };

            localStorage.setItem('datosFormulario', JSON.stringify(datosParaQR));

            // Mostrar toast antes de redirigir
            toast.success(`Plantilla "${plantilla.nombre}" cargada correctamente`, {
                position: "top-right",
                autoClose: 2000,
                onClose: () => navigate('/boleto')
            });

        } catch (error) {
            console.error('Error al usar plantilla:', error);
            toast.error('Error al cargar la plantilla', {
                position: "top-right",
                autoClose: 3000,
            });
        }
    };

    const handleEditarPlantilla = (plantilla) => {
        // Mostrar toast informativo
        toast.info(`Editando plantilla: ${plantilla.nombre}`, {
            position: "top-right",
            autoClose: 2000,
        });

        navigate('/crearBoleto', {
            state: {
                plantillaEditar: plantilla
            }
        });
    };

    const handleActualizarLista = () => {
        cargarPlantillasDesdeStorage();
        toast.info('Lista de plantillas actualizada', {
            position: "top-right",
            autoClose: 2000,
        });
    };

    if (cargando) {
        return (
            <div className="plantillas-layout">
                <RegresarCabecera titulo={titulo} ruta={ruta} />
                <div className="menu-layout">
                    <p>Cargando plantillas...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="plantillas-layout">
            <RegresarCabecera titulo={titulo} ruta={ruta} />
            <ToastContainer />

            <div className="menu-layout">
                <div className="subtitulo">Listado de plantillas</div>
                {/* <button onClick={notify}>Toastify!</button> */}

                {plantillas.length === 0 ? (
                    <div className="">
                        <div className="sin-plantillas">
                            <SinPlantillas />
                        </div>
                        <div className="contenedor-botones-vertical">
                            <Link to="/crearBoleto" className="boton-primario">
                                Crear primera plantilla
                            </Link>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="controles-superiores">
                            <button
                                className="boton-secundario"
                                onClick={handleActualizarLista}
                                style={{ marginBottom: '1rem' }}
                            >
                                <FontAwesomeIcon icon={faSync} />
                                Actualizar lista
                            </button>
                        </div>

                        <p className="contador-plantillas">
                            Total: {plantillas.length} plantilla(s)
                        </p>

                        {plantillas.map((plantilla) => (
                            <Plantilla
                                key={plantilla.id}
                                listaPlantillas={plantilla}
                                onEliminar={() => abrirModalEliminacion(plantilla)}
                                onUsar={handleUsarPlantilla}
                                onEditar={handleEditarPlantilla}
                            />
                        ))}
                    </>
                )}
            </div>

            <div className="contenedor-botones">
                <Link to="/" className='boton-primario'>
                    <FontAwesomeIcon icon={faHouse} />
                    Inicio
                </Link>
            </div>

            <ModalConfirmacion
                isOpen={modalConfirmacion.isOpen}
                onClose={cerrarModal}
                onConfirm={confirmarEliminacion}
                titulo={modalConfirmacion.titulo}
                mensaje={modalConfirmacion.mensaje}
                textoConfirmar="Sí, eliminar"
                textoCancelar="Cancelar"
            />
        </div>
    );
};

export default ListadoPlantillas;