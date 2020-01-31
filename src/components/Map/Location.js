import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapApiKey = `${process.env.GATSBY_MAP_API_TOKEN}`;

const Location = ({google}) => {
    const position = { lat: 45.655874, lng: -73.789835 }
    return (
        <div style={{
            position: "relative",
            height: "400px"
          }}
        >
            <Map
                google={google}
                zoom={14}
                initialCenter={position}
            >
                <Marker 
                    position={position}
                />
            </Map>
        </div>
    );
};

export default GoogleApiWrapper({apiKey: mapApiKey})(Location);