audioContent('pad', true);

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#b1").addEventListener('click', function(event) {
        fading();
        event.preventDefault();
        linkLocation = this.href;
        hiding(function() { window.location = 'chapters.html' }, 100);
    });

    document.querySelector("#b2").addEventListener('click', function(event) {
        fading();
        event.preventDefault();
        linkLocation = this.href;
        hiding(function() { window.location = 'app.html' }, 100);
    });

    document.querySelector("#b3").addEventListener('click', function(event) {
        fading();
        event.preventDefault();
        linkLocation = this.href;
        hiding(function() { window.location = 'music.html' }, 100);
    });

});