let p = document.createElement('p');
let phrases = 0;
let audio = document.createElement("audio"),
    sound = document.createElement('div');
sound.classList.add('sound');
sound.innerHTML = '&#128264';
document.querySelector('.wrapper').appendChild(sound);
let View = {
    render: function(template, model, prop, text) {
        buttonNext.style.opacity = 0;
        let items = [];
        for (let key in model) {
            items.push(model[key]); // каждая сцена
        }
        let scene = items[prop];
        let prev = items[prop - 1]; //предыдущая сцена

        console.log(scene);
        if ('content' in scene) {
            phrases = scene.content; // массив с текстом сцены
        }
        template.appendChild(p);
        if (phrases[text] !== undefined) {
            p.innerText = phrases[text];
        }
        if (phrases[text] == undefined) {
            buttonNext.style.opacity = 1;
        }
        if (scenes.choice) {
            let choi = document.createElement('div');
            document.querySelector('.wrapper').appendChild(choi);
            choi.classList.add('choice');
            choi.innerHTML = scenes.choice; // разветвление сюжета
        }
    },
    wrapper: function(model, prop) {
        let items = [];
        for (let key in model) {
            items.push(model[key]); // каждая сцена
        }
        let scenes = items[prop];
        let prev = items[prop - 1];
        if (scenes.wrapper) {
            document.querySelector('.wrapper').classList.add(scenes.wrapper);
            if (prop > 0 && scenes.wrapper != prev.wrapper) {
                document.querySelector('.wrapper').classList.remove(prev.wrapper);
            }
        }
    }
}

let Audio = {
    music: function(model, prop) {
        let items = [];
        for (let key in model) {
            items.push(model[key]); // каждая сцена
        }
        let scenes = items[prop];
        if (scenes.music) {

            function audioContent() {
                let canPlayMmp3 = !!audio.canPlayType && audio.canPlayType('audio/mp3') != "";
                if (!canPlayMmp3) {
                    audio.src = "music/" + scenes.music + ".ogg";
                }
                audio.src = "music/" + scenes.music + ".mp3";
                audio.loop = scenes.loop;
                audio.play();
                if (playState = true) {
                    audio.muted = true;
                    playState = false;
                    console.log(playState + ' ' + 1);
                } else if (playState = false) {
                    audio.play();
                    playState = true;
                    console.log(playState + ' ' + 2);
                }
                console.log(document.querySelectorAll('audio'));
            }
            audioContent();
        }
    },
    soundSwitch: sound.addEventListener('click', function() {
        if (playState = true) {
            // audio.paused = true;
            playState = false;
            console.log(playState + ' ' + 5);
            sound.classList.add('paused');
        } else if (audio.pause()) {
            // audio.muted = false;
            // audio.paused = false;
            playState = true;
            console.log(playState + ' ' + 4);
            sound.classList.remove('paused');
        }

        console.log(playState + ' ' + 6);
    }),
    playState: ''
}