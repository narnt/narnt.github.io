var proverbs=new Array('— Здравствуйте, я пришла проводить вас в «Один день».', '— Один день?', '— На консультацию.', '— Да, точно…', 'Проводить в один день… Звучит жутко. Я не была до конца уверена, что кто-то действительно придет за мной, но это произошло.', '— Мне нужно что-то взять с собой? Паспорт?', '— Нет, у нас уже есть ваши данные.', '— Откуда?', '— Мы узнали их по адресу, а его по номеру.', 'Значит, я зря назвала фальшивое имя? Неужели можно так просто все узнать о человеке?', 'Наверняка это серьезная организация, раз они так быстро все узнали.', '— Подождите немного, я переоденусь…');
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
