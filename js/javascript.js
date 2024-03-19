// Primera preentrega JavaScript

let descripCod1 = 'Audi A3 Sportback'
let descripCod2 = 'Volkswagen sirocco GTS'
let descripCod3 = 'Volkswagen golf GTI'
let descripCod4 = 'Peugeot RCZ coupé'
let descripCod5 = 'Fiat 500X sport'

let darBienvenida = '¡Bienvenidos a FerCars! \n\nPulse ENTER para ingresar'
alert(darBienvenida)

let seleccionProducto = parseInt(prompt('Seleccione el vehículo que desea comprar \n1-Audi A3 Sportback : 41000 USD \n2-Volkswagen sirocco GTS : 35000 USD \n3-Volkswagen golf GTI : 29000 USD \n4-Peugeot RCZ coupé : 24000 USD \n5-Fiat 500X sport : 25000 USD \n\nPulse 0 para finalizar'));
let total = 0;
const IVA = 0.21;
const DESCUENTO_TOTAL = 0.1;
const INT_TOTAL_FINANCIADO = 0.15;

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
    seleccionProducto = parseInt(prompt('Seleccione el vehiculo que desea comprar \n1-Audi A3 Sportback : 41,000 USD. \n2-Volkswagen Sirocco GTS : 35,000 USD. \n3-Volkswagen Golf GTI : 29,000 USD \n4-Peugeot RCZ Coupé : 24,000 USD \n5-Fiat 500X Sport : 25,000 USD. \n\nPulse 0 para finalizar.'));

}

if (total != 0) {
    let metodoPago = parseInt(prompt('Estás cerca de adquirir tu vehículo.\n\n¿Con qué metodo deseas abonarlo?.\n\n1-Valor total en EFECTIVO con 10% de descuento en un pago.\n2-Valor financiado con 15% de interés en 36 cuotas fijas.'));


    if (metodoPago == 1) {
        let totalPagar = aplicarImpuestoyDescuento(IVA, DESCUENTO_TOTAL, 0).toFixed(3);
        alert('El total que debe abonar en efectivo es de: ' + totalPagar + ' UDS con impuestos incluhidos');
    } else if (metodoPago == 2) {
        let totalPagar = aplicarImpuestoyDescuento(IVA, 0);
        let totalPagarInt = (totalPagar * (1 + INT_TOTAL_FINANCIADO)).toFixed(3);
        let cuotas = (totalPagarInt / 36).toFixed(3);
        alert('El total que debe abonar es de: ' + totalPagarInt + ' USD este valor ya tiene impluesto incluhido y su respectivo interes\n\nSu metodo de pago es de 36 cuotas fijas de:' + cuotas + ' USD');
    } else {
        alert('Opcion de pago invalida...');
    }
}

function aplicarImpuestoyDescuento(impuesto, descuento) {
    let totalConImpuesto = total * (1 + impuesto);
    let totalConImpuestoyDescuento;
    if (descuento != 0) {
        totalConImpuestoyDescuento = totalConImpuesto * (1 - descuento);
    } else {
        totalConImpuestoyDescuento = totalConImpuesto;
    }
    return totalConImpuestoyDescuento;
}
