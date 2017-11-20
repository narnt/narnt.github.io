let audio = document.createElement("audio");

function audioContent(fileName, loop) {
    let canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
    if (!canPlayMmp3) {
        audio.src = "../music/" + fileName + ".ogg";
    }
    audio.src = "../music/" + fileName + ".mp3";
    audio.loop = loop;
    audio.play();
}

function fading() {
    let timer = setInterval(function() {
        audio.volume = audio.volume - 0.01;
        if (audio.volume <= 0.01) {
            clearInterval(timer);
        }
    }, 50);
};

let slider = function() {
    let i = 0;
    document.querySelector("#backSlide").addEventListener('click', function() {
        if (i > 1) {
            i--;
            document.querySelector("#slide").innerText = proverbs[i - 1];
        }
        console.log(i);
    })
    document.querySelector("#nextSlide").addEventListener('click', function() {
        if (i < proverbs.length - 1) {
            document.querySelector("#slide").innerText = proverbs[i];
            i++;
        } else if (i = proverbs.length) {
            document.querySelector("#button-next").style.display = 'block';
            fading();
        }
        console.log(i);
    })
}

function hiding(func, sec) {
    var start = Date.now();
    document.querySelector("body").style.opacity = 1;
    setInterval(function() {
        var timePassed = Date.now() - start;

        if (document.querySelector("body").style.opacity <= 0) {
            clearInterval(hiding);
            return func();
        }
        document.querySelector("body").style.opacity = document.querySelector("body").style.opacity - 0.05;
        console.log(document.querySelector("body").style.opacity);
    }, sec)
}