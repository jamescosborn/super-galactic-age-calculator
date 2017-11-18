//front end logic

var Entry = require('./../js/sgac.js').sgacModule;

$(document).ready(function() {
  $('.user-age').submit(function(event) {
    event.preventDefault();
    var userAge = $('#user-age-entry').val();
    var newEntry = new Entry();
    var newAge = newEntry.sixWingedTieFighter(userAge);
    $('#output').append("<h1>Holy smokes!</h1><br><h3>You've been alive for " + newAge + " seconds!!!");
  });
});
