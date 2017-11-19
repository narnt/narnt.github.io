var proverbs=new Array('Паспорта нигде нет. Это начинает раздражать.', '— Я не знаю, где мой паспорт.', '— Тогда вам нужно написать заявление о восстановлении утраченного паспорта.', '— Паспортный стол не работает по ночам, вам придется сделать это днем. Хотите, чтобы я сходила с вами?', '— Да, если можно. Боюсь, что одна я усну где-нибудь по дороге.');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/2.ogg";
}
  audio.src = "../music/2.mp3";
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
