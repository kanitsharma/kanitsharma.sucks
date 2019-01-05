import { Loader } from './loader'

const getNode = () => document.getElementById("loader");

export default () =>
  new Promise(resolve => {
    const node = getNode();
    const render = () => {
      node.innerHTML = Loader;
    };
    const remove = () => {
      document.getElementsByClassName('page-content')[0].classList.add('loader-animate')
      document.getElementsByClassName('page-deco')[0].classList.add('loader-animate')
      setTimeout(_ => {
        document.body.removeChild(node)
      }, 500)
    }

    resolve({ render, remove });
  });