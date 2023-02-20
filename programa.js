let burgers = [
  {
    nombre: "Gran Chamaco",
    cantidad: 1,
    precio: "1500",
    ingredintes: [
      "doble carne",
      "cheddar",
      "salsa mil islas",
      "lechuga",
      "pepinillos",
    ],
  },
  {
    nombre: "Cheese burger",
    cantidad: 1,
    precio: "1300",
    ingredintes: ["doble carne", "cheddar"],
  },
  {
    nombre: "Cheese bacon",
    cantidad: 1,
    precio: "1400",
    ingredintes: ["doble carne", "cheddar", "bacon"],
  },
  {
    nombre: "La chamaca",
    cantidad: 1,
    precio: "1600",
    ingredintes: [
      "doble carne",
      "cheddar",
      "jalapeños",
      "ketchup",
      "mostaza",
      "cebolla picada",
      "provolone",
    ],
  },
  {
    nombre: "Riquifort",
    cantidad: 1,
    precio: "1600",
    ingredintes: [
      "doble carne",
      "roquefort",
      "cebolla caramelizada",
      "salsa mil islas",
    ],
  },
  {
    nombre: "Yankee",
    cantidad: 1,
    precio: "1550",
    ingredintes: ["doble carne", "cheddar", "bacon", "barbacoa"],
  },
  {
    nombre: "Winsconsin",
    cantidad: 1,
    precio: "1500",
    ingredintes: ["doble carne", "cheddar", "cebolla caramelizada", "manteca"],
  },
  {
    nombre: "Voraz",
    cantidad: 1,
    precio: "1500",
    ingredintes: [
      "doble carne",
      "provolone",
      "cebolla caramelizada",
      "manteca",
      "chimichurri",
    ],
  },
  {
    nombre: "Oklahoma",
    cantidad: 1,
    precio: "1550",
    ingredintes: ["doble carne", "cheddar", "cebolla smashed"],
  },
  {
    nombre: "Crispyoli",
    cantidad: 1,
    precio: "1650",
    ingredintes: [
      "doble carne",
      "cheddar",
      "alioli",
      "cebolla crispy",
      "lechuga",
      "pepinillos",
    ],
  },
  {
    nombre: "Classic",
    cantidad: 1,
    precio: "1500",
    ingredintes: ["doble carne", "cheddar", "lechuga", "cebolla", "tomate"],
  },
  {
    nombre: "Eggbacon",
    cantidad: 1,
    precio: "1550",
    ingredintes: ["doble carne", "cheddar", "bacon", "huevo firto"],
  },
  {
    nombre: "Chamapork",
    cantidad: 1,
    precio: "1650",
    ingredintes: [
      "doble carne",
      "cheddar",
      "bondiola desmenuzada",
      "bacon",
      "barbacoa",
    ],
  },
];
let total_precio = 0;

let card = document.getElementsByClassName("card-b");
for (let c of card) {
  c.addEventListener("click", agregar_al_carrito);
}
function agregar_al_carrito(burger_nombre) {
  let burger_encontrada = burgers.find(
    (burger) => burger.nombre === burger_nombre
  );

  if (burger_encontrada) {
    let burger = {
      nombre: burger_encontrada.nombre,
      precio: burger_encontrada.precio,
      ingredientes: burger_encontrada.ingredintes,
      cantidad: 1,
    };

    total_precio += parseInt(burger.precio);

    mostrar_carrito(burger);
    mostrar_total();

    carrito_storage.push(burger);
    localStorage.setItem("carrito", JSON.stringify(carrito_storage));
  }
}
function mostrar_total() {
  document.querySelector("#total_precio").innerHTML = `Total: $${total_precio}`;
}
function mostrar_carrito(burger_c2) {
  let burger_c3 = burgers.find((burger) => burger.nombre === burger_c2);

  if (burger_c3) {
    let burger_carrito = {
      nombre: burger_c3.nombre,
      precio: burger_c3.precio,

      cantidad: 1,
    };
    let lista = document.createElement("li");
    lista.innerHTML = `<input type="number" class="cantidad"><span>${burger_carrito.burger_c3.nombre}</span> <span class="mx-1 precio_lista ">$${burger_carrito.burger_c3.precio}</span>
      <button class="btn btn-danger borrar_elemento mx-2">Borrar</button>`;

    let carrito = document.getElementsByClassName("dropdown-menu")[0];
    carrito.appendChild(lista);
    let btn_borrar = document.querySelectorAll(".borrar_elemento");
    for (let boton of btn_borrar) {
      boton.addEventListener("click", borrar_producto);
    }
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
  let btn_finalizar_compra = document.getElementById("finalizar-compra");
  btn_finalizar_compra.addEventListener("click", finalizar_compra);

  function finalizar_compra(producto) {
    let boleta = document.createElement("p");
    boleta.innerHTML = `<img class="img_carrito m-1" src="${producto.img}"><input type="number" class="cantidad"><span>${producto.nombre}</span> <span class="mx-1 precio_lista ">$${producto.precio}</span>`;
    let impresion = document.getElementsByClassName("modal-body");
    impresion[0].append(boleta);
  }
}
