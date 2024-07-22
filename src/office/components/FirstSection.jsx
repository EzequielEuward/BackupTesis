import '../../../public/img/img1.png'
import '../../../public/img/img2.png';
export const FirstSection = () => {

  const imagen1 = '../../../public/img/img1.png';
  const imagen2 = '../../../public/img/img2.png';

  return (
    <section className="vh-50 py-12 py-md-24 py-lg-32" style={{ backgroundColor: '#29335C' }} id='home'>
      <div className="container px-4 px-md-6">
        <div className="row gap-8 gx-lg-4 align-items-center justify-content-center">

          <div className="col-lg-6 col-12">
            <div className="card bg-white text-dark mb-4">
              <div className="card-body">
                <h5 className="card-title">Funcionalidades unicas</h5>
                <img src={imagen1} alt="Imagen 1" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="card bg-white text-dark mb-4">
              <div className="card-body">
                <h5 className="card-title">Buena interfaz</h5>
                <img src={imagen2} alt="Imagen 2" />
              </div>
            </div>
          </div>

          {/* Continuar con las tarjetas restantes */}

        </div>
      </div>
    </section>

  );
};

export default FirstSection;