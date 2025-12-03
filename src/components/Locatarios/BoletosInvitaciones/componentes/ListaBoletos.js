import React, { useState } from 'react'
import { Boleto } from './Boleto'
import { FiltroBoletos } from './FiltroBoletos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

export const ListaBoletos = () => {
    const [filtroActual, setFiltroActual] = useState('Todos')

    const boletos = [
        {
            nombre: "John Doe",
            tipo: "Cortesía",
            fecha: "25/11/2025",
            hora: "3:00 PM",
            estado: "Cerrado"
        },
        {
            nombre: "John Doe",
            tipo: "Cortesía",
            fecha: "25/11/2025",
            hora: "3:00 PM",
            estado: "Cerrado"
        },
        {
            nombre: "John Doe",
            tipo: "Cortesía",
            fecha: "25/11/2025",
            hora: "3:00 PM",
            estado: "Abierto"
        },
        {
            nombre: "John Doe",
            tipo: "Cortesía",
            fecha: "25/11/2025",
            hora: "3:00 PM",
            estado: "Abierto"
        },
        {
            nombre: "John Doe",
            tipo: "Cortesía",
            fecha: "25/11/2025",
            hora: "3:00 PM",
            estado: "Abierto"
        },
        {
            nombre: "John Doe",
            tipo: "Cortesía",
            fecha: "25/11/2025",
            hora: "3:00 PM",
            estado: "Pagado"
        },
        {
            nombre: "John Doe",
            tipo: "Cortesía",
            fecha: "25/11/2025",
            hora: "3:00 PM",
            estado: "Pagado"
        },
    ]

    const boletosFiltrados = filtroActual === 'Todos'
        ? boletos
        : boletos.filter(boleto => boleto.estado === filtroActual)

    const handleFiltrar = (filtro) => {
        setFiltroActual(filtro)
    }

    return (
        <div>
            <div className='menu-layout'>
                <div className="contenedor-titulo">
                    <h3 className="subtitulo">LISTADO DE BOLETOS</h3>
                    <div className="contenedor-filtro">
                        <FontAwesomeIcon icon={faFilter} className='icono-primario' />
                        <p className='texto-filtro'>Filtros</p>
                    </div>
                </div>
                <FiltroBoletos onFiltrar={handleFiltrar} />
                {
                    boletosFiltrados.map((boleto, index) => (
                        <Boleto key={index} {...boleto} />
                    ))
                }
            </div>
        </div>
    )
}