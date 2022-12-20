import React, {Component} from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './styles.js';
import UberTypeRow from '../UberTypeRow';
import typesData from '../../assets/data/types';

const UberTypes = props => {
  const confirm = () => {
    console.warn('Confirm');
  };
  return (
    <View>
      {typesData.map(type => (
        <UberTypeRow key={type.id} type={type} />
      ))}

      <Pressable
        onPress={confirm}
        style={{
          width: '94%',
          backgroundColor: 'black',
          padding: 10,
        //   marginRight:10,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
          }}>
          Confirm Uber
        </Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;
