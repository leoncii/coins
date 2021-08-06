import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../res'

export function CoinMarketItem ({ item }) {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.priceText}>{item.price_usd} $</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blackPearl,
    color: Colors.zircon,
    borderWidth: 1,
    padding: Fonts.lg,
    marginRight: 8,
    alignItems: 'center'
  },
  nameText: {
    color: Colors.white,
    fontSize: Fonts.sm
  },
  priceText: {
    color: Colors.white
  }
})
