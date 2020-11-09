<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Stellar</a>
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
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <button
          class="btn btn-outline-success my-2 my-sm-0 mr-2"
          type="button"
          data-toggle="modal"
          data-target="#loginModal"
        >
          Connect to Wallet
        </button>

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
                  <input type="text" class="form-control" style="width: 100%" placeholder="Your Secret Key"/>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-success">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      // connectToWallet() {
      //       this.axios
      //           .post()
      //           .then((response) => {

      //               localStorage.setItem("token", token);
      //           })
      //   },
    };
  },
  created() {
    
  },
  methods: {
    
  },
};
</script>