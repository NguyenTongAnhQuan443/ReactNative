import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import FirstScreen from './components/FirstScreen'
import SecondScreen from './components/SecondScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName='FirstScreen'>
        <Stack.Screen name='FirstScreen' component={FirstScreen} options={{headerShown:false}}/>
        <Stack.Screen name='SecondScreen' component={SecondScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App