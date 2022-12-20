import React from 'react';
import {View, Text} from 'react-native';
import styles from "./styles";
const CovidMessage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Only If Necessary</Text>
      <Text style={styles.text}>
        If you have symptoms like fever, cough, fatigue, headache and loss of
        taste/smell, your healthcare provider may ask you to test for Covid-19.
      </Text>
      <Text style={styles.learnMore}>Learn More</Text>
    </View>
  );
};

export default CovidMessage;
