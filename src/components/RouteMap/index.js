import React from 'react';
import {View, Text, Image, Flatlist} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';

const RouteMap = ({origin, destination}) => {
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCIs4Kv9q1U7qZYLkS0LePHjLBFGIchcaA';
  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };
  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };
  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={{height: '100%', width: '100%'}}
      showsUserLocation={true}
      region={{
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="black"
      />
      <Marker coordinate={originLoc} title={'Origin'} />
      <Marker coordinate={destinationLoc} title={'Destination'} />
    </MapView>
  );
};

export default RouteMap;
