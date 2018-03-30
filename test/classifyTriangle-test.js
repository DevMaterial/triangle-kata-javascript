const { validateTriangle, classifyTriangle} = require('../classifyTriangle');
const assert = require('assert');

describe('triangle', () => {
    describe('invalid', () => {
        it('throws error if less than 3 sides', () => {
            assert.throws(
                () => {
                   classifyTriangle([1, 2]);
                },
                /You have less than 3 sides/
            )
        });
        it('throws error if more than 3 sides', () => {
            assert.throws(
                () => {
                   classifyTriangle([1, 2, 3, 4]);
                },
                /You have more than 3 sides/
            )
        });
    });

    describe('valid', () => {
        it('returns scalene if no sides are equal', () => {
            assert.equal(classifyTriangle([3, 3, 3]), 'equilateral');
        });
        it('returns isoceles if no sides are equal', () => {
            assert.equal(classifyTriangle([3, 3, 4]), 'isoceles');
        });
        it('returns equilateral if all sides are equal', () => {
            assert.equal(classifyTriangle([3, 4, 5]), 'scalene');
        });
    });
});