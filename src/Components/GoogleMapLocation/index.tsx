import GoogleMapReact from 'google-map-react';
import { useState } from "react";

const AnyReactComponent = ({text}: any) => <div>{text}</div>;

const GooogleMapLocation = (props: any) => {
  const [center, setCenter] = useState({lat: 55.189087, lng: 30.205549 });
  const [zoom, setZoom] = useState(11);

  return(
    <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB6FX5TKT000tztt_lLeX7tRtivWP6yr6s' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <AnyReactComponent
            lat={55.189087}
            lng={30.205549}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
  );
}

export default GooogleMapLocation; 
