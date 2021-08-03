import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FavoritesScreen } from './favoritesScreen'
import { Colors } from '../../res'

const Stack = createStackNavigator()

export const FavsStack = () => {
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
        name='Favorites'
        component={FavoritesScreen}
      />
    </Stack.Navigator>
  )
}
