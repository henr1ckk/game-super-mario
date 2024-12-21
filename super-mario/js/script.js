const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const clouds2 = document.querySelector('.clouds2');
const grama = document.querySelector('.grama');
const grama2 = document.querySelector('.grama2');
const arvore = document.querySelector('.arvore');
const bird = document.querySelector('.bird')
const bird2 = document.querySelector('.bird2');
const bg = document.querySelector('.bg');
const terra = document.querySelector('.terra');
const terra2 = document.querySelector('.terra2');
const terra3 = document.querySelector('.terra3');


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    },1000);
};

const loop = setInterval(() =>{



    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const clouds2Position = clouds2.offsetLeft
    const arvorePosition = arvore.offsetLeft;
    const gramaPosition = grama.offsetLeft;
    const grama2Position = grama2.offsetLeft;
    const birdPosition = bird.offsetLeft;
    const bird2Position = bird2.offsetLeft;
    const bgPosition = bg.offsetLeft;
    
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation ='none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation ='none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        arvore.style.animation ='none';
        arvore.style.left = `${arvorePosition}px`;

        grama.style.animation ='none';
        grama.style.left = `${gramaPosition}px`;

        bg.style.animation ='none';
        bg.style.left = `${bgPosition}px`;

        grama2.style.animation ='none';
        grama2.style.left = `${grama2Position}px`;

        clearInterval(loop);
    }

},10);

document.addEventListener('click', jump);