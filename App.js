import React from 'react';
import ColorList from './components/ColorList';
import ColorDetail from './components/ColorDetail';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen 
        name="Home" 
        options={{title: "Color List"}}
        component={ColorList} />
        <Screen name="Details" component={ColorDetail} />
      </Navigator>
    </NavigationContainer>
  )
}
