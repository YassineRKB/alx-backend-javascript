const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const di = Utils.calculateNumber('SUM', totalAmount, totalShipping)
    console.log(`The total is: ${di}`)
}

module.exports = sendPaymentRequestToApi;
