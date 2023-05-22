"use strict";
const assert = require("assert").strict;
const utils = require("./../lib");

const { sayHello } = utils;
assert.strictEqual(sayHello("there"), "Hello, there!");

console.info("utils tests passed");
