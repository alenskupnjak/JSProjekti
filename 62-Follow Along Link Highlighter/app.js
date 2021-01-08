const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLink(e) {
  console.log(e);
  console.dir(e.target);
  
  
  // const linkCoords = this.getBoundingClientRect();
  const linkCoords = e.target.getBoundingClientRect();
  console.log(window.scrollX,window.scrollY);
  console.log(linkCoords);
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX

  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

}

// Stavljam na sve 
document.querySelectorAll('a').forEach(data => {
  data.addEventListener('mouseenter', highlightLink)
});