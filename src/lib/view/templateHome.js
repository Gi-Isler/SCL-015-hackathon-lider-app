

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
      <img src="./image/cheque ahorro.png" alt="puntos MiClub" class="savingCheck">
      <img src="./image/mislistas1.png" alt="listas" class="lists">
      <h2 class="tPMCTitle">Tus productos Más Comprados</h2><h4 class="moreTitle" id="forwardTPMC">Ver más</h4>
      <div>
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
