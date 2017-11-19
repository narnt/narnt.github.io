var proverbs=new Array('— Вы все подстроили!', 'Любовь Гурьевна удивленно смотрит, подняв брови. Бросаю в нее бумаги, а она даже не ловит их.', 'Успеваю заметить, как ее губы медленно растягиваются в улыбке. Да что же это! Прочь отсюда!');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/kabinet3.ogg";
}
  audio.src = "../music/kabinet3.mp3";
  audio.loop = true;
  audio.volume=0.5;
  audio.play();
  function fading() {
      var timer = setInterval(function() {audio.volume=audio.volume-0.01;
        if(audio.volume<=0.01){
          clearInterval(timer);
        }
      }, 50);
    };
$(document).ready(function(){
  $('#lubov').fadeOut(5000);
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
