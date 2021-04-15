import data from "../data/superlistaData.js"
export const superLists = () =>{
  const divsuperLists = document.createElement("div");
  const viewsuperLists = `
  <header class="headerSuperLists">
    <div class="contenSuperLists">
      <img src="./image/backArrow.svg" alt="Retroceder" id="arrowbackSL" class="arrowback">
      <h3 id="titleSL" class="titleSL">Super Lista</h3>
      
      <img src="./image/carrito_header.svg" alt="carrito" class="cart">
    </div>
  </header>
  <main class="mainSuperLists">
     <h4 id="titleSLAisle" class
"titleSLAisle">Limpieza</h4>
     <h5 id="titleSLAisleProducts" class="titleSLAisleProducts">Productos</h5>
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

      divsuperLists.innerHTML=viewsuperLists;
      let tableSL = divsuperLists.querySelector('#productsSL');
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
let backSL = divsuperLists.querySelector("#arrowbackSL");
backSL.addEventListener("click", () => {
  location.assign("#/tusListas");
});

//botones navBar
let homeSL = divsuperLists.querySelector("#homeSL");
homeSL.addEventListener("click", () => {
  location.assign("#/");
});

let viewAislesSL = divsuperLists.querySelector("#aislesSL");
viewAislesSL.addEventListener("click", () => {
  location.assign("#/pasillos");
});

let viewListsSL = divsuperLists.querySelector("#listSL");
viewListsSL.addEventListener("click", () => {
  location.assign("#/tusListas");
});

let viewProfileSL = divsuperLists.querySelector("#profileSL");
viewProfileSL.addEventListener("click", () => {
  location.assign("#/perfil");
});

return divsuperLists; 


}

