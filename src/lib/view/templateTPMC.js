import data from "../data/carolinaData.js"
export const tpmc = () =>{
  const divtpmc = document.createElement("div");
  const viewtpmc = `
  <header class="headerTPMC">
    <div class="contentTPMC">
      <div class="contentTPMC">
        <img src="./image/backArrow.svg" alt="Retroceder" class="arrowback">
        <h3 id="titleTPMC" class="titleTPMC">Tus Productos más comprados</h3>
        <img src="./image/carrito_header.svg" alt="carrito" class="cart">
      </div>   
      <div class="categories">
      <button id="all" class="all">Todos</button>
      <button id="meat" class="meat">Carne, pollo y mariscos</button>
      <button id="milkandeggs" class="milkandeggs">Lácteos y Huevos</button>
      <button id="drinks" class="drinks">Bebidas, aguas y jugos</button>
      </div>  
    </div>
  </header>
  <main class="mainProducts">
    <div class="order">
      <select type="option"name="Ordenar por" id="sortBy">
        <option>Ordenar por</option>
        <option>Menor precio</option>
        <option>Mayor oferta</option>
        <option>Recomendados</option>
      </select>
    </div>
    <div class="products" id="products"></div>
    </main>  

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
   
  divtpmc.innerHTML=viewtpmc;
  let table = divtpmc.querySelector('#products');
  // window.addEventListener("load", printProducts());
  // const printProducts= (dataProducts)=>{
  //   dataProducts = data.results;
  //   table.innerHTML="";
    // let products="";
    let dataProducts= data.results
    for (let i = 0; i < dataProducts.length; i++) {
    let tarjeta = document.createElement("DIV");
    let image = document.createElement("IMG");
    let name = document.createElement("P");
    let price = document.createElement("P");
    let amount = document.createElement("P");
    let addImg = document.createElement("IMG");
    let addList = document.createElement("IMG");
    tarjeta.setAttribute("class", "cell");
    tarjeta.setAttribute("id", "card");
    image.setAttribute("src", dataProducts[i].img);
    image.setAttribute("class", "image");
    name.setAttribute("class", "name");
    price.setAttribute("class", "price");
    amount.setAttribute("class", "amout");
    addImg.setAttribute("src", );
    addImg.setAttribute("class", "addImg");
    addImg.setAttribute("id", "addImg");
    addImg.setAttribute("src", );
    addList.setAttribute("class", "addList");
    addList.setAttribute("id", "addList");
    name.innerHTML = dataProducts[i].Titulo;
    price.innerHTML = dataProducts[i].Precio;
    amount.innerHTML = dataProducts[i].cantidad+dataProducts[i]["Unidad de Medida"];
    addList.innerHTML = "Agregar al carrito"
    table.appendChild(tarjeta);
    tarjeta.appendChild(image);
    tarjeta.appendChild(name);
    tarjeta.appendChild(price);
    tarjeta.appendChild(amount);
    tarjeta.appendChild(addImg);
    tarjeta.appendChild(addList);
    //aqui le decimos a la tarjeta que cuando oiga click ejecute la funcion que muestra el modal
    tarjeta.onclick = function () {
      addModal(info[i]);
    }
  }
  


     return divtpmc; 
 }
       // <img src= "${dataProducts[i].img}">
      // <p>${dataProducts[i].Precio}</p></div>