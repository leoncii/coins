import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { CoinsScreen } from './CoinsScreen'
import { CoinDetailScreen } from './CoinDetailScreen'
import { Colors } from '../../res/Colors'

const Stack = createStackNavigator()

export const CoinsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.blackPearl
        },
        headerTintColor: Colors.white
      }}
    >
      <Stack.Screen
        name='Coins'
        component={CoinsScreen}
      />
      <Stack.Screen
        name='Coin Detail'
        component={CoinDetailScreen}
      />
    </Stack.Navigator>
  )
}
