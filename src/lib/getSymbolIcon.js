export const getSymbolIcon = (symbolStr) => {
  const toLower = symbolStr.toLowerCase()
  if (toLower === 'horizen') {
    return 'https://c1.coinlore.com/img/25x25/zencash.png'
  }
  if (toLower === 'aave (ethlend)') {
    return 'https://c1.coinlore.com/img/25x25/ethlend.png'
  }
  const s = toLower.replaceAll(/[^A-Z0-9]+/ig, '-')
  return `https://c1.coinlore.com/img/25x25/${s}.png`
}
