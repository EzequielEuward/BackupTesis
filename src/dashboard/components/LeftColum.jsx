

export const LeftColum = () => {
    return (
        <>
            <div className="orders">
                <div className="header">
                    <i className='bx bx-receipt'></i>
                    <h3>Pacientes recientes</h3>
                    <i className='bx bx-filter'></i>
                    <i className='bx bx-search'></i>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Fecha de la cita</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src="images/profile-1.jpg" alt="Profile" />
                                <p>Ezequiel Euward</p>
                            </td>
                            <td>14-08-2023</td>
                            <td><span className="status completed">Completado</span></td>
                        </tr>
                        <tr>
                            <td>
                                <img src="images/profile-1.jpg" alt="Profile" />
                                <p>Denise Vasquez</p>
                            </td>
                            <td>14-08-2023</td>
                            <td><span className="status pending">Pendiente</span></td>
                        </tr>
                        <tr>
                            <td>
                                <img src="images/profile-1.jpg" alt="Profile" />
                                <p>Alejo Bagasine</p>
                            </td>
                            <td>14-08-2023</td>
                            <td><span className="status process">En proceso</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default LeftColum
