import React from 'react';

import {View, Text, Pressable} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: '#212121', padding: 15}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#cacaca',
              wdith: 30,
              height: 30,
              borderRadius: 15,
              marginRight: 10,
            }}
          />
          <View>
            <Text style={{color: 'white', fontSize: 24}}>Jason Carter</Text>
            <Text style={{color: 'lightgrey'}}>5.00 *</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#919191',
            borderTopWidth: 1,
            borderTopColor: '#919191',
            paddingVertical: 5,
            marginVertical: 10,
          }}>
          <Pressable
            onPress={() => {
              console.warn('Make Money');
            }}>
            <Text style={{color: '#dddddd', paddingVertical: 5}}>Messages</Text>
          </Pressable>
        </View>
        <Pressable
          onPress={() => {
            console.warn('Make Money');
          }}>
          <Text style={{color: '#dddddd', paddingVertical: 5}}>Do More</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            console.warn('Make Money');
          }}>
          <Text style={{color: 'white', paddingVertical: 5}}>
            Make Money Driving
          </Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
