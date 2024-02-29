const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let di
    beforeEach(() => {
        di = sinon.spy(console, 'log');
      });
      afterEach(() => {
        di.restore();
      });
      it('should log 120', () => {
        sendPaymentRequestToApi(100, 20)
        sinon.assert.calledWith(di, 'The total is: 120');
        sinon.assert.calledOnce(di)
      })
      it('should log 20', () => {
        sendPaymentRequestToApi(10, 10)
        sinon.assert.calledWith(di, 'The total is: 20');
        sinon.assert.calledOnce(di)
      })
})
