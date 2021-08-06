import React from 'react'
import { View, Text, StyleSheet, Platform, Pressable, Image } from 'react-native'
import { Colors, Fonts } from '../../res/'
import { Arrow } from '../../assets/arrow.js'
import { getSymbolIcon } from '../../lib/getSymbolIcon'

export const CoinsItem = ({ onPress, item }) => {
  const { symbol, name, price_usd, percent_change_1h } = item
  const icon = getSymbolIcon(name)

  return (
    <Pressable onPress={() => onPress(item)} style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={{
            uri: icon
          }}
        />
        <Text style={styles.symbolText}>{symbol}</Text>
        <Text style={styles.price}>{`$ ${price_usd}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={percent_change_1h > 0 ? styles.green : styles.red}> {percent_change_1h} %</Text>
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
    fontSize: Fonts.sm,
    marginRight: Fonts.sm,
    width: 55,
    alignSelf: 'center',
    marginLeft: Fonts.sm
  },
  green: {
    color: Colors.green,
    fontSize: Fonts.sm,
    fontWeight: Fonts.bold
  },
  red: {
    color: Colors.red,
    fontSize: Fonts.sm,
    fontWeight: Fonts.bold
  },
  price: {
    color: Colors.white,
    fontSize: Fonts.md,
    fontWeight: Fonts.bold,
    backgroundColor: Colors.blackPearl,
    marginLeft: Fonts.lg
  },
  icon: {
    width: 25,
    height: 25
  }
})
