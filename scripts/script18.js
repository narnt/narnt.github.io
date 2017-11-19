var proverbs=new Array('— Благодарю вас за ожидание, — девушка улыбается и протягивает мне распечатку.', 'НКО Один день. ИНН, все реквизиты, даже описание деятельности… И о том, что организация финансируется через пожертвования.', 'А вот и лицензия на психологическую деятельность, как я и думала.', '— Спасибо, — возвращаю бумагу обратно.', 'Тут на мгновение мне кажется, что на обратной стороне листа еще много текста. Показалось или нет? Если я потребую этот листок назад, буду выглядеть странно…', '— Давайте продолжим?', '— Вы знаете, я так устала…', 'А мне действительно тяжело здесь находиться.', '— Хорошо, мы можем продолжить потом. Вы ведь еще не раз сюда придете. Но пока этих сведений достаточно для получения нескольких направлений. Подождите меня еще минутку.');
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
