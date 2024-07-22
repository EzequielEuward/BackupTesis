import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="shadow p-4 rounded bg-white" style={{ maxWidth: '400px' }}>
        <div className="w-100 max-w-md space-y-4">
          <div className="text-center">
            <h1 className="display-4 fw-bold">Iniciar Sessión</h1>
            <p className="text-muted">Ingresa tu email y contraseña para poder acceder a  tu cuenta.</p>
          </div>
          <form className="space-y-4">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" required autoComplete="off" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" required />
            </div>
            <button type="submit" className="btn btn-primary w-100" onClick={handleClick}>Ingresar</button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default LoginPage