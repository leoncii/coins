import React, { useState, useMemo } from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator, Text, Platform } from 'react-native'
import { useCoins } from '../../lib/hooks'
import { CoinsItem } from './CoinsItem'
import { Colors } from '../../res/Colors'
import { CoinsSearch } from './CoinsSearch'
import { Fonts } from '../../res'

const URL_COINS = 'https://api.coinlore.net/api/tickers/'
export function CoinsScreen ({ navigation }) {
  const { coins } = useCoins({ url: URL_COINS })
  const [query, setQuery] = useState('')

  const { data } = coins
  const onPress = (coin) => {
    navigation.navigate('Coin Detail', { coin })
  }
  const handleSearch = (query) => {
    setQuery(query)
  }

  const coinsFiltered = useMemo(() => expensiveComputedValue(), [data, query])

  function expensiveComputedValue () {
    return data?.filter(({ name, symbol }) => {
      return name.toLowerCase().includes(query.toLowerCase()) ||
      symbol.toLowerCase().includes(query.toLowerCase())
    })
  }

  return (
    <View style={styles.container}>
      <CoinsSearch onChange={handleSearch} query={query} onQuery={setQuery} />
      <View style={styles.head}>
        <Text style={styles.headText}>Coins</Text>
        <Text style={styles.headText}>Price</Text>
        <Text style={styles.headText}>1h %</Text>
      </View>
      {
          coinsFiltered?.length === 0 && <Text style={styles.titleText}>No hay resultados</Text>
        }
      {
          !coinsFiltered && <ActivityIndicator style={styles.activity} color='#fff' size='small' />
        }
      {
        coinsFiltered &&
          <FlatList
            data={coinsFiltered}
            renderItem={({ item }) => <CoinsItem item={item} onPress={onPress} />}
            keyExtractor={item => `${item.id}${item.name}`}
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
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 40,
    marginLeft: Platform.OS === 'ios' ? 16 : 0,
    paddingLeft: Platform.OS === 'ios' ? 0 : 16
  },
  headText: {
    color: '#00ffff',
    width: 55,
    fontSize: Fonts.md,
    fontWeight: Fonts.bold,
    textAlign: 'center',
    backgroundColor: Colors.blackPearl
  },
  titleText: {
    color: Colors.white,
    textAlign: 'center'
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16
  },
  btnText: {
    color: Colors.white,
    textAlign: 'center'
  },
  activity: {
    padding: 16
  }
}
)
