
const validarNumero = (num, rango1, rango2, mensaje1) => {
  while (num < rango1 || num > rango2 || isNaN(num)) {
    alert(mensaje1);
    num = parseFloat(prompt("Ingrese solo numeros! dentro de los rangos validos"));
  }
  return num;
};

const calcularIntereses = (valor, porcentaje, cuotas) =>
  ((valor + valor * porcentaje) / cuotas).toFixed(2);

const pagoEfectivo = (monto) => (monto - (monto * 0.10));

const fCalcular = () => {
  let monto = parseFloat(prompt("Ingrese el monto total"));
  let mensajeMonto = `Tiene que ingresar un monto entre 1 y 100.000`;
  monto = validarNumero(monto, 1, 100000, mensajeMonto);

  let menu = parseFloat(prompt("Ingrese solo el numero de cada opcion \n 1- Pago en efectivo (10% descuento) \n 2- Tarjeta en 1 pago (sin recargo)\n 3- Tarjeta en cuotas con o sin intereses"));
  let mensajeMenu = `Tiene que ingresar un numero entre 1 y 3`;
  menu = validarNumero(menu, 1, 3, mensajeMenu);

  switch (menu) {
    case 1:
      let mensaje1 = `El monto a pagar en efectivo con 10% de descuento es $ ${pagoEfectivo(monto)}`;
      console.log(mensaje1);
      alert(mensaje1);
      break;
    case 2:
      let mensaje2 = `El monto a pagar sin recargos es ${monto}`;
      alert(mensaje2);
      break;
    case 3:
      let opcion2 = parseFloat(prompt("(Opcion 1) - Ahora 12 / Cuotas sin intereses \n (Opcion 2) - 2 Cuotas 10% de recargo \n (Opcion 3) - 3 Cuotas 15% de recargo \n (Opcion 4) - 6 Cuotas 30 % de recargo"));
      let mensaje3 = `Tienes que ingresar un numero del 1 al 4`,
        csi = "";
      opcion2 = validarNumero(opcion2, 1, 4, mensaje3);
      switch (opcion2) {
        case 1:
          csi = `El monto:$ ${monto} queda en 12 cuotas de:$ ${(monto / 12).toFixed(2)} `;
          alert(csi);
          break;
        case 2:
          csi = `El monto:$ ${monto} con 10% de recargo, queda en 2 cuotas de :$ ${calcularIntereses(monto,0.1,2)} `;
          alert(csi);
          break;
        case 3:
          csi = `El monto:$ ${monto} con 15% de recargo, queda en 3 cuotas de :$ ${calcularIntereses(monto,0.15,3)} `;
          alert(csi);
          break;
        case 4:
          csi = `El monto:$ ${monto} con 30% de recargo, queda en 6 cuotas de :$ ${calcularIntereses(monto,0.3,6)} `;
          alert(csi);
          break;
      }
    case 4:
      break;
  }
};



const $botonCalcular = document.getElementById("calcular-intereses");
$botonCalcular.onclick = fCalcular;

