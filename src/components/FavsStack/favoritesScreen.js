import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { FavoritesEmptyState } from './favoritesEmptyState'
import { Colors } from '../../res'
import { getAllStorage, getMultiStorage } from '../../lib/storage'
import { CoinsItem } from '../../components/coins/CoinsItem'

export function FavoritesScreen ({ navigation }) {
  const [favoritesList, setFavoritesList] = useState([])

  const getFavorites = async () => {
    try {
      const allKeys = await getAllStorage()
      const keys = allKeys.filter(key => key.includes('fav-'))
      const favs = await getMultiStorage({ keys })
      const favorites = favs.map(fav => JSON.parse(fav[1]))
      setFavoritesList(favorites)
    } catch (error) {
      console.log(error)
    }
  }

  const handlePress = (coin) => {
    navigation.navigate('Coin Detail', {
      coin
    })
  }

  useEffect(() => {
    let unsubscribe = true
    unsubscribe = navigation.addListener('focus', () => {
      getFavorites()
    })
    return () => {
      unsubscribe = false
    }
  }, [])

  return (
    <View style={styles.container}>
      {
        favoritesList.length === 0
          ? <FavoritesEmptyState />
          : null
      }

      {
        favoritesList.length > 0
          ? <FlatList
              keyExtractor={item => `${item.id}${item.name}`}
              data={favoritesList}
              renderItem={({ item }) =>
                <CoinsItem item={item} onPress={(item) => handlePress(item)} />}
            />
          : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1
  }
})
