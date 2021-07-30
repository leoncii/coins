import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { CoinsStack } from './src/components/coins/CoinsStack'

export default function App () {
  return (
    <NavigationContainer>
      <CoinsStack />
    </NavigationContainer>
  )
}
