import React, { useState } from 'react'
import Plantilla from './components/Plantilla'
import RegresarCabecera from '../../RegresarCabecera'

export const ListadoPlantillas = () => {
    const titulo = "Plantillas"
    const ruta = "/crearBoleto"

    // Obtener plantillas del localStorage y manejar el caso null
    const listaPlantillas = localStorage.getItem("plantillas")
    const plantillas = listaPlantillas ? JSON.parse(listaPlantillas) : []

    return (
        <div className="plantillas-layout">
            <RegresarCabecera titulo={titulo} ruta={ruta} />
            <div className="menu-layout">
                <div className="subtitulo">Listado de plantillas</div>

                {plantillas.length === 0 ? (
                    <p>No hay plantillas guardadas</p>
                ) : (
                    plantillas.map((plantilla) => (
                        <Plantilla
                            key={plantilla.id}
                            listaPlantillas={plantilla}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default ListadoPlantillas