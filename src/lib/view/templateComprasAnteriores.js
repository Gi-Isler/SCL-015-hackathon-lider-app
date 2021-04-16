export const lastBuys = () =>{
    const divLastBuys = document.createElement("div");
    divLastBuys.setAttribute('CLASS','mainAisles');
    const viewLastBuys = `
    <header class="headerAisles">
      <div class="contenAisles">
         <img src="./image/backArrow.svg" alt="Retroceder" id="arrow" class="arrowback">
         <h3 id="titleAisles" class="titleAisles">Compras Anteriores</h3>
         <img src="./image/carrito_header.svg" alt="carrito" class="cartList">
      </div>
     </header>
     <main class="mainContentAisles">
       <img id="forwardLastBuy" class="lastBuys" src="./image/ultimaCompra1.svg" type="button"> 
       <img  class="lastBuys" src="./image/ultimaCompra2.svg" type="button"> 
       <img  class="lastBuys" src="./image/ultimaCompra3.svg" type="button"> 
       <img  class="lastBuys" src="./image/ultimaCompra4.svg" type="button"> 
       <img  class="lastBuys" src="./image/ultimaCompra5.svg" type="button"> 
       
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
     
   divLastBuys.innerHTML=viewLastBuys;

    //boton volver
    let back = divLastBuys.querySelector("#arrow");
    back.addEventListener("click", () => {
    location.assign("#/tusListas");
    });


    //va a ultima boleta

    let goTPMC = divLastBuys.querySelector('#forwardLastBuy');
    goTPMC.addEventListener("click",() => {
    location.assign("#/ultimaCompra");
    })


    //navbar
   let home = divLastBuys.querySelector("#home");
   home.addEventListener("click", () => {
     location.assign("#/");
   });
 
   let viewAisles = divLastBuys.querySelector("#aisles");
   viewAisles.addEventListener("click", () => {
     location.assign("#/pasillos");
   });
 
   let viewLists = divLastBuys.querySelector("#list");
   viewLists.addEventListener("click", () => {
     location.assign("#/tusListas");
   });
 
   let viewProfile = divLastBuys.querySelector("#profile");
   viewProfile.addEventListener("click", () => {
     location.assign("#/perfil");
   });

   return divLastBuys;
}