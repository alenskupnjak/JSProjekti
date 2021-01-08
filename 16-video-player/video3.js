const player3 = document.querySelector('.player3');
const video3 = document.querySelector('.viewer');
const progress3 = document.querySelector('.proggres');
const progressBar = player3.querySelector('.progress__filled');
const toggle = player3.querySelector('.toggle');
const skipButtons = player3.querySelectorAll('[data-skip]');
const ranges = player3.querySelectorAll('.player__slider');

console.log(skipButtons);

/* Build out functions */
function togglePlay() {
  console.dir(video3);

  if (video3.paused) {
    video3.play();
  } else {
    video3.pause();
  }
  // const method = video3.paused ? 'play' : 'pause';
  // video3[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon);
  toggle.textContent = icon;
}

function skip() {
  video3.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  console.dir(video3);

  video3[this.name] = this.value;
  console.log(this.name);
  console.log(this.value);
}

function handleProgress() {
  const percent = (video3.currentTime / video3.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress3.offsetWidth) * video3.duration;
  video3.currentTime = scrubTime;
}

/* Hook up the event listeners */
video3.addEventListener('click', togglePlay);
video3.addEventListener('play', updateButton);
video3.addEventListener('pause', updateButton);
video3.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach((button) => button.addEventListener('click', skip));
ranges.forEach((range) => range.addEventListener('change', handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener('mousemove', handleRangeUpdate)
);

let mousedown = false;
progress3.addEventListener('click', scrub);
progress3.addEventListener('mousemove', (e) => {
  if (mousedown) {
    scrub(e);
  }
});

progress3.addEventListener('mousedown', () => (mousedown = true));
progress3.addEventListener('mouseup', () => (mousedown = false));
