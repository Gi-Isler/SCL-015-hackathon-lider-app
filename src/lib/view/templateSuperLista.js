import data from "../data/superlistaData.js"
export const superLista = () =>{
  const divsuperLista = document.createElement("div");
  const viewsuperLista = `
  <header class="headerSuperLista">
    <div class="contentSuperLista">
      <div class="contenSuperLista">
        <img src="./image/backArrow.svg" alt="Retroceder" class="arrowback">
        <h3 id="titleTPMC" class="titleTPMC">Super Lista</h3>
        <img src="./image/carrito_header.svg" alt="carrito" class="cart">
      </div>   
      ` 
      divtpmc.innerHTML=viewsuperLista;
      let table = divsuperLista.querySelector('#products');
      let dataSuperList= data.results
      for (let i = 0; i < dataSuperList.length; i++) {
      let tarjeta = document.createElement("DIV");
      let image = document.createElement("IMG");
      let name = document.createElement("P");
      let price = document.createElement("P");
      let amount = document.createElement("P");
      let addImg = document.createElement("IMG");
      let addList = document.createElement("BUTTON");
      tarjeta.setAttribute("class", "cell");
      tarjeta.setAttribute("id", "card");
      image.setAttribute("src", dataSuperList[i].img);
      image.setAttribute("class", "image");
      name.setAttribute("class", "name");
      price.setAttribute("class", "price");
      amount.setAttribute("class", "amout");
      addImg.setAttribute("class", "addImg");
      image.setAttribute("src", "../../image/addList.svg");
      addImg.setAttribute("id", "addImg");
      addList.setAttribute("class", "addList");
      addList.setAttribute("id", "addList");
      name.innerHTML =dataSuperList[i].Titulo;
      price.innerHTML =dataSuperList[i].Precio;
      amount.innerHTML =dataSuperList[i].cantidaddataSuperList[i]["Unidad de Medida"];
      addList.innerHTML = 
      table.appendChild(tarjeta);
      tarjeta.appendChild(image);
      tarjeta.appendChild(name);
      tarjeta.appendChild(price);
      tarjeta.appendChild(amount);
      addList.innerHTML = "Agregar al carrito"
      table.appendChild(tarjeta);
      tarjeta.appendChild(image);
      tarjeta.appendChild(name);
      tarjeta.appendChild(price);
      tarjeta.appendChild(amount);
      tarjeta.appendChild(addList);

      return divsuperLista; 
    }
} 