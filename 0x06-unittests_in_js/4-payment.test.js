const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('should spy on the add function', () => {
        const ispy= sinon.stub(Utils, 'calculateNumber')
        ispy.returns(10)
        const morgan = sinon.spy(console, 'log')

        sendPaymentRequestToApi(100, 20)
        sinon.assert.calledWith(ispy, 'SUM', 100, 20)
        sinon.assert.calledWith(morgan, 'The total is: 10');
        ispy.restore()
        morgan.restore()
    })
})
