/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'open-aquachain-pool',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // API host and port
      ApiUrl: '//' + process.env.API_URL || 'aqua.rektmarketcap.com',

      // HTTP mining endpoint
      HttpHost: process.env.HTTP_POST || 'http://aqua.rektmarketcap.com',
      HttpPort: process.env.HTTP_PORT || 8888,

      // Stratum mining endpoint
      StratumHost: process.env.STRATUM_HOST || 'aqua.rektmarketcap.com',
      StratumPort: process.env.STRATUM_PORT || 8008,

      // Fee and payout details
      PoolFee: process.env.POOL_FEE || '1%',
      PayoutThreshold: process.env.PAYOUT_TRESHOLD || '0.5' + ' Aquachain',

      // For network hashrate (change for your favourite fork)
      BlockTime: 240.4
    }
  };

  if (environment === 'development') {
    /* Override ApiUrl just for development, while you are customizing
      frontend markup and css theme on your workstation.
    */
    ENV.APP.ApiUrl = 'http://localhost:8080/'
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
