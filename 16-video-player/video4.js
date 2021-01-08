const speed4 = document.querySelector('.speed');
const bar4 = document.querySelector('.speed-bar');
const video4 = document.querySelector('.flex');

function handleMove(e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
  
    bar4.style.setProperty('height', `${height}`);   // isto: bar4.style.height = height;
    bar4.textContent = playbackRate.toFixed(2) + '×';
    video4.playbackRate = playbackRate;
  }

speed4.addEventListener('mousemove', handleMove);
