export const misListas = () =>{
 const divMisListas = document.createElement("div");
 divMisListas.setAttribute('CLASS','home');
 const viewMisListas = `
 <header class="headerList">
 <div class="contentList">
   <div class="contentTitlesList">
     <img src="./image/backArrow.svg" alt="Retroceder" class="arrow">
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
   <img src="./image/home.svg" alt="">
   <img src="./image/pasillos.svg" alt="">
   <img src="./image/list.svg" alt="">
   <img src="./image/profile.svg" alt="">
   </div>
 </footer>
 `

 divMisListas.innerHTML=viewMisListas;

    return divMisListas; 
}
