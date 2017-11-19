var proverbs=new Array('Привет, Меня зовут Аннет и я очень люблю свою работу и свою жизнь. Мою лучшую подругу зовут Лиза, и пару раз в году мы с ней ездим в горы.');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/annlis.ogg";
}
  audio.src = "../music/annlis.mp3";
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
      $('#text').fadeOut(5000);
      setTimeout(function() {$('#button-menu').fadeIn(2000)}, 5000);
      $('#button-menu').click(function(event){
        fading();
    		event.preventDefault();
    		linkLocation = this.href;
    		$('body').fadeOut(5000, function(){window.location = 'menu.html'});
      });
    };
    console.log(i);
    i++;
  });
});
