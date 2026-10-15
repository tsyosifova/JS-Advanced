import { expect } from "chai";
import { lookupChar } from '../03.CharLookup.js';


describe('SuitaCharLoockup', () => {
    //Type of params not in corect format: 
    it('Type of params not in corect format: number and string', () => {
        expect(lookupChar(5, 'str')).to.equal(undefined);
    })
    it('Type of params not in corect format: number and correct number', () => {
        expect(lookupChar(123, 1)).to.equal(undefined);
    })
    it('Type of params not in corect format: correct string and 1.5', () => {
        expect(lookupChar("happy", 1.5)).to.equal(undefined);
    })

    it('Type of params not in corect format: correct string and 1.5', () => {
        expect(lookupChar("happy", 1.5)).to.equal(undefined);
    })

    it('Type of params not in corect format: correct string and missing param', () => {
        expect(lookupChar("happy")).to.equal(undefined);
    })

    it('Type of params not in corect format: cmissing param and and correct number', () => {
        expect(lookupChar(1)).to.equal(undefined);
    })

    //Index in necorrect range:
    it('Index in necorrect range: bigger than or equal to the string length or a negative number', () => {
        expect(lookupChar('happy', 7)).to.equal("Incorrect index");
        expect(lookupChar('happy', 5)).to.equal("Incorrect index");
        expect(lookupChar('happy', -1)).to.equal("Incorrect index");
    })

    //If both parameters have correct types:
    it('Return the character at the specified index in the string: first, last, and intermediate', () => {
        expect(lookupChar('happy', 0)).to.equal('h');
        expect(lookupChar('happy', 4)).to.equal('y');
        expect(lookupChar('happy', 2)).to.equal('p');
    })
})