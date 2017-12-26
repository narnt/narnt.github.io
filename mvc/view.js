let p = document.createElement('p');
let phrases = 0;
let View = {
    render: function(template, model, prop, text) {
        let items = [];
        for (let key in model) {
            items.push(model[key]); // каждая сцена
        }
        let scenes = items[prop]; // текущая сцена
        let prev = items[prop - 1]; //предыдущая сцена
        phrases = scenes.content; // массив с текстом сцены
        template.appendChild(p);
        p.innerText = phrases[text];
        if (scenes.wrapper) {
            document.querySelector('.wrapper').classList.add(scenes.wrapper);
            if (prop > 0) {
                document.querySelector('.wrapper').classList.remove(prev.wrapper);
            }
        }
        if (scenes.choice) {
            let choi = document.createElement('div');
            document.querySelector('.wrapper').appendChild(choi);
            choi.classList.add('choice');
            choi.innerHTML = scenes.choice;
        }
    }
}