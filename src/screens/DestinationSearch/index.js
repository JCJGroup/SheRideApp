import {Text, TextInput, View, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles.js';
import PlaceRow from './PlaceRow';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';

const DestinationSearch = props => {
  const [fromText, setFromText] = useState('');
  const [destinationPlace, setdestinationPlace] = useState('');
  const [originPlace, setOriginPlace] = useState('');
  navigator.geolocation = require('@react-native-community/geolocation');
  navigator.geolocation = require('react-native-geolocation-service');
  const navigation = useNavigation();
  useEffect(() => {
    // console.warn('useeffect is called')
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults',{
        originPlace,
        destinationPlace
      });
    }
  }, [originPlace, destinationPlace]);

  const homePlace = {
    description: 'Home',
    geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
  };
  const workPlace = {
    description: 'Work',
    geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="From"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setOriginPlace({data, details});
            console.log(data, details);
          }}
          enablePoweredByContainer={false}
          styles={{
            textInput: styles.textInput,
            container: styles.autoCompleteContainer,
            listView: styles.listView,
            seperator: styles.seperator,
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
          fetchDetails
          query={{
            key: 'AIzaSyCIs4Kv9q1U7qZYLkS0LePHjLBFGIchcaA',
            language: 'en',
          }}
          predefinedPlaces={[homePlace, workPlace]}
          currentLocation={true}
          currentLocationLabel="Current location"
          enableHighAccuracyLocation={true}
          renderRow={data => <PlaceRow data={data} />}
          renderDescription={data => data.description || data.vicinity}
        />
        {/* <TextInput
          value={fromText}
          onChangeText={setFromText}
          style={styles.textInput}
          placeholder="From"
        />
        <TextInput
          value={destinationText}
          onChangeText={setdestinationPlace}
          style={styles.textInput}
          placeholder="Where to?"
        /> */}

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setdestinationPlace({data, details});
            console.log(data, details);
          }}
          enablePoweredByContainer={false}
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autoCompleteContainer,
              top: 55,
            },
            seperator: styles.seperator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyCIs4Kv9q1U7qZYLkS0LePHjLBFGIchcaA',
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />
        <View style={styles.circle} />

        <View style={styles.line} />

        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
