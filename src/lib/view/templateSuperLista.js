import data from "../data/superlistaData.js"
export const superLista = () =>{
  const divsuperLista = document.createElement("div");
  const viewsuperLista = `
  <header class="headerSuperLists">
    <div class="contentSuperLists">
      <div class="contenSuperLists">
        <img src="./image/backArrow.svg" alt="Retroceder" id="arrowbackSL" class="arrowback">
        <h3 id="titleSL" class="titleSL">Super Lista</h3>
        <img src="./image/carrito_header.svg" alt="carrito" class="cart">
      </div>
    </div>   
  </header>
  <main class="mainSuperLists">
    <div class="productsSL" id="productsSL"></div> 
  </main>
  <footer class="navBar">
  <div class="navBarIcons">
  <img src="./image/home.svg" alt="" id="homeSL">
  <img src="./image/pasillos.svg" alt="" id="aislesSL">
  <img src="./image/list.svg" alt="" id="listSL">
  <img src="./image/profile.svg" alt="" id="profileSL">
  </div>
  </footer>

      `; 

      divsuperLista.innerHTML=viewsuperLista;
      let tableSL = divsuperLista.querySelector('#productsSL');
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
let back = divsuperLista.querySelector("#arrowbackSL");
back.addEventListener("click", () => {
  location.assign("#/tusListas");
});

//botones navBar
let home = divsuperLista.querySelector("#homeSL");
home.addEventListener("click", () => {
  location.assign("#/");
});

let viewAisles = divsuperLista.querySelector("#aislesSL");
viewAisles.addEventListener("click", () => {
  location.assign("#/pasillos");
});

let viewLists = divsuperLista.querySelector("#listSL");
viewLists.addEventListener("click", () => {
  location.assign("#/tusListas");
});

let viewProfile = divsuperLista.querySelector("#profileSL");
viewProfile.addEventListener("click", () => {
  location.assign("#/perfil");
});

return divsuperLista; 


}

