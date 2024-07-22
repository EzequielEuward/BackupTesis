import { Navbar } from "./ui/components/Navbar"
import { AboutSection, QualitiesSection, FooterNavSection, FirstSection, PlanesSection, TeamSection } from "./office/components"
export const Home = () => {
  return (
    <>
 
      <Navbar />
      <FirstSection />
      <AboutSection />
      <QualitiesSection />
      <PlanesSection />
      <TeamSection />
      <FooterNavSection />

    </>
  )
}

export default Home
