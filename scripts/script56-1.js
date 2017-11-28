let proverbs = new Array('Прихожу домой. Снова это чувство нереальности… Что на этот раз?', 'Присматриваюсь и замечаю, что вещи моей сестры пропали. Куда они ее дели?!', 'Хорошо, хотя бы Дори осталась со мной. Теперь я буду гулять с ней утром и вечером, надеюсь, она тоже привыкнет.');
var audio = document.createElement("audio");
var canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
if (!canPlayMmp3) {
    audio.src = "../music/2.ogg";
}
audio.src = "../music/2.mp3";
audio.loop = true;
audio.play();

function fading() {
    var timer = setInterval(function() {
        audio.volume = audio.volume - 0.01;
        if (audio.volume <= 0.01) {
            clearInterval(timer);
        }
    }, 50);
};
$(document).ready(function() {
    var i = 0;
    $('#backSlide').click(function() {
        i--;
        $('#slide').text(proverbs[i - 1]);
        console.log(i);
    });
    $('#nextSlide').click(function() {
        if (i < proverbs.length) {
            $('#slide').text(proverbs[i]);
        } else if (i = proverbs.length) {
            document.getElementById('button-next').style.display = 'block';
            fading();
        }
        console.log(i);
        i++;
    });
});
$(document).ready(function() {
    $("#button-next").click(function(event) {
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(7000, function() { window.location = 'page57-1.html' });
    });
});