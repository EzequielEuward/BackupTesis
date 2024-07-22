

export const VersionTable = () => {
    return (
        <div className="container bg-light rounded-lg border w-100 mt-5">
            <div className="mb-4 mt-4">
                <h1 className="h3 font-weight-bold">Versiones de la aplicación</h1>
                <p className="text-muted">Consulta las últimas actualizaciones y mejoras de nuestra aplicación.</p>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th className="px-3 py-2 text-left font-weight-medium">Versión</th>
                            <th className="px-3 py-2 text-left font-weight-medium">Fecha</th>
                            <th className="px-3 py-2 text-left font-weight-medium">Cambios</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-bottom">
                            <td className="px-3 py-2">v2.5.1</td>
                            <td className="px-3 py-2">2023-06-15</td>
                            <td className="px-3 py-2">
                                <ul className="list-unstyled pl-3 text-muted">
                                    <li>Mejoras en el rendimiento de la aplicación</li>
                                    <li>Corrección de errores en el módulo de facturación</li>
                                    <li>Adición de nuevas funcionalidades de análisis de datos</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="border-bottom">
                            <td className="px-3 py-2">v2.5.0</td>
                            <td className="px-3 py-2">2023-04-30</td>
                            <td className="px-3 py-2">
                                <ul className="list-unstyled pl-3 text-muted">
                                    <li>Integración con nuevos proveedores de pago</li>
                                    <li>Mejoras en la interfaz de usuario</li>
                                    <li>Adición de funcionalidades de colaboración en equipo</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="border-bottom">
                            <td className="px-3 py-2">v2.4.2</td>
                            <td className="px-3 py-2">2023-02-12</td>
                            <td className="px-3 py-2">
                                <ul className="list-unstyled pl-3 text-muted">
                                    <li>Corrección de errores de seguridad</li>
                                    <li>Mejoras en la accesibilidad de la aplicación</li>
                                    <li>Optimización del proceso de carga de datos</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="border-bottom">
                            <td className="px-3 py-2">v2.4.1</td>
                            <td className="px-3 py-2">2022-12-01</td>
                            <td className="px-3 py-2">
                                <ul className="list-unstyled pl-3 text-muted">
                                    <li>Mejoras en el módulo de informes</li>
                                    <li>Corrección de errores en el flujo de trabajo</li>
                                    <li>Adición de nuevas integraciones con herramientas de terceros</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="border-bottom">
                            <td className="px-3 py-2">v2.4.0</td>
                            <td className="px-3 py-2">2022-09-20</td>
                            <td className="px-3 py-2">
                                <ul className="list-unstyled pl-3 text-muted">
                                    <li>Lanzamiento de la nueva interfaz de usuario</li>
                                    <li>Mejoras en el rendimiento de la aplicación</li>
                                    <li>Adición de funcionalidades de automatización de flujos de trabajo</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );  
}

export default VersionTable
