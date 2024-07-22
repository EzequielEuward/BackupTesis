import { Footer } from "../../ui/components/Footer"

export const FooterNavSection = () => {
  return (
    <>
      <footer className="bg-lightgray p-6 md:py-12 w-full">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h3 className="font-weight-bold text-dark">SINTACC</h3>
              <ul className="list-unstyled text-secondary">
                <li><a href="#" className="text-dark text-decoration-none">Sobre nosotros</a></li>
                <li><a href="#" className="text-dark text-decoration-none">Nuestro equipo</a></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h3 className="font-weight-bold text-dark">Legal</h3>
              <ul className="list-unstyled text-secondary">
                <li><a href="#" className="text-dark text-decoration-none">Políticas de privacidad</a></li>
                <li><a href="#" className="text-dark text-decoration-none">Términos y condiciones</a></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h3 className="font-weight-bold text-dark">Contacto</h3>
              <ul className="list-unstyled text-secondary">
                <li><a href="#" className="text-dark text-decoration-none">Soporte</a></li>
                <li><a href="#" className="text-dark text-decoration-none">Ventas</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <Footer />
    </>

  )
}

export default FooterNavSection
