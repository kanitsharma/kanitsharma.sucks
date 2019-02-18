import './index.css';
import * as serviceWorker from './serviceWorker';
import renderLoader from './core/renderLoader'
import { renderReact } from "./core/renderReact";

renderLoader().then(({ render, remove }) => {
  render();

  setTimeout(_ => {
    renderReact()
    remove()
  }, 4500)
});

serviceWorker.register();


