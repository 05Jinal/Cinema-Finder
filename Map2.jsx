// import React, { Component } from "react";
// import { Map, GoogleApiWrapper } from 'google-maps-react';



// class MapContainer extends Component {
//   render() {
//     return (
      
//         <div className='w-28 h-full pl-5 pt-4 flex justify-start '>
     
//         <Map
//           google={this.props.google}
//           style={{ width: "65%", height: "124%" }}
//           zoom={5}
//           initialCenter={{ lat: -33.813680, lng: 151.014590 }}
//           marker={{}}
          
          
//         />
//       </div>
     
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyDMk3ZfBvAJWsIngx-ZS_1dXvNulvn3OnQ",
  
  
// })(MapContainer);

// import React from 'react';

// class MapContainer extends React.Component {
//   render() {
//     return (
//       <div className='w-28 h-full pl-5 pt-4 flex justify-start'>
//         <iframe
//           src="https://www.google.com/maps/d/u/0/embed?mid=1M_hvNJY9xxVc80vi_cIRwiQ7MR8hBso"
//           width="65%"
//           height="124%"
//           style={{ border: 0 }}
//           allowFullScreen
//           aria-hidden="false"
//           tabIndex="0"
//         ></iframe>
//       </div>
//     );
//   }
// }

// export default MapContainer;

