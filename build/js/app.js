(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//business logic
function Entry(entryLog) {
  this.log = entryLog;
}

Entry.prototype.twelveWingedTieFighter = function(userAge) {
  var ageInSeconds = 31536000 * (parseInt(userAge));
  return ageInSeconds;
};

exports.sgac = Entry;

},{}],2:[function(require,module,exports){
//front end logic

var Entry = require('./../js/sgac.js').sgacModule;

$(document).ready(function() {
  $('.user-age').submit(function(event) {
    event.preventDefault();
    var userAge = $('#user-age-entry').val();
    var newEntry = new Entry();
    var newAge = newEntry.twelveWingedTieFighter(userAge);
    $('#output').append(newAge);
  });
});

},{"./../js/sgac.js":1}]},{},[2]);
