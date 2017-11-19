var proverbs=new Array('Женщина села за стол и стала что-то искать в ноутбуке.', '— Минут через пять будет готово. Присаживайтесь.', '— Скажите, а что это вообще за справка?', 'Она едва заметно насмешливо улыбнулась.', '— А как вы думаете, все ли люди одновременно находятся в одном и том же времени?', '— А разве нет?', 'Ощущение нереальности происходящего становилось все сильнее.', '— Возьмите из принтера.');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/greenhouse.ogg";
}
  audio.src = "../music/greenhouse.mp3";
  audio.loop = true;
  audio.play();
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
