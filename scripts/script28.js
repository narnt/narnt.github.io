var proverbs=new Array('— Похвально, — улыбается она, сверкнув голубоватыми зубами.', '— Что?', '— То, что ты все же решилась прийти. — Теперь она смотрит мне прямо в глаза.', '— Обычно люди либо не верят в возможность такой справки о себе, либо ничего не хотят знать об этой возможности.', '— Но почему?', '— Не очень приятно заново узнавать о себе некоторые вещи. Тем более о том, что это могут узнать и другие.', 'Я вопросительно смотрела на нее.', '— Да вы не беспокойтесь, у нас здесь все конфиденциально, и без направления не выдаем. У вас же есть направление?', 'Переступаю с ноги на ногу. Как же все это странно.', '— Ну что вы переживаете, посмотрите в вашей сумочке, может, найдется.', 'Я открыла сумку — конечно, в ней лежала бумага.', '— Пойдемте.');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/window.ogg";
}
  audio.src = "../music/window.mp3";
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