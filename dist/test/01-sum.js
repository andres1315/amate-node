"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.divide = divide;
exports.multi = multi;
exports.sum = sum;
function sum(a, b) {
  return a + b;
}
function multi(a, b) {
  return a * b;
}
function divide(a, b) {
  if (!b) return 'no can divide by 0';
  return a / b;
}