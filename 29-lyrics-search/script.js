const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('nextprev');

const apiURL = 'https://api.lyrics.ovh';

// Search by song or artist
async function searchSongs(term) {
  const res = await fetch(`${apiURL}/suggest/${term}`);
  const data = await res.json();
  console.log(data);
  showData(data);
}

// Show song and artist in DOM
function showData(fetchdata) {
  let txtHTML = '';
  result.innerHTML = '';
  const lista = document.createElement('ul');
  lista.classList.add('songs');

  fetchdata.data.forEach((song) => {
    txtHTML += `<li>
      <span><strong class="pokus">${song.artist.name}</strong> - ${song.title}</span>
      <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}" >Povuci rijeći</button>
    </li>`;
  });
  lista.innerHTML = txtHTML;
  result.appendChild(lista);

  //  DRUGI NAČIN
  // result.innerHTML = `;
  //   <ul class="songs">
  //     ${data.data
  //       .map((song) => {
  //         return `<li>
  //     <span><strong>${song.artist.name}</strong> - ${song.title}</span>
  //     <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
  //   </li>`;
  //       }).join('')}
  //   </ul>
  // `;

  more.innerHTML = '';
  if (fetchdata.prev) {
    more.innerHTML = `<button class="btn" onclick="getMoreSongs('${fetchdata.prev}')">Prev</button>`;
  }
  if (fetchdata.next) {
    more.innerHTML += `<button class="btn" onclick="getMoreSongs('${fetchdata.next}')">Next</button>`;
  }

  //  orginal
  // if (fetchdata.prev || fetchdata.next) {
  //   more.innerHTML = `
  //     ${
  //       fetchdata.prev
  //         ? `<button class="btn" onclick="getMoreSongs('${fetchdata.prev}')">Prev</button>`
  //         : ''
  //     }
  //     ${
  //       fetchdata.next
  //         ? `<button class="btn" onclick="getMoreSongs('${fetchdata.next}')">Next</button>`
  //         : ''
  //     }
  //   `;
  // } else {
  //   more.innerHTML = '';
  // }
}

// Get prev and next songs
async function getMoreSongs(url) {
  const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
  const data = await res.json();
  showData(data);
}

// Get lyrics for song
async function getLyrics(artist, songTitle) {
  const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
  const data = await res.json();
  console.log(data);
  console.log(data.lyrics);
  console.log('function getLyrics(artist, songTitle)', data);

  if (data.error) {
    result.innerHTML = data.error;
  } else {
    // let lyrics = data.lyrics;
    // lyrics = data.lyrics.replace(/(\n)/g, '<br>');
    // lyrics = data.lyrics.replace(/(\r|\n)/g, '<br>');
    lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

    result.innerHTML = `
            <h2><strong>${artist}</strong> - ${songTitle}</h2>
            <span>${lyrics}</span>
        `;
  }

  more.innerHTML = '';
}

// Event listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();

  more.innerHTML = '';
  result.innerHTML = '';
  const searchTerm = search.value.trim();

  if (!searchTerm) {
    alert('Please type in a search term');
  } else {
    searchSongs(searchTerm);
  }
});

// Get lyrics button click
result.addEventListener('click', (e) => {
  console.log("result.addEventListener('click')");

  console.log(e);
  const clickedEl = e.target;
  console.log(clickedEl.className);

  if (clickedEl.tagName === 'BUTTON') {
    const artist = clickedEl.getAttribute('data-artist');
    const songTitle = clickedEl.getAttribute('data-songtitle');

    getLyrics(artist, songTitle);
  }
});
