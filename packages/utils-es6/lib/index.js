/** @type {import("../index").MyFuncComponent} */
var myFunc = function myFunc(text) {
  return "MyFunc result: ".concat(text);
};

/** @type {import("../index").MyFuncComponent} */
var myAnotherFunc = function myAnotherFunc(text) {
  return "MyAnotherFunc result: ".concat(text);
};

export { myAnotherFunc, myFunc };
