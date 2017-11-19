var proverbs=new Array('Бегу, пока не спотыкаюсь и не падаю, уткнувшись лицом в подушку.', 'Откуда здесь подушка?', 'Все тело ноет, но я переворачиваюсь на спину и вижу');
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
      document.getElementById('button-next').style.display='block';
    }
    console.log(i);
    i++;
  });
});
