var proverbs=new Array('Захожу, и первое, что я вижу – большой светлый зал с небольшим количеством мебели. Снаружи казалось, что кабинет должен быть меньше…', 'Я осматриваюсь и наконец вижу девушку за столом.', '— Присаживайтесь, пожалуйста. Мы уже говорили с вами по телефону.', 'Значит, это Любовь Гурьевна. Я сажусь и смотрю на нее.', '— Как вы добрались?', '— Замечательно.', 'Дори сидит у меня на коленках, прижав уши.', '— Вы любите собак? — и, не дожидаясь ответа, девушка добавила: — Это важно.', 'И записала что-то в блокнот.', '— Вы что, составляете на меня досье?', '— Конечно. Для ответа на ваш вопрос я должна узнать вас лучше, чем вы сами.', 'Интересный подход. Но… Задавала ли я какой-то вопрос? Мне кажется, меня попросили прийти, и я пришла.', '— Когда день рождения у вашей собаки?', '— Первого марта.', '— Ваше любимое время суток?', '— Самое раннее утро.', '— Вы любите повидло?', '— Не знаю.', '— Вы когда-нибудь хотели побыть дельфином?', '— Эээ…');
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
