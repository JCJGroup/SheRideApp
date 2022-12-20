import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles.js';
import Entypo from 'react-native-vector-icons/Entypo';

const PlaceRow = ({data}) => {
  console.log(data)
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        {data.description === 'Home'? <Entypo name='home'  color={'white'}/> :<Entypo name='location-pin'  color={'white'}/>}
        {/* <Entypo name='location-pin'  color={'white'}/> */}
      </View>
      <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
    </View>
  );
};

export default PlaceRow;
