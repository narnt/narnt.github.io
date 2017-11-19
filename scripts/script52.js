var proverbs=new Array('Я снова пришла в «Один день».', '— Здравствуйте, — улыбается Любовь Гурьевна. — Ну как, вы получили паспорт?', 'Молча кладу паспорт на стол.', '— Вот и замечательно. Ответ на ваш запрос «Как жить» уже сформирован и распечатан, можете ознакомиться с ним.');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/kabinet.ogg";
}
  audio.src = "../music/kabinet.mp3";
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
