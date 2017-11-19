var proverbs=new Array('— Проходите на кухню и присаживайтесь, пожалуйста. Может, тапочки?', '— Нет, спасибо.', 'Теперь, когда мы сидим в кухне, я снова замечаю бейджик.', '«L f dot 2-10»', 'На мгновение надпись показалась какой-то знакомой, но я так и не смогла вспомнить, что это значит и где я это видела.', '— Понимаете, произошла какая-то ошибка. Мне выдали справку на чужое имя.', '— Этого не может быть. Все процедуры стандартизированы и подвергаются строгому контролю.', '— Значит, произошел какой-то сбой. В моем паспорте совсем другие данные.', '— Хорошо, вы можете сейчас показать паспорт? Или сверить данные самостоятельно.', '— Конечно.');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/kitchen.ogg";
}
  audio.src = "../music/kitchen.mp3";
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
