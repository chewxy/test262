// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.3_A13;
* @section: 15.3.4.3;
* @assertion: If IsCallable(func) is false, then throw a TypeError exception.
* @negative TypeError;
*/

Function.prototype.apply.call(undefined, {}, []);
