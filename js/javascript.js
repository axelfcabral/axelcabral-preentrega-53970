// Primera preentrega JavaScript

let descripCod1 = 'Audi A3 sport back'
let descripCod2 = 'Volkswagen sirocco GTS'
let descripCod3 = 'Volkswagen golf GTI'
let descripCod4 = 'Peugeot RCZ coupé'
let descripCod5 = 'Fiat 500X sport'

let darBienvenida = '¡Bienvenidos a FerCars! \n\nPulse ENTER para ingresar'
alert(darBienvenida)

let seleccionProducto = parseInt(prompt('Seleccione el vehiculo que desea comprar \n1-Audi A3 sport back : 41000 USD \n2-Volkswagen sirocco GTS : 35000 USD \n3-Volkswagen golf GTI : 29000 USD \n4-Peugeot RCZ coupé : 24000 USD \n5-Fiat 500X sport : 25000 USD \n\nPulse 0 para finalizar compra'));
let total = 0;
const DESCUENTO_TOTAL = 0.1;
const TOTAL_FINANCIADO = 1.200;

while (seleccionProducto != 0) {

    switch (seleccionProducto) {
        case 1:
            total += 41000;
            alert('Selecciono' + descripCod1 + ' VALOR: ' + total + ' USD');
            break;
        case 2:
            total += 35000;
            alert('Selecciono' + descripCod2 + ' VALOR: ' + total + ' USD');
            break;
        case 3:
            total += 29000;
            alert('Selecciono' + descripCod3 + ' VALOR: ' + total + ' USD');
            break;
        case 4:
            total += 24000;
            alert('Selecciono' + descripCod4 + ' VALOR: ' + total + ' USD');
            break;
        case 5:
            total += 25000;
            alert('Selecciono' + descripCod5 + ' VALOR: ' + total + ' USD');
            break;
        default:
            alert('Error en el codigo');
            break;
    }
    seleccionProducto = parseInt(prompt('Seleccione el vehiculo que desea comprar \n1-Audi A3 sport back : 41,000 USD \n2-Volkswagen sirocco GTS : 35,000 USD \n3-Volkswagen golf GTI : 29,000 USD \n4-Peugeot RCZ coupé : 24,000 USD \n5-Fiat 500X sport : 25,000 USD \n\nPulse 0 para salir'));

}

let metodoPago = parseInt(prompt('Estas cerca de adquirir tu vehiculo.\n\n¿Con que metodo deseas abonarlo?\n\n1-Valor total en EFECTIVO con 10% de descuento en un pago\n2-Valor financiado con 200% de interes en 36 cuotas fijas'));