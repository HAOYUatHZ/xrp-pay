require('./wallet_config.js')

const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
  server: 'wss://s1.ripple.com' // Public rippled server hosted by Ripple, Inc.
});

// console.log("srcAddress", srcAddress);
// console.log("secret", secret);
// console.log("destAddress", destAddress);


payment = {
  "source": {
    "address": srcAddress,
    "maxAmount": {
      "value": "0.01",
      "currency": "XRP"
    }
  },
  "destination": {
    "address": "rpZc4mVfWUif9CRoHRKKcmhu1nx2xktxBo",
    "amount": {
      "value": "0.01",
      "currency": "XRP"
    }
  }
};

api.preparePayment(srcAddress, payment).then(prepared => {
        console.log(prepared);
    }
).catch(error => {
    console.log(error);
  }
);
