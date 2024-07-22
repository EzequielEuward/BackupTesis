

import { CardContainerEzequiel, CardContainerLeonel, CardContainerMelina, CardContainerAgustin, CardContainerAlejo } from '../../ui/components/CardDeveloper';
export const TeamSection = () => {

    return (
        <>
            <section className="bg-light dark:bg-dark py-5 py-md-5">
                <div className="container px-4 md:px-6">
                    <h2 className="h4 md:h3 font-weight-bold text-center mb-4 md:mb-5">Conoce nuestro equipo</h2>
                    <hr />

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        <div className="col mb-4">
                            {/* CARD 1 */}
                            <CardContainerEzequiel />
                        </div>
                        <div className="col mb-4">
                            <CardContainerLeonel />
                        </div>
                        <div className="col mb-4">
                            <CardContainerMelina />
                        </div>
                        <div className="col mb-4">
                            <CardContainerAgustin />
                        </div>
                        <div className="col mb-4">
                            <CardContainerAlejo />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default TeamSection
