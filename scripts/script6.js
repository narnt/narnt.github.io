var proverbs=new Array('Я вернулась домой, но не могла уснуть. Ведь всего три часа дня, а я давно встаю только к семи в лучшем случае…', 'Просто лежу и смотрю в потолок. Рассматриваю свои пальцы. Почему я не могу уснуть? Чего я хочу?','За время, проведенное почти безвылазно дома, я сильно изменилась. Общение с посторонними людьми даётся мне очень сложно.', 'Настолько, что какое-то время после я просто лежу и ничего не делаю. Прямо как сейчас.');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/annethome.ogg";
}
  audio.src = "../music/annethome.mp3";
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
