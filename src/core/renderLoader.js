import { Loader } from './loader'

const getNode = () => document.getElementById("loader");

export default () =>
  new Promise(resolve => {
    const node = getNode();
    const render = () => {
      node.innerHTML = Loader;
      document.getElementsByClassName('page-content')[0].classList.add('loader-animate')
      document.getElementsByClassName('page-deco')[0].classList.add('loader-animate')
    };
    const remove = () => document.body.removeChild(node)

    resolve({ render, remove });
  });