import React from 'react';
import { useState, useMemo } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import MapI from '../../assets/icons/Map.svg';
import { MapModal } from '../MapModal';

export const Map = () => {
  const center = useMemo(
    () => ({
      lat: 36.72134814415589,
      lng: -4.4336423038732375,
    }),
    []
  );
  const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      center={center}
      zoom={16}
      mapContainerStyle={{
        width: '100%',
        height: '100%',
      }}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        gestureHandling: 'greedy',
        mapId: 'e4c2d2bce714d765',
      }}
      onLoad={(map) => setMap(map)}
    >
      <MarkerF
        position={center}
        icon={{
          url: MapI,
          scaledSize: new window.google.maps.Size(30, 30),
        }}
      />
      <MapModal />
    </GoogleMap>
  );
};
