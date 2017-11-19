function hideFon() {
    $("#fon").fadeOut(80000);
    setTimeout(function() {$('#button-menu').fadeIn(2000)}, 35000);
  }

  document.addEventListener("DOMContentLoaded", hideFon);
  var audio = document.createElement("audio");
  var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
  if(!canPlayMmp3) {
   audio.src = "../music/1.ogg";
  }
    audio.src = "../music/1.mp3";
    audio.volume=0.5;
    audio.play();
