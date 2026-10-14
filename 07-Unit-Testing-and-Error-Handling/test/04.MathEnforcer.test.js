import { expect } from 'chai';
import { mathEnforcer } from "../04.MathEnforcer.js";

describe('SuitMathEnforcer', () => {
    describe('SuitAddFive', () => {
        //Tests for udefind
        it('Test1:String is unedefined', () => {
            expect(mathEnforcer.addFive('abc')).to.equal(undefined);
        })

        it('Test2:Boolean is unedefined', () => {
            expect(mathEnforcer.addFive('true')).to.equal(undefined);
        })

        it('Test3:Array is unedefined', () => {
            expect(mathEnforcer.addFive([1, 2, 3, 4])).to.equal(undefined);
        })

        //Tests with numbers
        it('Test4:Add 5 to positive, negative, and floating-point numbersd', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
            expect(mathEnforcer.addFive(-5)).to.equal(0);
            expect(mathEnforcer.addFive(0.51)).to.be.closeTo(5.51, 0.01);
        })

    })

    describe('SuitSubtractTen', () => {
        //Tests for udefind
        it('Test1:String is unedefined', () => {
            expect(mathEnforcer.subtractTen('abc')).to.equal(undefined);
        })

        it('Test2:Boolean is unedefined', () => {
            expect(mathEnforcer.subtractTen('true')).to.equal(undefined);
        })

        it('Test3:Array is unedefined', () => {
            expect(mathEnforcer.subtractTen([1, 2, 3, 4])).to.equal(undefined);
        })

        //Tests with numbers
        it('Test4:Substract 10 from positive, negative, and floating-point numbersd', () => {
            expect(mathEnforcer.subtractTen(15)).to.equal(5);
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(10.51)).to.be.closeTo(0.51, 0.01);
        })
    })

    describe('SuitSum', () => {
        //Tests for udefind
        it('Test1:String is unedefined', () => {
            expect(mathEnforcer.sum('a', 5)).to.equal(undefined);
        })

        it('Test2:Boolean is unedefined', () => {
            expect(mathEnforcer.sum(true, false)).to.equal(undefined);
        })

        it('Test2:Boolean is unedefined', () => {
            expect(mathEnforcer.sum({ a: 1 }, [2])).to.equal(undefined);
        })
        it('Test3:Array is unedefined', () => {
            expect(mathEnforcer.sum([1, 2, 3, 4], 5)).to.equal(undefined);
        })

        it('sum with valid end evalid', () => {
            expect(mathEnforcer.sum(5, 'a')).to.equal(undefined);
            expect(mathEnforcer.sum(5, [1, 2, 3])).to.equal(undefined);
            expect(mathEnforcer.sum(5)).to.equal(undefined);
            expect(mathEnforcer.sum(0)).to.equal(undefined);
            expect(mathEnforcer.sum(1, false)).to.equal(undefined);
        })

        //Tests with numbers
        it('Test4:Sum with positive, negative, and floating-point numbersd', () => {
            expect(mathEnforcer.sum(5, 10)).to.equal(15);
            expect(mathEnforcer.sum(-10, 5)).to.equal(-5);
            expect(mathEnforcer.sum(-10, 10)).to.equal(0);
            expect(mathEnforcer.sum(10.51, 5)).to.be.closeTo(15.51, 0.01);
        })
    })
})