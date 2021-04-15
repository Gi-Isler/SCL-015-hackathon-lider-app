import data from "../data/carolinaData.js"
import {orderLowerPrice,orderDefault,productsFilter} from "../index.js"

export const despensa = () =>{
  const divpantry = document.createElement("div");
  divpantry.setAttribute('CLASS','pantry');

  const viewpantry = `
  <header class="headerPantry">
    <div class="contentPantry">
      <div class="contentPantry">
        <img src="./image/backArrow.svg" alt="Retroceder" class="arrowback" id="backArrow">
        <h3 id="titlePantry" class="titlePantry">Despensa</h3>
        <img src="./image/carrito_header.svg" alt="carrito" class="cartPantry">
      </div>   
      <div class="categories">
      <button id="allPantry" class="allPantry">Todos</button>
      <button id="meatPantry" class="meatPantry">Carne, pollo y mariscos</button>
      <button id="milkandeggsPantry" class="milkandeggsPantry">Lácteos y Huevos</button>
      <button id="drinksPantry" class="drinksPantry">Bebidas, aguas y jugos</button>
      </div>  
    </div>
  </header>
  <main class="mainProductsPantry">
  <div class="pantryearch"></div>
  <input type="search" placeholder="¿Qué productos buscas hoy?" class="search"><img src="./image/search.svg" alt="buscar" class="searchImg">
    <div class="pantryOrder">
      <select type="option"name="Ordenar por" id="sortBy">
        <option value="default">Ordenar por</option>
        <option value="lowerPrice">Menor precio</option>
        <option value="greater offer">Mayor oferta</option>
        <option>Recomendados</option>
      </select>
    </div>
    <div class="products" id="products"></div> 
  </main>
  <footer class="navBar">
 <div class="navBarIcons">
 <img src="./image/home.svg" alt="" id="home">
 <img src="./image/pasillos.svg" alt="" id="aisles">
 <img src="./image/list.svg" alt="" id="list">
 <img src="./image/profile.svg" alt="" id="profile">
   </div>
 </footer>
  `
   
  divpantry.innerHTML=viewpantry;
  //funcion que trae la data de productos

  let tablepantry = divpantry.querySelector('#products');
    let dataProducts= data.results

    window.addEventListener("load", allProducts(dataProducts));
   function allProducts(dataProducts){
    for (let i = 0; i < dataProducts.length; i++) {
    let tarjeta = document.createElement("DIV");
    let heart = document.createElement("IMG");
    let image = document.createElement("IMG");
    let name = document.createElement("P");
    let price = document.createElement("P");
    let amount = document.createElement("P");
    let addImg = document.createElement("IMG");
    let addList = document.createElement("IMG");
    tarjeta.setAttribute("class", "cell");
    tarjeta.setAttribute("id", "card");
    image.setAttribute("src", dataProducts[i].img);
    image.setAttribute("class", "image");
    heart.setAttribute("src","./image/emptyHeart.svg");
    heart.setAttribute("class", "heart");
    heart.setAttribute("id", "heart");
    name.setAttribute("class", "name");
    price.setAttribute("class", "price");
    amount.setAttribute("class", "amount");
    addImg.setAttribute("src", "./image/addList.svg");
    addImg.setAttribute("class", "addImg");
    addImg.setAttribute("id", "addImg");
    addList.setAttribute("src", "./image/addCart.svg");
    addList.setAttribute("class", "addList");
    addList.setAttribute("id", "addList");
    name.innerHTML = dataProducts[i].Titulo;
    price.innerHTML = '$ ' +dataProducts[i].Precio;
    amount.innerHTML = dataProducts[i].cantidad+dataProducts[i]["Unidad de Medida"];
    addList.innerHTML = "Agregar al carrito"
    table.appendChild(tarjeta);
    tarjeta.appendChild(heart);
    tarjeta.appendChild(image);
    tarjeta.appendChild(name);
    tarjeta.appendChild(price);
    tarjeta.appendChild(amount);
    tarjeta.appendChild(addImg);
    tarjeta.appendChild(addList);
    //aqui le decimos a la tarjeta que cuando oiga click ejecute la funcion que muestra el modal
    tarjeta.onclick = function () {
      addModal(info[i]);
    }
  }
}

//función de ordenar
let select = divpantry.querySelector("#sortBy");
select.addEventListener("change", function () {

  if (select.value === "lowerPrice") {
    table.innerHTML = "";
    let array = orderLowerPrice(dataProducts);
    dataProducts = array;
    return allProducts(dataProducts);
  }

  else if(select.value === "default"){
    table.innerHTML = "";
    let array = orderDefault(dataProducts);
    dataProducts = array;
    return allProducts(dataProducts)
  }
});


//función filtrar
let all = divpantry.querySelector('#all');
 all.addEventListener('click',allBtn)

 function allBtn(){
  table.innerHTML="";
  dataProducts = data.results
  allProducts(dataProducts);
}

let meat = divpantry.querySelector('#meat');
 meat.addEventListener('click',meatBtn)

 function meatBtn(){
   table.innerHTML="";
   let Seccion = 'Carne,Pollo y Mariscos';
   let filterProducts = productsFilter(dataProducts,Seccion);
   console.log(filterProducts);
  dataProducts = filterProducts;
  allProducts(dataProducts);
}

let milkandeggs = divpantry.querySelector('#milkandeggs');
milkandeggs.addEventListener('click',milkBtn)

 function milkBtn(){
   table.innerHTML="";
   let Seccion = 'Lácteos y Huevos';
   let filterProducts = productsFilter(dataProducts,Seccion);
   console.log(filterProducts);
  dataProducts = filterProducts;
  allProducts(dataProducts);
}

let drinks = divpantry.querySelector('#drinks');
drinks.addEventListener('click',drinksBtn)

 function drinksBtn(){
   table.innerHTML="";
   let Seccion = 'Bebidas, aguas y jugos';
   let filterProducts = productsFilter(dataProducts,Seccion);
   console.log(filterProducts);
  dataProducts = filterProducts;
  allProducts(dataProducts);
}


  

  //boton volver
let back = divpantry.querySelector("#backArrow");
back.addEventListener("click", () => {
  location.assign("#/");
});

//botones navBar
let home = divpantry.querySelector("#home");
home.addEventListener("click", () => {
  location.assign("#/");
});

let viewAisles = divpantry.querySelector("#aisles");
viewAisles.addEventListener("click", () => {
  location.assign("#/pasillos");
});

let viewLists = divpantry.querySelector("#list");
viewLists.addEventListener("click", () => {
  location.assign("#/tusListas");
});

let viewProfile = divpantry.querySelector("#profile");
viewProfile.addEventListener("click", () => {
  location.assign("#/perfil");
});
     return divpantry; 
 }