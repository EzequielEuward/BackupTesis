import { SidebarStudio, HeadStudio } from '../components';
import { useMenuEffect } from '../helpers/useMenuEffect'

export const PacientesStudio = () => {
  useMenuEffect();

  return (

    <>
      <SidebarStudio />
      <div className="content">
        <nav>
          <i className='bx bx-menu'></i>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Buscar..." />
              <button className="search-btn" type="submit"><i className='bx bx-search'></i></button>
            </div>
          </form>
          <input type="checkbox" id="theme-toggle" hidden />
          <label htmlFor="theme-toggle" className="theme-toggle"></label>
          <a href="#" className="notif">
            <i className='bx bx-bell'></i>
            <span className="count">10</span>
          </a>
          <a href="#" className="profile">
            <img src="images/logo.png" alt="Profile" />
          </a>
        </nav>
      </div>
      <div >
        <main>
          <HeadStudio />
          <div className="bottom-data">



          </div>
        </main>
      </div>
    </>
  )
}

export default PacientesStudio
