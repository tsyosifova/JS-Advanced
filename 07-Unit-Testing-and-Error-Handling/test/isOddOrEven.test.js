import { expect } from 'chai';
import { isOddOrEven } from '../isOddOrEven.js'

describe('suitIsOddOrEven', () => {
    it('test1: Number is undefined', () => {
        expect(isOddOrEven(54)).to.equal(undefined);
    })

    it('test2: Array is undefined', () => {
        expect(isOddOrEven([1, 2, 3, 4])).to.equal(undefined);
    })

    it('test3: Boolean is undefined', () => {
        expect(isOddOrEven(true)).to.equal(undefined);
    })

    it('test4: String with even characters is even', () => {
        expect(isOddOrEven('Happy!')).to.equal('even');
    })

    it('test5: String with odd characters is odd', () => {
        expect(isOddOrEven('Buy')).to.equal('odd');
    })

    it('test6: Several strings with even or odd characters is corectly even or odd', () => {
        expect(isOddOrEven('Hello!')).to.equal('even');
        expect(isOddOrEven('ten')).to.equal('odd');
        expect(isOddOrEven('red')).to.equal('odd');
    })
})