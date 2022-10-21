const axios = require('axios');
const { M1_URL } = require('./common');

const m1Instanse = axios.create({
  baseURL: M1_URL,
});

module.exports = { m1Instanse };
