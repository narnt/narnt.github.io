var proverbs=new Array('Следующую справку нужно было получить в центре социального обеспечения.', 'Это можно было сделать либо лично, придя на прием, либо в круглосуточном терминале самообслуживания.', 'Принимают только до семи. Значит, мой вариант – круглосуточный терминал.', 'Я проснулась раньше, чем обычно – всего в пять вечера. Я могла бы даже успеть на прием, но не хочу общаться с незнакомыми людьми без необходимости.', '— Дори!', 'Она радостно завиляла хвостом и запрыгала вокруг меня.');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/2.ogg";
}
  audio.src = "../music/2.mp3";
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
