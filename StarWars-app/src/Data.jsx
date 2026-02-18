import AboutSection from "./sections/AboutSection"
import ContactSection from "./sections/ContactSection"
import HomeSection from "./sections/HomeSection"
import StarWarsSection from "./sections/StarWarsSection"

const Data = ({ activeSection, aboutReloadKey, starwarsReloadKey }) => {
  let content = null

  if (activeSection === 'home') {
    content = <HomeSection />
  }

  if (activeSection === 'about') {
    content = <AboutSection activeSection={activeSection} aboutReloadKey={aboutReloadKey} />
  }

  if (activeSection === 'starwars') {
    content = (
      <StarWarsSection activeSection={activeSection} starwarsReloadKey={starwarsReloadKey} />
    )
  }

  if (activeSection === 'contact') {
    content = <ContactSection />
  }

  return (
    <div className="clear-fix w-100 pt-4 mt-4">
      {content}
    </div>
  )
}

export default Data