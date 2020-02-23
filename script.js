let keys = document.querySelectorAll('.key');
let result = [];

keys.forEach(element => {
    element.addEventListener('click', function(i) {
        let audio = document.querySelector(
            `audio[class="${i.target.className}"]`
        );
        if (i.target.className == audio.className) {
            audio.pause();
            audio.currentTime = 0.0;
            audio.play();
            localStorage.setItem('result', JSON.stringify(result));
        };
    });
});

let btn = document.querySelector('.result');
btn.addEventListener('click', function(e) {
    if(localStorage.getItem('result')) {
        result = JSON.parse(localStorage.getItem('result'))
    }
})