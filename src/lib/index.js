// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export const orderLowerPrice = (dataProducts) => {
  let orderedInfo = dataProducts.sort(function (a, b) {
    if (a.Precio > b.Precio) {
      return 1;
    }
    { 
      return -1;
    }
  });
  return orderedInfo;
};

export const orderDefault = (dataProducts) => {
  let orderedInfo = dataProducts.sort(function (a, b) {
    if (a.Id > b.Id) {
      return 1;
    }

    {
      return -1;
    }
  });
  return orderedInfo;
};

export const productsFilter = (dataProducts, Seccion) =>{
  let productsArray = dataProducts.filter(e => e.Seccion === Seccion);
  return productsArray;
};

export const searchProducts = (dataProducts, text) =>{
    let search = dataProducts.filter(e => e.Titulo.includes(text));
    return search;
};