import React, { useState } from 'react'
import { AgCharts } from 'ag-charts-react'

export const Grafica = () => {

    const fecha = new Date()

    const numAleatorio = () => {
        return Math.floor(Math.random() * 1000)
    }

    const [opciones, setOpciones] = useState({
        title: {
            text: "Espacios ocupados por hora",
            position: 'left'
        },
        subtitle: {
            text: `Datos del ${fecha.toLocaleDateString()}`,
        },

        data: [
            { hora: "0:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "1:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "2:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "3:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "4:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "5:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "6:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "7:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "8:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "9:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "10:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "11:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "12:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "13:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "14:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "15:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "16:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "17:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "18:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "19:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "20:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "21:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "22:00 hrs", numVehiculos: numAleatorio(), },
            { hora: "23:00 hrs", numVehiculos: numAleatorio(), },
        ],
        series: [

            { type: 'line', xKey: 'hora', yKey: 'numVehiculos', yName: "Numero de vehiculos", interpolation: { type: 'smooth' }, stroke: '#2257dd', marker: { fill: '#2257dd' } }],
    })

    return (
        <AgCharts options={opciones} />
    )
}

export default Grafica
