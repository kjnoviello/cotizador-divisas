// use el if para seleccion de moneda
// use el for para compra/venta diaria por x dias
// use while para ciclo de error
// use las funciones para hacer los calculos de la cotizacion



// Declaración de variables e inicialización.
const dolar =  229.00;
const euro = 251.00;
const pesos = 1;
const dolarSobreEuro = dolar/euro;
const fecha = new Date();
const hoy = fecha.toDateString()


// Inicio de programa. 
let inicio = confirm(`BIENVENIDOS AL CONVERSOR DE DIVISAS.
Trabajamos con DÓLARES, EUROS y PESOS (Arg).
Para iniciar haga click en aceptar. Para salir haga click en cancelar.`)

if (inicio==true) {
    alert(`La cotizacion al ${hoy} es de: 
    ${pesos.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} dólar a ${dolar.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })} pesos.
    ${pesos.toLocaleString('eu-EU', { style: 'currency', currency: 'EUR' })} euro a ${euro.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })} pesos.`)

    // Se inicializan las variables segun el ingreso del usuario y se verifican las opciones.
    let monedaOrigen = Number(prompt(`Para comenzar ingrese el tipo de divisa que usted tiene. Elija: 
    1 -para Dólares.
    2 -para Euros.
    3 -para Pesos.`));
    while (monedaOrigen < 1 || monedaOrigen > 3 || isNaN(monedaOrigen)) {
        alert("La opción ingresada no es válida");
        monedaOrigen = Number(prompt(`Para comenzar ingrese el tipo de divisa que usted tiene. Elija: 
        1 -para Dólares.
        2 -para Euros.
        3 -para Pesos.`));
    };

    let valorOrigen = Number(prompt("ingrese el valor de la moneda que tiene."));
    while (valorOrigen <= 0 || isNaN(valorOrigen) ) {
        alert("La opción ingresada no es válida");
        valorOrigen = Number(prompt("ingrese el valor de la moneda que tiene."));
    };

    let monedaDestino = Number(prompt(`Elija la divisa destino:
    1 -para Dólares.
    2 -para Euros.
    3 -para Pesos.`));
    while (monedaDestino < 1 || monedaDestino > 3 || isNaN(monedaDestino)) {
        alert("La opción ingresada no es válida.");
        monedaDestino = Number(prompt(`Elija la moneda destino:
        1 -para Dólares.
        2 -para Euros.
        3 -para Pesos.`));
        };

    // Declaracion de funciones
    function cotizarPesoADolar(n) {
        const pesoADolar = n/dolar;
        return alert(`La cotización de ${valorOrigen.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })} pesos es de ${pesoADolar.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} dólares.`);
    };
    function cotizarDolarAPeso(n) {
        const dolarAPeso = n*dolar;
        return alert(`La cotización de ${valorOrigen.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} dólares es de ${dolarAPeso.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })} pesos.`);
    };
    function cotizarPesoAEuro(n) {
        const pesoAEuro = n/euro;
        return alert(`La cotización de ${valorOrigen.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })} pesos es de ${pesoAEuro.toLocaleString('eu-EU', { style: 'currency', currency: 'EUR' })} euros.`);
    };
    function cotizarEuroAPeso(n) {
        const euroAPeso = n*euro;
        return alert(`La cotización de ${valorOrigen.toLocaleString('eu-EU', { style: 'currency', currency: 'EUR' })} euros es de ${euroAPeso.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })} pesos.`);
    };
    function cotizarDolarAEuro(n) {
        const dolarAEuro = n/dolarSobreEuro;
        return alert(`La cotización de ${valorOrigen.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} dólares es de ${dolarAEuro.toLocaleString('eu-EU', { style: 'currency', currency: 'EUR' })} euros.`);
    };
    function cotizarEuroADolar(n) {
        const euroADolar = n*dolarSobreEuro;
        return alert(`La cotización de ${valorOrigen.toLocaleString('eu-EU', { style: 'currency', currency: 'EUR' })} euros es de ${euroADolar.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} dólares.`);   
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
        alert("Algo salió mal o está operando en la misma divisa.");
    };

    // Fin o reinicio del programa
    let reset = confirm("Desea realizar una nueva cotización?.")
    if (reset === true) {
        location.reload();
    } else {
        alert("Hasta luego.");
    };

// Fin del programa
 } else {
    alert("Hasta luego.");
 };
