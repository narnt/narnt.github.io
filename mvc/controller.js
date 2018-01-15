let Switch = document.getElementById('nextSlide');
let backSwitch = document.getElementById('backSlide');

function changeText(sceneNum) {
    let i = 0;
    let data = scenes;
    Switch.addEventListener('click', function() {
        Switch.classList.add('active');
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
        changeText(n);
        View.wrapper(scenes, n);
        // Audio.music(scenes, n);
        buttonNext.style.opacity = 0;
        n++;
    })
    // Audio.soundSwitch;