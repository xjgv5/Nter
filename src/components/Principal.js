import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cajero from './Cajero/Cajero';
import Corte from './Corte';
import Dashboard from './Dashboard';
import Logs from './Logs';
import Locatario from './Locatarios/Locatario';
import CrearBoleto from './CrearBoleto/CrearBoleto';
import BoletosInvitaciones from './BoletosInvitaciones/BoletosInvitaciones';
import Configuracion from './Locatarios/Components/ConfiguracionComponents/Configuracion';
import Boleto from './Boleto/Boleto';
import ListadoPlantillas from './Locatarios/Plantillas/ListadoPlantillas';
import Inicio from './Inicio';
function Principal() {
    return (
        <div className="principal">
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/cajero" element={<Cajero />} />
                <Route path="/corte" element={<Corte />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/logs" element={<Logs />} />
                <Route path="/locatario" element={<Locatario />} />
                <Route path="/crearBoleto" element={<CrearBoleto />} />
                <Route path="/boletos-invitaciones" element={<BoletosInvitaciones />} />
                <Route path="/configuracion" element={<Configuracion />} />
                <Route path="/boleto" element={<Boleto />} />
                <Route path="/plantillas" element={<ListadoPlantillas />} />
            </Routes>
        </div>
    );
}

export default Principal;