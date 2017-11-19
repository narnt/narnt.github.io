var proverbs=new Array('Вот уже полчаса сижу в кабинете Любови Гурьевны и пытаюсь доказать, что я – это я. Оказалось, это не так просто.', '— Но я не Аннет!', '— Что вы такое говорите. Вы же сами так представились, Аннет.', '— Да, и я соврала. Просто назвала первое пришедшее на ум имя.', 'Она продолжает улыбаться.', '— А фамилию вы откуда взяли?', '— Конечно, из вашего паспорта.', '— Но этого не может быть!', '— Давайте проверим. У нас есть ксерокопия.');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/4.ogg";
}
  audio.src = "../music/4.mp3";
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
  $('#chapter').fadeOut(5000);
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
