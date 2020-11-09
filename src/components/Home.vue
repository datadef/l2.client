<template>
  <div class="container mt-4 mb-4">
    <div class="alert alert-success" role="alert" v-if="message">
      {{ message }}
    </div>
    <div class="alert alert-primary">
     This is a very basic example of "off-chain" matching engine running on Stellar. Use it knowing that there is a lot to check, fix and add.
     Basically, what is done is that trading transactions signed by users on behalf of their accounts are guaranteed with the "fee-bump" feature, only sent to Horizon when they match on Layer(L2).
    </div>
    <h4 class="mb-3">
      XLM - USD
      <a
        href="https://stellar.expert/explorer/testnet/asset/USD-GCKFBEIYV2U22IO2BJ4KVJOIP7XPWQGQFKKWXR6DOSJBV7STMAQSMTGG?order=desc"
        target="_blank"
        >[GCKFBEIYV2U...]</a
      >
    </h4>
    <div class="row wrapper">
      <div class="col-4">
        <div class="card card-wrapper-custom">
          <div class="card-header">
            L1 Orderbook (<b>Horizon</b>)
          </div>
          <div class="card-body">
            <table class="table table-hover table-sm table-top">
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order in orderBook.asks" :key="order.price">
                  <td>{{ order.amount }}</td>
                  <td>
                    {{ order.price }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="card-header mt-2">
            Spread
            <small class="float-right">{{ spread }}</small>
          </div>
          <div class="card-body">
            <table
              class="table table-hover table-borderless table-sm table-top"
            >
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order in orderBook.bids" :key="order.hash">
                  <td>{{ order.amount }}</td>
                  <td>
                    {{ order.price }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card card-wrapper-custom">
          <div class="card-header">
            L2 Orderbook (<b>Off-Chain</b>)
          </div>
          <div class="card-body">
            <table class="table table-hover table-sm table-top">
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order in asks" :key="order.hash">
                  <td>{{ order.amount }}</td>
                  <td>
                    {{ order.price }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="card-header mt-2">
            Spread
          </div>
          <div class="card-body">
            <table
              class="table table-hover table-borderless table-sm table-top"
            >
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order in bids" :key="order.price">
                  <td>{{ order.amount }}</td>
                  <td>
                    {{ order.price }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-wrapper-custom">
          <div class="card-header">
            Trade
          </div>
          <div class="card-body card-wrapper">
            <div
              class="container btn-group btn-group-toggle"
              data-toggle="buttons"
            >
              <button
                class="btn btn-secondary active button"
                @click="toggleToBuy()"
              >
                Buy
              </button>
              <button class="btn btn-secondary button" @click="toggleToSell()">
                Sell
              </button>
            </div>

            <div class="mt-3" v-if="buy">
              <div class="form-group">
                <label for="exampleInputEmail1">Price USD</label>
                <input
                  class="form-control"
                  placeholder="Price USD"
                  v-model="order.price"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Amount XLM</label>
                <input
                  class="form-control"
                  placeholder="Amount XLM"
                  v-model="order.amount"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Total USD</label>
                <input
                  class="form-control"
                  placeholder="Amount XLM"
                  :value="(order.amount * order.price).toFixed(2)"
                  disabled
                />
              </div>
              <button
                class="btn btn-success btn-md btn-block"
                @click="sendOffer()"
                v-if="is_logged == 'true'"
              >
                Buy
              </button>
              <button
                type="button"
                data-toggle="modal"
                data-target="#loginModal"
                class="btn btn-primary btn-block"
                v-else
              >
                Connect to Wallet
              </button>
            </div>

            <div class="mt-3" v-else>
              <div class="form-group">
                <label for="exampleInputEmail1">Price USD</label>
                <input
                  class="form-control"
                  placeholder="Price USD"
                  v-model="order.price"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Amount XLM</label>
                <input
                  class="form-control"
                  placeholder="Amount XLM"
                  v-model="order.amount"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Total USD</label>
                <input
                  class="form-control"
                  placeholder="Amount XLM"
                  :value="(order.amount * order.price).toFixed(2)"
                  disabled
                />
              </div>
              <button
                class="btn btn-danger btn-block"
                @click="sendOffer()"
                v-if="is_logged == 'true'"
              >
                Sell
              </button>
              <button
                type="button"
                data-toggle="modal"
                data-target="#loginModal"
                class="btn btn-primary btn-block"
                v-else
              >
                Connect to Wallet
              </button>
            </div>

            <div v-if="is_logged == 'true'">
              <hr />
              <table
                class="table table-hover table-borderless table-sm table-top mt-3"
              >
                <thead>
                  <tr>
                    <th>Asset</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="balance in balances" :key="balance.asset_issuer">
                    <td v-if="balance.asset_code">{{ balance.asset_code }}</td>
                    <td v-else>XLM</td>
                    <td>{{ balance.balance }}</td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <button
                href="#"
                class="btn btn-primary btn-block"
                @click="createTrustline()"
              >
                Create Trustline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4 wrapper">
      <div class="col-4">
        <div class="card">
          <div class="card-header">
            L1 Order History
          </div>
          <div class="card-body card-wrapper">
            <table class="table table-hover table-sm table-top">
              <thead>
                <tr>
                  <th>Side</th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order in active_offers" :key="order.id">
                  <td v-if="me == order.seller"> Sell</td>
                  <td v-else>Buy</td>
                  <td>{{ (order.price_r.d/order.price_r.n).toFixed(7) }}</td>
                  <td>{{ order.amount }}</td>
                  <td class="text-warning">
                    Open
                  </td>
                  <td>
                    <a href="#" @click="cancelHorizonOrder(order.id)">Cancel</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card">
          <div class="card-header">
            L2 Order History
          </div>
          <div class="card-body card-wrapper">
            <table class="table table-hover table-sm table-top">
              <thead>
                <tr>
                  <th>Side</th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order in own_orders" :key="order.hash">
                  <td v-if="order.type == 'manageBuyOffer'" class="text-success">Buy</td>
                  <td class="text-danger" v-else>Sell</td>
                  <td>{{ order.price }}</td>
                  <td>{{ order.amount }}</td>
                  <td class="text-danger" v-if="order.status == 0">
                    Cancelled
                  </td>
                  <td class="text-warning" v-else-if="order.status == 1">
                    Open
                  </td>
                  <td class="text-success" v-else-if="order.status == 2">
                    Success
                  </td>
                  <td class="text-primary" v-else>Executing</td>
                  <td  v-if="order.status == 1">
                    <a href="#" @click="cancelL2Order(order._id)">Cancel</a>
                  </td>
                  <td v-else>
                    -
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <div class="card-header">
            Trade History
          </div>
          <div class="card-body card-wrapper">
            <table class="table table-hover table-sm table-top">
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Price</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="trade in history[0]" :key="trade.id">
                  <td>{{ trade.base_amount }}</td>
                  <td>{{ (trade.price.n / trade.price.d).toFixed(7) }}</td>
                  <td>
                    {{
                      new Date(trade.ledger_close_time).getHours() +
                        ":" +
                        new Date(trade.ledger_close_time).getMinutes()
                    }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { Stellar, selectNetwork, server } = require("@/lib/sdk");

export default {
  computed: {
    is_logged() {
      return localStorage.getItem("is_logged");
    },
    me() {
            const keypair = Stellar.Keypair.fromSecret(
        localStorage.getItem("secret_key")
      );

      return keypair.publicKey();
    }
  },
  data() {
    return {
      asks: null,
      bids: null,
      own_orders: null,
      buy: true,
      sell: false,
      order: {
        type: "manageBuyOffer",
        price: null,
        amount: null,
        selling: null,
        buying: null,
      },
      balances: null,
      history: [],
      message: "",
      orderBook: [],
      price: null,
      spread: null,
      active_offers: [],
    };
  },
  created() {
    this.fetchGlobalOrderBook();
    this.fetchTradeHistory();
    
    if (localStorage.getItem("is_logged") == "true") {
      this.fetchAccount();
      this.fetchOrders();
      this.fetchOwnOrders();
      this.activeOffers();
    }

    window.setInterval(() => {
      this.fetchOrders();
      this.fetchOwnOrders();
    }, 1500);

    window.setInterval(() => {
      this.fetchGlobalOrderBook();
      this.fetchTradeHistory();

      if (localStorage.getItem("is_logged") == "true") {
        this.fetchAccount();

        this.activeOffers();
      }
    }, 10000);
  },
  methods: {
    toggleToSell() {
      this.buy = false;
      this.sell = true;
    },
    toggleToBuy() {
      this.buy = true;
      this.sell = false;
    },
    fetchAccount() {
      const keypair = Stellar.Keypair.fromSecret(
        localStorage.getItem("secret_key")
      );

      server.loadAccount(keypair.publicKey()).then((account) => {
        this.balances = account.balances;
      });
    },
    getBalance(account, currency) {
      let balance = 0;
      if (currency == "XLM") {
        balance = Number.parseFloat(
          account.balances.find((b) => b.asset_type == "native").balance
        );
      } else {
        balance = Number.parseFloat(
          account.balances.find((b) => b.asset_code == currency).balance
        );
      }
      return balance;
    },
    fetchOrders() {
      this.axios.get("https://auth.datadef.com/orderbook").then((response) => {
        this.asks = response.data.asks.reverse();
        this.bids = response.data.bids.reverse();
      });
    },
    fetchOwnOrders() {
      this.axios
        .get("https://auth.datadef.com/orders", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.own_orders = response.data.orders;
        });
    },
    sendOffer() {
      const axiosConfig = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      var orderType;
      var selling;
      var buying;

      if (this.buy) {
        orderType = "manageBuyOffer";
        selling = "native";
        buying = {
          code: "USD",
          issuer: "GCKFBEIYV2U22IO2BJ4KVJOIP7XPWQGQFKKWXR6DOSJBV7STMAQSMTGG",
        };
      } else {
        orderType = "manageSellOffer";
        selling = {
          code: "USD",
          issuer: "GCKFBEIYV2U22IO2BJ4KVJOIP7XPWQGQFKKWXR6DOSJBV7STMAQSMTGG",
        };
        buying = "native";
      }

      var orderParams = {
        type: orderType,
        amount: this.order.amount,
        price: this.order.price,
        selling: selling,
        buying: buying,
      };

      this.axios
        .post("https://auth.datadef.com/build_order", orderParams, axiosConfig)
        .then((response) => {
          const secret = Stellar.Keypair.fromSecret(
            localStorage.getItem("secret_key")
          );

          const preAuthBuffer = Buffer.from(response.data.xdr, "base64");
          const preAuthEnvelope = Stellar.xdr.TransactionEnvelope.fromXDR(
            preAuthBuffer,
            "base64"
          );
          const preAuthTransaction = new Stellar.Transaction(
            preAuthEnvelope,
            selectNetwork
          );

          preAuthTransaction.sign(secret);

          const finalPreAuthEnvelopeXDR = preAuthTransaction
            .toEnvelope()
            .toXDR()
            .toString("base64");

          this.axios
            .post(
              "https://auth.datadef.com/order",
              {
                xdr: finalPreAuthEnvelopeXDR,
              },
              axiosConfig
            )
            .then(() => {
              this.fetchOrders();
              this.fetchOwnOrders();
            });
        });
    },
    fetchGlobalOrderBook() {
      var x = this;
      x.isLoading = true;
      var orderbookHandler = function(orderbookResponse) {
        x.price = orderbookResponse.asks[0].price;

        // Calculate spread
        try {
          x.spread = Math.abs(
            orderbookResponse.bids[0].price - orderbookResponse.asks[0].price
          );
        } catch (error) {
          // when ask or bid data is not exist to create spread value
          console.log(error);
        }

        // Reverse asks
        orderbookResponse.asks.reverse();

        x.orderBook = orderbookResponse;
      };

      var asset_x = new Stellar.Asset(
        "USD",
        "GCKFBEIYV2U22IO2BJ4KVJOIP7XPWQGQFKKWXR6DOSJBV7STMAQSMTGG"
      );
      var asset_y = new Stellar.Asset.native();

      x.orderbookFunction = server
        .orderbook(asset_x, asset_y)
        .cursor("now")
        .stream({
          onmessage: orderbookHandler,
        });
    },
    fetchTradeHistory() {
      var asset_x = new Stellar.Asset(
        "USD",
        "GCKFBEIYV2U22IO2BJ4KVJOIP7XPWQGQFKKWXR6DOSJBV7STMAQSMTGG"
      );
      var asset_y = new Stellar.Asset.native();
      var x = this;
      server
        .trades()
        .forAssetPair(asset_x, asset_y)
        .limit(25)
        .order("desc")
        .call()
        .then(function(res) {
          var mapped = res.records.reverse().map((offer, index) => {
            let is_buy;

            if (index != 0) {
              var old_price = (
                res.records[index - 1].price.n / res.records[index - 1].price.d
              ).toFixed(7);

              var new_price = (
                res.records[index].price.n / res.records[index].price.d
              ).toFixed(7);
            } else {
              old_price = (
                res.records[0].price.n / res.records[0].price.d
              ).toFixed(7);

              new_price = (
                res.records[1].price.n / res.records[1].price.d
              ).toFixed(7);
            }

            if (old_price < new_price) {
              is_buy = true;
            } else if (old_price > new_price) {
              is_buy = false;
            } else {
              is_buy = null;
            }

            return {
              is_buy: is_buy,
              price: offer.price,
              base_amount: offer.base_amount,
              ledger_close_time: offer.ledger_close_time,
            };
          });
          x.history.push(mapped.reverse());
        });
    },
    async createTrustline() {
      const keypair = Stellar.Keypair.fromSecret(
        localStorage.getItem("secret_key")
      );

      const account = await server.loadAccount(keypair.publicKey());
      const fee = await server.fetchBaseFee();

      var transaction = null;
      var trustlineObject = null;

      // Create an object to represent the new asset
      var assetDetails = new Stellar.Asset(
        "USD",
        "GCKFBEIYV2U22IO2BJ4KVJOIP7XPWQGQFKKWXR6DOSJBV7STMAQSMTGG"
      );

      trustlineObject = Stellar.Operation.changeTrust({
        asset: assetDetails,
      });

      transaction = new Stellar.TransactionBuilder(account, {
        fee,
        networkPassphrase: selectNetwork,
      })
        .addOperation(trustlineObject)
        .setTimeout(100)
        .build();
      transaction.sign(keypair);
      await server.submitTransaction(transaction).then(() => {
        this.message = "Trustline successfully created";
      });
    },
    activeOffers() {
      var vm = this;
      var sourceKeypair = Stellar.Keypair.fromSecret(
        localStorage.getItem("secret_key")
      );

      server
        .offers()
        .forAccount(sourceKeypair.publicKey())
        .limit(200)
        .call()
        .then(function(offerResult) {
          vm.active_offers = offerResult.records.reverse();
        });
    },
    async cancelHorizonOrder(offer_id) {
      this.isLoading = true;
      var sourceKeypair = Stellar.Keypair.fromSecret(
        localStorage.getItem("secret_key")
      );

      var sellingAssetObject = new Stellar.Asset(
        "USD",
        "GCKFBEIYV2U22IO2BJ4KVJOIP7XPWQGQFKKWXR6DOSJBV7STMAQSMTGG"
      );
      var buyingAssetObject = new Stellar.Asset.native();

      // Transactions require a valid sequence number that is specific to this account.
      // We can fetch the current sequence number for the source account from Horizon.
      const account = await server.loadAccount(sourceKeypair.publicKey());

      var transaction = null;
      var offerObject = null;

      offerObject = Stellar.Operation.manageSellOffer({
        selling: buyingAssetObject,
        buying: sellingAssetObject,
        amount: "0",
        price: "1",
        offerId: offer_id,
      });

      transaction = new Stellar.TransactionBuilder(account, {
        fee: 100,
        networkPassphrase: selectNetwork,
      })
        // The `manageBuyOffer` operation creates (or alters) a buy offer.
        .addOperation(offerObject)
        .setTimeout(0)
        .build();
      transaction.sign(sourceKeypair);
      await server.submitTransaction(transaction).then(() => {
        this.activeOffers();
      });
    },
    cancelL2Order(id) {
      const axiosConfig = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      this.axios
        .post("https://auth.datadef.com/cancel", { id: id }, axiosConfig)
        .then((response) => {
          console.log(response);
          this.fetchOrders();
          this.fetchOwnOrders();
        });
    },
  },
};
</script>

<style>
.wrapper {
  max-width: 1200px;
}

.card-wrapper {
  height: 44vh;
  overflow-y: scroll;
}

.card-wrapper-custom {
  height: 51.5vh;
  overflow-y: scroll;
}

.table-top {
  margin-top: -21px;
}

.button {
  width: 110px;
}
</style>
