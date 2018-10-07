import 'isomorphic-fetch'

export default class Marketcap {
  
  async getData() {
    let res = await fetch('https://api.coinmarketcap.com/v1/ticker?limit=50')
    let data = await res.json()
    return data
  }
  
}