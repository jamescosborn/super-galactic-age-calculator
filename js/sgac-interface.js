import { Age } from './../js/sgac.js';

$(document).ready(function() {
  $('#button').submit(function(event) {
    event.preventDefault();
    let userBirthYear = $('#user-year-entry').val();
    let newAge = new Age(userBirthYear);
    let earthAge = (2017 - (userBirthYear));
    let ageToSeconds = newAge.toSeconds(earthYears);
    $('#earth-output').text(`${earthAge} Earth Years Old.`);
    $('#seconds-output').text(`${ageToSeconds} Earth Seconds Old.`);
  });
});
