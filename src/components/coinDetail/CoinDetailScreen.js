import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, Pressable, Alert, FlatList, SectionList } from 'react-native'
import { Colors, Fonts } from '../../res/'
import { useMarkets } from '../../lib/hooks/'
import { CoinMarketItem } from './CoinMarketItem'
import { storeData, removeStorage, getStorage } from '../../lib/storage'

export function CoinDetailScreen ({ navigation, route }) {
  const [fav, setFav] = useState(false)
  // const [key, setKey] = useState('')
  const { params } = route
  const { symbol, name, market_cap_usd, volume24, percent_change_24h, id } = params.coin
  const { market } = useMarkets({ coinId: id })

  const getSymbolIcon = (symbolStr) => {
    if (symbolStr) {
      const s = symbolStr.toLowerCase().replace(' ', '/')
      return `https://c1.coinlore.com/img/25x25/${s}.png`
    }
  }

  const getSections = ({
    market_cap_usd,
    volume24,
    percent_change_24h
  }) => {
    const sections = [
      {
        title: 'Mark cap',
        data: [market_cap_usd]
      },
      {
        title: 'Volume 24h',
        data: [volume24]
      },
      {
        title: 'Change 24',
        data: [percent_change_24h]
      }
    ]
    return sections
  }

  const handleFavorite = () => {
    if (fav) {
      removeFavorite()
    } else {
      addFavorite()
    }
  }

  const addFavorite = async () => {
    const key = `fav-${id}`

    const storedCoin = await storeData({ key, value: params.coin })

    if (storedCoin) {
      setFav(true)
    }
  }
  const removeFavorite = async () => {
    const key = `fav-${id}`
    Alert.alert('Remover de favoritos', '¿Estás seguro?', [
      {
        text: 'Cancelar',
        onPress: () => {},
        style: 'cancel'
      },
      {
        text: 'Remover',
        onPress: async () => {
          const remove = await removeStorage({ key })
          if (remove) {
            setFav(false)
          }
        },
        style: 'destructive'
      }
    ])
  }

  const getFavorite = async () => {
    const key = `fav-${id}`
    try {
      const favStr = await getStorage({ key })
      if (favStr) {
        setFav(true)
        return true
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  useEffect(() => {
    navigation.setOptions({ title: symbol })

    let unsubscribe = true
    if (params?.coin.id) {
      unsubscribe = getFavorite()
        .then(res => {
          unsubscribe = true
        })
    }
    return () => {
      unsubscribe = false
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View style={styles.row}>
          <Image
            style={styles.iconImg}
            source={{
              uri: getSymbolIcon(name)
            }}
          />
          <Text style={styles.titleText}>{name}</Text>
        </View>
        <Pressable
          onPress={handleFavorite}
          style={[
            styles.btnFavorite,
            fav
              ? styles.btnFavoriteRemove
              : styles.btnFavoriteAdd
          ]}
        >
          <Text style={styles.btnFavoriteText}>{fav ? 'Remove Favoritos' : ' Añadir Favorito.'}</Text>
        </Pressable>

      </View>

      <SectionList
        style={styles.section}
        sections={getSections({ volume24, market_cap_usd, percent_change_24h })}
        renderItem={({ item }) => {
          return (
            <View style={styles.sectionItem}>
              <Text style={styles.sectionText}>{item}</Text>
            </View>
          )
        }}
        keyExtractor={(item) => item}
        renderSectionHeader={({ section }) => {
          return (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionText}>{section.title}</Text>
            </View>
          )
        }}
      />

      <Text style={styles.marketTitle}>Markets</Text>
      <FlatList
        horizontal
        style={styles.list}
        data={market}
        renderItem={({ item }) => {
          return <CoinMarketItem item={item} />
        }}
        keyExtractor={(item) => `${item.name}${item.price}`}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1
  },
  subHeader: {
    backgroundColor: Colors.charade,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleText: {
    fontSize: Fonts.lg,
    color: Colors.white,
    fontWeight: Fonts.bold
  },
  section: {
    maxHeight: 250
  },
  sectionHeader: {
    color: Colors.white,
    backgroundColor: Colors.charade,
    padding: 8
  },
  sectionItem: {
    padding: 8
  },
  itemText: {
    color: Colors.white,
    fontSize: 11
  },
  sectionText: {
    color: Colors.white,
    fontSize: Fonts.md,
    fontWeight: Fonts.bold
  },
  iconImg: {
    width: 25,
    height: 25
  },
  row: {
    flexDirection: 'row'
  },
  list: {
    maxHeight: 100,
    paddingLeft: 16
  },
  marketTitle: {
    color: Colors.white,
    fontSize: Fonts.lg,
    marginBottom: 16,
    fontWeight: Fonts.bold,
    marginLeft: 16
  },
  btnFavorite: {
    padding: 8,
    borderRadius: 8
  },
  btnFavoriteAdd: {
    backgroundColor: Colors.picton
  },
  btnFavoriteText: {
    color: Colors.white
  },
  btnFavoriteRemove: {
    backgroundColor: Colors.carmine
  }
})
