import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import './index.css'


const Map = ({ location, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = location.map(data => {
        return <LocationMarker lat={data.latitude} lng={data.longitude} onClick={() => setLocationInfo({image: data.images[0]?.url, title: data.fullName, location: data.states, description:data.description, url:data.url, location:data.location})}/>
    });
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key:'AIzaSyB7L-hAIY5w10YuGx3Iyub2zFkmPAJgO_M' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    );
};

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 4
};

export default Map;