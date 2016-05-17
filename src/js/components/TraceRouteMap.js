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
            // if(marker.ll === undefined){return}

            // console.log('This is the marker!!! -------');
            // console.log(marker);
            // console.log('Marker city-->' + marker.city + '<--');

            var city = marker.city != "" ? marker.city : 'Unknown city';

            // console.log('New city ->' + city + '<--');

            var region = marker.region != "" ? marker.region : 'Unknown region';

            // console.log('New region ->' + region + '<--');

            index++;
            var label = `${index}: ${city}, ${region} ${marker.country}`;

            // console.log('Label ->'+label+'<-');

            return <Marker key={label} position={{ lat: marker.ll[0], lng: marker.ll[1] }} label={label} />
          } )}
          </GoogleMap>
        }
      />
  );

}