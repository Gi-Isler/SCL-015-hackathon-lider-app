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
    <div class="productsPantry" id="productsPantry"></div> 
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

  let tablePantry = divpantry.querySelector('#productsPantry');
    let dataProducts= data.results
    let Seccion = 'Despensa';
    let dataProductsPantry = productsFilter(dataProducts,Seccion);
    console.log(dataProductsPantry);

    window.addEventListener("load", allProducts(dataProductsPantry));
   function allProducts(dataProductsPantry){
    for (let i = 0; i < dataProductsPantry.length; i++) {
    let tarjetaPantry = document.createElement("DIV");
    let heartPantry = document.createElement("IMG");
    let imagePantry = document.createElement("IMG");
    let namePantry = document.createElement("P");
    let pricePantry = document.createElement("P");
    let amountPantry = document.createElement("P");
    let addImgPantry = document.createElement("IMG");
    let addListPantry = document.createElement("IMG");
    tarjetaPantry.setAttribute("class", "cellPantry");
    tarjetaPantry.setAttribute("id", "cardPantry");
    imagePantry.setAttribute("src", dataProductsPantry[i].img);
    imagePantry.setAttribute("class", "imagePantry");
    heartPantry.setAttribute("src","./image/emptyHeart.svg");
    heartPantry.setAttribute("class", "heartPantry");
    heartPantry.setAttribute("id", "heartPantry");
    namePantry.setAttribute("class", "namePantry");
    pricePantry.setAttribute("class", "pricePantry");
    amountPantry.setAttribute("class", "amountPantry");
    addImgPantry.setAttribute("src", "./image/addList.svg");
    addImgPantry.setAttribute("class", "addImgPantry");
    addImgPantry.setAttribute("id", "addImgPantry");
    addListPantry.setAttribute("src", "./image/addCart.svg");
    addListPantry.setAttribute("class", "addListPantry");
    addListPantry.setAttribute("id", "addListPantry");
    namePantry.innerHTML = dataProductsPantry[i].Titulo;
    pricePantry.innerHTML = '$ ' +dataProductsPantry[i].Precio;
    amountPantry.innerHTML = dataProductsPantry[i].cantidad+dataProductsPantry[i]["Unidad de Medida"];
    addListPantry.innerHTML = "Agregar al carrito"
    tablePantry.appendChild(tarjetaPantry);
    tarjetaPantry.appendChild(heartPantry);
    tarjetaPantry.appendChild(imagePantry);
    tarjetaPantry.appendChild(namePantry);
    tarjetaPantry.appendChild(pricePantry);
    tarjetaPantry.appendChild(amountPantry);
    tarjetaPantry.appendChild(addImgPantry);
    tarjetaPantry.appendChild(addListPantry);
    //aqui le decimos a la tarjeta que cuando oiga click ejecute la funcion que muestra el modal
    tarjetaPantry.onclick = function () {
      addModal(info[i]);
    }
  }
}

//función de ordenar
let select = divpantry.querySelector("#sortBy");
select.addEventListener("change", function () {

  if (select.value === "lowerPrice") {
    tablePantry.innerHTML = "";
    let array = orderLowerPrice(dataProductsPantry);
    dataProducts = array;
    return allProducts(dataProducts);
  }

  else if(select.value === "default"){
    tablePantry.innerHTML = "";
    let array = orderDefault(dataProductsPantry);
    dataProducts = array;
    return allProducts(dataProducts)
  }
});

  

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