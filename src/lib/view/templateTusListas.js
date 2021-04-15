export const tusListas = () =>{
 const divMisListas = document.createElement("div");
 divMisListas.setAttribute('CLASS','myList');
 const viewMisListas = `
 <header class="headerList">
 <div class="contentList">
   <div class="contentTitlesList">
     <img src="./image/backArrow.svg" alt="Retroceder" class="arrow" id="arrow">
     <h3 id="titleLists" class="listTitle">Tus Listas</h3>
     <img src="./image/carrito_header.svg" alt="carrito" class="cartList">
   </div>   
 </div>
 </header>
 <main>
   <img id="lastBuys" class="lastBuys" src="image/comprasAnteriores.svg" type="button">  
   <img id="myLists" class="myLists" src="image/tusListas2.svg" type="button">
   <img id="superLists" class="superLists" src="image/superListas.svg" type="button">
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

 divMisListas.innerHTML=viewMisListas;
//boton volver
let back = divMisListas.querySelector("#arrow");
 back.addEventListener("click", () => {
   location.assign("#/");
 });

 //botones banners
 let lastBuys = divMisListas.querySelector("#lastBuys");
 lastBuys.addEventListener("click", () => {
   location.assign("#/misComprasAnteriores");
 });

 let myLists = divMisListas.querySelector("#myLists");
 myLists.addEventListener("click", () => {
   location.assign("#/Listas");
 });

 let superLists = divMisListas.querySelector("#superLists");
 superLists.addEventListener("click", () => {
   location.assign("#/superLista");
 });


 //botones navBar
 let home = divMisListas.querySelector("#home");
 home.addEventListener("click", () => {
   location.assign("#/");
 });

 let viewAisles = divMisListas.querySelector("#aisles");
 viewAisles.addEventListener("click", () => {
   location.assign("#/pasillos");
 });

 let viewLists = divMisListas.querySelector("#list");
 viewLists.addEventListener("click", () => {
   location.assign("#/tusListas");
 });

 let viewProfile = divMisListas.querySelector("#profile");
 viewProfile.addEventListener("click", () => {
   location.assign("#/perfil");
 });
    return divMisListas; 
}
