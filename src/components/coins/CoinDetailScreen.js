import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, ActivityIndicator, SectionList } from 'react-native'
import { Colors, Fonts } from '../../res/'

export function CoinDetailScreen ({ navigation, route }) {
  const { params } = route
  console.log(params)
  const { symbol, name, market_cap_usd, volume24, percent_change_24h } = params.coin

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

  useEffect(() => {
    navigation.setOptions({ title: symbol })
  }, [params])

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Image
          style={styles.iconImg}
          source={{
            uri: getSymbolIcon(name)
          }}
        />
        <Text style={styles.titleText}>{name}</Text>
      </View>

      <SectionList
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1
  },
  subHeader: {
    backgroundColor: Colors.zircon,
    padding: 16,
    flexDirection: 'row'
  },
  titleText: {
    fontSize: Fonts.lg,
    color: Colors.white,
    fontWeight: Fonts.bold
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
  }
})
