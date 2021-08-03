import React from 'react'
import { View, Text, StyleSheet, Platform, Pressable } from 'react-native'
import { Colors, Fonts } from '../../res/'
import { Arrow } from '../../assets/arrow.js'

export const CoinsItem = ({ onPress, item }) => {
  const { symbol, name, price_usd, percent_change_1h } = item

  return (
    <Pressable onPress={() => onPress(item)} style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.symbolText}>{symbol}</Text>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.price}>{`$${price_usd}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.percent}> {percent_change_1h}</Text>
        <Arrow percent_change_1h={percent_change_1h} />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
    marginLeft: Platform.OS === 'ios' ? 16 : 0,
    paddingLeft: Platform.OS === 'ios' ? 0 : 16
  },
  row: {
    flexDirection: 'row'
  },
  symbolText: {
    color: Colors.white,
    fontSize: Fonts.md,
    marginRight: 12
  },
  nameText: {
    color: Colors.white,
    fontSize: Fonts.sm,
    marginRight: 12
  },
  percent: {
    color: Colors.white,
    fontSize: Fonts.sm
  },
  price: {
    color: Colors.white,
    fontSize: 14
  }
})
