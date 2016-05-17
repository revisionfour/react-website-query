import React from 'react';

import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default function TraceRouteMap (props) {

	return (
      <GoogleMapLoader
        containerElement={ <div style={{height: '600px'}} /> }
        googleMapElement={
          <GoogleMap
            defaultZoom={4}
            defaultCenter={{ lat: 39.480611, lng: -98.001497 }}
          >
          {props.markers.map( (marker, index) => {
            index++;
            var label = `${index}: ${marker.city}, ${marker.region} ${marker.country}`;

            console.log(label);

            return <Marker key={label} position={{ lat: marker.ll[0], lng: marker.ll[1] }} label={label} />
          } )}
          </GoogleMap>
        }
      />
  );

}