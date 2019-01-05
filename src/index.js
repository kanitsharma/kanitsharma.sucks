import './index.css';
import * as serviceWorker from './serviceWorker';
import renderLoader from './core/renderLoader'

renderLoader().then(({ render, remove }) => {
  render();

  import(/* webpackChunkName: "core" */ "./core/renderReact")
    .then(({ renderReact }) => new Promise(resolve => {
      setTimeout(_ => {
        renderReact()
        resolve()
      }, 5000)
    }))
    .then(() => remove());
});

serviceWorker.register();


