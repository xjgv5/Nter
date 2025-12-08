import React, { useState, useEffect } from 'react'
import { AgCharts } from 'ag-charts-react'
import { Calendar } from "react-calendar"
import 'react-calendar/dist/Calendar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

export const Grafica = () => {
    const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date())
    const [mostrarCalendario, setMostrarCalendario] = useState(false)
    const [esMovil, setEsMovil] = useState(false)

    // Detectar si es dispositivo móvil
    useEffect(() => {
        const verificarMovil = () => {
            setEsMovil(window.innerWidth <= 768)
        }

        verificarMovil()
        window.addEventListener('resize', verificarMovil)

        return () => {
            window.removeEventListener('resize', verificarMovil)
        }
    }, [])

    // Función para formatear la fecha en español
    const formatearFecha = (fecha) => {
        const opciones = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        return fecha.toLocaleDateString('es-ES', opciones)
    }

    // Función para obtener el nombre del día en español
    const obtenerNombreDia = (fecha) => {
        const dias = [
            "Dom", "Lun", "Mar", "Mié",
            "Jue", "Vie", "Sáb"
        ]
        return dias[fecha.getDay()]
    }

    // Función para generar datos aleatorios
    const generarDatosAleatorios = (fecha) => {
        const esFinDeSemana = fecha.getDay() === 0 || fecha.getDay() === 6
        const factor = esFinDeSemana ? 0.7 : 1
        const horas = [];

        for (let i = 0; i < 24; i++) {
            const ingresados = Math.floor(Math.random() * (50 + i * 15) * factor);
            const dinero = Math.floor(Math.random() * (2000 + i * 500) * factor);

            horas.push({
                hora: `${i}:00`,
                vehiculosIngresados: ingresados,
                dineroIngresado: dinero
            });
        }

        return horas;
    }

    const [opcionesGrafica, setOpcionesGrafica] = useState({
        title: {
            text: esMovil ? "Estacionamiento" : "Monitoreo de Estacionamiento",
            fontSize: esMovil ? 14 : 16
        },
        subtitle: {
            text: esMovil ? `Hoy` : `Datos del ${formatearFecha(fechaSeleccionada)}`,
            fontSize: esMovil ? 12 : 14
        },
        data: generarDatosAleatorios(fechaSeleccionada),
        series: [
            {
                type: 'line',
                xKey: 'hora',
                yKey: 'vehiculosIngresados',
                yName: "Autos ingresados",
                interpolation: { type: 'smooth' },
                stroke: '#1d4ed8',
                strokeWidth: esMovil ? 2 : 3,
                marker: {
                    fill: '#1d4ed8',
                    size: esMovil ? 3 : 4,
                    stroke: '#1d4ed8',
                    strokeWidth: esMovil ? 1 : 2
                }
            },
            {
                type: 'line',
                xKey: 'hora',
                yKey: 'dineroIngresado',
                yName: "Dinero ingresado",
                interpolation: { type: 'smooth' },
                stroke: '#3b82f6',
                strokeWidth: esMovil ? 2 : 3,
                marker: {
                    fill: '#3b82f6',
                    size: esMovil ? 3 : 4,
                    stroke: '#3b82f6',
                    strokeWidth: esMovil ? 1 : 2
                }
            }
        ],
        background: {
            fill: 'transparent'
        },
        padding: {
            top: esMovil ? 5 : 10,
            right: esMovil ? 10 : 15,
            bottom: esMovil ? 35 : 40,
            left: esMovil ? 35 : 50  // Reducido para móvil
        },
        axes: [
            {
                type: 'category',
                position: 'bottom',
                title: {
                    text: esMovil ? 'Hora' : 'Hora del día',
                    enabled: true,
                    fontSize: esMovil ? 10 : 12
                },
                label: {
                    rotation: -45,
                    fontSize: esMovil ? 8 : 10,
                    formatter: (params) => {
                        const hour = parseInt(params.value.split(':')[0]);
                        if (esMovil) {
                            return hour % 6 === 0 ? `${hour}h` : '';
                        }
                        return hour % 4 === 0 ? `${hour}:00` : '';
                    }
                },
                line: {
                    width: 1
                }
            },
            {
                type: 'number',
                position: 'left',
                title: {
                    text: esMovil ? '' : 'Cantidad', // Ocultar título en móvil
                    enabled: !esMovil
                },
                nice: true,
                label: {
                    fontSize: esMovil ? 9 : 10
                },
                line: {
                    width: 1
                },
                paddingInner: esMovil ? 0.1 : 0.2 // Reducir padding interno
            }
        ],
        legend: {
            enabled: true,
            position: 'bottom',
            spacing: esMovil ? 5 : 10,
            item: {
                paddingY: esMovil ? 3 : 5,
                marker: {
                    size: esMovil ? 8 : 10
                },
                label: {
                    fontSize: esMovil ? 9 : 11
                }
            }
        },
        tooltip: {
            enabled: true,
            interaction: {
                enabled: true
            }
        }
    })

    // Efecto para actualizar la gráfica cuando cambia la fecha o el tamaño
    useEffect(() => {
        const actualizarGrafica = () => {
            setOpcionesGrafica(prevOpciones => ({
                ...prevOpciones,
                title: {
                    text: esMovil ? "Estacionamiento" : "Monitoreo de Estacionamiento",
                    fontSize: esMovil ? 14 : 16
                },
                subtitle: {
                    text: esMovil ? `Hoy` : `Datos del ${formatearFecha(fechaSeleccionada)}`,
                    fontSize: esMovil ? 12 : 14
                },
                subtitle: {
                    text: `Datos del ${formatearFecha(fechaSeleccionada)}`
                },
                data: generarDatosAleatorios(fechaSeleccionada),
                padding: {
                    top: esMovil ? 5 : 10,
                    right: esMovil ? 10 : 15,
                    bottom: esMovil ? 35 : 40,
                    left: esMovil ? 35 : 50
                },
                axes: [
                    {
                        ...prevOpciones.axes[0],
                        title: {
                            text: esMovil ? 'Hora' : 'Hora del día',
                            enabled: true,
                            fontSize: esMovil ? 10 : 12
                        },
                        label: {
                            fontSize: esMovil ? 8 : 10,
                            formatter: (params) => {
                                const hour = parseInt(params.value.split(':')[0]);
                                if (esMovil) {
                                    return hour % 6 === 0 ? `${hour}h` : '';
                                }
                                return hour % 4 === 0 ? `${hour}:00` : '';
                            }
                        }
                    },
                    {
                        ...prevOpciones.axes[1],
                        title: {
                            text: esMovil ? '' : 'Cantidad',
                            enabled: !esMovil
                        },
                        label: {
                            fontSize: esMovil ? 9 : 10
                        },
                        paddingInner: esMovil ? 0.1 : 0.2
                    }
                ]
            }))
        }

        actualizarGrafica()
    }, [fechaSeleccionada, esMovil])

    // Manejar cambio de fecha en el calendario
    const manejarCambioFecha = (fecha) => {
        setFechaSeleccionada(fecha)
        setMostrarCalendario(false)
    }

    // Cambiar al día siguiente
    const cambiarDiaSiguiente = () => {
        const nuevoDia = new Date(fechaSeleccionada)
        nuevoDia.setDate(nuevoDia.getDate() + 1)
        setFechaSeleccionada(nuevoDia)
    }

    // Cambiar al día anterior
    const cambiarDiaAnterior = () => {
        const nuevoDia = new Date(fechaSeleccionada)
        nuevoDia.setDate(nuevoDia.getDate() - 1)
        setFechaSeleccionada(nuevoDia)
    }

    // Cambiar al día actual
    const cambiarHoy = () => {
        setFechaSeleccionada(new Date())
    }

    // Alternar visibilidad del calendario
    const alternarCalendario = () => {
        setMostrarCalendario(!mostrarCalendario)
    }

    // Cerrar calendario
    const cerrarCalendario = () => {
        setMostrarCalendario(false)
    }

    return (
        <div className="contenedor-grafica">
            {/* Información de fecha - Superior izquierda */}
            {/* <div className="info-fecha-movil">
                <div className="fecha-corta">
                    {obtenerNombreDia(fechaSeleccionada)} {fechaSeleccionada.getDate()}/{fechaSeleccionada.getMonth() + 1}
                </div>
            </div> */}

            {/* Botones de navegación - Superior derecha */}
            <div className="contenedor-botones-superiores">
                <div className="navegacion-dias-movil">
                    <button
                        onClick={cambiarDiaAnterior}
                        className="boton-navegacion-movil"
                        title="Día anterior"
                    >
                        ←
                    </button>

                    <button
                        onClick={cambiarHoy}
                        className="boton-hoy-movil"
                        title="Ir a hoy"
                    >
                        Hoy
                    </button>

                    <button
                        onClick={cambiarDiaSiguiente}
                        className="boton-navegacion-movil"
                        title="Día siguiente"
                    >
                        →
                    </button>
                </div>

                <button
                    onClick={alternarCalendario}
                    className="boton-calendario-movil"
                >
                    {mostrarCalendario ? '✕' : <FontAwesomeIcon icon={faCalendar} />}
                </button>
            </div>

            {/* Calendario superpuesto */}
            {mostrarCalendario && (
                <div className="contenedor-calendario-movil">
                    <div className="overlay-calendario" onClick={cerrarCalendario}></div>
                    <div className="calendario-movil">
                        <Calendar
                            onChange={manejarCambioFecha}
                            value={fechaSeleccionada}
                            locale="es-ES"
                            className="calendario-estilizado-movil"
                        />
                        <button
                            onClick={cerrarCalendario}
                            className="boton-cerrar-calendario-movil"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

            {/* Gráfica - Contenedor optimizado */}
            <div className="contenedor-chart-movil">
                <AgCharts options={opcionesGrafica} />
            </div>

            {/* Estilos específicos para móvil */}
            <style jsx>{`
                .contenedor-grafica {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    min-height: 400px;
                    padding: 8px;
                    background: #f8fafc;
                    border-radius: 8px;
                    overflow: hidden;
                }

                /* Información de fecha */
                .info-fecha-movil {
                    position: absolute;
                    top: 8px;
                    left: 8px;
                    z-index: 5;
                }

                .fecha-corta {
                    font-size: 11px;
                    font-weight: 600;
                    color: #1e293b;
                    background: white;
                    padding: 3px 6px;
                    border-radius: 4px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
                    white-space: nowrap;
                }

                /* Botones superiores - optimizados */
                .contenedor-botones-superiores {
                    position: absolute;
                    top: 8px;
                    right: 8px;
                    display: flex;
                    gap: 4px;
                    z-index: 10;
                }

                .navegacion-dias-movil {
                    display: flex;
                    gap: 2px;
                    background: white;
                    padding: 3px;
                    border-radius: 5px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
                }

                .boton-navegacion-movil {
                    background: #64748b;
                    color: white;
                    border: none;
                    width: 26px;
                    height: 26px;
                    border-radius: 4px;
                    font-size: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    padding: 0;
                }

                .boton-hoy-movil {
                    background: #3b82f6;
                    color: white;
                    border: none;
                    padding: 0 6px;
                    height: 26px;
                    border-radius: 4px;
                    font-size: 11px;
                    font-weight: 500;
                    cursor: pointer;
                    white-space: nowrap;
                    min-width: 36px;
                }

                .boton-calendario-movil {
                    background: #3b82f6;
                    color: white;
                    border: none;
                    width: 28px;
                    height: 28px;
                    border-radius: 5px;
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    box-shadow: 0 1px 2px rgba(59, 130, 246, 0.2);
                }

                /* Calendario móvil */
                .contenedor-calendario-movil {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .overlay-calendario {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(2px);
                }

                .calendario-movil {
                    position: relative;
                    z-index: 1001;
                    width: 90%;
                    max-width: 320px;
                    background: white;
                    border-radius: 10px;
                    padding: 12px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                }

                .calendario-estilizado-movil {
                    width: 100%;
                    border: none;
                    font-size: 13px;
                }

                .boton-cerrar-calendario-movil {
                    width: 100%;
                    margin-top: 10px;
                    padding: 8px;
                    background: #3b82f6;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    font-size: 13px;
                    cursor: pointer;
                }

                /* Gráfica optimizada - MENOS ESPACIO IZQUIERDO */
                .contenedor-chart-movil {
                    position: absolute;
                    top: 40px;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: 100%;
                    height: calc(100% - 40px);
                    margin: 0;
                    padding: 0;
                }

                /* Ajustes específicos para AG Charts en móvil */
                :global(.ag-charts) {
                    width: 100% !important;
                    height: 100% !important;
                }

                :global(.ag-charts-canvas) {
                    width: 100% !important;
                    height: 100% !important;
                }

                /* Media queries optimizadas */
                @media (max-width: 480px) {
                    .contenedor-grafica {
                        padding: 6px;
                        min-height: 350px;
                    }
                    
                    .info-fecha-movil {
                        top: 6px;
                        left: 6px;
                    }
                    
                    .fecha-corta {
                        font-size: 10px;
                        padding: 2px 4px;
                    }
                    
                    .contenedor-botones-superiores {
                        top: 6px;
                        right: 6px;
                        gap: 3px;
                    }
                    
                    .navegacion-dias-movil {
                        padding: 2px;
                        gap: 1px;
                    }
                    
                    .boton-navegacion-movil {
                        width: 24px;
                        height: 24px;
                        font-size: 11px;
                    }
                    
                    .boton-hoy-movil {
                        height: 24px;
                        font-size: 10px;
                        padding: 0 4px;
                        min-width: 32px;
                    }
                    
                    .boton-calendario-movil {
                        width: 26px;
                        height: 26px;
                        font-size: 12px;
                    }
                    
                    .contenedor-chart-movil {
                        top: 35px;
                        height: calc(100% - 35px);
                    }
                    
                    .calendario-movil {
                        width: 95%;
                        padding: 10px;
                        max-width: 300px;
                    }
                }

                @media (max-width: 360px) {
                    .contenedor-grafica {
                        min-height: 320px;
                    }
                    
                    .fecha-corta {
                        max-width: 100px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    
                    .contenedor-botones-superiores {
                        flex-direction: row;
                        align-items: center;
                    }
                    
                    .navegacion-dias-movil {
                        order: 1;
                    }
                    
                    .boton-calendario-movil {
                        order: 2;
                    }
                }

                @media (min-width: 768px) {
                    .contenedor-grafica {
                        padding: 15px;
                        min-height: 450px;
                    }
                    
                    .info-fecha-movil {
                        top: 15px;
                        left: 15px;
                    }
                    
                    .contenedor-botones-superiores {
                        top: 15px;
                        right: 15px;
                    }
                    
                    .contenedor-chart-movil {
                        top: 50px;
                        height: calc(100% - 50px);
                    }
                }
            `}</style>
        </div>
    )
}

export default Grafica