import React from 'react'
import { TextInput, Platform, View, StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../res'
import { Lupe } from '../../assets/lupe'

export function CoinsSearch ({ onChange, query }) {
  return (
    <View style={styles.searchSection}>
      <TextInput
        style={[styles.textInput,
          Platform.OS === 'ios'
            ? styles.textInputIOS
            : styles.textInputAndroid
        ]}
        onChangeText={(query) => onChange(query)}
        value={query}
        placeholderTextColor='#ddd'
        placeholder='Search Coin...'
      />
      <Lupe />
    </View>
  )
}

const styles = StyleSheet.create({
  searchSection: {
    minHeight: 46,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 46,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingLeft: 16,
    letterSpacing: 0.5,
    fontSize: Fonts.md,
    color: '#00ffff',
    width: '100%'
  },
  textInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.zircon
  },
  textInputIOS: {
    margin: 8,
    borderRadius: 8
  }
})
