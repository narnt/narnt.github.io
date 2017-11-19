var proverbs=new Array('Я осталась в зале одна. Снова осматриваю его и не вижу никаких опознавательных знаков.', 'Обычно в организациях на стенах висят какие-то инструкции, сертификаты, где-то можно заметить логотип и название организации…', 'Наверное.', 'Но здесь нет ничего из этого. Осматриваю стол: на нем куча бумаг, но ни на одной из них не вижу ни печати с названием, ни логотипа, ни самого названия.');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/kabinet2.ogg";
}
  audio.src = "../music/kabinet2.mp3";
  audio.loop = true;
  audio.play();
  function fading() {
      var timer = setInterval(function() {audio.volume=audio.volume-0.01;
        if(audio.volume<=0.01){
          clearInterval(timer);
        }
      }, 50);
    };$(document).ready(function(){
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
