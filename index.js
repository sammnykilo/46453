#!/usr/bin/env node

'use strict';

var fs = require('fs-plus');
var path = require('path');
var program = require('commander');
var pjson = require('./package.json');
var cucumber = require('cucumber');

function collectPaths(value, paths) {
    paths.push(value);
    return paths;
}

// add strict option (fail if there are any undefined or pending steps)
process.argv.push('-S');

//
// execute cucumber
//
var cucumberCli = cucumber.Cli(process.argv);

global.cucumber = cucumber;

cucumberCli.run(function (succeeded) {

    var code = succeeded ? 0 : 1;

    function exitNow() {
