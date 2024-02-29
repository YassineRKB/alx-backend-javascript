const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should spy on the add function', () => {
        const spyspy = sinon.spy(Utils, 'calculateNumber')

        sendPaymentRequestToApi(100, 20)
        sinon.assert.calledWith(spyspy, 'SUM', 100, 20)
        sinon.assert.calledOnce(spyspy)
        spyspy.restore()
    })
})
