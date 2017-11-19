var proverbs=new Array('');
$(document).ready(function(){
  var i = 0;
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
