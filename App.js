/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {StatusBar, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
// import HomeScreen from './src/screens/HomeScreen';
// import DestinationSearch from './src/screens/DestinationSearch';
// import SearchResults from './src/screens/SearchResults';
// import 'react-native-gesture-handler';
import Router from './src/navigation/Root';
import { withAuthenticator } from 'aws-amplify-react-native';
navigator.geolocation = require('@react-native-community/geolocation');
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
import {Amplify,Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const App: () => Node = () => {
  const androidPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'SheRide Bike Hire',
          message:
            'Need Access to Your Location' + ' so you can take awesome Rides.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the LOocation');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermissions();
    } else {
      Geolocation.requestAuthorization();
    }
    return () => {};
  }, []);

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      {/* <HomeScreen/> */}
      {/* <DestinationSearch /> */}
      {/* <SearchResults/> */}

      <Router/>
    </>
  );
};

export default withAuthenticator(App);
