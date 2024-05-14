import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import ViewAllRentasScreen from './screens/viewAllRentasScreen'
import ViewAltaRentasScreen from './screens/ViewAltaRentasScreen'

const Stack = createNativeStackNavigator()

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Rentas' component={ViewAllRentasScreen} />
      <Stack.Screen name='Alta Renta - Buscar Cliente' component={ViewAltaRentasScreen} />

    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
  },
});
