/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-39.js
 * @description Object.defineProperty - 'O' is a Date object that uses Object's [[GetOwnProperty]] method to access the 'name' property (8.12.9 step 1)
 */


function testcase() {
        var desc = new Date();

        Object.defineProperty(desc, "foo", {
            value: 12,
            configurable: false
        });

        try {
            Object.defineProperty(desc, "foo", {
                value: 11,
                configurable: true
            });
            return false;
        } catch (e) {
            return e instanceof TypeError && desc.foo === 12;
        }
    }
runTestCase(testcase);
