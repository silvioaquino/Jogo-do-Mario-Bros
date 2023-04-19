const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const nuvem = document.querySelector('.nuvem');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500); 
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const nuvemPosition = +window.getComputedStyle(nuvem).bottom.replace('px', '');

    if (pipePosition <= 75 && pipePosition > 0 && marioPosition < 90) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './image/g.O.png';
        mario.style.width = '50px';
        mario.style.marginLeft = '30px';

        nuvem.style.animation = 'none';
        nuvem.style.bottom = `${nuvemPosition}px`;
        nuvem.src = './image/gameover7.png';
        nuvem.style.marginLeft = '35%';

        clearInterval(loop);
    }

}, 10);


document.addEventListener('keydown', jump);