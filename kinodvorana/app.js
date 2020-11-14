const container = document.querySelector('.container');
const seates = document.querySelectorAll('.row .seat:not(.occupied)');
const seatesProba = document.querySelectorAll('.seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = parseInt(movieSelect.value);

populateIU();

// popuni dvorona iz local staorage sa podacima
function populateIU() {
  const selectedSeats = JSON.parse(localStorage.getItem('kinoSjedala'));
  if (selectedSeats) {
    seates.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = +localStorage.getItem('kinoIndex');
  const selectedPrice = +localStorage.getItem('kinoPrice');

  movieSelect.selectedIndex = selectedMovieIndex;
  ticketPrice = selectedPrice;
  updateSelectedCount();
}

// Save selected movie and price
function setMovieData(movieIndex, price) {
  localStorage.setItem('kinoIndex', movieIndex);
  localStorage.setItem('kinoPrice', price);
}

// update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  // kopiranje selektiranih sjedala u polje
  const kopijaSjedala = [...selectedSeats].map((seat) => {
    return [...seates].indexOf(seat);
  });

  // spremamo u local storage
  localStorage.setItem('kinoSjedala', JSON.stringify(kopijaSjedala));

  const selectedSeatsCounts = selectedSeats.length;
  count.innerHTML = selectedSeatsCounts;
  // racunamu ukupnu cijenu svih rezerviranih karata
  total.innerHTML = selectedSeatsCounts * movieSelect.value;
}

// EVENT LISENER
// movie event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// seat eventlisener
container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
    console.log(e.target);
  }
});

// vježba

const nacin1 = [...document.querySelectorAll('.seat')];
const nacin2 = Array.from(document.querySelectorAll('.seat'));


const nacin3 = document.querySelectorAll('.seat');

for (let a of nacin3) {

  console.log('for (let a of nacin3)',a);
  
}

// nacin1.forEach( e=> {
//   console.log(e);
  
// })

// nacin2.forEach( e=> {
//   console.log('x',e);
  
// })







// var visualDomElts = document.body.getElementsByTagName('*').forEach((e) => {
//   console.log(e);
// });

// container.array.forEach(e=>{
//   console.log(e);

// })

// console.log(container.firstChild)
// console.log(seatesProba[0]);
// console.log(seatesProba[6].previousSibling.value);
// console.log(seatesProba[6]);
// console.log(seatesProba[6].nextSibling.nodeValue);
// console.log(seatesProba.lastChild);

var initElement = document.getElementsByTagName('html')[0];
console.log(initElement);

var json = mapDOM(initElement, true);
console.log(json);

initElement = '<div><span>text</span>Text2</div>';
json = mapDOM(initElement, true);
console.log(json);



function mapDOM(element, json) {
  var treeObject = {};

  // If string convert to document Node
  if (typeof element === 'string') {
    if (window.DOMParser) {
      parser = new DOMParser();
      docNode = parser.parseFromString(element, 'text/xml');
    } // Microsoft strikes again
    else {
      docNode = new ActiveXObject('Microsoft.XMLDOM');
      docNode.async = false;
      docNode.loadXML(element);
    }
    element = docNode.firstChild;
  }

  //Recursively loop through DOM elements and assign properties to object
  function treeHTML(element, object) {
    object['type'] = element.nodeName;
    var nodeList = element.childNodes;
    if (nodeList != null) {
      if (nodeList.length) {
        object['content'] = [];
        for (var i = 0; i < nodeList.length; i++) {
          if (nodeList[i].nodeType == 3) {
            object['content'].push(nodeList[i].nodeValue);
          } else {
            object['content'].push({});
            treeHTML(
              nodeList[i],
              object['content'][object['content'].length - 1]
            );
          }
        }
      }
    }
    if (element.attributes != null) {
      if (element.attributes.length) {
        object['attributes'] = {};
        for (var i = 0; i < element.attributes.length; i++) {
          object['attributes'][element.attributes[i].nodeName] =
            element.attributes[i].nodeValue;
        }
      }
    }
  }
  treeHTML(element, treeObject);

  return json ? JSON.stringify(treeObject) : treeObject;
}
