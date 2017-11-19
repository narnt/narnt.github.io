var proverbs=new Array('Оказавшись дома, первым делом я подумала о том, чтобы проверить направления. Но на столе лежала какая-то записка, и первой я прочла ее.', 'Тяжело сконцентрироваться, но в ней что-то о том, что сестра уехала на несколько дней в командировку, и еще о том, чтобы я не забывала поесть.', 'Значит, я теперь здесь одна с Дори.', 'Достаю из ящика направления и не верю своим глазам. Каждое из двух оставшихся выдано Аннет Михельсон. Кто это такая, и откуда взялась фамилия?', 'Надо позвонить в «Один день».');
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
