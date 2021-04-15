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
  <main class="mainContent">
    <input type="search" placeholder="¿Qué productos buscas hoy?" class="search"><img src="./image/search.svg" alt="buscar" class="searchImg">

  </main>

