const mel = document.getElementById('progressing');
let counter = 0;
let random = Math.floor(Math.random() * (15-3) + 3);
function progression(a) {
    counter = counter + a;
    mel.style.width = `${counter}px`;
}
setInterval(() => progression(0.1), random);