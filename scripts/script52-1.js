var proverbs=new Array('Я снова пришла в «Один день».', '— Здравствуйте, — улыбается Любовь Гурьевна. — Ну как, вы получили паспорт?', '— Нет.', '— Но почему?', '— Потому, что его выкрали и подменили.', '— Очень жаль. Ваш отчет уже готов. Для вас есть направление на хорошую работу по вашей специальности. Вы могли бы очень хорошо жить.', '— Но почему я не могу быть собой?', '— Что для вас значит "быть собой"? Разве имя — это вы? Разве ваша профессия — это вы? Разве ваш паспорт — это вы?', '— Просто верните мне мой паспорт!', '— Разве вы сами не отказались от него?', '— Я не Аннет, мне не нужен чужой паспорт и чужая жизнь!');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/kabinet3.ogg";
}
  audio.src = "../music/kabinet3.mp3";
  audio.loop = true;
  audio.volume=0.5;
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
