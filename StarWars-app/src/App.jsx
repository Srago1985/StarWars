import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import './App.css'
import Header from './Header'
import Data from './Data'



function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [aboutReloadKey, setAboutReloadKey] = useState(0)
  const [starwarsReloadKey, setStarwarsReloadKey] = useState(0)

  const handleSectionChange = (nextSection) => {
    setActiveSection(nextSection)
    if (nextSection === 'about') {
      setAboutReloadKey((value) => value + 1)
    }
    if (nextSection === 'starwars') {
      setStarwarsReloadKey((value) => value + 1)
    }
  }

  return (
    <main>
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      <Data
        activeSection={activeSection}
        aboutReloadKey={aboutReloadKey}
        starwarsReloadKey={starwarsReloadKey}
      />
    </main>
  )
}

export default App
