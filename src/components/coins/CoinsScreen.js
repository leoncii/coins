import React from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { useGetCoins } from '../../lib/hooks'
import { CoinsItem } from './CoinsItem'
import { Colors } from '../../res/Colors'

const URL_COINS = 'https://api.coinlore.net/api/tickers/'
export function CoinsScreen ({ navigation }) {
  const { coins } = useGetCoins({ url: URL_COINS })

  const onPress = (coin) => {
    navigation.navigate('Coin Detail', { coin })
  }

  return (
    <View style={styles.container}>
      {
        coins.length
          ? <FlatList
              data={coins}
              renderItem={(item) => CoinsItem({ item, onPress })}
              keyExtractor={item => item.id}
            />
          : <ActivityIndicator
              color='#fff'
              size='large'
            />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
    shadowOpacity: 0
  },
  titleText: {
    color: '#fff',
    textAlign: 'center'
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16
  },
  btnText: {
    color: '#fff',
    textAlign: 'center'
  }
}
)
