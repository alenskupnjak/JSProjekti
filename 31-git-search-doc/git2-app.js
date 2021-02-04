const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(username) {
  try {
    const { data } = await axios.get(APIURL + username);
    createUser(data);
    getRepos(username);
  } catch (error) {
    createErrorCard('Takav korisnik ne postoji');
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios.get(APIURL + username + '/repos');
    console.log('xxx');

    console.log(data);

    addRepoToCard(data);
  } catch (error) {
    createErrorCard('Problemi sa fetch repo!');
  }
}

// dodaj Poruku u DOM
function createErrorCard(msg) {
  const cardHTML = `
  <div class="card">
    <h2>${msg}</h2>
  <div>
  `;
  main.innerHTML = cardHTML;
}

// Kreiramo korisnika
function createUser(user) {
  const cardHTML = `<div class="card">
  <img src="${user.avatar_url}" alt="${user.name}" class="avatar">

  <div class="user-info">
    <h2>${user.name}</h2>
    <p>${user.bio}</p>
    <ul>
      <li>${user.name} <strong>folll</strong></li>
      <li>${user.url}<strong>Followinf</strong></li>
      <li>${user.location}<strong>Repos</strong></li>
    </ul>
    <div id="repos"></div>
  </div>
</div>`;

  main.innerHTML = cardHTML;
}

// dodavanje ropo direktorija u DOM
function addRepoToCard(repo) {
  console.log('*****************');

  console.log(repo);
  const reposElement = document.getElementById('repos');
  console.log();
  

  repo
  .slice(0, 10)
  .forEach((element) => {
    const repoLink = document.createElement('a');
    repoLink.classList.add('repo');
    repoLink.href = element.html_url;
    repoLink.target = '_blank';
    repoLink.innerText = element.name;
    reposElement.appendChild(repoLink);
  });
}

// EVENT lisener
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
  }
});
