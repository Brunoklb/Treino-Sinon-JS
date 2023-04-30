const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai')
chai.use(sinonChai);
const sum = require('./spy');
const isAlive = require('./stub');
const expect = chai.expect;

describe('sum()', function(){
    it('Should must add two numbers', function(){
        const numberOne = 1;
        const numberTwo = 2;
        const logSpy = sinon.spy();
        const realResult = sum(numberOne, numberTwo, logSpy);
        const expectedResult = 3;

        expect(logSpy).to.have.been.called;
        expect(realResult).to.equal(expectedResult);
    });

    it('Should cal log with result of add', function(){
        const numberOne = 1;
        const numberTwo = 2;
        const logSpy = sinon.spy();
        sum(numberOne, numberTwo, logSpy);

        expect(logSpy).to.have.been.calledWith(3);
    })
});

describe('isAlive()', function(){
    it('Should return true when ping callback returns true', function(){
        pinger = sinon.stub();
        pinger.returns(true);
        const webSiteIsAlive = isAlive(pinger);

        expect(webSiteIsAlive).to.equal(true);
    });

    it('Should return true when ping returns true three times in a row', function(){
        const pinger = sinon.stub();
        pinger.onFirstCall().returns(true);
        pinger.onSecondCall().returns(true);
        pinger.onThirdCall().returns(true);

        const webSiteIsAlive = isAlive(pinger);

        expect(webSiteIsAlive).to.equal(true);
    });

    it('Should return true when ping does not return true three times in a row', function(){
        const pinger = sinon.stub();
        pinger.onFirstCall().returns(true);
        pinger.onSecondCall().returns(false);
        pinger.onThirdCall().returns(true);

        const webSiteIsAlive = isAlive(pinger);

        expect(webSiteIsAlive).to.equal(false);
    });
});