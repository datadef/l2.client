const Stellar = require("stellar-sdk");
const { TimeoutInfinite } = require("stellar-base");
const TEST_SERVER_URL = "https://horizon-testnet.stellar.org";

module.exports = {
  Stellar,
  server: new Stellar.Server('https://horizon-testnet.stellar.org'),
  SERVER_URL: TEST_SERVER_URL,
  TimeoutInfinite
};
