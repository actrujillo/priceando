// primera parte de la app

let buttonResult = document.querySelector(".buttonResult");
let formulario = document.querySelector("#formulario");
let msg = document.querySelector(".msg");
let final = document.querySelector(".final");

let resultado = "";
let costo = "";
let porcentaje = "";

// calculo del margen que el usuario deberia usar
const calculo = () => {
  costo = document.getElementById("costo").value;
  porcentaje = document.getElementById("porcentaje").value;
  if (costo > 0 && porcentaje > 0 && porcentaje < 100) {
    resultado = costo / (1 - porcentaje / 100);
    msg.innerHTML = "";
    final.innerHTML = `
    <h4>¡No pierdas dinero!</h4> 
    <p>Deberias poner este precio: $${Math.round(resultado)} <strike>($${
      costo * (1 + porcentaje / 100)
    })</strike></p>`;
  } else {
    final.innerHTML = "";
    msg.innerHTML = `<p class='alerta'>*pone un numero mayor a 0 y menor a 100</p>`;
  }
};

buttonResult.addEventListener("click", (e) => {
  e.preventDefault();
  calculo();
  formulario.reset();
});

// segunda parte de la app

let final2 = document.querySelector(".final2");
let buttonMargen = document.querySelector(".buttonMargen");
let msg2 = document.querySelector(".msg2");

let margen = "";
let precioProducto = "";
let costoProducto = "";
let diferencia = "";

// funcion del calculo para saber el margen real del producto y la diferencia entre precio venta y costo mercaderia
const calculo2 = () => {
  precioProducto = document.getElementById("precioProducto").value;
  costoProducto = document.getElementById("costoProducto").value;
  if (
    precioProducto > 0 &&
    costoProducto > 0 &&
    precioProducto > costoProducto
  ) {
    margen = ((precioProducto - costoProducto) / precioProducto) * 100;
    diferencia = precioProducto - costoProducto;
    msg2.innerHTML = "";
    final2.innerHTML = `
    <p>Este es el margen real que te queda de la venta: $${
      Math.round(margen * 100) / 100
    }%</p>
    <p>Tu ganancia del producto anterior fue de: $${diferencia}</p>
    `;
  } else {
    final2.innerHTML = "";
    msg2.innerHTML = `<p class='alerta'>*ingresa algun valor</p>`;
  }
};

buttonMargen.addEventListener("click", (e) => {
  e.preventDefault();
  calculo2();
  formulario2.reset();
});

// botones de reinicio del form

const buttons = document.querySelectorAll(".reset");

buttons.forEach((resetBtn) => {
  resetBtn.addEventListener("click", () => {
    final.innerHTML = "";
    final2.innerHTML = "";
    msg.innerHTML = "";
    msg2.innerHTML = "";
  });
});
