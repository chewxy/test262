// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.12.2_A1;
 * @section: 15.12.2;
 * @assertion: JSON.parse must create a property with the given property name;
 * @description: Tests that JSON.parse treats "__proto__" as a regular property name;
 */

var x = JSON.parse('{"__proto__":[]}');
if (Object.getPrototypeOf(x) !== Object.prototype) {
  $FAIL('#1: JSON.parse confused by "__proto__"');
}
if (!Array.isArray(x.__proto__)) {
  $FAIL('#2: JSON.parse did not set "__proto__" as a regular property');
}
