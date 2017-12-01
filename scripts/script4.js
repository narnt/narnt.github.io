let proverbs = new Array('— Вот, позвони обязательно! — протягивает листок мне. — Там тебе точно помогут!', 'Помогут.', 'Нужна ли мне помощь?', 'Нужна ли? Я не работаю, не учусь, выхожу из дома только выгулять собаку. Мои интересы — английские сериалы, сон и еда. Неужели я хочу жить именно так?', '');

audioContent('walk', true);

document.addEventListener('DOMContentLoaded', slider('#choice'));

// $(document).ready(function() {
//     $('#chapter').fadeOut(5000);
//     var i = 0;
//     $('#backSlide').click(function() {
//         i--;
//         $('#slide').text(proverbs[i - 1]);
//         console.log(i);
//     });
//     $('#nextSlide').click(function() {
//         if (i < proverbs.length) {
//             $('#slide').text(proverbs[i]);
//         } else if (i = proverbs.length) {
//             document.getElementById('choice').style.display = 'block';
//             fading();
//         }
//         console.log(i);
//         i++;
//     });
// });