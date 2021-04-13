// import { login } from './view/templateLogin.js';
import { home } from './view/templateHome.js';
import { tpmc } from './view/templateTPMC.js';
import { misListas } from './view/templateMisListas.js';

export const changeRouter = (hash) => {
  if (hash === '#/misListas') {
    return showTemplate(hash);
  }
  if (hash === '#/tpmc') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};

export const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  if (hash === '#/' || hash === '' || hash === '#' || hash === '/') {
    containerRoot.appendChild(home());
  } else if (hash === '#/misListas') {
    containerRoot.appendChild(misListas());
  } else if (hash === '#/tpmc') {
    containerRoot.appendChild(tpmc());
  } else {
    containerRoot.innerHTML = 'la página no existe';
  }
};
