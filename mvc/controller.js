let Switch = document.getElementById('nextSlide');
let backSwitch = document.getElementById('backSlide');

function cli(sceneNum) {
    let i = 0;
    let data = scenes;
    Switch.addEventListener('click', function() {
        Switch.classList.add('active');
        if (i < data.length || i < phrases.length) {
            View.render(Switch.previousElementSibling, data, sceneNum, i); //блок с текстом должен быть между кнопками
            i++;
            buttonNext.style.opacity = 0;
            console.log(phrases.length);
        } else if (i = phrases.length) {
            buttonNext.style.opacity = 1;
            console.log(phrases.length);
            // showing(console.log, '#button-next', 100);
        }
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

function bb() {
    let n = 0;
    buttonNext.addEventListener('click', () => {
        cli(n);
        buttonNext.style.opacity = 0;
        n++;
    })
}
bb();