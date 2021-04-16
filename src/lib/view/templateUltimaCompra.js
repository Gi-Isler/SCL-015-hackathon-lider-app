export const lastBuy = () =>{
    const divLastBuy = document.createElement("div");
    divLastBuy.setAttribute('CLASS','mainLastBuy');
    const viewLastBuy = `
    <header class="headerAisles">
      <div class="contenAisles">
         <img src="./image/backArrow.svg" alt="Retroceder" id="arrowback" class="arrowback">
         <h3 id="titleAisles" class="titleAisles">Compras Anteriores</h3>
         <img src="./image/carrito_header.svg" alt="carrito" class="cartList">
      </div>
     </header>
     <main class="mainContentAisles">
       <img id="" class="lastBuy" src="./image/ultimaCompraProductos.svg" type="button"> 
    </main>
     <footer class="navBar">
    <div class="navBarIcons">
      <img src="./image/home.svg" alt="" id="home">
      <img src="./image/pasillos.svg" alt="" id="aisles">
      <img src="./image/list.svg" alt="" id="list">
      <img src="./image/profile.svg" alt="" id="profile">
    </div>
  </footer>`;
     divLastBuy.innerHTML=viewLastBuy;
//boton volver
let back = divLastBuy.querySelector("#arrowback");
back.addEventListener("click", () => {
location.assign("#/comprasAnteriores");
});


//navbar
let home = divLastBuy.querySelector("#home");
home.addEventListener("click", () => {
 location.assign("#/");
});

let viewAisles = divLastBuy.querySelector("#aisles");
viewAisles.addEventListener("click", () => {
 location.assign("#/pasillos");
});

let viewLists = divLastBuy.querySelector("#list");
viewLists.addEventListener("click", () => {
 location.assign("#/tusListas");
});

let viewProfile = divLastBuy.querySelector("#profile");
viewProfile.addEventListener("click", () => {
 location.assign("#/perfil");
});
     
     return divLastBuy;
}