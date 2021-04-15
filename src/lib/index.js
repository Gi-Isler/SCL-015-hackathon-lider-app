// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export const orderLowerPrice = (dataProducts) => {
  let orderedInfo = dataProducts.sort(function (a, b) {
    if (a.price > b.price) {
      return 1;
    }
    { 
      return -1;
    }
  });
  return orderedInfo;
},

export const orderDefault = (dataProducts) => {
  let orderedInfo = dataProducts.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }

    {
      return -1;
    }
  });
  return orderedInfo;
}