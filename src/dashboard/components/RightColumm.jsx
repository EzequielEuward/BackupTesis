

export const RightColumm = () => {
    return (
        <>
            <div className="reminders">
                <div className="header">
                    <i className='bx bx-note'></i>
                    <h3>Recordatorio turnos</h3>
                    <i className='bx bx-filter'></i>
                    <i className='bx bx-plus'></i>
                </div>
                <ul className="task-list">
                    <li className="completed">
                        <div className="task-title">
                            <i className='bx bx-check-circle'></i>
                            <p>Turno de las 8:15</p>
                        </div>
                        <i className='bx bx-dots-vertical-rounded'></i>
                    </li>
                    <li className="completed">
                        <div className="task-title">
                            <i className='bx bx-check-circle'></i>
                            <p>Turno de las  9:15</p>
                        </div>
                        <i className='bx bx-dots-vertical-rounded'></i>
                    </li>
                    <li className="not-completed">
                        <div className="task-title">
                            <i className='bx bx-x-circle'></i>
                            <p>Turno de las 14:15</p>
                        </div>
                        <i className='bx bx-dots-vertical-rounded'></i>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default RightColumm
