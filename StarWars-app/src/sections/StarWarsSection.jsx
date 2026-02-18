import useRandomListItem from "../hooks/useRandomListItem"

const StarWarsSection = ({ activeSection, starwarsReloadKey }) => {
  const {
    data: starwarsFilm,
    loading: starwarsLoading,
    error: starwarsError
  } = useRandomListItem({
    activeSection,
    targetSection: 'starwars',
    reloadKey: starwarsReloadKey,
    url: 'https://sw-info-api.herokuapp.com/v1/films',
    errorMessage: 'Unable to load opening crawl'
  })

  return (
    <section className="pt-4 mt-4">
      <h2 className="text-center">Star Wars</h2>
      {starwarsLoading ? (
        <p className="far-galaxy opening-crawl">Loading opening crawl...</p>
      ) : starwarsError ? (
        <p className="far-galaxy opening-crawl">{starwarsError}</p>
      ) : (
        <section>
          <h3 className="text-center">{starwarsFilm?.title || 'Opening Crawl'}</h3>
          <p className="far-galaxy opening-crawl">{starwarsFilm?.opening_crawl}</p>
        </section>
      )}
    </section>
  )
}

export default StarWarsSection
