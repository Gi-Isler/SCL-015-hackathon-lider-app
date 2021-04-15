import data from "../data/carolinaData.js"
import {orderLowerPrice,orderDefault} from "..index.js"
export const tpmc = () =>{
  const divtpmc = document.createElement("div");
  divtpmc.setAttribute('CLASS','tpmc');

  const viewtpmc = `
  <header class="headerTPMC">
    <div class="contentTPMC">
      <div class="contentTPMC">
        <img src="./image/backArrow.svg" alt="Retroceder" class="arrowback" id="backArrow">
        <h3 id="titleTPMC" class="titleTPMC">Tus Productos más comprados</h3>
        <img src="./image/carrito_header.svg" alt="carrito" class="cartTPMC">
      </div>   
      <div class="categories">
      <button id="all" class="all">Todos</button>
      <button id="meat" class="meat">Carne, pollo y mariscos</button>
      <button id="milkandeggs" class="milkandeggs">Lácteos y Huevos</button>
      <button id="drinks" class="drinks">Bebidas, aguas y jugos</button>
      </div>  
    </div>
  </header>
  <main class="mainProducts">
    <div class="order">
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
   
  divtpmc.innerHTML=viewtpmc;
  //funcion que trae la data de productos

  let table = divtpmc.querySelector('#products');
    let dataProducts= data.results

    const allProducts =(dataProducts) =>{
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
    heart.setAttribute("src","./image/emptyHeart.svg");
    heart.setAttribute("class", "heart");
    heart.setAttribute("id", "heart");
    image.setAttribute("src", dataProducts[i].img);
    image.setAttribute("class", "image");
    name.setAttribute("class", "name");
    price.setAttribute("class", "price");
    amount.setAttribute("class", "amout");
    addImg.setAttribute("src", "./image/addList.svg");
    addImg.setAttribute("class", "addImg");
    addImg.setAttribute("id", "addImg");
    addList.setAttribute("src", "./image/addCart.svg");
    addList.setAttribute("class", "addList");
    addList.setAttribute("id", "addList");
    name.innerHTML = dataProducts[i].Titulo;
    price.innerHTML = dataProducts[i].Precio;
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
let select = divtpmc.querySelector("#sortBy");
select.addEventListener("change", function () {

  if (select.value === "lowerPrice") {
    table.innerHTML = "";
    let array = orderLowerPrice(dataProducts);
    dataProducts = array;
    return allProducts(dataProducts);
  }

  // else if (select.value === "alphDescending") {
  //   let array = functions.orderZA(info);
  //   info = array;
  //   return addAllCharacters(info);
  // }

  else {
    let array = orderDefault(dataProducts);
    dataProducts = array;
    return allProducts(dataProducts)
  }
});

  

  //boton volver
let back = divtpmc.querySelector("#backArrow");
back.addEventListener("click", () => {
  location.assign("#/");
});

//botones navBar
let home = divtpmc.querySelector("#home");
home.addEventListener("click", () => {
  location.assign("#/");
});

let viewAisles = divtpmc.querySelector("#aisles");
viewAisles.addEventListener("click", () => {
  location.assign("#/pasillos");
});

let viewLists = divtpmc.querySelector("#list");
viewLists.addEventListener("click", () => {
  location.assign("#/tusListas");
});

let viewProfile = divtpmc.querySelector("#profile");
viewProfile.addEventListener("click", () => {
  location.assign("#/perfil");
});
     return divtpmc; 
 }
    