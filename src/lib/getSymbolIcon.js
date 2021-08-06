export const getSymbolIcon = (symbolStr) => {
  if (!symbolStr) {
    return
  }
  if (symbolStr === 'Horizen') {
    return 'https://c1.coinlore.com/img/25x25/zencash.png'
  }
  if (symbolStr.toLowerCase() === 'aave (ethlend)') {
    return 'https://c1.coinlore.com/img/25x25/ethlend.png'
  }
  const s = symbolStr.toLowerCase().replace(/[^A-Z0-9]+/ig, '-')
  return `https://c1.coinlore.com/img/25x25/${s}.png`
}
