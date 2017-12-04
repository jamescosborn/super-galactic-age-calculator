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
