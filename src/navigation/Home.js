import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { createStackNavigator } from '@react-navigation/stack'
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";
// import OrderScreen from "../screens/OrderScreen";

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name={"Home Page"} component={HomeScreen} />
      <Stack.Screen options={{headerShown: false}} name={"DestinationSearch"} component={DestinationSearch} />
      <Stack.Screen options={{headerShown: false}} name={"SearchResults"} component={SearchResults} />
      {/* <Stack.Screen name={"OrderPage"} component={OrderScreen} /> */}
    </Stack.Navigator>
  );
};

export default HomeNavigator;