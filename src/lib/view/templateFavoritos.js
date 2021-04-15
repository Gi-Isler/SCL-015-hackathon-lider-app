import data from "../data/favoritesData.js"
export const favorites = () =>{
  const divFavorites = document.createElement("div");
  const viewFavorites = `
  <header class="headerSuperLists">
    <div class="contenSuperLists">
      <img src="./image/backArrow.svg" alt="Retroceder" id="arrowbackF" class="arrowback">
      <h3 id="titleSL" class="titleSL">Favoritos</h3>
      
      <img src="./image/carrito_header.svg" alt="carrito" class="cart">
    </div>
  </header>
  <main class="mainSuperLists">
     <h4 id="titleSLAisle" class
"titleSLAisle">Productos</h4>
    <div class="productsSL" id="productsF"></div> 
  </main>
  <footer class="navBar">
    <div class="navBarIcons">
      <img src="./image/home.svg" alt="" id="homeF">
      <img src="./image/pasillos.svg" alt="" id="aislesF">
      <img src="./image/list.svg" alt="" id="listF">
      <img src="./image/profile.svg" alt="" id="profileF">
    </div>
  </footer>

      `; 

      divFavorites.innerHTML=viewFavorites;
      let dataProducts = data.results
            
      let table = divFavorites.querySelector('#productsF');

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
      heart.setAttribute("class", "heartTPMC");
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

      //boton volver
let backF = divFavorites.querySelector("#arrowbackF");
backF.addEventListener("click", () => {
  location.assign("#/listas");
});

//botones navBar
let homeF = divFavorites.querySelector("#homeF");
homeF.addEventListener("click", () => {
  location.assign("#/");
});

let viewAislesF = divFavorites.querySelector("#aislesF");
viewAislesF.addEventListener("click", () => {
  location.assign("#/pasillos");
});

let viewListsF = divFavorites.querySelector("#listF");
viewListsF.addEventListener("click", () => {
  location.assign("#/tusListas");
});

let viewProfileF = divFavorites.querySelector("#profileF");
viewProfileF.addEventListener("click", () => {
  location.assign("#/perfil");
});

return divFavorites; 


}