import data from "../data/favoritesData.js"
export const favoritesList = () =>{
  const divFavoritesList = document.createElement("div");
  const viewFavoritesList = `
  <header class="headerSuperLists">
    <div class="contenSuperLists">
      <img src="./image/backArrow.svg" alt="Retroceder" id="arrowbackF" class="arrowback">
      <h3 id="titleSL" class="titleSL">Tus Listas</h3>
      
      <img src="./image/carrito_header.svg" alt="carrito" class="cart">
    </div>
  </header>
  <main class="mainSuperLists">
     <h4 id="titleSLAisle" class
"titleSLAisle">Favoritos</h4>
     <h5 id="titleSLAisleProducts" class="titleSLAisleProducts">Productos</h5><h4 class="moreTitle" id="forwardFavoritos">Ver más</h4>
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

      divFavoritesList.innerHTML=viewFavoritesList;

// ir a favoritos
      let forward = divFavoritesList.querySelector('#forwardFavoritos');
      forward.addEventListener("click",() => {
        location.assign("#/favoritos");
      })

      
      let dataProducts = data.results
      let homeProducts=[];
      homeProducts = dataProducts.filter(e => e.Id <= 3);
      console.log(homeProducts);
            
      let tableF = divFavoritesList.querySelector('#productsF');
      for (let i = 0; i < homeProducts.length; i++) {
      let tarjetaF = document.createElement("DIV");
      let heartF = document.createElement("IMG");
      let imageF = document.createElement("IMG");
      let nameF = document.createElement("P");
      let priceF = document.createElement("P");
      let amountF = document.createElement("P");
      let addCartF = document.createElement("IMG");
      tarjetaF.setAttribute("class", "cell");
      tarjetaF.setAttribute("id", "cardF");
      heartF.setAttribute("src","./image/fullHeart.svg");
      heartF.setAttribute("class", "heartSL");
      imageF.setAttribute("src", homeProducts[i].img);
      imageF.setAttribute("class", "image");
      nameF.setAttribute("class", "name");
      priceF.setAttribute("class", "price");
      amountF.setAttribute("class", "amount");
      addCartF.setAttribute("src", "./image/addCart.svg");
      addCartF.setAttribute("class", "addImg");
      addCartF.setAttribute("id", "addCartF");
      nameF.innerHTML =homeProducts[i].Titulo;
      priceF.innerHTML = '$ ' +homeProducts[i].Precio;
      amountF.innerHTML =homeProducts[i].Cantidad+homeProducts[i]["Unidad de Medida"];
      tableF.appendChild(tarjetaF);
      tarjetaF.appendChild(heartF);
      tarjetaF.appendChild(imageF);
      tarjetaF.appendChild(nameF);
      tarjetaF.appendChild(priceF);
      tarjetaF.appendChild(amountF);
      tableF.appendChild(tarjetaF);
      tarjetaF.appendChild(imageF);
      tarjetaF.appendChild(nameF);
      tarjetaF.appendChild(priceF);
      tarjetaF.appendChild(amountF);
      tarjetaF.appendChild(addCartF);

//aqui le decimos a la tarjeta que cuando oiga click ejecute la funcion que muestra el modal
      tarjetaF.onclick = function () {
        addModal(info[i]);
      }
    }


      //boton volver
let backF = divFavoritesList.querySelector("#arrowbackF");
backF.addEventListener("click", () => {
  location.assign("#/tusListas");
});

//botones navBar
let homeF = divFavoritesList.querySelector("#homeF");
homeF.addEventListener("click", () => {
  location.assign("#/");
});

let viewAislesF = divFavoritesList.querySelector("#aislesF");
viewAislesF.addEventListener("click", () => {
  location.assign("#/pasillos");
});

let viewListsF = divFavoritesList.querySelector("#listF");
viewListsF.addEventListener("click", () => {
  location.assign("#/tusListas");
});

let viewProfileF = divFavoritesList.querySelector("#profileF");
viewProfileF.addEventListener("click", () => {
  location.assign("#/perfil");
});

return divFavoritesList; 


}