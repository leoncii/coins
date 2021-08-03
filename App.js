import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { CoinsStack } from './src/components/coins/CoinsStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FavsStack } from './src/components/FavsStack'
import { Colors } from './src/res/'
import { Home } from './src/assets/home'
import { Favs } from './src/assets/fav'

const Tab = createBottomTabNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Colors.secondary,
          style: {
            backgroundColor: Colors.blackPearl
          }
        }}
      >

        <Tab.Screen
          name='Home'
          component={CoinsStack}
          options={{
            tabBarIcon: () => <Home />
          }}
        />

        <Tab.Screen
          name='Favorites'
          component={FavsStack}
          options={{
            tabBarIcon: () => <Favs />
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}
