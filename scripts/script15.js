var proverbs=new Array('И еще полчаса очень странных вопросов...', 'Я просто сбита с толку.', 'Я так хочу встать и уйти, или хотя бы спросить, какой смысл во всем этом. Только вот ноги ватные, мысли ускользают, голову будто распирает изнутри.', 'Может быть, они мне что-то подмешали? Но как и когда? Я здесь ничего не ела и не пила.', 'Может быть, что-то в воздухе? Но тогда почему на работниц это не действует?', 'Присматриваюсь к девушке и все же спрашиваю:', '— Вы можете рассказать о вашей организации?');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/pan.ogg";
}
  audio.src = "../music/pan.mp3";
  audio.loop = true;
  audio.volume=0.4;
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
