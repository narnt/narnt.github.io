var proverbs=new Array('Идет снег. Крупные белые хлопья медленно опускаются на мои волосы, нос, плечи.', 'Они ведь знают обо мне почти все. Да я сама видела направление, в нем было мое имя и паспортные данные. Что за нелепость.', 'Сейчас направление забрали в обмен на справку, другие я оставила дома. Я абсолютно уверена, что в них мое паспортное имя, сама же все читала и проверяла.', 'И что я такое должна бояться узнать о себе? Ведь в этой справке ничего обо мне нет.');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/rythm.ogg";
}
  audio.src = "../music/rythm.mp3";
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
      document.getElementById('button-next').style.display='block';
    }
    console.log(i);
    i++;
  });
});
