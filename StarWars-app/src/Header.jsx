import Buttons from './Buttons'

const Header = () => {
  return (
    <header className={'fixed-top header rounded-top-5 d-flex align-items-center px-3'}>
        <nav className={'mt-2'}>
            <Buttons />
        </nav>
        <h1 className={"fs-1 py-3 flex-grow-1 text-center m-0"}>Luke Skywalker</h1>
    </header>
  )
}

export default Header