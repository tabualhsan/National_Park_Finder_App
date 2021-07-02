const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>National Park</h2>
            <ul>
            <li><img src={ info.image}/> </li>
    <li>Park: <strong>{ info.title }</strong></li>
    <li>Location: <strong>{ info.location }</strong></li>
    
            </ul>
        </div>
    )
}

export default LocationInfoBox