import friend1 from './assets/friend1.jpg'
import friend2 from './assets/friend2.jpg'
import friend3 from './assets/friend3.jpg'
import friend4 from './assets/friend4.jpg'
import friend5 from './assets/friend5.jpg'
import friend6 from './assets/friend6.jpg'
import friend7 from './assets/friend7.jpg'
import friend8 from './assets/friend8.jpg'
import friend9 from './assets/friend9.jpg'


const Pictures = () => {
  return (
    <section className="float-end w-50 row ms-2 me-0 border border-warning rounded-bottom-1">
        <h2 className="col-sm-12 text-center">Dream Team</h2>
        <img src={friend1} alt="Friend 1" className="col-sm-4 p-1" />
        <img src={friend2} alt="Friend 2" className="col-sm-4 p-1" />
        <img src={friend3} alt="Friend 3" className="col-sm-4 p-1" />
        <img src={friend4} alt="Friend 4" className="col-sm-4 p-1" />
        <img src={friend5} alt="Friend 5" className="col-sm-4 p-1" />
        <img src={friend6} alt="Friend 6" className="col-sm-4 p-1" />
        <img src={friend7} alt="Friend 7" className="col-sm-4 p-1" />
        <img src={friend8} alt="Friend 8" className="col-sm-4 p-1" />
        <img src={friend9} alt="Friend 9" className="col-sm-4 p-1" />
    </section>
  )
}

export default Pictures