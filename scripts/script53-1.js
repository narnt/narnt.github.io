var proverbs=new Array('Я оторвалась от чтения.', 'Книги со встроенной виртуальной реальностью так захватывают!', 'Совсем забываешь о том, кто ты.', 'Полное погружение.', 'Я получила острые ощущения, но как хорошо, что я не в XXI веке. Даже не представляю, как жить там.', '',  'Может быть, это была не книга?');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/fin.ogg";
}
  audio.src = "../music/fin.mp3";
  audio.loop = true;
  audio.volume=0.5;
  audio.play();
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
      $('#text').fadeOut(5000);
      setTimeout(function() {$('#button-menu').fadeIn(2000)}, 5000);
    }
    console.log(i);
    i++;
  });
});
