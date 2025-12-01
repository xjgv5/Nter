import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faClock } from '@fortawesome/free-solid-svg-icons';

export const Registros = ({ datos = [], onVerDetalle, onEditar, onEliminar }) => {

    const datosEjemplo = datos.length > 0 ? datos : [
        { id: 1, fecha: '2024-01-15', folio: '1234567890', importe: 1500.00, estatus: 'pagado' },
        { id: 2, fecha: '2024-01-16', folio: '1234567891', importe: 2300.50, estatus: 'pendiente' },
        { id: 3, fecha: '2024-01-17', folio: '1234567892', importe: 1800.00, estatus: 'cancelado' },
        { id: 4, fecha: '2024-01-18', folio: '1234567893', importe: 3200.75, estatus: 'pagado' },
        { id: 5, fecha: '2024-01-19', folio: '1234567894', importe: 950.00, estatus: 'pendiente' },
    ];

    const formatearFecha = (fecha) => {
        return new Date(fecha).toLocaleDateString('es-MX', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    };

    const formatearImporte = (importe) => {
        return new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN'
        }).format(importe);
    };

    const getEstatusIcono = (estatus) => {
        switch (estatus.toLowerCase()) {
            case 'pagado':
                return <FontAwesomeIcon icon={faCheckCircle} className="icono-estatus pagado" />;
            case 'pendiente':
                return <FontAwesomeIcon icon={faClock} className="icono-estatus pendiente" />;
            case 'cancelado':
                return <FontAwesomeIcon icon={faTimesCircle} className="icono-estatus cancelado" />;
            default:
                return <FontAwesomeIcon icon={faClock} className="icono-estatus pendiente" />;
        }
    };

    const getEstatusTexto = (estatus) => {
        return estatus.charAt(0).toUpperCase() + estatus.slice(1);
    };

    const getEstatusClase = (estatus) => {
        switch (estatus.toLowerCase()) {
            case 'pagado':
                return 'estatus-pagado';
            case 'pendiente':
                return 'estatus-pendiente';
            case 'cancelado':
                return 'estatus-cancelado';
            default:
                return 'estatus-pendiente';
        }
    };

    return (
        <div className="tabla-contenedor">
            <div className="tabla-cabecera">
                <h3 className="subtitulo">Movimientos</h3>
                <div className="tabla-info">
                    <span className="total-registros">
                        Total: {datosEjemplo.length} registro(s)
                    </span>
                </div>
            </div>

            <div className="tabla-responsive">
                <table className="tabla-movimientos">
                    <thead>
                        <tr>
                            <th className="columna-numero">No.</th>
                            <th className="columna-fecha">Fecha</th>
                            <th className="columna-folio">Folio</th>
                            <th className="columna-importe">Importe</th>
                            <th className="columna-estatus">Estatus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datosEjemplo.map((item, index) => (
                            <tr key={item.id || index}>
                                <td className="celda-numero">
                                    <span className="numero-indice">{index + 1}</span>
                                </td>
                                <td className="celda-fecha">
                                    {formatearFecha(item.fecha)}
                                </td>
                                <td className="celda-folio">
                                    <span className="folio-texto">{item.folio}</span>
                                </td>
                                <td className="celda-importe">
                                    <span className="importe-texto">{formatearImporte(item.importe)}</span>
                                </td>
                                <td className="celda-estatus">
                                    <div className={`estatus-badge ${getEstatusClase(item.estatus)}`}>
                                        {getEstatusIcono(item.estatus)}
                                        <span>{getEstatusTexto(item.estatus)}</span>
                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Si no hay datos */}
            {datosEjemplo.length === 0 && (
                <div className="tabla-vacia">
                    <p>No hay movimientos registrados</p>
                </div>
            )}

            {/* Paginación (opcional) */}
            {/* {datosEjemplo.length > 0 && (
                <div className="tabla-paginacion">
                    <div className="paginacion-info">
                        Mostrando 1-{datosEjemplo.length} de {datosEjemplo.length} registros
                    </div>
                    <div className="paginacion-controles">
                        <button className="paginacion-btn" disabled>
                            Anterior
                        </button>
                        <span className="pagina-actual">Página 1</span>
                        <button className="paginacion-btn">
                            Siguiente
                        </button>
                    </div>
                </div>
            )} */}
        </div>
    );
};

export default Registros;