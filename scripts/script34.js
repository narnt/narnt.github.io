var proverbs=new Array('Набираю номер…', '— Здравствуйте, вы позвонили на круглосуточную горячую линию центра «Один день».', '— Да, здравствуйте, я уже была у вас. Мне нужна еще одна консультация.', '— Вы уже собрали все справки?', '— Нет, только одну.', '— К сожалению, мы не можем провести следующую консультацию без справок.', '— Но у меня очень важный вопрос!', '— Давайте сделаем так: если у вас возникли трудности, к вам придет наша сотрудница и поможет с ними справиться.', '— Хорошо…', 'Нехотя соглашаюсь. Надеюсь, ко мне снова отправят Лизавету, я хотя бы уже знаю ее.');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/telephone2.ogg";
}
  audio.src = "../music/telephone2.mp3";
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
