const Stellar = require('stellar-sdk')
const { TimeoutInfinite } = require('stellar-base')

module.exports = {
  Stellar,
  server: new Stellar.Server('https://horizon-testnet.stellar.org'),
  selectNetwork: Stellar.Networks.TESTNET,
  galacticTradeAccountPublic: 'GDFI63STYLAI2WMPOOKZQATWRUDAMHC4DSMVBVMGJWPETXWOS4K37SPQ',
  galacticTradeSecret: Stellar.Keypair.fromSecret('SDMZTZBXLMAHJFQXO536EGFTT2NATMYJ3ZPY4BBIRNZTD5V7OADZ4BFY'),
  baseReserve: 0.5,
  numberOfEntries: 5,
  TimeoutInfinite
}