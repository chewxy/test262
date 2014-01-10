#test262#

test262 is a test suite intended to check agreement between JavaScript implementations and ECMA-262, the ECMAScript Language Specification (currently 5.1 Edition). The test suite contains thousands of individual tests, each of which tests some specific requirements of the [ECMAScript Language Specification](http://www.ecma-international.org/ecma-262/5.1).

##Who creates and maintains test262?##

Development of test262 is a project of Ecma TC39. The testing framework and individual tests are created by member organizations of TC39 and contributed to Ecma for use in test262. For more information about how test262 is developed and maintained click the “Development” tab at the top of this page.

##What is the status of test262?##

**test262 is not yet complete.** It is still undergoing active development. Some portions of the ES5 specification have very complete test coverage while other portions of the specification have only partial test coverage. Some tests may be invalid or may yield false positive or false negative results. A perfect passing score on test262 does not guarantee that a JavaScript implementation perfectly supports ES5. Because tests are being actively added and modified, tests results from different days or times may not be directly comparable. For more information about developing test262, please read the [test262 development wiki]("http://wiki.ecmascript.org/doku.php?id=test262:test262")


#DISCLAIMER#

I am not part of the test262 team. I have merely mirrored the [official test262 repository](http://hg.ecmascript.org/tests/test262/), which happens to be a Mercurial repository. There is nothing wrong with a Mercurial repository though, except it makes it extremely tedious to include as a git submodule, so I decided to make a git version of it. There was [another git version of test262](https://github.com/tronical/test262), however, that one seems abandoned. I will try to keep this as updated as possible.


##Update Instructions##

1. [git-hg](https://github.com/cosmin/git-hg) is a requirement
2. `git-hg pull`
3. `git push origin`