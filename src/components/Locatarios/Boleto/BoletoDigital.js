import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode, faCalendar, faClock, faTicket } from '@fortawesome/free-solid-svg-icons';
export const BoletoDigital = () => {
    // components/TicketToShare.jsx

    const TicketToShare = ({
        userName: "Jhon Doe",
        eventName: "Evento de Invitación",
        date: "2024-12-15",
        location: "Ciudad de México",
        ticketId: "174123456789",
        qrValue: "https://example.com/ticket/123456"
    })

    return (
        <div style={styles.ticketContainer}>
            {/* Cabecera con logo */}
            <div style={styles.header}>
                <div style={styles.logoSection}>
                    <div style={styles.logoPlaceholder}>
                        {/* Reemplaza esto con tu logo */}
                        <img src="./logoNterBlanco.png" style={styles.logo} alt="" />
                    </div>
                </div>
                <h2 style={styles.eventTitle}>Ticket digital</h2>
                <div style={styles.divider} />
            </div>

            {/* Información principal */}
            <div style={styles.mainContent}>
                <div style={styles.leftSection}>
                    <div style={styles.userInfo}>
                        <h3 style={styles.userName}>Jhon Doe</h3>
                        <p style={styles.userLabel}>INVITADO</p>
                    </div>

                    <div style={styles.eventDetails}>
                        <div style={styles.detailCard}>
                            <div style={styles.detailIcon}><FontAwesomeIcon icon={faCalendar} /></div>
                            <div>
                                <p style={styles.detailTitle}>FECHA</p>
                                <p style={styles.detailValue}>2024-12-15</p>
                            </div>
                        </div>

                        <div style={styles.detailCard}>
                            <div style={styles.detailIcon}><FontAwesomeIcon icon={faClock} /></div>
                            <div>
                                <p style={styles.detailTitle}>TIEMPO</p>
                                <p style={styles.detailValue}>2 horas</p>
                            </div>
                        </div>

                        <div style={styles.detailCard}>
                            <div style={styles.detailIcon}><FontAwesomeIcon icon={faTicket} /></div>
                            <div>
                                <p style={styles.detailTitle}>ID DEL BOLETO</p>
                                <p style={styles.detailValue}>174123456789</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sección QR */}
                <div style={styles.rightSection}>
                    <div style={styles.qrCard}>
                        <div style={styles.qrHeader}>
                            <span style={styles.qrIcon}><FontAwesomeIcon icon={faQrcode} /></span>
                            <span style={styles.qrTitle}>CÓDIGO QR</span>
                        </div>

                        <div style={styles.qrWrapper}>
                            <img src="./qr.png" alt="QR Code" style={styles.qrCode} />
                        </div>

                        <div style={styles.qrInstructions}>
                            <p style={styles.instructionText}>
                                Escanea este código en la entrada
                            </p>
                            <p style={styles.instructionSubtext}>
                                Válido para una persona
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer y términos */}
            <div style={styles.footer}>
                <div style={styles.terms}>
                    <p style={styles.termsText}>
                        • Presentar identificación oficial • No transferible
                    </p>
                </div>

                <div style={styles.footerDivider} />

                {/* <div style={styles.footerInfo}>
                    <p style={styles.contactInfo}>
                        📧 info@tuevento.com | 🌐 tuevento.com | 📞 +52 55 1234 5678
                    </p>
                    <p style={styles.copyright}>
                        © 2024 Nombre del Evento. Todos los derechos reservados.
                    </p>
                </div> */}
            </div>
        </div>
    );
};

const styles = {
    ticketContainer: {
        width: '800px',
        minHeight: '500px',
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
        border: '1px solid #e1e8ed',
        overflow: 'hidden',
        fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
        position: 'relative',
    },
    header: {
        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        padding: '25px 30px',
        color: 'white',
        position: 'relative',
    },
    logoSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px',
    },
    logoPlaceholder: {
        padding: '10px 20px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '10px',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        width: '100px',
        // height: '100px',
    },
    eventTitle: {
        margin: '0',
        fontSize: '28px',
        fontWeight: '700',
        textAlign: 'center',
        textShadow: '0 2px 4px rgba(0,0,0,0.2)',
    },
    divider: {
        height: '4px',
        background: 'linear-gradient(to right, #ffffff, transparent)',
        margin: '15px auto 0',
        width: '100px',
        borderRadius: '2px',
    },
    mainContent: {
        display: 'flex',
        padding: '30px',
        gap: '30px',
    },
    leftSection: {
        flex: 1,
    },
    userInfo: {
        marginBottom: '30px',
        paddingBottom: '20px',
        borderBottom: '2px dashed #e1e8ed',
    },
    userName: {
        fontSize: '32px',
        fontWeight: '700',
        color: '#2c3e50',
        margin: '0 0 8px 0',
    },
    userLabel: {
        fontSize: '14px',
        color: '#7f8c8d',
        fontWeight: '600',
        letterSpacing: '2px',
        margin: '0',
        textTransform: 'uppercase',
    },
    eventDetails: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    detailCard: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        padding: '15px',
        backgroundColor: '#f8fafc',
        borderRadius: '12px',
        borderLeft: '4px solid #1d4ed8',
        transition: 'transform 0.2s',
    },
    detailIcon: {
        fontSize: '24px',
        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        color: 'white',
        width: '50px',
        height: '50px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailTitle: {
        fontSize: '12px',
        color: '#1d4ed8',
        fontWeight: '600',
        margin: '0 0 4px 0',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
    detailValue: {
        fontSize: '16px',
        color: '#2c3e50',
        fontWeight: '500',
        margin: '0',
    },
    rightSection: {
        flex: '0 0 400px',
    },
    qrCard: {
        backgroundColor: '#ffffff',
        borderRadius: '15px',
        padding: '20px',
        boxShadow: '0 5px 20px rgba(102, 126, 234, 0.1)',
        border: '1px solid #e2e8f0',
        textAlign: 'center',
        minWidth: '250px',
    },
    qrHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '20px',
    },
    qrIcon: {
        fontSize: '20px',
    },
    qrTitle: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#2c3e50',
        letterSpacing: '1px',
    },
    qrWrapper: {
        padding: '5px',
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        display: 'inline-block',
        marginBottom: '15px',
    },
    qrCode: {
        display: 'block',
        width: '100%',
        height: 'auto',
    },
    qrInstructions: {
        paddingTop: '15px',
        borderTop: '1px solid #e2e8f0',
    },
    instructionText: {
        fontSize: '14px',
        color: '#4a5568',
        fontWeight: '500',
        margin: '0 0 5px 0',
    },
    instructionSubtext: {
        fontSize: '12px',
        color: '#a0aec0',
        margin: '0',
    },
    footer: {
        backgroundColor: '#f8fafc',
        padding: '20px 30px',
        borderTop: '1px solid #e1e8ed',
    },
    terms: {
        marginBottom: '15px',
    },
    termsText: {
        fontSize: '11px',
        color: '#718096',
        textAlign: 'center',
        margin: '0',
        lineHeight: '1.6',
        letterSpacing: '0.5px',
    },
    footerDivider: {
        height: '1px',
        backgroundColor: '#e2e8f0',
        margin: '15px 0',
    },
    footerInfo: {
        textAlign: 'center',
    },
    contactInfo: {
        fontSize: '12px',
        color: '#4a5568',
        margin: '0 0 8px 0',
    },
    copyright: {
        fontSize: '11px',
        color: '#a0aec0',
        margin: '0',
    },
};

export default BoletoDigital;


