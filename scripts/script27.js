var proverbs=new Array('— Вы что-то ищете?', 'Я вздрагиваю и смотрю в сторону говорящей.', '— Да, здравствуйте, — отозвалась я. — Мне нужна справка о времени.', 'Женщина рассмеялась.', '— Я сказала что-то смешное?', '— Справка о времени? Как вы себе это представляете?', '— Я не знаю. Честно сказать, мне все равно, но я решила попробовать получить справку.');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/greenhouse.ogg";
}
  audio.src = "../music/greenhouse.mp3";
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
