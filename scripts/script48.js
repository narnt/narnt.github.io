var proverbs=new Array('Беру справку из терминала, беру Дори и снова иду к ЦСО. На этот раз все получается, но я потратила уже полночи…', 'Завтра разберусь со всем, лишь бы добраться до дома и упасть в кровать…');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/3.ogg";
}
  audio.src = "../music/3.mp3";
  audio.loop = true;
  audio.play();
  audio.volume=0.3;
  function fading() {
      var timer = setInterval(function() {audio.volume=audio.volume-0.01;
        if(audio.volume<=0.01){
          clearInterval(timer);
        }
      }, 50);
    };
$(document).ready(function(){
  var i = 0;
  $('#backSlide').click(function(){
      i--;
      $('#slide').text(proverbs[i-1]);
      console.log(i);
  });
  $('#nextSlide').click(function(){
    if(i<proverbs.length){
      $('#slide').text(proverbs[i]);
    }
    else if(i=proverbs.length){
      document.getElementById('button-next').style.display='block'; fading();
    }
    console.log(i);
    i++;
  });
});
