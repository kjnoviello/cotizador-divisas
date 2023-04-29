// usarmos el if para seleccion de moneda
// usamamos el for para compra/venta diaria por x dias
// usamos while para ciclo de error
// usamos las funciones para hacer los calculos de la cotizacion


alert(`Bienevenidos al cotizador de monedas.
Trabajamos con Dolares, Euros y Pesos argentinos.`);


// Variables e inicializacion.
let monedaOrigen = prompt(`Para comenzar ingrese el tipo de moneda que usted tiene. Elija: 
1- para Dolares
2- para Euros
3- para Pesos
`);
let valorOrigen = Number(prompt("ingrese el valor de la moneda que tiene"));
let monedaDestino = prompt(`Elija la moneda destino:
1- para Dolares
2- para Euros
3- para Pesos`)
let dolar =  229.00;
let euro = 251.00;
// let = 48.05;
let pesos = 1;
let dolarSobreEuro = 0.90;


// Declaracion de funciones
function cotizarPesoADolar(n) {
    const pesoADolar = n/dolar;
    return alert(`La cotizacion de ${valorOrigen} pesos es de ${pesoADolar} dolares`);
};
function cotizarDolarAPeso(n) {
    const dolarAPeso = n*dolar;
    return alert(`La cotizacion de ${valorOrigen} dolares es de ${dolarAPeso} pesos`);
}
function cotizarPesoAEuro(n) {
    const pesoAEuro = n/euro;
    return alert(`La cotizacion de ${valorOrigen} pesos es de ${pesoAEuro} euros`);
};
function cotizarEuroAPeso(n) {
    const euroAPeso = n*euro;
    return alert(`La cotizacion de ${valorOrigen} euros es de ${euroAPeso} pesos`);
};
function cotizarDolarAEuro(n) {
    const dolarAEuro = n/dolarSobreEuro;
    return alert(`La cotizacion de ${valorOrigen} dolares es de ${dolarAEuro} euros`);
};
function cotizarEuroADolar(n) {
    const euroADolar = n*dolarSobreEuro;
    return alert(`La cotizacion de ${valorOrigen} euros es de ${euroADolar} dolares`);   
};

// Condicionales
if (monedaOrigen == 1 && monedaDestino == 3) {
    const valorFinalDolarAPeso = cotizarDolarAPeso(valorOrigen);
} else if (monedaOrigen == 1 && monedaDestino == 2) {
    const valorFinalDolarAEuro = cotizarDolarAEuro(valorOrigen);
} else if (monedaOrigen == 2 && monedaDestino == 1) {
    const valorFinalEuroADolar = cotizarEuroADolar(valorOrigen);
} else if (monedaOrigen == 2 && monedaDestino == 3) {
    const valorFinalEuroAPeso = cotizarEuroAPeso(valorOrigen);
} else if (monedaOrigen == 3 && monedaDestino == 1) {
    const valorFinalPesoADolar = cotizarPesoADolar(valorOrigen);
} else if (monedaOrigen == 3 && monedaDestino == 2) {
    const valorFinalPesoAEuro = cotizarPesoAEuro(valorOrigen);
} else {
    alert("Hubo un error");
}

// cotizarPesoADolar();
