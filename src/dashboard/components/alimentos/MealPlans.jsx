import { FaPlus } from "react-icons/fa6";

export const MealPlans = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-md-4">
                        <div className="p-4 border bg-light shadow-sm rounded">
                            <h5 className="fw-bold mb-3">Planes de alimentación</h5>
                            <small className="text-muted">Crea y administra tus planes de alimentación</small>
                            <div className="mt-4">
                                <h6 className="fw-bold">Tus planes de comida</h6>
                                <ul className="list-unstyled">
                                    <li className="d-flex justify-content-between align-items-center text-small py-2 border-bottom">
                                        Plan de alimentación semanal <FaPlus className="ms-auto mealAdd" />
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center text-small py-2 border-bottom">
                                        Plan de alimentación mensual <FaPlus className="ms-auto mealAdd" />
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center text-small py-2 border-bottom">
                                        Plan de alimentación Vegetariano <FaPlus className="ms-auto mealAdd" />
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center text-small py-2">
                                        Plan de alimentación Vegano <FaPlus className="ms-auto mealAdd" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 border bg-light shadow-sm rounded">
                            <h5>Creador de recetas</h5>
                            <small className="text-muted">Crea y customiza tus planes de alimentación</small>
                            <div className="mt-4">
                                <h6 className="fw-bold">Tus planes de comida</h6>
                                <ul className="list-unstyled">
                                    <li className="d-flex justify-content-between align-items-center text-small py-2 border-bottom">
                                        Crear plan <FaPlus className="ms-auto mealAdd" />
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center text-small py-2 border-bottom">
                                        Usar planes <FaPlus className="ms-auto mealAdd" />
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center text-small py-2 border-bottom">
                                        Ver planes <FaPlus className="ms-auto mealAdd" />
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 border bg-light shadow-sm rounded">
                            <h5>Tabla nutricional</h5>
                            <small className="text-muted">Ve la tabla nutricional de cada alimento</small>
                            <div className="mt-4">
                                <h6 className="fw-bold">Tus planes de comida</h6>
                                <ul className="list-unstyled">
                                    <li className="d-flex justify-content-between align-items-center text-small py-2 border-bottom">
                                       Macronutrientes <FaPlus className="ms-auto mealAdd" />
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center text-small py-2 border-bottom">
                                       Ingestas diarias <FaPlus className="ms-auto mealAdd" />
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center text-small py-2 border-bottom">
                                       Grupos <FaPlus className="ms-auto mealAdd" />
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default MealPlans;
