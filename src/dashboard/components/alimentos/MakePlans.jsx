

import { useState } from "react"

export const MakePlans = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [foods, setFoods] = useState([
        {
            name: "Manzana",
            calories: 95,
            carbs: 25,
            protein: 0.3,
            fat: 0.3,
            price: 0.5,
        },
        {
            name: "Pollo asado",
            calories: 165,
            carbs: 0,
            protein: 31,
            fat: 7,
            price: 4.99,
        },
        {
            name: "Espinacas",
            calories: 23,
            carbs: 3.6,
            protein: 2.9,
            fat: 0.4,
            price: 2.99,
        },
        {
            name: "Arroz integral",
            calories: 216,
            carbs: 45,
            protein: 5,
            fat: 1.8,
            price: 1.5,
        },
        {
            name: "Salmón",
            calories: 206,
            carbs: 0,
            protein: 22,
            fat: 12,
            price: 9.99,
        },
    ]);
    const [cart, setCart] = useState([]);



    const addToCart = (food) => {
        setCart([...cart, food]);
    };

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
    };

    return (
        <div className="container">
            <div className="row g-4 p-4">

                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Buscar Alimentos</h2>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="Buscar alimentos..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="table-responsive" style={{ maxHeight: '400px', overflow: 'auto' }}>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr className="table-light">
                                            <th>Alimento</th>
                                            <th>Calorías</th>
                                            <th>Carbohidratos</th>
                                            <th>Proteínas</th>
                                            <th>Grasas</th>
                                            <th>Precio</th>
                                            <th>Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {foods
                                            .filter((food) => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                            .map((food, index) => (
                                                <tr key={index}>
                                                    <td>{food.name}</td>
                                                    <td>{food.calories}</td>
                                                    <td>{food.carbs}</td>
                                                    <td>{food.protein}</td>
                                                    <td>{food.fat}</td>
                                                    <td>${food.price.toFixed(2)}</td>
                                                    <td>
                                                        <button
                                                            onClick={() => addToCart(food)}
                                                            className="btn btn-primary btn-sm"
                                                        >
                                                            Agregar
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Carrito de Compras</h2>
                            <div className="table-responsive" style={{ maxHeight: '400px', overflow: 'auto' }}>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr className="table-light">
                                            <th>Alimento</th>
                                            <th>Calorías</th>
                                            <th>Carbohidratos</th>
                                            <th>Proteínas</th>
                                            <th>Grasas</th>
                                            <th>Precio</th>
                                            <th>Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((food, index) => (
                                            <tr key={index}>
                                                <td>{food.name}</td>
                                                <td>{food.calories}</td>
                                                <td>{food.carbs}</td>
                                                <td>{food.protein}</td>
                                                <td>{food.fat}</td>
                                                <td>${food.price.toFixed(2)}</td>
                                                <td>
                                                    <button
                                                        onClick={() => removeFromCart(index)}
                                                        className="btn btn-danger btn-sm"
                                                    >
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakePlans
