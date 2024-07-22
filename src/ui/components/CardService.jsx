import '../../style/planesCard.css'
import { Button } from 'react-bootstrap'

export const CardPriceNormal = () => {
    return (
        <>
            <div className="plan">
                <div className="inner">
                    <span className="pricing ">
                        <span>
                            <small>ARS /</small>  $2000
                        </span>
                    </span>
                    <p className="title mt-3">Plan Basico</p>
                    <p className="info">Este es un plan basico de lo que ofrecemos.</p>
                    <ul className="features">
                        <li >
                            <span className="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                            </span>
                            <span>Pacientes <strong>ilimitados</strong> </span>
                        </li>
                        <li>
                            <span className="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                            </span>
                            <span>Plan de recetas <strong>Basico</strong></span>
                        </li>
                        <li>
                            <span className="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                            </span>
                            <span>Informes en pantalla</span>
                        </li>
                        <li>
                            <span className="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                            </span>
                            <span>Seguridad de datos</span>
                        </li>
                        <li>
                            <span className="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                            </span>
                            <span>Planes de comida personalizados</span>
                        </li>
                        <li>
                            <span className="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                            </span>
                            <span>Calculadora nutricional</span>
                        </li>
                        <li>
                            <span className="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                            </span>
                            <span>Seguimiento de procesos </span>
                        </li>
                        <li>
                            <span className="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                            </span>
                            <span>Recordatorios y notificaciones </span>
                        </li>

                        <li>
                            <span className="iconn">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" fill="#FF0000"></rect>
                                    <path fill="#FFFFFF" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" rx="2" ry="2"></path>
                                </svg>
                            </span>
                            <span>Funciona solo en <strong>Web</strong></span>
                        </li>
                        <li>
                            <span className="iconn">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" fill="#FF0000"></rect>
                                    <path fill="#FFFFFF" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" ></path>
                                </svg>
                            </span>
                            <span>Soporte de 1 <strong>mes</strong></span>
                        </li>
                        <li>
                            <span className="iconn">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" fill="#FF0000"></rect>
                                    <path fill="#FFFFFF" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" ></path>
                                </svg>
                            </span>
                            <span>Creacion de dietas <strong>personalizadas</strong></span>
                        </li>

                    </ul>
                    <Button variant="success" size='lg'>Elegir Plan</Button>{' '}
                </div>
            </div>
        </>
    )
}

export const CardPriceProffesional = () => {
    return (
        <>
            <div className="plan">
                <div className="inner">
                    <span className="pricing ">
                        <span>
                            <small>ARS /</small>  $3000
                        </span>
                    </span>
                    <p className="title mt-3">Plan Professional</p>
                    <p className="info">Este es el plan itermedio que ofrecemos.</p>
                    <ul className="features">
                        <li >
                            <span className="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                            </span>
                            <span>Pacientes <strong>ilimitados</strong> </span>
                        </li>
                        <li>
                            <span className="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                            </span>
                            <span>Plan de recetas <strong>Basico</strong></span>
                        </li>
                        <li>
                            <span className="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                            </span>
                            <span><strong>Informes</strong> en pantalla</span>
                        </li>
                        <li>
                            <span className="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                            </span>
                            <span><strong>Seguridad</strong> de datos</span>
                        </li>
                        <li>
                            <span className="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                            </span>
                            <span>Planes de comida <strong>personalizados</strong></span>
                        </li>
                        <li>
                            <span className="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                            </span>
                            <span><strong>Calculadora</strong> nutricional</span>
                        </li>
                        <li>
                            <span className="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                            </span>
                            <span>Seguimiento de procesos </span>
                        </li>
                        <li>
                            <span className="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                            </span>
                            <span><strong>Creación</strong> de dietas</span>
                        </li>
                        <li>
                            <span className="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                </svg>
                            </span>
                            <span>Recordatorios y notificaciones </span>
                        </li>

                        <li>
                            <span className="iconn">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" fill="#FF0000"></rect>
                                    <path fill="#FFFFFF" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" rx="2" ry="2"></path>
                                </svg>
                            </span>
                            <span>Funciona solo en <strong>Web</strong></span>
                        </li>
                        <li>
                            <span className="iconn">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" fill="#FF0000"></rect>
                                    <path fill="#FFFFFF" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" ></path>
                                </svg>
                            </span>
                            <span>Soporte de 6 <strong>mes</strong></span>
                        </li>
                    </ul>
                    <Button variant="success" size='lg'>Elegir Plan</Button>{' '}
                </div>
            </div>
        </>

    )
}

// export const CardPriceIntermedial = () => {

//     return (
//         <>
//             <div className="plan">
//                 <div className="inner">
//                     <span className="pricing">
//                         <span>
//                             $49 <small>/ m</small>
//                         </span>
//                     </span>
//                     <p className="title">Professional</p>
//                     <p className="info">This plan is for those who have a team already and running a large business.</p>
//                     <ul className="features">
//                         <li>
//                             <span className="icon">
//                                 <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M0 0h24v24H0z" fill="none"></path>
//                                     <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
//                                 </svg>
//                             </span>
//                             <span><strong>20</strong> team members</span>
//                         </li>
//                         <li>
//                             <span className="icon">
//                                 <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M0 0h24v24H0z" fill="none"></path>
//                                     <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
//                                 </svg>
//                             </span>
//                             <span>Plan <strong>team meetings</strong></span>
//                         </li>
//                         <li>
//                             <span className="icon">
//                                 <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M0 0h24v24H0z" fill="none"></path>
//                                     <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
//                                 </svg>
//                             </span>
//                             <span>File sharing</span>
//                         </li>
//                     </ul>
//                     <div className="action">
//                         <a className="button" href="#">
//                             Choose plan
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </>

//     )
// }
