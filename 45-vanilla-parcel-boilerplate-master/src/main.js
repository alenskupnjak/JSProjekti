import './scss/app.scss';
import App from './App'

const app = async () => {
  document.getElementById('app').appendChild(await App())
}
// Load app

app()


// Youtube: https://www.youtube.com/watch?v=8rD9amRSOQY