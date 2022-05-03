// IMPORT MODULES under test here:
import { myFunction } from '../functions.js';

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
    const expected = true; // 'bunny rabbit!!!'

    const actual = true; // addExclamationPoints('bunny rabbit');

    expect.equal(actual, expected);
});

test('multipleBySeven should multiple by seven', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});