var proverbs=new Array('Выхожу за дверь — здесь ждет провожавшая меня девушка. Лизавета Васильевна… это она?', 'Строгий темный костюм, прямая осанка, слаженные уверенные движения. Странно знать, что у нее такое простое имя.', 'Она проводила меня до самой двери. Чувствую себя неловко, хочется предложить ей хотя бы чаю.');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/entry.ogg";
}
  audio.src = "../music/entry.mp3";
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
