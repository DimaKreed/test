const axios = require('axios');
const { M1_URL, M2_URL } = require('./common');

const m1Instanse = axios.create({
  baseURL: M1_URL,
});

const m2Instanse = axios.create({
  baseURL: M2_URL,
});

module.exports = { m1Instanse, m2Instanse };
