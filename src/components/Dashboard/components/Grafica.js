import React, { useState, useEffect } from 'react'
import { AgCharts } from 'ag-charts-react'
import { Calendar } from "react-calendar"
import 'react-calendar/dist/Calendar.css'

export const Grafica = () => {
    const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date())
    const [mostrarCalendario, setMostrarCalendario] = useState(false)

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
            "Domingo", "Lunes", "Martes", "Miércoles",
            "Jueves", "Viernes", "Sábado"
        ]
        return dias[fecha.getDay()]
    }

    // Función para generar datos aleatorios con variación según el día
    const generarDatosAleatorios = (fecha) => {
        const esFinDeSemana = fecha.getDay() === 0 || fecha.getDay() === 6
        const factor = esFinDeSemana ? 0.7 : 1 // Menos tráfico en fines de semana

        return [
            { hora: "0:00 hrs", numVehiculos: Math.floor(Math.random() * 200 * factor) },
            { hora: "1:00 hrs", numVehiculos: Math.floor(Math.random() * 150 * factor) },
            { hora: "2:00 hrs", numVehiculos: Math.floor(Math.random() * 100 * factor) },
            { hora: "3:00 hrs", numVehiculos: Math.floor(Math.random() * 80 * factor) },
            { hora: "4:00 hrs", numVehiculos: Math.floor(Math.random() * 100 * factor) },
            { hora: "5:00 hrs", numVehiculos: Math.floor(Math.random() * 200 * factor) },
            { hora: "6:00 hrs", numVehiculos: Math.floor(Math.random() * 300 * factor) },
            { hora: "7:00 hrs", numVehiculos: Math.floor(Math.random() * 500 * factor) },
            { hora: "8:00 hrs", numVehiculos: Math.floor(Math.random() * 800 * factor) },
            { hora: "9:00 hrs", numVehiculos: Math.floor(Math.random() * 600 * factor) },
            { hora: "10:00 hrs", numVehiculos: Math.floor(Math.random() * 500 * factor) },
            { hora: "11:00 hrs", numVehiculos: Math.floor(Math.random() * 550 * factor) },
            { hora: "12:00 hrs", numVehiculos: Math.floor(Math.random() * 700 * factor) },
            { hora: "13:00 hrs", numVehiculos: Math.floor(Math.random() * 600 * factor) },
            { hora: "14:00 hrs", numVehiculos: Math.floor(Math.random() * 550 * factor) },
            { hora: "15:00 hrs", numVehiculos: Math.floor(Math.random() * 600 * factor) },
            { hora: "16:00 hrs", numVehiculos: Math.floor(Math.random() * 750 * factor) },
            { hora: "17:00 hrs", numVehiculos: Math.floor(Math.random() * 850 * factor) },
            { hora: "18:00 hrs", numVehiculos: Math.floor(Math.random() * 700 * factor) },
            { hora: "19:00 hrs", numVehiculos: Math.floor(Math.random() * 500 * factor) },
            { hora: "20:00 hrs", numVehiculos: Math.floor(Math.random() * 400 * factor) },
            { hora: "21:00 hrs", numVehiculos: Math.floor(Math.random() * 300 * factor) },
            { hora: "22:00 hrs", numVehiculos: Math.floor(Math.random() * 250 * factor) },
            { hora: "23:00 hrs", numVehiculos: Math.floor(Math.random() * 200 * factor) },
        ]
    }

    const [opcionesGrafica, setOpcionesGrafica] = useState({
        title: {
            text: "Espacios ocupados por hora",
        },
        subtitle: {
            text: `Datos del ${formatearFecha(fechaSeleccionada)}`,
        },
        data: generarDatosAleatorios(fechaSeleccionada),
        series: [
            {
                type: 'line',
                xKey: 'hora',
                yKey: 'numVehiculos',
                yName: "Número de vehículos",
                interpolation: { type: 'smooth' },
                stroke: '#1d4ed8',
                strokeWidth: 3,
                marker: {
                    fill: '#1d4ed8',
                    size: 6,
                    stroke: '#1d4ed8',
                    strokeWidth: 2
                }
            }
        ],
        background: {
            fill: 'transparent'
        },
        padding: {
            top: 40,
            right: 40,
            bottom: 40,
            left: 60
        },
        axes: [
            {
                type: 'category',
                position: 'bottom',
                title: {
                    text: 'Hora del día',
                    enabled: true
                },
                label: {
                    rotation: -45,
                    fontSize: 10
                }
            },
            {
                type: 'number',
                position: 'left',
                title: {
                    text: 'Vehículos en estacionamiento',
                    enabled: true
                },
                nice: true
            }
        ],
        legend: {
            enabled: true,
            position: 'bottom'
        }
    })

    // Efecto para actualizar la gráfica cuando cambia la fecha
    useEffect(() => {
        const actualizarGrafica = () => {
            setOpcionesGrafica(prevOpciones => ({
                ...prevOpciones,
                subtitle: {
                    text: `Datos del ${formatearFecha(fechaSeleccionada)}`
                },
                data: generarDatosAleatorios(fechaSeleccionada)
            }))
        }

        actualizarGrafica()
    }, [fechaSeleccionada])

    // Manejar cambio de fecha en el calendario
    const manejarCambioFecha = (fecha) => {
        setFechaSeleccionada(fecha)
        setMostrarCalendario(false) // Ocultar calendario después de seleccionar
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

    return (
        <div className="contenedor-grafica">
            {/* Encabezado */}
            <div className="encabezado-grafica">

                <button
                    onClick={alternarCalendario}
                    className="boton-primario"
                >
                    {mostrarCalendario ? ' Ocultar Calendario' : 'Mostrar Calendario'}
                </button>
            </div>

            {/* Contenedor del calendario */}
            {mostrarCalendario && (
                <div className="contenedor-calendario">
                    <Calendar
                        onChange={manejarCambioFecha}
                        value={fechaSeleccionada}
                        locale="es-ES"
                        className="calendario-estilizado"

                    />
                </div>
            )}


            {/* Navegación entre días */}
            <div className="navegacion-dias">
                <button
                    onClick={cambiarDiaAnterior}
                    className="boton-secundario"
                >
                    Día anterior
                </button>

                <button
                    onClick={cambiarHoy}
                    className="boton-primario"
                >
                    Hoy
                </button>

                <button
                    onClick={cambiarDiaSiguiente}
                    className="boton-secundario"
                >
                    Día siguiente
                </button>
            </div>

            {/* Gráfica */}
            <div className="contenedor-chart">
                <AgCharts options={opcionesGrafica} style={{ width: '100%', height: '500px' }} />
            </div>


        </div>
    )
}

export default Grafica