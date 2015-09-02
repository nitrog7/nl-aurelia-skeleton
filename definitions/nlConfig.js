'use strict';
/* global F */

F.nlConfig = {
  name: 'NL',
  domain: 'nitrogenlabs.com',

  aws: {
    bucket: 'AWS_BUCKET',
    region: 'us-east-1',
    accessKeyId: 'AWS_ACCESS_KEY',
    secretAccessKey: 'AWS_ACCESS_SECRET'

    /*
     sslEnabled:false,
     httpOptions: {
     proxy: 'http://127.0.0.1:8080'
     }
     */
  },

  analytics: {
    account: 'GOOGLE_ACCOUNT'
  }
};