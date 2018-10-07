import 'isomorphic-fetch'

export default class Price {
  
    async getData() {
    let res = await fetch('/https://api.etherscan.io/api?module=stats&action=ethprice&apikey=IVMWWQJ2M5FDG77U69TURTZZ36RYHZ3MMU')
    let data = await res.json()
    return data
  }
  
}