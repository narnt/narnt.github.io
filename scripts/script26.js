var proverbs=new Array('Я с усилием всматриваюсь в пространство. Стало будто немного светлее, и я разглядела другие растения.', 'Стало еще светлее, и на некоторых из них распускаются цветы.', 'Я наклоняюсь посмотреть на крупный пион, как вдруг…');
snow_intensive=400;
    snow_speed=10000;
    snow_src=new Array('../images/pion.gif');
function snow_start() {
    snow_id=1;
    snow_y=$("#container").height()-30;
    setInterval(function() {
        snow_x=Math.random()*document.body.offsetWidth-100;
        snow_img=(snow_src instanceof Array ? snow_src[Math.floor(Math.random()*snow_src.length)] : snow_src);
        snow_elem='<img class="png" id="snow'+snow_id+'" style="position:absolute; left:'+snow_x+'px; top:0;z-index:10000" src="'+snow_img+'"/>';
        $("#container").append(snow_elem);
        snow_move(snow_id);
        snow_id++;
    },snow_intensive);
}
function snow_move(id) {
    $('#snow'+id).animate({top:snow_y,left:"+="+Math.random()*100},snow_speed,function() {
    $(this).empty().remove();
});}
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if(!canPlayMmp3) {
 audio.src = "../music/orangery.ogg";
}
  audio.src = "../music/orangery.mp3";
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
  $('#pion').click(function(){
      snow_start();
  });
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
      document.getElementById('button-next').style.display='block'; $('#block1').fadeOut(5000); $('#pion').fadeIn(2000); fading();
    }
    console.log(i);
    i++;
  });
});
