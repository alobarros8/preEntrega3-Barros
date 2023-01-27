let carrito_storage = [];
let card = document.getElementsByClassName("card-b");
for (let c of card) {
  c.addEventListener("click", agregar_al_carrito);
}
let total_precio = 0;
function agregar_al_carrito(e) {
  let nombre_producto =
    e.target.parentNode.querySelector(".burger_nombre").textContent;
  let precio_producto =
    e.target.parentNode.querySelector("#precio").textContent;
  let imagen_producto = e.target.parentNode.querySelector(".burger__img").src;

  let producto = {
    nombre: nombre_producto,
    precio: precio_producto,
    img: imagen_producto,
    cantidad: 1,
  };
  total_precio += parseInt(precio_producto);

  mostrar_carrito(producto);
  mostrar_total();
}

function mostrar_carrito(producto) {
  let lista = document.createElement("li");
  lista.innerHTML = `<img class="img_carrito m-1" src="${producto.img}"><span class=" mx-2">${producto.cantidad}</span><span>${producto.nombre}</span> <span class="mx-1 precio_lista ">$${producto.precio}</span>
    <button class="btn btn-danger borrar_elemento mx-2">Borrar</button>`;

  let carrito = document.getElementsByClassName("dropdown-menu")[0];
  carrito.appendChild(lista);
  let btn_borrar = document.querySelectorAll(".borrar_elemento");
  for (let boton of btn_borrar) {
    boton.addEventListener("click", borrar_producto);
  }
}

function mostrar_total() {
  document.querySelector("#total_precio").innerHTML = `Total: $${total_precio}`;
}

function borrar_producto(e) {
  let precio_producto =
    e.target.parentNode.querySelector(".precio_lista").textContent;
  precio_producto = precio_producto.replace("$", "");
  if (!isNaN(precio_producto)) {
    total_precio -= parseInt(precio_producto);
    mostrar_total();
  }
  e.target.parentNode.remove();
}

localStorage.setItem("carrito", JSON.stringify(carrito));