import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    // Center between Australia and New Zealand
    const center = { lat: -25.0, lng: 133.0 };

    // Define markers for key locations in Australia and New Zealand
    const markers = [
      { lat: -33.8688, lng: 151.2093 },  // Sydney, Australia
      { lat: -33.8689, lng: 151.2092 },  // Sydney, Australia
      { lat: -33.8685, lng: 151.2091 },  // Sydney, Australia
      { lat: -37.8136, lng: 144.9631 },  // Melbourne, Australia
      { lat: -27.4698, lng: 153.0251 },  // Brisbane, Australia
      { lat: -31.9505, lng: 115.8605 },  // Perth, Australia
      { lat: -34.9285, lng: 138.6007 },  // Adelaide, Australia
      { lat: -41.2865, lng: 174.7762 },  // Wellington, New Zealand
      { lat: -36.8485, lng: 174.7633 },  // Auckland, New Zealand
      { lat: -43.5321, lng: 172.6362 },  // Christchurch, New Zealand
      { lat: -41.2904, lng: 173.7848 },  // Nelson, New Zealand
      { lat: -38.4237, lng: 144.3215 },  // Geelong, Australia
      { lat: -31.9505, lng: 115.8605 },  // Bunbury, Australia
      { lat: -37.8140, lng: 144.9633 },  // Ballarat, Australia
      { lat: -33.8688, lng: 151.2093 },  // Canberra, Australia
      { lat: -17.7084, lng: 139.4921 },  // Cairns, Australia
      { lat: -34.6718, lng: 138.8305 },  // Mawson Lakes, Australia
      { lat: -41.2891, lng: 173.0000 },  // Blenheim, New Zealand
      { lat: -45.9035, lng: 170.5147 },  // Dunedin, New Zealand
      { lat: -43.6020, lng: 172.6362 },  // Timaru, New Zealand
      { lat: -40.0048, lng: 173.2435 },  // New Plymouth, New Zealand
      { lat: -41.2969, lng: 173.2825 },  // Richmond, New Zealand
      { lat: -41.2968, lng: 173.2826 },   // Richmond, New Zealand
      { lat: -23.6980, lng: 133.8807 },  // Alice Springs
      { lat: -12.4634, lng: 130.8456 },  // Darwin
      { lat: -33.7200, lng: 151.1167 },  // Hornsby
      { lat: -33.7749, lng: 151.1265 },  // Epping
      { lat: -33.8245, lng: 151.0456 },  // Parramatta
      { lat: -27.4698, lng: 153.0251 },  // South Brisbane
      { lat: -27.4698, lng: 153.0146 },  // East Brisbane
      { lat: -33.8746, lng: 151.2046 },  // North Sydney
      { lat: -37.8409, lng: 144.9464 },  // Docklands
      { lat: -32.9267, lng: 151.7817 },  // Charlestown
      { lat: -28.0732, lng: 153.3705 },  // Robina
      { lat: -33.7192, lng: 150.6643 },  // Penrith
      { lat: -37.9065, lng: 145.0015 },  // Brighton
      { lat: -35.3425, lng: 149.0422 },  // Queanbeyan
      { lat: -31.7444, lng: 115.7667 },  // Joondalup
      { lat: -38.1499, lng: 144.3574 },  // Torquay
      { lat: -33.8679, lng: 151.2089 },  // Bondi
      { lat: -33.9126, lng: 151.1546 },  // Marrickville
      { lat: -32.7157, lng: 152.0344 },  // Nelson Bay
      { lat: -34.0556, lng: 151.1362 },  // Hurstville
      { lat: -35.0231, lng: 138.5765 },  // Glenelg
      { lat: -37.8275, lng: 145.0514 },  // Kew
      { lat: -38.2535, lng: 144.4270 },  // Lorne
      { lat: -27.4955, lng: 153.0120 },  // Woolloongabba
      { lat: -28.1627, lng: 153.5044 },  // Coolangatta
      { lat: -35.1035, lng: 138.5194 },  // Hahndorf
      { lat: -34.6506, lng: 138.4714 },  // Gawler
      { lat: -38.3104, lng: 144.8176 },  // Portsea
      { lat: -31.8912, lng: 152.4623 },  // Port Macquarie
      { lat: -37.9026, lng: 145.1279 },  // Carnegie
      { lat: -36.0674, lng: 144.7535 },  // Echuca
      { lat: -35.1895, lng: 148.1236 },  // Tumut
      { lat: -38.2174, lng: 145.0362 },  // Frankston
      { lat: -34.0700, lng: 150.8083 },  // Camden
      { lat: -35.0211, lng: 147.3562 },  // Wagga Wagga
      { lat: -34.7226, lng: 150.3701 },  // Nowra
      { lat: -33.7692, lng: 150.6870 },  // Blue Mountains
      { lat: -33.7766, lng: 150.6331 },  // Springwood
      { lat: -33.8960, lng: 150.9013 },  // Liverpool
      { lat: -31.9602, lng: 115.8451 },  // West Perth
      { lat: -37.8365, lng: 145.0372 },  // Malvern
      { lat: -33.9881, lng: 150.9510 },  // Casula
      { lat: -37.6167, lng: 144.9836 },  // Essendon
      { lat: -37.5865, lng: 144.7631 },  // Sunbury
      { lat: -27.4639, lng: 153.0217 },  // New Farm
      { lat: -37.8564, lng: 145.0302 },  // Glen Iris
      { lat: -36.1862, lng: 145.5387 },  // Shepparton
      { lat: -34.0137, lng: 151.1018 },  // Rockdale
      { lat: -33.8419, lng: 151.2090 },  // Mosman
      { lat: -34.0486, lng: 151.0553 },  // Mortdale
      { lat: -34.9307, lng: 150.7810 },  // Kiama
      { lat: -33.8996, lng: 151.1675 },  // Leichhardt
      { lat: -37.8157, lng: 145.0020 },  // Prahran
      { lat: -33.7612, lng: 151.1303 },  // Ryde
      { lat: -36.0626, lng: 146.9204 },  // Albury
      { lat: -37.5552, lng: 145.0439 },  // Diamond Creek
      { lat: -33.8496, lng: 151.0971 },  // Marrickville
      { lat: -33.7890, lng: 151.1873 },  // Manly
      { lat: -36.1209, lng: 146.8804 },  // Wodonga
      { lat: -38.1463, lng: 144.3577 },  // Geelong
      { lat: -33.8881, lng: 151.2040 },  // Randwick
      { lat: -37.6725, lng: 144.8780 },  // Tullamarine
      { lat: -34.0737, lng: 150.8123 },  // Mount Annan
      { lat: -37.8655, lng: 145.0012 },  // Ashburton
      { lat: -33.7656, lng: 151.1303 },  // Macquarie Park
      { lat: -37.6500, lng: 144.9935 },  // Ascot Vale
      { lat: -37.7716, lng: 145.0433 },  // Heidelberg
      { lat: -34.0487, lng: 151.0554 },  // Beverly Hills
      { lat: -33.8895, lng: 151.1689 },  // Camperdown
      { lat: -37.8431, lng: 145.0307 },  // Glen Waverley
      { lat: -37.9156, lng: 144.9920 },  // St Kilda
      { lat: -37.8164, lng: 144.9632 },  // Southbank
    ];

    // URL for a blue marker icon
    const blueMarkerIcon = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";

    return (
      <div className='w-28 h-full pl-5 pt-4 flex justify-start'>
        <Map
          google={this.props.google}
          style={{ width: "65%", height: "124%" }}
          zoom={5}  // Adjust zoom level to fit both countries
          initialCenter={center}
          mapTypeControl={false}  // Optional: Hide map type control
          streetViewControl={false}  // Optional: Hide Street View control
        >
          {/* Render markers with blue icon */}
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={blueMarkerIcon}  // Custom blue icon for the marker
            />
          ))}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDMk3ZfBvAJWsIngx-ZS_1dXvNulvn3OnQ",
})(MapContainer);
