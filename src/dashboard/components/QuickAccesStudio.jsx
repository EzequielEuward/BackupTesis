import { useNavigate } from "react-router-dom";


export const QuickAccesStudio = () => {

    const navigate = useNavigate();

    const handleClick = (ruta) => {
        navigate(ruta);
    };

    return (
        <>
            <ul className="insights">
                <li onClick={() => handleClick('/dashboard/turnos')}>
                    <i className='bx bx-calendar-check'></i>
                    <span className="info">
                        <h3>
                            10/20
                        </h3>
                        <p>Turnos</p>
                    </span>
                </li>
                <li onClick={() => handleClick('/dashboard/alimentos')}>
                    <i className='bx bx-show-alt'></i>
                    <span className="info">
                        <h3>
                            Tablas
                        </h3>
                        <p>Alimentos</p>
                    </span>
                </li>
                <li onClick={() => handleClick('/dashboard/pacientes')}>
                    <i className='bx bx-line-chart'></i>
                    <span className="info">
                        <h3>
                            10/10
                        </h3>
                        <p>Pacientes</p>
                    </span>
                </li>
                <li onClick={() => handleClick('/dashboard/calculadora')}>
                    <i className='bx bx-dollar-circle'></i>
                    <span className="info">
                        <h3>
                            Calculadora
                        </h3>
                        <p>Ayudas</p>
                    </span>
                </li>
            </ul>
        </>
    )
}

export default QuickAccesStudio
