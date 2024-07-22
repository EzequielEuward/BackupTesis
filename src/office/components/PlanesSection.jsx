
import '../../style/planesCard.css';
import { CardPriceNormal, CardPriceProffesional } from '../../ui/components/CardService'
export const PlanesSection = () => {
    return (
        <>
            <section className='bg-light py-5' id='planes'>
                <div className="container text-center">
                    <h1 className='text-center mb-4 text-capitalize fs-1 fw-bold'>Planes</h1>

                    <hr />

                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="p-2">
                                <CardPriceNormal />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-2">
                                <CardPriceProffesional />
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default PlanesSection
