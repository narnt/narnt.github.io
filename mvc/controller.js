let Switch = document.getElementById('nextSlide');
let backSwitch = document.getElementById('backSlide');

function cli(sceneNum) {
    let i = 0;
    Switch.addEventListener('click', function() {
        Switch.classList.add('active');
        let data = scenes;
        View.render(Switch.previousElementSibling, data, sceneNum, i); //блок с текстом должен быть между кнопками
        i++;
    })
    backSwitch.addEventListener('click', function() {
        backSwitch.classList.add('active');
        i--;
        View.render(backSwitch.nextElementSibling, data, sceneNum, (i - 1));
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