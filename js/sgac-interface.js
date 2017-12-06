import { Age } from "./../js/sgac.js";
import { BirthYear } from "./../js/sgac.js";

$(document).ready(function() {
  $(".output").hide();
  $(".output2").hide();
  $("form").submit(function(event) {
    event.preventDefault();
    let yearsOld = $("#years").val();
    let age = new Age(yearsOld);
    let mercuryYears = age.mercuryRising(yearsOld);
    let venusYears = age.venusAge(yearsOld);
    let marsYears = age.marsAge(yearsOld);
    let jupiterYears = age.jupiterAge(yearsOld);
    let eli = age.earthYearsLeft(yearsOld);
    let mrli = age.mercuryYearsLeft(yearsOld);
    let vli = age.venusYearsLeft(yearsOld);
    let mli = age.marsYearsLeft(yearsOld);
    let jli = age.jupiterYearsLeft(yearsOld);

    $(".output").show();
    $(".output-earth").text(`You are ${yearsOld} in Earth years.`);
    $(".output-mercury").text(`You are ${mercuryYears} in Mercury years.`);
    $(".output-venus").text(`You are ${venusYears} in Venus years.`);
    $(".output-mars").text(`You are ${marsYears} in Mars years.`);
    $(".output-jupiter").text(`You are ${jupiterYears} in Jupiter years.`);
    $(".output-eli").text(`You have ${eli} years left to live on Earth.`)
    $(".output-mrli").text(`You have ${mrli} years left to live on Mercury.`)
    $(".output-vli").text(`You have ${vli} years left to live on Venus.`)
    $(".output-mli").text(`You have ${mli} years left to live on Mars.`)
    $(".output-jli").text(`You have ${jli} years left to live on Jupiter.`)

  });

    $("#button2").click(function() {
      let birthDay = $("#bday").val();
      let bd = new BirthYear(birthDay);
      let lifeInSeconds = bd.bornSecondsAgo();
      $(".output").hide();
      $(".output2").show();
      $(".life-in-seconds").text(`You have been alive for ${lifeInSeconds} seconds. Congratulations.`);
    });
});
