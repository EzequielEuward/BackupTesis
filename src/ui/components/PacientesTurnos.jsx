

export const PacientesTurnos = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    {/* Contenedor de Últimos Pacientes */}
                    <div className="col-lg-6 col-md-12 mb-4">
                        <div className="card">
                            <div className="card-header">
                                Últimos Pacientes
                            </div>
                            <div className="card-body">
                                {/* Contenido para Últimos Pacientes */}
                                <p>Contenido de últimos pacientes...</p>
                            </div>
                        </div>
                    </div>

                    {/* Contenedor de Próximos Turnos */}
                    <div className="col-lg-6 col-md-12 mb-4">
                        <div className="card">
                            <div className="card-header">
                                Próximos Turnos
                            </div>
                            <div className="card-body">
                                {/* Contenido para Próximos Turnos */}
                                <p>Contenido de próximos turnos...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default PacientesTurnos
