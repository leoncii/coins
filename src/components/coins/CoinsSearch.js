import React from 'react'
import { TextInput, Platform, View, StyleSheet } from 'react-native'
import { Colors } from '../../res'

export function CoinsSearch ({ onChange, query }) {
  return (
    <View>
      <TextInput
        style={[styles.textInput,
          Platform.OS === 'ios'
            ? styles.textInputIOS
            : styles.textInputAndroid
        ]}
        onChangeText={(query) => onChange(query)}
        value={query}
        placeholder='Search Coin'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingLeft: 16,
    color: '#fff'
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
