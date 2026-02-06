import lukeImage from './assets/main.jpg'

const Portrait = () => {
  return (
    <section className="float-start w-25 mt-1 me-2">
        <img src={lukeImage} alt="Luke Skywalker" className="w-100" />        
    </section>
  )
}

export default Portrait