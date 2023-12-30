const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('Spies', function () {
  it('has the same math', () => {
    const spyUtils = sinon.spy(Utils, 'calculateNumber');
    const spyConsole = sinon.spy(console, 'log');

    sendPaymentRequestToApi(120, 40);

    expect(spyUtils.calledOnceWithExactly('SUM', 120, 40)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 160')).to.be.true;

    spyUtils.restore();
    spyConsole.restore();
  });
});
