import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faClock, faMoneyBill, faReceipt, faGift, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

export const ModalEscanear = ({ isOpen, onClose, ticketData }) => {
    const [tiempoTranscurrido, setTiempoTranscurrido] = useState('00:00');
    const [montoAPagar, setMontoAPagar] = useState(0);
    const [dineroRecibido, setDineroRecibido] = useState('');
    const [cambio, setCambio] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    // Simular datos del ticket si no se proporcionan
    const ticket = ticketData || {
        id: 'TKT-001',
        folio: 'FOL-12345',
        horaEntrada: '14:30',
        duracion: '2 horas',
        montoBase: 50
    };

    // Simular tiempo transcurrido
    useEffect(() => {
        if (!isOpen) return;

        // Simular cálculo del tiempo
        const calcularTiempo = () => {
            // En producción, esto calcularía la diferencia entre hora actual y hora de entrada
            const horas = 2; // Ejemplo: 2 horas
            const minutos = 45; // Ejemplo: 45 minutos
            return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
        };

        // Simular cálculo del monto
        const calcularMonto = () => {
            const tarifaPorHora = 25;
            const horas = 2.75; // 2 horas 45 minutos
            return horas * tarifaPorHora;
        };

        setTiempoTranscurrido(calcularTiempo());
        const montoCalculado = calcularMonto();
        setMontoAPagar(montoCalculado);

        // Resetear valores cuando se abre el modal
        setDineroRecibido('');
        setCambio(0);

        // Actualizar tiempo cada minuto (simulado)
        const interval = setInterval(() => {
            setTiempoTranscurrido(prev => {
                const [horas, minutos] = prev.split(':').map(Number);
                const nuevosMinutos = minutos + 1;
                if (nuevosMinutos >= 60) {
                    return `${horas + 1}:00`;
                }
                return `${horas}:${nuevosMinutos.toString().padStart(2, '0')}`;
            });
        }, 60000); // Cada minuto

        return () => clearInterval(interval);
    }, [isOpen]);

    // Calcular cambio cuando se ingresa dinero recibido
    useEffect(() => {
        if (dineroRecibido) {
            const recibido = parseFloat(dineroRecibido) || 0;
            const cambioCalculado = recibido - montoAPagar;
            setCambio(cambioCalculado > 0 ? cambioCalculado : 0);
        } else {
            setCambio(0);
        }
    }, [dineroRecibido, montoAPagar]);

    const handleDineroRecibidoChange = (e) => {
        const value = e.target.value;
        // Permitir solo números y un punto decimal
        if (value === '' || /^\d*\.?\d*$/.test(value)) {
            setDineroRecibido(value);
        }
    };

    const handleRegistrarPago = () => {
        if (!dineroRecibido || parseFloat(dineroRecibido) < montoAPagar) {
            toast.error('El dinero recibido es menor al monto a pagar', {
                position: "top-center",
                autoClose: 3000,
            });
            return;
        }

        setIsLoading(true);

        // Simular petición API
        setTimeout(() => {
            setIsLoading(false);

            // Mostrar toast de éxito
            toast.success('✅ Pago registrado correctamente', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            // Cerrar modal después de un momento
            setTimeout(() => {
                onClose();
                // Resetear formulario
                setDineroRecibido('');
                setCambio(0);
            }, 1500);
        }, 1000);
    };

    const handleRegistrarCortesia = () => {
        setIsLoading(true);

        // Simular petición API
        setTimeout(() => {
            setIsLoading(false);

            toast.info('🎁 Ticket registrado como cortesía', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            setTimeout(() => {
                onClose();
                setDineroRecibido('');
                setCambio(0);
            }, 1500);
        }, 1000);
    };

    const formatearMoneda = (valor) => {
        return new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(valor);
    };

    if (!isOpen) return null;

    return (
        <div className="modal-escanear-overlay">
            <div className="modal-escanear-contenido">
                {/* Encabezado */}
                <div className="modal-escanear-header">
                    <div className="modal-escanear-titulo">
                        <FontAwesomeIcon icon={faQrcode} className="modal-escanear-icono-titulo" />
                        <h3>Registrar Pago</h3>
                    </div>
                    <button
                        className="modal-escanear-cerrar"
                        onClick={onClose}
                        disabled={isLoading}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                {/* Información del ticket */}
                <div className="modal-escanear-info">
                    <div className="ticket-info-card">
                        <div className="ticket-info-item">
                            <span className="ticket-info-label">Folio:</span>
                            <span className="ticket-info-value">{ticket.folio}</span>
                        </div>
                        <div className="ticket-info-item">
                            <span className="ticket-info-label">Hora entrada:</span>
                            <span className="ticket-info-value">{ticket.horaEntrada}</span>
                        </div>
                        <div className="ticket-info-item">
                            <span className="ticket-info-label">Duración:</span>
                            <span className="ticket-info-value">{ticket.duracion}</span>
                        </div>
                    </div>
                </div>

                {/* Tiempo transcurrido */}
                <div className="modal-escanear-seccion">
                    <div className="seccion-titulo">
                        <FontAwesomeIcon icon={faClock} />
                        <span>Tiempo transcurrido</span>
                    </div>
                    <div className="tiempo-display">
                        <span className="tiempo-valor">{tiempoTranscurrido}</span>
                        <span className="tiempo-label">horas</span>
                    </div>
                </div>

                {/* Monto a pagar */}
                <div className="modal-escanear-seccion">
                    <div className="seccion-titulo">
                        <FontAwesomeIcon icon={faReceipt} />
                        <span>Monto a pagar</span>
                    </div>
                    <div className="monto-display">
                        <span className="monto-valor">{formatearMoneda(montoAPagar)}</span>
                    </div>
                </div>

                {/* Dinero recibido */}
                <div className="modal-escanear-seccion">
                    <div className="seccion-titulo">
                        <FontAwesomeIcon icon={faMoneyBill} />
                        <span>Dinero recibido</span>
                    </div>
                    <div className="dinero-recibido-input">
                        <span className="moneda-simbolo">$</span>
                        <input
                            type="text"
                            value={dineroRecibido}
                            onChange={handleDineroRecibidoChange}
                            placeholder="0.00"
                            className="input-dinero"
                            disabled={isLoading}
                        />
                    </div>
                </div>

                {/* Cambio */}
                {cambio > 0 && (
                    <div className="modal-escanear-seccion cambio-seccion">
                        <div className="seccion-titulo">
                            <span>Cambio a devolver</span>
                        </div>
                        <div className="cambio-display">
                            <span className="cambio-valor">{formatearMoneda(cambio)}</span>
                        </div>
                    </div>
                )}

                {/* Botones de acción */}
                <div className="modal-escanear-botones">
                    <button
                        className="boton-cortesia"
                        onClick={handleRegistrarCortesia}
                        disabled={isLoading}
                    >
                        <FontAwesomeIcon icon={faGift} />
                        <span>Registrar como cortesía</span>
                    </button>
                    <button
                        className="boton-pagar"
                        onClick={handleRegistrarPago}
                        disabled={isLoading || !dineroRecibido}
                    >
                        {isLoading ? (
                            <span className="loading-text">Procesando...</span>
                        ) : (
                            <>
                                <FontAwesomeIcon icon={faMoneyBill} />
                                <span>Registrar pago</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalEscanear;