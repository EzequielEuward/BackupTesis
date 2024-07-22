

import { Routes, Route } from 'react-router-dom';
import { DashboardPage, CalculatorPage, TurnosStudio, AlimentosStudio, PacientesStudio, VersionPage } from '../pages/'; 

export const DashboardRouter = () => (
  <Routes>
    <Route path="/" element={<DashboardPage />} /> 
    <Route path="/alimentos" element={<AlimentosStudio />} /> 
    <Route path="/calculadora" element={<CalculatorPage />} /> 
    <Route path="/turnos" element={<TurnosStudio />} /> 
    <Route path="/pacientes" element={<PacientesStudio />} /> 
    <Route path="/version" element={<VersionPage />} /> 
  </Routes>
);

export default DashboardRouter;