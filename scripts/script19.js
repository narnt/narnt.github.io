var proverbs=new Array('Она снова вернулась с бумагами.', '— Возьмите, пожалуйста. Лизавета Васильевна проводит вас, прочтете все дома.', 'Вам понадобится получить несколько справок перед следующей консультацией, но здесь все подробно написано, так что трудностей быть не должно.', '— И я могу идти?', '— Да, конечно. Всего доброго.', 'Любовь Гурьевна искренне по-доброму улыбается, и мне становится лучше. Похоже, она действительно хочет мне помочь.');
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
