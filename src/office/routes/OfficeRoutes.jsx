import { Routes, Route } from 'react-router-dom';
import { ContactoPage } from '../pages/ContactoPage';
import { AboutPage } from '../pages/AboutPage';
import { ErrorPage } from '../pages/ErrorPage';

export const OfficeRouter = () => (
  <Routes>
    <Route path="/contacto" element={<ContactoPage />} />
    <Route path="/terminos-y-condiciones" element={<AboutPage />} />
    
    <Route path="*" element={<ErrorPage />} /> {/* Captura cualquier ruta no manejada */}
  </Routes>
);

export default OfficeRouter;