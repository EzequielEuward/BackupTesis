import { useState } from "react";



export const FICM = () => {

    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmiCategory, setBmiCategory] = useState('');
    const [imc, setImc] = useState(0);

    const calculateImc = () => {
        const heightInMeters = height / 100;
        const imcValue = weight / (heightInMeters * heightInMeters);
        setImc(imcValue.toFixed(2));
        if (imcValue < 18.5) {
            setBmiCategory("Bajo peso");
        } else if (imcValue >= 18.5 && imcValue < 25) {
            setBmiCategory("Normal");
        } else if (imcValue >= 25 && imcValue < 30) {
            setBmiCategory("Sobrepeso");
        } else {
            setBmiCategory("Obesidad");
        }
    };



    return (
        <div className="container">
            <div className="row g-4 p-4 justify-content-center">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Calculadora de IMC</h2>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <label htmlFor="weight" className="form-label">
                                        Peso (kg)
                                    </label>
                                    <input
                                        type="text"
                                        id="weight"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <label htmlFor="height" className="form-label">
                                        Altura (cm)
                                    </label>
                                    <input
                                        type="text"
                                        id="height"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <button
                                onClick={calculateImc}
                                className="btn btn-primary mt-3"
                            >
                                Calcular IMC
                            </button>
                            {imc > 0 && (
                                <div className="mt-3">
                                    <p className="fw-bold">spanTu IMC es: {imc}</p>
                                    <p className="fw-bold">Categoría: {bmiCategory}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FICM
