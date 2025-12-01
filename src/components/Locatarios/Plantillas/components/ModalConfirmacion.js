// components/ModalConfirmacion.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faTimes } from '@fortawesome/free-solid-svg-icons';

export const ModalConfirmacion = ({
    isOpen,
    onClose,
    onConfirm,
    titulo,
    mensaje,
    textoConfirmar = "Eliminar",
    textoCancelar = "Cancelar"
}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-contenido modal-pequeno">
                <button className="modal-cerrar" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>

                <div className="modal-icono modal-icono-advertencia">
                    <FontAwesomeIcon icon={faExclamationTriangle} size="3x" />
                </div>

                <h3>{titulo || '¿Estás seguro?'}</h3>
                <p>{mensaje || 'Esta acción no se puede deshacer.'}</p>

                <div className="modal-botones">
                    <button
                        className="boton-secundario"
                        onClick={onClose}
                    >
                        {textoCancelar}
                    </button>
                    <button
                        className="boton-eliminar"
                        onClick={onConfirm}
                    >
                        {textoConfirmar}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalConfirmacion;