var proverbs=new Array('Я долго искала терминал, нашла только часа через два. Это обычная справка – о составе семьи и доходах. У терминала подробная инструкция.', 'Надо выбрать это, потом это, ввести код направления, свои данные…', 'Не получается. Неверные данные.', 'Ну что ж, попробуем эту Аннет Михельсон.', 'Подошло. Но теперь не хватает справки с биржи труда.', 'Мне выдали направление на биржу труда, но нигде не написано, что я сначала должна пойти туда! Да что же это такое! Я даже не знаю, где она находится!');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/5.ogg";
}
  audio.src = "../music/5.mp3";
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
