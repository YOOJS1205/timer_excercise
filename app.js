const secondBox = document.querySelector('.second-box');
const startButton = document.querySelector('.start');
const resetButton = document.querySelector('.reset');
const startImage = document.querySelector('.start-image');

let second = 10;

secondBox.addEventListener('click', () => {
    secondBox.innerText = second;
    startButton.classList.remove('disabled');
    resetButton.classList.remove('disabled');
    startButton.classList.add('start-able');
    resetButton.classList.add('reset-able');
});

function changeSecond() {
    secondBox.innerText = second;
    if (second >= 0) {
        if (secondBox.innerText == 00) {
            return
        } else {
            setInterval(() => secondBox.innerText = `0${second--}`, 1000);
        }
    }
}

startButton.addEventListener('click', e => {
    if (secondBox.innerText == 0) {
        e.preventDefault();
    } else {
        startButton.textContent = 'PAUSE';
        startImage.src = './images/icon-stop.png';
        startButton.style.backgroundColor = '#15C2B8';
        setTimeout(() => {
            changeSecond();
        }, 0);
    }
})

resetButton.addEventListener('click', () => {
    if (secondBox.innerText == 0) {
        e.preventDefault();
    } else {
        secondBox.innerText = '00';
    }
})