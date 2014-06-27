# parallel-cucumber-js-example
  [![Build Status](https://travis-ci.org/simondean/parallel-cucumber-js-example.png?branch=master)](https://travis-ci.org/simondean/parallel-cucumber-js-example)
  [![Dependencies](https://david-dm.org/simondean/parallel-cucumber-js-example.png)](https://david-dm.org/simondean/parallel-cucumber-js-example)
  [![Code Climate](https://codeclimate.com/github/simondean/parallel-cucumber-js-example.png)](https://codeclimate.com/github/simondean/parallel-cucumber-js-example)

Example of how to use parallel-cucumber-js to execute cucumber-js tests in
parallel across multiple processes.

## Usage

### Install

Install the codebase's dependencies with:

``` shell
$ npm install --dev
```

### Run

The tests are executed by running the following command in a terminals:

``` shell
$ node_modules/.bin/parallel-cucumber --workers 4
```
