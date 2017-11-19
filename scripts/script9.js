var proverbs=new Array('Что это?', 'Вскакиваю с кровати, подбегаю к окну и одергиваю шторы.');
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
