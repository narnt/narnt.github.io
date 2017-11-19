var proverbs=new Array('На следующую ночь я внимательно прочитала инструкции для получения справок. Из всех заведений мне подходили только круглосуточные.', 'И, что удивительно, такие в списке были. Но справок целых три, и их нельзя получить в одном месте.', 'Придется составить расписание. На сегодня запланирую посетить адрес, который ближе всего.', 'Я не стала звонить в «Один день» и решила справиться своими силами.');
snow_intensive=400;
    snow_speed=10000;
    snow_src=new Array('../images/box1.png', '../images/box2.png', '../images/box3.png', '../images/leaf.png');
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
  $('#box').click(function(){
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
      document.getElementById('button-next').style.display='block'; fading();
    }
    console.log(i);
    i++;
  });
});
