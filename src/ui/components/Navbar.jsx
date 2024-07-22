import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../style/index.css";
import "../../style/buttonLogin.css";
import { useNavigate } from "react-router-dom";

export function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const navigate = useNavigate();

	const onLogin = () => {
		navigate('/login', {
			replace: true
		});
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#home">Inicio</a>
				<a href="/#producto">Producto</a>
				<a href="/#caracteristicas">Caracteristicas</a>
				<a href="/#team">Nuestro equipo</a>
				<a href="/#planes">Planes</a>
				<a href="/#contacto">Contactanos</a>

				<button className="Btnn" onClick={onLogin}>
					<div className="sign"><svg viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path></svg></div>
					<div className="textt">Ingresar</div> 
				</button>

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>

			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;