# Jest: Example of Mocked Transitive Dependencies

This is an example to illustrate and test the issue raised at [Facebook/Jest:1117](https://github.com/facebook/jest/issues/1117).

In this example, a module is installed that exports one of it's dependencies.
The exported function returns the string Hello. The module is required and unmocked.
It is expected that the function will return Hello, and the test will pass.
A manual mock is included.

## Description of Issue

When a manual mock is present, transitive dependencies for modules in node_modules are not unmocked.
When unmock-ing a module found in node_modules, we would expect it's transitive dependencies to also be unmocked.
The prevents the consumer of the module having to unmock the entire dependency tree.
This is asserted in the Runtime test for [requireModuleOrMock](https://github.com/facebook/jest/blob/master/packages/jest-cli/src/Runtime/__tests__/Runtime-requireModuleOrMock-test.js#L194).


If a manual mock is not present, all transitive dependencies are returned as real modules.
However, if a manual mock is present for the module, while the real module is returned by the require, any transitive dependencies are mocked.

## Usage

* Clone this repository and install it's dependencies with `npm install`.
* Run the test with `npm run test`. The test fails, with the output: `Expected undefined to equal 'Hello'`.
* Remove the manual mock, and run the test. The test passes.
