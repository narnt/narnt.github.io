var proverbs=new Array('Обидно, что Лизавета предала меня, ведь мне уже казалось, что мы можем стать подругами. Но она всего лишь сотрудница НКО «Один день».', 'Я еще не знаю, что теперь буду делать, но точно решу это сама. С фальшивыми документами или без, я справлюсь.', 'Похоже, что формально я не существую, и теперь меня ничто не сдерживает. Нет никакой Аннет Михельсон, и никогда не было.');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/fin2.ogg";
}
  audio.src = "../music/fin2.mp3";
  audio.loop = true;
  audio.play();
  audio.volume=0.5;
var i = 0;
$(document).ready(function(){
  $('#backSlide').click(function(){
    i--;
      if (i>=0) {
        $('#slide').text(proverbs[i-1]);console.log(i);
      }
  });
  });
$(document).ready(function(){
$('#nextSlide').click(function(){
  if(i<proverbs.length){
    $('#slide').text(proverbs[i]);
  }
  else if(i=proverbs.length){
    $("#text").fadeOut(5000);
    setTimeout(function() {$('#button-menu').fadeIn(2000)}, 5000);
  }
  console.log(i);
  i++;
});
});
