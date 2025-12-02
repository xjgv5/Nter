import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faClock } from '@fortawesome/free-solid-svg-icons';

export const TablaMovimientos = ({ datos = [] }) => {


    const datosEjemplo = datos.length > 0 ? datos : [
        { id: 1, fecha: '2024-01-15', folio: '1741234567890', importe: 1500.00, estatus: 'pagado' },
        { id: 2, fecha: '2024-01-16', folio: '1741234567891', importe: 2300.50, estatus: 'pendiente' },
        { id: 3, fecha: '2024-01-17', folio: '1741234567892', importe: 1800.00, estatus: 'cancelado' },
        { id: 4, fecha: '2024-01-18', folio: '1741234567893', importe: 3200.75, estatus: 'pagado' },
        { id: 5, fecha: '2024-01-19', folio: '1741234567894', importe: 950.00, estatus: 'pendiente' },
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
            currency: 'MXN',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
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
        <div className="tabla-movimientos-contenedor">
            <div className="tabla-header">
                <h3 className="tabla-titulo">Movimientos</h3>
                {datosEjemplo.length > 0 && (
                    <div className="tabla-total">
                        <span className="total-badge">{datosEjemplo.length} registros</span>
                    </div>
                )}
            </div>

            {datosEjemplo.length === 0 ? (
                <div className="tabla-vacia">
                    <div className="tabla-vacia-icono">
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </div>
                    <p>No hay movimientos registrados</p>
                </div>
            ) : (
                <>
                    {/* Vista Mobile (tarjetas) */}
                    <div className="tabla-mobile">
                        {datosEjemplo.map((item, index) => (
                            <div key={item.id || index} className="movimiento-card">
                                <div className="movimiento-header">
                                    <span className="movimiento-numero">#{index + 1}</span>
                                    <span className="movimiento-folio">{item.folio}</span>
                                </div>

                                <div className="movimiento-info">
                                    <div className="info-item">
                                        <span className="info-label">Fecha:</span>
                                        <span className="info-value">{formatearFecha(item.fecha)}</span>
                                    </div>

                                    <div className="info-item">
                                        <span className="info-label">Importe:</span>
                                        <span className="info-value importe">{formatearImporte(item.importe)}</span>
                                    </div>

                                    <div className="info-item">
                                        <span className="info-label">Estatus:</span>
                                        <div className={`estatus-mobile ${getEstatusClase(item.estatus)}`}>
                                            {getEstatusIcono(item.estatus)}
                                            <span>{getEstatusTexto(item.estatus)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Vista Desktop (tabla) - se muestra en pantallas más grandes */}
                    <div className="tabla-desktop">
                        <table className="tabla">
                            <thead>
                                <tr>
                                    <th className="columna-no">No.</th>
                                    <th className="columna-fecha">Fecha</th>
                                    <th className="columna-folio">Folio</th>
                                    <th className="columna-importe">Importe</th>
                                    <th className="columna-estatus">Estatus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datosEjemplo.map((item, index) => (
                                    <tr key={item.id || index}>
                                        <td className="celda-no">
                                            <span className="numero">{index + 1}</span>
                                        </td>
                                        <td className="celda-fecha">{formatearFecha(item.fecha)}</td>
                                        <td className="celda-folio">
                                            <span className="folio">{item.folio}</span>
                                        </td>
                                        <td className="celda-importe">
                                            <span className="importe">{formatearImporte(item.importe)}</span>
                                        </td>
                                        <td className="celda-estatus">
                                            <div className={`estatus-desktop ${getEstatusClase(item.estatus)}`}>
                                                {getEstatusIcono(item.estatus)}
                                                <span>{getEstatusTexto(item.estatus)}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Información del total */}
                    <div className="tabla-footer">
                        <div className="importe-total">
                            <span className="total-label">Importe total:</span>
                            <span className="total-valor">
                                {formatearImporte(datosEjemplo.reduce((sum, item) => sum + item.importe, 0))}
                            </span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default TablaMovimientos;