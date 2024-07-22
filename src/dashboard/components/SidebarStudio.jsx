import { NavLink, useLocation } from 'react-router-dom';
import { LeafIcon } from '../../ui/icons/Icons';

const isActive = (path, location) => location.pathname === path ? 'active' : '';

export const SidebarStudio = () => {
  const location = useLocation();

  return (
    <>
      <div className="sidebar">
        <NavLink to="/dashboard" className="logo">
          <LeafIcon />
          <div className="logo-name"><span>S.I.N</span>T.A.C.C</div>
        </NavLink>
        <ul className="side-menu">
          <li>
            <NavLink to="/dashboard" className={() => isActive('/dashboard', location)}>
              <i className='bx bxs-dashboard'></i>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/alimentos" className={() => isActive('/dashboard/alimentos', location)}>
              <i className='bx bx-store-alt'></i>
              Alimentos
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/turnos" className={() => isActive('/dashboard/turnos', location)}>
              <i className='bx bx-analyse'></i>
              Turnos
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/calculadora" className={() => isActive('/dashboard/calculadora', location)}>
              <i className='bx bx-message-square-dots'></i>
              Calculadora
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/pacientes" className={() => isActive('/dashboard/pacientes', location)}>
              <i className='bx bx-group'></i>
              Pacientes
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/version" className={() => isActive('/dashboard/version', location)}>
              <i className='bx bx-cog'></i>
              Configuración
            </NavLink>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <NavLink to="/logout" className="logout">
              <i className='bx bx-log-out-circle'></i>
              Cerrar Sesión
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SidebarStudio;