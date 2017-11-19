var proverbs=new Array('Я дошла до принтера в глубине оранжереи, взяла в руки справку. Прочла: «Аннет Михельсон линия f точка 2-10».','— Скажите, что это значит?','Никто не отвечает… Почему?','— Эй?!','Это же не мое имя. Да, я называла его… Но оно не настоящее!','Оранжерея была пуста. Почему здесь вообще столько техники? Разве это разрешено и безопасно?','— Дори, пойдем!');
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
