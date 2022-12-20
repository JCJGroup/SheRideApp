import React from 'react';
import {View, Text, Image, Flatlist} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import cars from '../../assets/data/cars';
const HomeMap = props => {
  const getImageName = type => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    if (type === 'UberXL') {
      return require('../../assets/images/top-UberXL.png');
    }
  };
  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      showsUserLocation={true}
      followsUserLocation={true}
      style={{height: '100%', width: '100%'}}
      region={{
        latitude: 16.12,
        longitude: 75.45,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {cars.map(car => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [
                {
                  rotate: `${car.heading}deg`
                },
              ],
            }}
            source={getImageName(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
