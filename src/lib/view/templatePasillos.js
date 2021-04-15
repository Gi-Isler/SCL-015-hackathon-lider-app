export const aisles = () =>{
  const divpasillos = document.createElement("div");
  const viewpasillos = `
  <header class="headerAisles">
    <div class="contenAisles">
       <img src="./image/backArrow.svg" alt="Retroceder" id="arrowbackAisles" class="arrowback">
       <h3 id="titleAisles" class="titleAisles">Pasillos</h3>
       <img src="./image/carrito_header.svg" alt="carrito" class="cartList">
    </div>
   </header>
   <main class="mainContentAisles">
     <input type="search" placeholder="¿Qué productos buscas hoy?" class="search"><img src="./image/search.svg" alt="buscar" class="searchImg">
       <img id="aisleDeals" class="aisleDeals" src="./image/PasilloOfertas.svg" type="button"> 
       <img id="meatAisle" class="meatAisle" src="./image/pasilloCarne.svg" type="button"> 
       <img id="drinksAisle" class="drinksAisle" src="./image/pasilloBebidas.svg" type="button"> 
       <img id="dairyAisle" class="dairyAisle" src="./image/pasilloLacteos.svg" type="button"> 
       <img id="fruitAisle" class="fruitAisle" src="./image/pasilloFrutas.svg" type="button"> 
       <img id="pantryHall" class="pantryHall" src="./image/pasilloDespensa.svg" type="button"> 
       <img id="hallwayCleaning" class="hallwayCleaning" src="./image/pasilloLimpieza.svg" type="button"> 
       <img id="cheeseAisle" class="cheeseAisle" src="./image/pasilloQuesos.svg" type="button"> 
       <img id="bakeryAisle" class="bakeryAisle" src="./image/pasilloPanaderia.svg" type="button"> 
       <img id="snacksAisle" class="snacksAisle" src="./image/pasilloSnack.svg" type="button"> 
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

   divpasillos.innerHTML=viewpasillos;
   //boton volver
   let backAisles = divpasillos.querySelector("#arrowbackAisles");
    backAisles.addEventListener("click", () => {
      location.assign("#/");
    });
   
    //botones banners
    let aisleDeals = divpasillos.querySelector("#aisleDeals");
    aisleDeals.addEventListener("click", () => {
      location.assign("#/offers");
    });
   
    let meatAisle = divpasillos.querySelector("#meatAisle");
    meatAisle.addEventListener("click", () => {
      location.assign("#/meatFish");
    });
   
    let drinksAisle = divpasillos.querySelector("#drinksAisle");
    drinksAisle.addEventListener("click", () => {
      location.assign("#/drinksAisle");
    });
   
   let dairyAisle = divpasillos.querySelector("#dairyAisle");
    dairyAisle.addEventListener("click", () => {
      location.assign("#/dairyAisle");
    });

    let pantryHall = divpasillos.querySelector("#pantryHall");
    pantryHall.addEventListener("click", () => {
      location.assign("#/pantryHall");
    });

    //botones navBar
    let homeAisles = divpasillos.querySelector("#home");
    homeAisles.addEventListener("click", () => {
      location.assign("#/");
    });
   
    let viewAisles1 = divpasillos.querySelector("#aisles");
    viewAisles1.addEventListener("click", () => {
      location.assign("#/pasillos");
    });
   
    let viewListsAisles = divpasillos.querySelector("#list");
    viewListsAisles.addEventListener("click", () => {
      location.assign("#/tusListas");
    });
   
    let viewProfileAisles = divpasillos.querySelector("#profile");
    viewProfileAisles.addEventListener("click", () => {
      location.assign("#/perfil");
    });

   return divpasillos; 


}