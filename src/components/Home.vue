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
            Buy Orders
          </div>
          <div class="card-body">
            <table class="table table-hover table-borderless table-sm table-top">
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

          <div class="card-header mt-2">
            Sell Orders
          </div>
          <div class="card-body">
            <table class="table table-hover table-borderless table-sm table-top">
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
                <input class="form-control" placeholder="Price TRY" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Amount XLM</label>
                <input class="form-control" placeholder="Amount XLM" />
              </div>
              <a href="#" class="btn btn-success btn-block">Buy</a>
            </div>

            <div class="mt-3" v-else>
              <div class="form-group">
                <label for="exampleInputEmail1">Price TRY</label>
                <input class="form-control" placeholder="Price TRY" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Amount XLM</label>
                <input class="form-control" placeholder="Amount XLM" />
              </div>
              <a href="#" class="btn btn-danger btn-block">Sell</a>
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
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
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
export default {
  data() {
    return {
      buy: true,
      sell: false,
    };
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
  overflow-y:scroll
}

.table-top {
  margin-top: -21px;
}

.button {
  width: 110px;
}
</style>
