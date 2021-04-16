import data from "../data/carolinaData.js"
export const home = () => {
  const divHome = document.createElement('div');
  divHome.setAttribute('CLASS','home');
  const viewHome = `
  <header class="headerContent">
      <div class="content">
        <div class="contentTitles">
        <img src="./image/globito.svg" alt="ubicacion" class=ubicationImg>
        <h3 class="superTitle">Lider Alameda</h3>
        </div>
        <div class="titles">
        <h3 class="direction">Av. Padre Alberto Hurtado 060, Est.</h3>
        <h4 class="sendOrder">Retira mañana desde las 9:00 am</h4>
        </div>
      </div>
      <img src="./image/carrito_header.svg" alt="carrito" class="cart">
  </header>
  <main class="mainContent">
      <input type="search" placeholder="¿Qué productos buscas hoy?" class="search"><img src="./image/search.svg" alt="buscar" class="searchImg">
      <div class="slider">
      <ul>
      <li><img src="./image/cheque ahorro.png" alt="puntos MiClub" class="savingCheck"></li>
      <li><img src="./image/liderBCI.svg" alt="puntos MiClub" class="savingCheck"></li>
      <li><img src="./image/covid1.png" alt="puntos MiClub" class="savingCheck"></li>
      <li><img src="./image/esenciales.svg" alt="puntos MiClub" class="savingCheck"></li>
      </ul>
      </div>
      <img src="./image/mislistas1.png" alt="listas" class="lists">
      <h2 class="tPMCTitle">Tus productos Más Comprados</h2><h4 class="moreTitle" id="forwardTPMC">Ver más</h4>
      <div id="table" class= "contTPMCHome">
        <!-- Contenido dinamico -->
      </div>
  </main>
  <footer class="navBar">
  <div class="navBarIcons">
      <img src="./image/home.svg" alt="" id="home">
      <img src="./image/pasillos.svg" alt="" id="aisles">
      <img src="./image/list.svg" alt="" id="list">
      <img src="./image/profile.svg" alt="" id="profile">
    </div>
  </footer>
    
`;

  divHome.innerHTML = viewHome;

let dataProducts = data.results
let homeProducts=[];
homeProducts = dataProducts.filter(e => e.Id <= 3);
console.log(homeProducts);

let table = divHome.querySelector('#table')

window.addEventListener("load", allProducts(homeProducts));
function allProducts(homeProducts){
 for (let i = 0; i < homeProducts.length; i++) {
 let tarjeta = document.createElement("DIV");
 let heart = document.createElement("IMG");
 let image = document.createElement("IMG");
 let name = document.createElement("P");
 let price = document.createElement("P");
 let amount = document.createElement("P");
 let addImg = document.createElement("IMG");
 let addList = document.createElement("IMG");
 tarjeta.setAttribute("class", "cellHome");
 tarjeta.setAttribute("id", "card");
 image.setAttribute("src", homeProducts[i].img);
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
 name.innerHTML = homeProducts[i].Titulo;
 price.innerHTML = '$ ' +homeProducts[i].Precio;
 amount.innerHTML = homeProducts[i].cantidad+homeProducts[i]["Unidad de Medida"];
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





//ir a tus productos mas comprados
let goTPMC = divHome.querySelector('#forwardTPMC');
goTPMC.addEventListener("click",() => {
  location.assign("#/tpmc");
})

  let home = divHome.querySelector("#home");
  home.addEventListener("click", () => {
    location.assign("#/");
  });

  let viewAisles = divHome.querySelector("#aisles");
  viewAisles.addEventListener("click", () => {
    location.assign("#/pasillos");
  });

  let viewLists = divHome.querySelector("#list");
  viewLists.addEventListener("click", () => {
    location.assign("#/tusListas");
  });

  let viewProfile = divHome.querySelector("#profile");
  viewProfile.addEventListener("click", () => {
    location.assign("#/perfil");
  });

  

  return divHome;
};
