class Product {
  // title = 'Default';
  // imageURL;
  // description;
  // price;

  constructor(title, image, desc, cijena) {
    this.title = title;
    this.imageURL = image;
    this.description = desc;
    this.price = cijena
  }
}


class ElementAtribute {
  constructor(attrName, attrValue) {
   this.name = attrName;
   this.value = attrValue
  }
}
class Component  {
  constructor(renderHoohId) {
    this.hook = renderHoohId
  }

  createRootElement(tag, cssClasses, atributes){
    console.log(atributes);
    
    const rootElement = document.createElement(tag);
    if (cssClasses){
      rootElement.className = cssClasses;
    }
    if (atributes && atributes.lenht >0) {
      for ( const data of atributes){
        rootElement.setAtributes(data.name, data.value)
      }
    }
    document.getElementById(this.hook).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  // polje u koje cemo spremati odabrane proizvode za kupnju
  items = [];

  // ako je klasa child a nema konstruktora super se referira na paretn klasu, u ovom slicaju Component
  constructor (renderHookId) {
    super(renderHookId); // referira se i prosljeduje vrujednost u parent constructor
  }

  get totalAmount(){
    const sum = this.items.reduce((prevValue, curItem)=>{
      return prevValue + curItem.price
    }, 0)
    return sum;
  }

  addProduct(product) {
    this.items.push(product);
    console.log(this.items);
    // toFixed zakruzuje na dvije decimal
    this.totalOutput.innerHTML =  `<h2>Total \ ${this.totalAmount.toFixed(2)}</h2>`
  }

  // static addProductPokus(product) {
  //   this.items.push(product);
  //   console.log(this.items);
  //   // toFixed zakruzuje na dvije decimal
  //   this.totalOutput.innerHTML =  `<h2>Total \ ${this.totalAmount.toFixed(2)}</h2>`
  // }

  render() {
    // nesto jednostavniji pristup
    const cartEl = this.createRootElement('section', 'cart')
                          // inicira <section></section>
                          // const cartEl = document.createElement('section');
                          // dodaje class="product-item" u <section>/section> =>  <section class="product-item">/section> 
                          // cartEl.className='cart';

    cartEl.innerHTML=`
    <h2>Total \ ${0}</h2>
    <button> Order Now </button>
    `
    // ovdje definiramo <h2></h2>  na koju cemo se naknadno dodavati vrijednosti
    this.totalOutput = cartEl.querySelector('h2');
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToChart () {
    console.log('Adding product to chart')
    App.addProductToChart(this.product);
    // ShoppingCart.addProduct(this.product); ovo ne moze jer nije inicijaliiran
  }

  // addToChartPokus = () => {
  //   console.log('Ovo ja dodajem')
  //   console.log(this.product);
  //   App.addProductToChartPokus(this.product);
  //   // ShoppingCart.addProduct(this.product); ovo ne moze jer nije inicijaliiran
  // }

  render() {
    // inicira element <li></li>
    const prodEl = document.createElement('li');

    // dodaje class="product-item" u <li>/li> =>  <li class="product-item">/li> 
    prodEl.className = 'product-item';

    // definiramo sami html kod
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageURL}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>${this.product.price}</h3>
              <p>${this.product.description}</p>
               <button>Addo to chart </button>
            </div>
        </div>
    `;
    const addChartButton = prodEl.querySelector('button')
    addChartButton.addEventListener('click',this.addToChart.bind(this))
    
    // const addChartButtonMoje = document.getElementById('moj')
    // addChartButtonMoje.addEventListener('click',this.addToChartPokus())
    return prodEl;
  }
}


class ProductList {
  // podaci sa kojima radimo
  products = [
   new Product( 'Javascript','https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png','Jastuk',11.11),
   new Product( 'Angular','https://seeklogo.com/images/A/angular-icon-logo-9946B9795D-seeklogo.com.png','Veliki tepih',22.22),
   new Product( 'NodeJS','https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png','Mali tepih',33.33)
  ]

  constructor () {}

  render () {
    // inicira glavnu listu na koju ce se dodavati elementi
    const prodList = document.createElement('ul');

    // dodaje istom class="product-list" <ul></ul> => <ul class="product-list"></ul> 
    prodList.className = 'product-list'

    // definiramo sami html kod
    for (const data of this.products) {
      // inicira svaki element pojedinacno
      const productItem = new ProductItem(data);
      // iz dobivenog podatka generira svaki element pojedinacno
      const prodEl = productItem.render();

      // svaku komponentu koju generira dodaje glavnoj listi
      prodList.append(prodEl);
    }
    return prodList;
  }
}

// generira stranicu
class NovaStranica {
  static cart;

  render() {
    // postavljam se inicijalno na pocetak aplikacije
    const stranicaHTML = document.getElementById('pocetak-aplikacije');

    // iniciram zaglavlje
    this.cart = new ShoppingCart('pocetak-aplikacije');
    // const cartEl = this.cart.render();
    this.cart.render();

    // iniciram listu proizvoda
    const productList = new ProductList();
    const productListEl = productList.render();

    // // dodaje kreirane elemente na stranicu
    // stranicaHTML.append(cartEl)
    stranicaHTML.append(productListEl)
  }
}
class App {
  static stranica;

  static init() {
    const startnaStranica = new NovaStranica();
    startnaStranica.render();

    // ovim inicijaliziram ShoppingCart koji ce mi kasnije trebati kada budem dodavao na listi
    this.stranica = startnaStranica.cart;
    this.stranicaPokus = startnaStranica.cart;
  }


  static addProductToChart(data) {
    console.log(data);
    this.stranica.addProduct(data);
  }

  // static addProductToChartPokus(data) {
  //   console.log(data);
  //   // this.stranicaPokus.addProductPokus(data);
  //   ShoppingCart.addProductPokus(data)
  // }
}


// Pokrecem aplikaciju
App.init();

