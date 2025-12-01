import React from 'react'

export const Plantilla = ({
    listaPlantillas,
    onEliminar,
    onUsar,
    onEditar
}) => {
    const { id, nombre, duracion, fecha, notas } = listaPlantillas;

    const handleEliminar = () => {
        onEliminar(listaPlantillas);
    };

    const handleUsar = () => {
        onUsar(listaPlantillas);
    };

    const handleEditar = () => {
        onEditar(listaPlantillas);
    };

    return (
        <div className="plantilla">
            <div className="datos-plantilla">
                <div className="cabecera-plantilla">
                    <h3 className="titulo-plantilla">{nombre}</h3>
                    <p className="id-plantilla"><strong>ID:</strong> {id}</p>
                </div>
                <div className="info-plantilla">
                    <p className="duracion-plantilla"><strong>Duración:</strong> {duracion}</p>
                    <p className="fecha-plantilla"><strong>Fecha:</strong> {fecha}</p>
                </div>

                <div className="contenedor-notas">
                    <p className="titulo-notas">Notas:</p>
                    <p className="texto-notas">{notas || 'Sin notas'}</p>
                </div>

                <div className="contenedor-botones">
                    <button
                        className='boton-primario'
                        onClick={handleUsar}
                    >
                        Usar
                    </button>
                    <button
                        className='boton-secundario'
                        onClick={handleEditar}
                    >
                        Editar
                    </button>
                    <button
                        className='boton-eliminar'
                        onClick={handleEliminar}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Plantilla;