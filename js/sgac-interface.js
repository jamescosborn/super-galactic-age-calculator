import { Age } from "./../js/sgac.js";

$(document).ready(function() {
  $(".output").hide();
  $("form").submit(function(event) {
    event.preventDefault();
    let yearsOld = $("#years").val();
    let age = new Age(yearsOld);
    let mercuryYears = age.mercuryRising(yearsOld);

    $(".output").show();
    $(".output-earth").text(`You are ${yearsOld} in Earth years.`);
    $(".output-mercury").text(`You are ${mercuryYears} in Mercury years.`);
  });
});
