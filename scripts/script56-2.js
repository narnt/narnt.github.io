var proverbs=new Array('— Аннет! — окликает меня Лизавета.', '— И вы с ними заодно! Эта организация изменяет жизнь, буквально! Они подменили мою жизнь, еще и издеваются, заставляют собирать все эти справки!', '— Но неужели вы не хотели изменить свою жизнь?', 'Не отвечая, выбегаю на улицу.');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/entry.ogg";
}
  audio.src = "../music/entry.mp3";
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
