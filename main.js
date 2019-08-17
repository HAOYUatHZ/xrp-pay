require('./wallet_config.js')

const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
  server: 'wss://s1.ripple.com' // Public rippled server hosted by Ripple, Inc.
});

// console.log("srcAddress", srcAddress);
// console.log("secret", secret);
// console.log("destAddress", destAddress);
