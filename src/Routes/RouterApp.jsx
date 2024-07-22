// AppRoutes.js

import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../Home';
import { LoginPage } from '../auth/pages/LoginPage';
import OfficeRouter from '../office/routes/OfficeRoutes'
import {DashboardRouter} from '../dashboard/routes/DashboardRoutes';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard/*" element={<DashboardRouter />} /> 
    <Route path="/login" element={<LoginPage />} />


    <Route path="/*" element={<OfficeRouter />} />

    
  </Routes>
);

export default AppRoutes;