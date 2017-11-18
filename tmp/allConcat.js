//front end logic

var Entry = require('./../js/sgac.js').sgacModule;

$(document).ready(function() {
  $('.journal').submit(function(event) {
    event.preventDefault();
    var userAge = $('#user-age-entry').val();
    var newEntry = new Entry();
    var newAge = newEntry.sixWingedTieFighter(useAge);
    $('#output').append("<h1>Holy smokes!</h1><br><h3>You've been alive for " + newAge + " seconds!!!");
  });
});
