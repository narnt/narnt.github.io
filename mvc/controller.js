let Switch = document.getElementById('nextSlide');
let backSwitch = document.getElementById('backSlide');

function cli(sceneNum) {
    let i = 0;
    Switch.addEventListener('click', function() {
        Switch.classList.add('active');
        let data = scenes;
        console.log(phrases.length);
        View.render(Switch.previousElementSibling, data, sceneNum, i); //блок с текстом должен быть между кнопками
        if (i <= phrases.length || i < data.length) {
            buttonNext.style.opacity = 0;
            console.log(phrases.length);
        } else if (i = phrases.length) {
            buttonNext.style.opacity = 1;
            console.log(phrases.length);
            console.log(phrases);
            i = 0;
            // showing(console.log, '#button-next', 100);
        }
        i++;
    })
    backSwitch.addEventListener('click', function() {
        backSwitch.classList.add('active');
        if (i > 1) {
            i--;
            View.render(backSwitch.nextElementSibling, data, sceneNum, (i - 1));
            console.log(i);
        }
    })
}

let buttonNext = document.querySelector('#button-next');

let n = 0;

buttonNext.addEventListener('click', () => {
        cli(n);
        View.wrapper(scenes, n);
        // Audio.music(scenes, n);
        buttonNext.style.opacity = 0;

        n++;
    })
    // Audio.soundSwitch;