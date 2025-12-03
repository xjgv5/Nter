import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cajero from './Cajero/Cajero';
import Corte from './Corte';
import Dashboard from './Dashboard';
import Logs from './Logs';
import Locatario from './Locatarios/Locatario/Locatario';
import CrearBoleto from './Locatarios/CrearBoleto/CrearBoleto';
import BoletosInvitaciones from './Locatarios/BoletosInvitaciones/BoletosInvitaciones';
import Boleto from './Locatarios/Boleto/Boleto';
import ListadoPlantillas from './Locatarios/Plantillas/ListadoPlantillas';
import Inicio from './Inicio';
import Error404 from './Error404';
// import BoletoDigital from './Locatarios/Boleto/BoletoDigital';
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
                <Route path="/boleto" element={<Boleto />} />
                <Route path="/plantillas" element={<ListadoPlantillas />} />
                {/* <Route path="/boleto-digital" element={<BoletoDigital />} /> */}
                <Route path="*" element={<Error404 />} />
            </Routes>
        </div>
    );
}

export default Principal;