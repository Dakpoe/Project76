import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";


import HomeScreen from "./screens/Home";
import SpaceCraftsScreen from "./screens/spacecrafts";
import StarMap from "./screens/starmap";
import DailyPic from './screens/dailypic';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer> 
 <Stack.Navigator initialRouteName = "Home" screenOptions = {{
  headerShown :  false
 }} >
  <Stack.Screen name = "dailypic" component = {DailyPic}/>
  <Stack.Screen name = "spacecrafts" component = {SpaceCraftsScreen}/>
  <Stack.Screen name = "starmap" component = {StarMap}/>
  <Stack.Screen name = "Home" component = {HomeScreen}/>
  
 </Stack.Navigator>

    </NavigationContainer>
  );
}