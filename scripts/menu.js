var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/pad.ogg";
}
  audio.src = "../music/pad.mp3";
  audio.loop = true;
  audio.play();
  function fading() {
      var timer = setInterval(function() {audio.volume=audio.volume-0.01;
        if(audio.volume<=0.01){
          clearInterval(timer);
        }
      }, 30);
    };
$(document).ready(function(){
  $("#b1").click(function(event){
    fading();
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(5000, function(){window.location = 'chapters.html'});
	});

  $("#b2").click(function(event){
    fading();
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(5000, function(){window.location = 'app.html'});
	});

  $("#b3").click(function(event){
    fading();
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(5000, function(){window.location = 'music.html'});
	});

});
