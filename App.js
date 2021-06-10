import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ISSlocation from './screens/ISSLocationScreen';
import MeteorScreen from './screens/MeteorScreen';
import UpdateScreen from './screens/UpdateScreen';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="IssLocation" component={ISSlocation} />
          <Stack.Screen name="Meteors" component={MeteorScreen} />
          <Stack.Screen name="Updates" component={UpdateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
