import React, { useState } from 'react'
import { RegresarCabecera } from '../RegresarCabecera'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare, faDownload } from '@fortawesome/free-solid-svg-icons';
import html2canvas from 'html2canvas';
import { BoletoDigital } from './BoletoDigital';

export const Boleto = () => {
    const datosFormulario = JSON.parse(localStorage.getItem('datosFormulario'));
    let { nombre, duracion, fecha, notas, id = "174123456789" } = datosFormulario;



    const [isGenerating, setIsGenerating] = useState(false);

    const generarImagenBoleto = async () => {
        try {
            setIsGenerating(true);

            // Crear un div temporal fuera de pantalla para el boleto
            const tempDiv = document.createElement('div');
            tempDiv.style.position = 'absolute';
            tempDiv.style.left = '-9999px';
            tempDiv.style.top = '-9999px';
            tempDiv.style.width = '800px';

            // Crear el boleto digital dentro del div temporal
            const boletoContainer = document.createElement('div');
            boletoContainer.id = 'boleto-temporal-compartir';

            // Renderizar el boleto usando ReactDOM (simulado)
            const boletoHTML = `
                <div style="width: 800px; min-height: 500px;">
                    ${document.getElementById('boleto-hidden-template').innerHTML}
                </div>
            `;
            boletoContainer.innerHTML = boletoHTML;
            tempDiv.appendChild(boletoContainer);
            document.body.appendChild(tempDiv);

            // Capturar como imagen
            const canvas = await html2canvas(boletoContainer, {
                scale: 2,
                backgroundColor: '#ffffff',
                useCORS: true,
                allowTaint: true,
                logging: false,
            });

            // Limpiar
            document.body.removeChild(tempDiv);

            return canvas.toDataURL('image/png', 1.0);
        } catch (error) {
            console.error('Error generando imagen:', error);
            throw error;
        } finally {
            setIsGenerating(false);
        }
    };

    const compartirBoletoCompleto = async () => {
        try {
            const imagenDataUrl = await generarImagenBoleto();
            const response = await fetch(imagenDataUrl);
            const blob = await response.blob();

            const fileName = `boleto-${nombre.replace(/\s+/g, '-').toLowerCase()}-${id}.png`;
            const file = new File([blob], fileName, { type: 'image/png' });

            // Web Share API
            if (navigator.share && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    files: [file],
                    title: `Boleto digital para ${nombre}`,
                    text: `Boleto digital para ${nombre}\nDuración: ${duracion}\nFecha: ${fecha}\nID: ${id}`
                });
                return;
            }

            // Fallback: descargar
            descargarBoleto(imagenDataUrl, fileName);

        } catch (error) {
            console.error('Error al compartir:', error);
            // Si falla la generación completa, compartir solo QR
            compartirSoloQR();
        }
    };

    const compartirSoloQR = async () => {
        try {
            const qrImage = document.querySelector('.qr');
            const response = await fetch(qrImage.src);
            const blob = await response.blob();
            const fileName = `qr-${nombre.replace(/\s+/g, '-').toLowerCase()}.png`;
            const file = new File([blob], fileName, { type: 'image/png' });

            if (navigator.share && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    files: [file],
                    title: `QR para ${nombre}`,
                    text: `QR de invitación para ${nombre}\nDuración: ${duracion}\nFecha: ${fecha}`
                });
            } else {
                descargarQR(fileName);
            }
        } catch (error) {
            console.error('Error compartiendo QR:', error);
            descargarQR();
        }
    };

    const descargarBoleto = (dataUrl, fileName) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        alert(`¡Boleto digital descargado!\nArchivo: ${fileName}`);
    };

    const descargarQR = (fileName = `qr-${nombre}.png`) => {
        const qrImage = document.querySelector('.qr');
        const link = document.createElement('a');
        link.href = qrImage.src;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='boleto-layout'>
            <RegresarCabecera titulo="Boleto Digital" ruta="/crearBoleto" />

            {/* Template oculto para el boleto completo */}
            <div id="boleto-hidden-template" style={{ display: 'none' }}>
                <BoletoDigital
                    nombre={nombre}
                    duracion={duracion}
                    fecha={fecha}
                    notas={notas}
                    id={id}
                />
            </div>

            <div className="menu-layout">
                <h3 className="subtitulo">BOLETO CREADO</h3>

                {/* Solo mostramos el QR como antes */}
                <div className="contenedor-qr">
                    <img src="./qr.png" alt="Código QR" className='qr' />

                </div>

                {/* Botón principal para compartir boleto completo */}
                <button
                    className='boton-primario compartir'
                    onClick={compartirBoletoCompleto}
                    disabled={isGenerating}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        padding: '15px 30px',
                        fontSize: '16px',
                        margin: '20px auto',
                        width: '100%',
                        maxWidth: '300px'
                    }}
                >
                    <FontAwesomeIcon icon={faShareFromSquare} />
                    {isGenerating ? 'Generando...' : 'Compartir Boleto Digital'}
                </button>

                {/* Botón alternativo para solo QR */}
                <button
                    className='boton-secundario'
                    onClick={compartirSoloQR}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        padding: '12px 25px',
                        fontSize: '14px',
                        margin: '10px auto',
                        width: '100%',
                        maxWidth: '250px',
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #dee2e6',
                        color: '#495057',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}
                >
                    <FontAwesomeIcon icon={faDownload} />
                    Solo Compartir QR
                </button>

                {/* Información del boleto (igual que antes) */}
                <div className="info-boleto">
                    <p className='info-boleto-titulo'>Invitado:</p>
                    <p className='info-boleto-dato'>{nombre}</p>
                    <p className='info-boleto-titulo'>Duración:</p>
                    <p className='info-boleto-dato'>{duracion}</p>
                    <p className='info-boleto-titulo'>Fecha:</p>
                    <p className='info-boleto-dato'>{fecha}</p>
                    <p className='info-boleto-titulo'>Notas:</p>
                    <p className='info-boleto-dato'>{notas || 'Sin notas adicionales'}</p>
                    <p className='info-boleto-titulo'>ID del Boleto:</p>
                    <p className='info-boleto-dato' style={{ fontFamily: 'monospace', color: '#1d4ed8' }}>
                        {id}
                    </p>
                </div>

                {/* Instrucciones */}
                <div style={{
                    marginTop: '30px',
                    padding: '15px',
                    backgroundColor: '#e8f4fd',
                    borderRadius: '8px',
                    borderLeft: '4px solid #1d4ed8',
                    fontSize: '14px'
                }}>
                    <p style={{ margin: 0, color: '#1d4ed8', fontWeight: '500', marginBottom: '5px' }}>
                        📱 Compartir Boleto Digital
                    </p>
                    <p style={{ margin: 0, color: '#495057' }}>
                        Generará una imagen completa del boleto con todos los datos y el código QR.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Boleto;