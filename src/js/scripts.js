const mario = document.querySelector('.mario');  
const pipe = document.querySelector('.pipe') 
const cloud = document.querySelector('.cloud');

const jump = function() {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump')
  }, 500)
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const cloudPosition = cloud.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 80) { 
    pipe.style.animtion = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animtion = 'none';
    mario.style.bottom = `${marioPosition}px`;
    mario.src = './images/game-over.png';
    mario.style.width = '110px';   
    mario.style.marginLeft = '30px';   

    cloud.style.animtion = 'none';
    cloud.style.left = `${cloudPosition}px`;

    clearInterval(loop); 
  }
}, 10) 

document.addEventListener('keydown', jump);