import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  marginTop: '2%',
  marginBottom: '2%',
  height:'448px',
  display: 'relative',
  borderRadius: '10px',
  boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.4)',
};

const center = {
  lat: 2.9421778589939063, 
  
  lng: -75.29838486265616
};

const markerPosition = {
  lat: 2.9421778589939063, 

  lng: -75.29838486265616
};

const ApiGoogle = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA3z2rHt_0FJNvwmE1ROn31fjwhVxLXYNw" 
  });

  const [, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div className="text-center"><h1>Donde ubicarnos</h1></div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={6}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker position={markerPosition} />
        </GoogleMap>
      ) : (
        <div>Cargando mapa...</div>
      )}
    </div>
  );
};

export default ApiGoogle;
