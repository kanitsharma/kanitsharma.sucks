import { Loader } from './loader'

const getNode = () => document.getElementById("loader");

export default () =>
  new Promise(resolve => {
    const node = getNode();
    const render = () => {
      node.innerHTML = Loader;
      return node
    };
    const remove = () => document.body.removeChild(node)

    resolve({ render, remove });
  });