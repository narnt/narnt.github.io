let proverbs = new Array('Идет снег. Крупные белые хлопья медленно опускаются на мои волосы, нос, плечи.', 'Они ведь знают обо мне почти все. Да я сама видела направление, в нем было мое имя и паспортные данные. Что за нелепость.', 'Сейчас направление забрали в обмен на справку, другие я оставила дома. Я абсолютно уверена, что в них мое паспортное имя, сама же все читала и проверяла.', 'И что я такое должна бояться узнать о себе? Ведь в этой справке ничего обо мне нет.');

audioContent('rythm', true);

function snow() { // переписать на js
    let snow_intensive = 400;
    let snow_speed = 10000;
    let snow_src = new Array('../images/snow.png', '../images/snow1.png', '../images/snow2.png');

    function snow_start() {
        snow_id = 1;
        snow_y = $("#container").height() - 30;
        setInterval(function() {
            snow_x = Math.random() * document.body.offsetWidth - 100;
            snow_img = (snow_src instanceof Array ? snow_src[Math.floor(Math.random() * snow_src.length)] : snow_src);
            snow_elem = '<img class="png" id="snow' + snow_id + '" style="position:absolute; left:' + snow_x + 'px; top:0;z-index:10000" src="' + snow_img + '"/>';
            $("#container").append(snow_elem);
            snow_move(snow_id);
            snow_id++;
        }, snow_intensive);
    }

    function snow_move(id) {
        $('#snow' + id).animate({ top: snow_y, left: "+=" + Math.random() * 100 }, snow_speed, function() {
            $(this).empty().remove();
        });
    }
    return snow_start();
}

snow();
document.addEventListener('DOMContentLoaded', slider('#button-next'));