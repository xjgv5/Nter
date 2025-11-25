import React, { useState } from 'react'

export const FiltroBoletos = ({ onFiltrar }) => {
    const [filtroActivo, setFiltroActivo] = useState('Todos')

    const filtros = [
        { key: 'Todos', label: 'Todos' },
        { key: 'Abierto', label: 'Abierto' },
        { key: 'Cerrado', label: 'Cerrado' },
        { key: 'Pagado', label: 'Pagado' }
    ]

    const handleFiltroClick = (filtro) => {
        setFiltroActivo(filtro)
        onFiltrar(filtro)
    }

    return (
        <div className="filtros-boletos">
            {filtros.map((filtro) => (
                <button
                    key={filtro.key}
                    className={`filtro-btn ${filtroActivo === filtro.key ? 'filtro-activo' : ''}`}
                    onClick={() => handleFiltroClick(filtro.key)}
                >
                    {filtro.label}
                </button>
            ))}
        </div>
    )
}