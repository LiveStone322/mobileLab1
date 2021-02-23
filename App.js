/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import Map from './screens/Map'
import PinInfo from './screens/PinInfo'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Map" headerMode="none">
        <Stack.Screen name="Map" component={Map} options={{}} />
        <Stack.Screen name="PinInfo" component={PinInfo} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Stack = createStackNavigator()

export default App
