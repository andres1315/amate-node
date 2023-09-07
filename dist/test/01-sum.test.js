"use strict";

var _sum = require("./01-sum");
describe('math number', function () {
  test('sum two number 1 and 2', function () {
    expect((0, _sum.sum)(1, 2)).toBe(3);
  });
  test('multiply two number', function () {
    expect((0, _sum.multi)(2, 2)).toBe(4);
  });
  test('divide two number', function () {
    expect((0, _sum.divide)(10, 2)).toBe(5);
    expect((0, _sum.divide)(10)).toBe('no can divide by 0');
    expect((0, _sum.divide)(0, 10)).toBe(0);
  });
  test('object', function () {
    var data = {
      referece: 12313123,
      pi: '123adas14 sd',
      name: 'jose'
    };
    expect(data).toEqual({
      referece: 123131231,
      pi: '123adas14 sd',
      name: 'jose'
    });
  });
});