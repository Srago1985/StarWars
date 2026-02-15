import Friends from './Friends'


const Pictures = () => {
  return (
    <section className="float-end w-50 row ms-2 me-0 border border-warning rounded-bottom-1">
        <h2 className="col-sm-12 text-center">Dream Team</h2>
        {Friends.map((friend, index) => (
          <img key={index} src={friend} alt={`Friend ${index + 1}`} className="col-sm-4 p-1" />
        ))}
    </section>
  )
}

export default Pictures