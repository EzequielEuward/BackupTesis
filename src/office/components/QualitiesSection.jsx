import {BoltIcon , DollarSignIcon , SettingsIcon , ShieldCheckIcon , SparklesIcon} from '../../ui/icons/SvgCardCaracteristicas';

export const QualitiesSection = () => {
    return (
        <section className="bg-light py-5" id='caracteristicas'>
            <div className="container px-4">
                <h1 className='text-center mb-4 text-capitalize fs-1 fw-bold'>caracteristicas</h1> <hr />
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4">
                    <div className="col">
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                <div className="bg-success rounded-circle p-3 mb-3 mx-auto" style={{ width: 'fit-content' }}>
                                    <BoltIcon className="text-white" style={{ width: '2rem', height: '2rem' }} />
                                </div>
                                <h3 className="card-title">Rendimiento Rápido</h3>
                                <p className="card-text text-muted">
                                    Nuestro producto ofrece un rendimiento excepcional, con respuestas instantáneas y una experiencia fluida.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                <div className="bg-success rounded-circle p-3 mb-3 mx-auto" style={{ width: 'fit-content' }}>
                                    <SettingsIcon className="text-white" style={{ width: '2rem', height: '2rem' }} />
                                </div>
                                <h3 className="card-title">Personalización Avanzada</h3>
                                <p className="card-text text-muted">
                                    Personaliza tu experiencia con nuestras herramientas de configuración intuitivas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                <div className="bg-success rounded-circle p-3 mb-3 mx-auto" style={{ width: 'fit-content' }}>
                                    <ShieldCheckIcon className="text-white" style={{ width: '2rem', height: '2rem' }} />
                                </div>
                                <h3 className="card-title">Seguridad Robusta</h3>
                                <p className="card-text text-muted">
                                    Nuestras medidas de seguridad avanzadas protegen tus datos de manera efectiva.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                <div className="bg-success rounded-circle p-3 mb-3 mx-auto" style={{ width: 'fit-content' }}>
                                    <SparklesIcon className="text-white" style={{ width: '2rem', height: '2rem' }} />
                                </div>
                                <h3 className="card-title">Diseño Elegante</h3>
                                <p className="card-text text-muted">
                                    Nuestra interfaz de usuario es visualmente atractiva y fácil de usar.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                <div className="bg-success rounded-circle p-3 mb-3 mx-auto" style={{ width: 'fit-content' }}>
                                    <DollarSignIcon className="text-white" style={{ width: '2rem', height: '2rem' }} />
                                </div>
                                <h3 className="card-title">Precio Asequible</h3>
                                <p className="card-text text-muted">
                                    Nuestro producto ofrece un excelente valor por tu dinero.
                                </p>
                                <div className="display-4 mt-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}




export default QualitiesSection
