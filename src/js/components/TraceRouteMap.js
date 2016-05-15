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
            var label = `${index}: ${marker.city}, ${marker.region} ${marker.country}`;

            console.log(label);

            return <Marker key={label} position={{ lat: marker.ll[0], lng: marker.ll[1] }} label={label} />
          } )}
          </GoogleMap>
        }
      />
  );

}

// defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
// {lat: -34, lng: 151}

/*
<GoogleMap
            defaultZoom={3}
            defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
          ></GoogleMap>
          */

// {props.markers.map((marker, index) => {
//               return (
//                 <Marker
//                   {...marker}
//                   onRightclick={() => props.onMarkerRightclick(index)} />
//               );
//             })}


// return (
//     <section style={{height: "100%"}}>
//       <GoogleMapLoader
//         containerElement={
//           <div
//             {...props.containerElementProps}
//             style={{
//               height: "100%",
//             }}
//           />
//         }
//         googleMapElement={
//           <GoogleMap
//             ref={(map) => console.log(map)}
//             defaultZoom={3}
//             defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
//             onClick={props.onMapClick}
//           >
//             {props.markers.map((marker, index) => {
//               return (
//                 <Marker
//                   {...marker}
//                   onRightclick={() => props.onMarkerRightclick(index)} />
//               );
//             })}
//           </GoogleMap>
//         }
//       />
//     </section>
//   );