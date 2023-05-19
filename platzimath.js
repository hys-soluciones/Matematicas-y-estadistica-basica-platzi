function calcularPromedio(lista) {
    //sumar todos los elementos del array
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma = suma + lista[i];
    }
    //lista.length = total de elementos
    const promedio = suma / lista.length;
    console.log(promedio);
    return promedio;
}

calcularPromedio([1, 2, 3, 4, 5, 6, 7, 8, 9, 100000]);

//Calculamos el promedio pero utilizando el metodo (reduce)
function calcularPromedioConReduce(lista) {
    //sumar todos los elementos del array
    /* 
    function sumarTodosLosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    } */
    //La misma funcion anterior pero ahora con una funcion flecha con variable Ej const ejemplo = (a,b)=> a + b;
    const sumarTodosLosElementos = (valorAcumulado, nuevoValor) =>
        valorAcumulado + nuevoValor;

    const sumaLista = lista.reduce(sumarTodosLosElementos);
    /* const sumaLista = lista.reduce((a,b)=>a+b); y funciona igual*/

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}
calcularPromedioConReduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
/* *********************************** */
const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
    const returns = accumulator + currentValue;
    console.log(
        `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
    );
    return returns;
}

array.reduce(reducer);
/* **************************************** 
Calcular una MEDIANA
*******************************************/
function esPar(lista) {
    return !(lista.length % 2);
}
function esImpar(lista) {
    return lista.length % 2;
}

function calcularMediana(listaDesordenada) {
    const lista = listaDesordenada.sort((a, b) => a - b);
    console.log(lista);
    const listaEsPar = esPar(lista);
    if (listaEsPar) {
        //..

        let indexMitad1Par = lista.length / 2 - 1;
        let indexMitad2Par = lista.length / 2;
        const listaMitades = [lista[indexMitad1Par], lista[indexMitad2Par]];
        const medianaListaPar = calcularPromedio(listaMitades);
        return medianaListaPar;
    } else {
        //es impar
        let indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}
calcularMediana([1, 2, 3, 40, 55, 60, 70, 8, 90, 10, 100, 5]);

/* ******************************************* */
/* ***********Encontrando la Moda************* */
function calcularModa(lista) {
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];

        if (listaCount[element]) {
            listaCount[element] += 1;
        } else {
            listaCount[element] = 1;
        }
    }

    //Convertimos el obj en un array con Object.entries()
    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
    const listaOrdenadaMaximoNumero = listaOrdenada[listaOrdenada.length - 1];
    console.log(
        listaArray,
        listaCount,
        listaOrdenada,
        listaOrdenadaMaximoNumero
    );
    console.log("La moda de la lista es: " + listaOrdenadaMaximoNumero[0]);
}

var numeros = [1, 20, 3, 2, 40, 4, 1, 1, 1, 1, 1, 3, 4, 50, 4, 4, 5, 4];
calcularModa(numeros);

/* ********************************************** */
/*      codigo platzi */
// [ [0,1],  [0,1],  [0,1] ]
function ordenarListaBidimensional(listaDesordenada, i) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado[i] - nuevoValor[i];
    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    console.log(lista);
    return lista;
}
const listaBi = [
    ["a", 100],
    ["b", 20],
    ["c", 30],
];
ordenarListaBidimensional(listaBi, 1);
