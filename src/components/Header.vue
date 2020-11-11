<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">SDEX - Layer | 2 <small style="font-size:10px">[testnet]</small></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <form class="form-inline my-2 my-lg-0">
          <button
            class="btn btn-outline-success my-2 my-sm-0 mr-2"
            type="button"
            data-toggle="modal"
            data-target="#loginModal"
            v-if="is_logged != 'true'"
          >
            Connect to Wallet
          </button>
          <span v-else>
            Welcome!
            <button class="btn btn-danger ml-3" @click="logout()">Logout</button>
          </span>

          <!-- Modal -->
          <div
            class="modal fade"
            id="loginModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="loginModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="loginModalLabel">
                    Connect to Wallet
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label"
                      >Your Secret Key:</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      style="width: 100%"
                      placeholder="Your Secret Key"
                      v-model="secret_key"
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-success"
                    @click="connectToWallet()"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
const { Stellar } = require("@/lib/sdk");

export default {
  data() {
    return {
      secret_key: null,
    };
  },
    computed: {
    is_logged() {
      return localStorage.getItem("is_logged");
    },
  },
  created() {},
  methods: {
    connectToWallet() {
      const sourceKeypair = Stellar.Keypair.fromSecret(this.secret_key);
      const sourcePublicKey = sourceKeypair.publicKey();

      var loginParams = {
        public_key: sourcePublicKey,
      };
      this.axios
        .post("login", loginParams)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("secret_key", this.secret_key);
          localStorage.setItem("is_logged", "true");
          window.location.reload();
        });
    },
    logout(){
      localStorage.clear();
      window.location.reload();
    }
  },
};
</script>
