import React from 'react';

import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default function TraceRouteMap (props) {
  console.log('Rendering TraceRouteMap');

	return (

      <GoogleMapLoader
        containerElement={ <div style={{height: '600px'}} /> }
        googleMapElement={
          <GoogleMap
            defaultZoom={4}
            defaultCenter={{ lat: 39.480611, lng: -98.001497 }}
          >
          {props.markers.map( (marker, index) => {
            var city = marker.city != "" ? marker.city : 'Unknown city';
            var region = marker.region != "" ? marker.region : 'Unknown region';

            index++;
            var label = `${index}: ${city}, ${region} ${marker.country}`;

            return <Marker 
                      key={label} 
                      position={{ lat: marker.ll[0], lng: marker.ll[1] }} 
                      label={index.toString()}
                      defaultAnimation={2}
                      title={label}
                    />
          })}
          </GoogleMap>
        }
      />
  );

}