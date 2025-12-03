import React, { useState } from 'react';
import Registros from './components/Registros';
import ModalEscanear from './components/ModalEscanear';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cajero() {
    const [modalAbierto, setModalAbierto] = useState(false);
    const [codigoTicket, setCodigoTicket] = useState('');

    const handleEscanearClick = (e) => {
        e.preventDefault();

        if (!codigoTicket.trim()) {
            toast.error('Por favor ingresa un código de ticket', {
                position: "top-center",
                autoClose: 3000,
            });
            return;
        }

        // Validar formato básico del código (puedes ajustar según tus necesidades)
        if (codigoTicket.length < 3) {
            toast.error('El código de ticket es muy corto', {
                position: "top-center",
                autoClose: 3000,
            });
            return;
        }

        // Aquí podrías hacer una petición para validar el ticket
        console.log('Escaneando ticket:', codigoTicket);
        setModalAbierto(true);
    };

    const handleCerrarModal = () => {
        setModalAbierto(false);
        // Opcional: limpiar el input después de cerrar el modal
        // setCodigoTicket('');
    };

    const handleSubmitManual = (e) => {
        e.preventDefault();
        handleEscanearClick(e);
    };

    return (
        <div className="cajero-layout">
            <form className='escanear-form' onSubmit={handleSubmitManual}>
                <p className='escanear-texto'>Ingresa el código del ticket o escanea con tu cámara</p>

                <div className='escanear-formulario'>
                    <input
                        type="text"
                        className='escanear-input'
                        value={codigoTicket}
                        onChange={(e) => setCodigoTicket(e.target.value)}
                        placeholder="Ej: 1741234567890"
                    />
                    <button
                        type="submit"
                        className='boton-escanear'
                    >
                        <FontAwesomeIcon icon={faQrcode} />
                    </button>
                </div>

                <Registros />
                {/* <BotonEscanear /> */}
            </form>

            {/* Modal de escaneo */}
            <ModalEscanear
                isOpen={modalAbierto}
                onClose={handleCerrarModal}
                ticketData={{
                    id: 'TKT-' + codigoTicket,
                    folio: codigoTicket || 'FOL-12345',
                    horaEntrada: new Date().toLocaleTimeString('es-MX', {
                        hour: '2-digit',
                        minute: '2-digit'
                    }),
                    duracion: '2 horas',
                    montoBase: 50
                }}
            />

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}

export default Cajero;