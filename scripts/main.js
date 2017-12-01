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

function soundSwitch() {
    let sound = document.createElement('div');
    sound.classList.add('sound');
    sound.innerHTML = '&#128264';
    document.querySelector('.wrapper').appendChild(sound);
    console.log(sound);
    sound.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            sound.classList.remove('paused');
        } else {
            audio.pause();
            sound.classList.add('paused');
        }
    })
}
soundSwitch();

let slider = function(el) {
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
            document.querySelector("#slide").innerText = '';
            document.querySelector(el).style.display = 'block';
            fading();
        }
        console.log(i);
    })
}

function hiding(func, el, sec) {
    document.querySelector(el).style.opacity = 1;
    setInterval(function() {
        if (document.querySelector(el).style.opacity <= 0) {
            clearInterval(hiding);
            return func();
        }
        document.querySelector(el).style.opacity = document.querySelector(el).style.opacity - 0.05;
        console.log(document.querySelector(el).style.opacity);
    }, sec)
}

function showing(func, el, sec) {
    i = 0;
    setInterval(function() {
        if (document.querySelector(el).style.opacity >= 1) {
            clearInterval(showing);
            return func();
        }
        document.querySelector(el).style.opacity = i;
        i = i + 0.05;
        console.log(document.querySelector(el).style.opacity);
    }, sec)
}