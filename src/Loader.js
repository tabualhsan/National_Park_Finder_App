import spinner from './spinner.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading" />
            <h1>Locating All National Parks</h1>
        </div>
    )
}

export default Loader;