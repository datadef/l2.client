<template>
  <div class="container mt-4 mb-4">
    <div class="row wrapper">
      <div class="col">
        <div class="card">
          <div class="card-header">
            Tickers
          </div>
          <div class="card-body card-wrapper">
            <table class="table table-hover table-sm table-top">
              <thead>
                <tr>
                  <th>Coin</th>
                  <th>Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird end</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card card-wrapper-custom">
          <div class="card-header">
            Orderbook
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
                <tr v-for="order in bids" :key="order.hash">
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
        <div class="card">
          <div class="card-header">
            Order Form
          </div>
          <div class="card-body card-wrapper" style="overflow: hidden">
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label class="btn btn-secondary active button">
                <button class="btn text-white" @click="toggleToBuy()">
                  Buy
                </button>
              </label>
              <label class="btn btn-secondary button">
                <button class="btn text-white" @click="toggleToSell()">
                  Sell
                </button>
              </label>
            </div>

            <div class="mt-3" v-if="buy">
              <div class="form-group">
                <label for="exampleInputEmail1">Price TRY</label>
                <input
                  class="form-control"
                  placeholder="Price TRY"
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
              <button
                href="#"
                class="btn btn-success btn-block"
                @click="sendOffer()"
              >
                Buy
              </button>
            </div>

            <div class="mt-3" v-else>
              <div class="form-group">
                <label for="exampleInputEmail1">Price TRY</label>
                <input
                  class="form-control"
                  placeholder="Price TRY"
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
              <a href="#" class="btn btn-danger btn-block" @click="sendOffer()"
                >Sell</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4 wrapper">
      <div class="col-9">
        <div class="card">
          <div class="card-header">
            Open Orders
          </div>
          <div class="card-body card-wrapper">
            <table class="table table-hover table-sm table-top">
              <thead>
                <tr>
                  <th>Pair</th>
                  <th>Side</th>
                  <th>Price</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
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
            <table
              class="table table-hover table-borderless table-sm table-top"
            >
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Amount</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@table-sm</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
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
const { Stellar } = require("@/lib/sdk");

export default {
  data() {
    return {
      asks: null,
      bids: null,
      buy: true,
      sell: false,
      order: {
        type: "manageBuyOffer",
        price: null,
        amount: null,
        selling: null,
        buying: null,
      },
    };
  },
  created() {
    this.fetchOrders();
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
    fetchOrders() {
      this.axios.get("http://localhost:5050/orderbook").then((response) => {
        this.asks = response.data.asks;
        this.bids = response.data.bids;
      });
    },
    sendOffer() {
      var orderType;
      if (this.buy) {
        orderType = "manageBuyOffer";
      } else {
        orderType = "manageSellOffer";
      }

      var orderParams = {
        type: orderType,
        amount: this.order.amount,
        price: this.order.price,
        selling: {},
        buying: {
          code: "USD",
          issuer: "GCKFBEIYV2U22IO2BJ4KVJOIP7XPWQGQFKKWXR6DOSJBV7STMAQSMTGG",
        },
      };

      this.axios
        .post("http://localhost:5050/build_order", orderParams)
        .then((response) => {
          var sourceKeypair = Stellar.Keypair.fromSecret(
            "SBNK2O4GM4IPR5CU4RGYBJI6F4PRMIZGU3LZ2NFP7Y53TBGLP5VUHTYL"
          );

          const preAuthBuffer = Buffer.from(response.data.xdr, "base64");
          const preAuthEnvelope = Stellar.xdr.TransactionEnvelope.fromXDR(
            preAuthBuffer,
            "base64"
          );
          const preAuthTransaction = new Stellar.Transaction(
            preAuthEnvelope,
            Stellar.Networks.TESTNET
          );

          preAuthTransaction.sign(sourceKeypair);

          const finalPreAuthEnvelopeXDR = preAuthTransaction
            .toEnvelope()
            .toXDR()
            .toString("base64");

          this.axios
            .post("http://localhost:5050/order", {
              xdr: finalPreAuthEnvelopeXDR,
            })
            .then(() => {
              this.fetchOrders();
            });
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
