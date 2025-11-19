// MainContent.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cajero from './Cajero';
import Corte from './Corte';
import Dashboard from './Dashboard';
import Logs from './Logs';

function Principal() {
    return (
        <div className="principal">
            <Routes>
                <Route path="/cajero" element={<Cajero />} />
                <Route path="/corte" element={<Corte />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/logs" element={<Logs />} />
            </Routes>
        </div>
    );
}

export default Principal;