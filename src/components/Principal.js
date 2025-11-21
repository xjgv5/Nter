// MainContent.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cajero from './Cajero';
import Corte from './Corte';
import Dashboard from './Dashboard';
import Logs from './Logs';
import Locatario from './Locatarios/Locatario';
import CrearBoleto from './BoletosInvitaciones/CrearBoleto/CrearBoleto';
function Principal() {
    return (
        <div className="principal">
            <Routes>
                <Route path="/cajero" element={<Cajero />} />
                <Route path="/corte" element={<Corte />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/logs" element={<Logs />} />
                <Route path="/locatario" element={<Locatario />} />
                <Route path="/crearBoleto" element={<CrearBoleto />} />
            </Routes>
        </div>
    );
}

export default Principal;