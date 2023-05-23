'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/** @type {import("../index").MyFuncComponent} */
var myFunc = function myFunc(text) {
  return "MyFunc result: ".concat(text);
};

/** @type {import("../index").MyFuncComponent} */
var myAnotherFunc = function myAnotherFunc(text) {
  return "MyAnotherFunc result: ".concat(text);
};

exports.myAnotherFunc = myAnotherFunc;
exports.myFunc = myFunc;
