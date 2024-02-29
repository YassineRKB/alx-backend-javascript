const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const paypay = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${paypay}`);
};

module.exports = sendPaymentRequestToApi;
