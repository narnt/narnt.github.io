var proverbs=new Array('Стук в окно. Дори проснулась и залаяла. За окном снова Лизавета, а я забыла закрыть шторы.', 'Встаю и открываю окно.');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/woof.ogg";
}
  audio.src = "../music/woof.mp3";
  audio.loop = false;
  audio.play();
$(document).ready(function(){
  $('#chapter').fadeOut(5000);
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
