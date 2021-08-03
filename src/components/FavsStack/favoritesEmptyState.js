import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Fonts } from '../../res/index'

export const FavoritesEmptyState = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        No tienes ningún favorito.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontWeight: Fonts.bold,
    fontSize: Fonts.lg,
    alignSelf: 'center'
  }
})
