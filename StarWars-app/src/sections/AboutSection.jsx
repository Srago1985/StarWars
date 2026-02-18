import { useEffect, useState } from "react"
import useRandomListItem from "../hooks/useRandomListItem"

const AboutSection = ({ activeSection, aboutReloadKey }) => {
  const [aboutPlanet, setAboutPlanet] = useState(null)

  const {
    data: aboutPerson,
    loading: aboutLoading,
    error: aboutError
  } = useRandomListItem({
    activeSection,
    targetSection: 'about',
    reloadKey: aboutReloadKey,
    url: 'https://sw-info-api.herokuapp.com/v1/peoples',
    errorMessage: 'Unable to load character'
  })

  useEffect(() => {
    if (activeSection !== 'about') {
      return undefined
    }

    let isMounted = true

    const loadPlanet = async () => {
      setAboutPlanet(null)

      if (aboutPerson?.homeworld == null) {
        return
      }

      try {
        const planetResponse = await fetch(
          `https://sw-info-api.herokuapp.com/v1/planets/${aboutPerson.homeworld}`
        )
        if (planetResponse.ok) {
          const planet = await planetResponse.json()
          if (isMounted) {
            setAboutPlanet(planet)
          }
        }
      } catch (error) {
        console.error(error)
      }
    }

    loadPlanet()

    return () => {
      isMounted = false
    }
  }, [activeSection, aboutPerson])

  const formatValue = (value) => {
    if (value == null) {
      return 'Unknown'
    }
    if (Array.isArray(value)) {
      return value.length ? value.join(', ') : 'Unknown'
    }
    return String(value)
  }

  const personFields = [
    { key: 'name', label: 'Name' },
    { key: 'birth_year', label: 'Birth year' },
    { key: 'gender', label: 'Gender' },
    { key: 'height', label: 'Height' },
    { key: 'mass', label: 'Mass' },
    { key: 'hair_color', label: 'Hair color' },
    { key: 'skin_color', label: 'Skin color' },
    { key: 'eye_color', label: 'Eye color' }
  ]

  const planetFields = [
    { key: 'name', label: 'Name' }
  ]

  return (
    <section className="pt-4 mt-4">
      <h2 className="text-center">About me</h2>
      {aboutLoading ? (
        <p className="far-galaxy">Loading character...</p>
      ) : aboutError ? (
        <p className="far-galaxy">{aboutError}</p>
      ) : (
        <div className="far-galaxy">
          {aboutPerson?.image && (
            <img
              src={aboutPerson.image}
              alt={aboutPerson?.name || 'Character'}
              className="img-fluid mb-3"
            />
          )}
          {personFields.map((field) => (
            <p key={field.key}>
              {field.label}: {formatValue(aboutPerson?.[field.key])}
            </p>
          ))}
          {aboutPlanet && (
            <div className="mt-3">
              <h3 className="text-center">Homeworld</h3>
              {planetFields.map((field) => (
                <p key={field.key}>
                  {field.label}: {formatValue(aboutPlanet?.[field.key])}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default AboutSection
