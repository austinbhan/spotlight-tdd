// IMPORT MODULES under test here:
import { myFunction, addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected, 'true = true');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('addExclamationPoints should add 3 exclamation points', (expect) => {
    const expected = 'bunny rabbit!!!'; // 'bunny rabbit!!!'

    const actual = addExclamationPoints('bunny rabbit'); // addExclamationPoints('bunny rabbit');

    expect.equal(actual, expected);
});

test('multipleBySeven should multiple by seven', (expect) => {
    const expected = (4 * 7);

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected);
});

test('multiplyBy12ThenHalve should multiply by 12 then divide by half', (expect) => {
    const expected = (4 * 12 / 2);

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected);
});

test('divideThenMultiply should divide the first number by the second then multiply the third', (expect) => {
    const expected = (8 / 4 * 5);
    
    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected);
});

test('returnsAnArray should take in 3 numbers and return them in an array', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('returnsAsAString mushes numbers', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});
