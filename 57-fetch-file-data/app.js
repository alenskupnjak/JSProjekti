const inputSearch = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
// const dataFile =
//   'https://github.com/alenskupnjak/JSProjekti/blob/master/57-fetch-file-data/cities.json';

const cities = [];
fetch('cities.json')
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    cities.push(...data);
  });

console.log(cities);

function pronadiGrad(trazi) {
  // console.log(cities);
  return cities.filter((data) => {
    console.log(data.city);
    const regex = new RegExp(trazi, 'gi');
    return data.city.match(regex) || data.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches(e) {
  e.preventDefault();
  const podatak = pronadiGrad(e.target.value);
  const html = podatak
    .map((data) => {
      const regex = new RegExp(e.target.value, 'gi');
      const cityName = data.city.replace(
        regex,
        `<span class="hl">${e.target.value}</span>`
      );
      return `
    <li>
    <span class="name">${cityName}, ${data.state}<span>
    <span class="population"> ${numberWithCommas(data.population)}<span>
    </li>
    `;
    })
    .join('');

  suggestions.innerHTML = html;

  console.log(e.target);
  console.log(e.target.value);
}

inputSearch.addEventListener('change', displayMatches);
inputSearch.addEventListener('keyup', displayMatches);
