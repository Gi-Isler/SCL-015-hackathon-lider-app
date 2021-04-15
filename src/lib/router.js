// import { login } from './view/templateLogin.js';
import { home } from './view/templateHome.js';
import { tpmc } from './view/templateTPMC.js';
import { tusListas } from './view/templateTusListas.js';
import { superLists } from './view/templateSuperLista.js';
import { aisles } from './view/templatePasillos.js'
import {ofertas} from './view/templateOfertas.js'

export const changeRouter = (hash) => {
  if (hash === '#/tusListas') {
    return showTemplate(hash);
  }
  if (hash === '#/tpmc') {
    return showTemplate(hash);
  }
  if (hash === '#/superLista') {
    return showTemplate(hash);
  }
  if (hash === '#/pasillos') {
    return showTemplate(hash);
  }
  if (hash === '#/offers') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};

export const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  if (hash === '#/' || hash === '' || hash === '#' || hash === '/') {
    containerRoot.appendChild(home());
  } else if (hash === '#/tusListas') {
    containerRoot.appendChild(tusListas());
  } else if (hash === '#/tpmc') {
    containerRoot.appendChild(tpmc());
  }  else if (hash === '#/superLista') {
    containerRoot.appendChild(superLists());
  }else if (hash === '#/pasillos') {
    containerRoot.appendChild(aisles());
  }else if (hash === '#/offers') {
    containerRoot.appendChild(ofertas());
  }else {
    containerRoot.innerHTML = 'la página no existe';
  }
};
