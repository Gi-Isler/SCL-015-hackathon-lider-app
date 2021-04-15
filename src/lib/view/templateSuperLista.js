import data from "../data/superlistaData.js"
export const superLista = () =>{
  const divsuperLista = document.createElement("div");
  const viewsuperLista = `
  <header class="headerSuperLista">
    <div class="contentSuperLista">
      <div class="contenSuperLista">
        <img src="./image/backArrow.svg" alt="Retroceder" class="arrowback">
        <h3 id="titleTPMC" class="titleTPMC">Super Lista</h3>
        <img src="./image/carrito_header.svg" alt="carrito" class="cart">
      </div>
    </div>   
  </header>
  <main class="mainProducts">
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

      `; 

      divsuperLista.innerHTML=viewsuperLista;
      let tableSL = divsuperLista.querySelector('#products');
      let dataSuperList= data.results
      for (let i = 0; i < dataSuperList.length; i++) {
      let tarjetaSL = document.createElement("DIV");
      let heartSL = document.createElement("IMG");
      let imageSL = document.createElement("IMG");
      let nameSL = document.createElement("P");
      let priceSL = document.createElement("P");
      let amountSL = document.createElement("P");
      let addCartSL = document.createElement("IMG");
      tarjetaSL.setAttribute("class", "cellSL");
      tarjetaSL.setAttribute("id", "cardSL");
      heartSL.setAttribute("src","./image/emptyHeart.svg");
      heartSL.setAttribute("class", "heartSL");
      imageSL.setAttribute("src", dataSuperList[i].img);
      imageSL.setAttribute("class", "imageSL");
      nameSL.setAttribute("class", "nameSL");
      priceSL.setAttribute("class", "priceSL");
      amountSL.setAttribute("class", "amoutSL");
      addCartSL.setAttribute("src", "./image/addCart.svg");
      addCartSL.setAttribute("class", "addCartSL");
      addCartSL.setAttribute("id", "addCartSL");
      nameSL.innerHTML =dataSuperList[i].Titulo;
      priceSL.innerHTML =dataSuperList[i].Precio;
      amountSL.innerHTML =dataSuperList[i].cantidad+dataSuperList[i]["Unidad de Medida"];
      tableSL.appendChild(tarjetaSL);
      tarjetaSL.appendChild(heartSL);
      tarjetaSL.appendChild(imageSL);
      tarjetaSL.appendChild(nameSL);
      tarjetaSL.appendChild(priceSL);
      tarjetaSL.appendChild(amountSL);
      tableSL.appendChild(tarjetaSL);
      tarjetaSL.appendChild(imageSL);
      tarjetaSL.appendChild(nameSL);
      tarjetaSL.appendChild(priceSL);
      tarjetaSL.appendChild(amountSL);
      tarjetaSL.appendChild(addCartSL);

//aqui le decimos a la tarjeta que cuando oiga click ejecute la funcion que muestra el modal
      tarjetaSL.onclick = function () {
        addModal(info[i]);
      }
    }


      //boton volver
let back = divsuperLista.querySelector("#arrow");
back.addEventListener("click", () => {
  location.assign("#/");
});

//botones navBar
let home = divsuperLista.querySelector("#home");
home.addEventListener("click", () => {
  location.assign("#/");
});loca

let viewAisles = divsuperLista.querySelector("#aisles");
viewAisles.addEventListener("click", () => {
  location.assign("#/pasillos");
});

let viewLists = divsuperLista.querySelector("#list");
viewLists.addEventListener("click", () => {
  location.assign("#/tusListas");
});

let viewProfile = divsuperLista.querySelector("#profile");
viewProfile.addEventListener("click", () => {
  location.assign("#/perfil");
});

return divsuperLista; 


}

