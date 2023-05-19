const arrayList = [50, 15, 20, 13, 19, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 40];

function promedio(arr) {
    // console.log(arr);
    let result;
    let suma = 0;
    let cont = 0;
    for (let i = 0; i < arr.length; i++) {
        suma = suma + arr[i];
        cont++;
    }
    result = suma / cont;

    // console.log("Promedio :" + result);

    return result;
}
promedio(arrayList);
/* 2)********Promedio con el metodo reduce****** */
function promedioConMetodoReduce(lista) {
    function sumaTodosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumaTodosElementos);
    const promedio = sumaLista / lista.length;

    /*  console.log(
        "El promedio con reduce de la lista es : " +
            promedio +
            " Suama lista : " +
            sumaLista
    );
 */
    return promedio;
}

promedioConMetodoReduce(arrayList);

/*  Funcion para saber si un array es par o impar */

function esPar(lista) {
    if (lista.length % 2 === 0) {
        // console.log(`El numero ${lista.length} es PAR.`);
        return true;
    } else {
        // console.log(`El numero ${lista.length} es IMPAR.`);
        return false;
    }
}

esPar(arrayList);
/* ******************************************** */
/* ********Calcular Mediana******************** */

function calcularMediana(listaDesordenada) {
    const listaOrdenada = listaDesordenada.sort((a, b) => a - b);
    const listaEsPar = esPar(listaOrdenada);

    if (listaEsPar) {
        // ....
        // prettier-ignore
        let indexPrimeraMitad = (listaOrdenada.length / 2) - 1;
        let indexSegundaMitad = listaOrdenada.length / 2;
        const arrayMitades = [
            listaOrdenada[indexPrimeraMitad],
            listaOrdenada[indexSegundaMitad],
        ];
        // prettier-ignore
        let mediana = promedio(arrayMitades);

        // console.log("La Mediana : " + mediana);

        return mediana;
    } else {
        let longitudArray = listaOrdenada.length;
        let indexNumMedio = Math.floor(longitudArray / 2);
        let media = listaOrdenada[indexNumMedio];
        // console.log(longitudArray, media, listaOrdenada);

        return media;
    }
}
calcularMediana([100, 20, 300, 40, 500, 150]);
/* *********************************************** */
/*                     MODA                   */

function encontrarModa(array) {
    var frecuencia = {};
    var moda = [];
    var maxFrecuencia = 0;

    // Contar la frecuencia de cada valor
    array.forEach(function (elemento) {
        frecuencia[elemento] = (frecuencia[elemento] || 0) + 1;

        if (frecuencia[elemento] > maxFrecuencia) {
            maxFrecuencia = frecuencia[elemento];
        }
    });

    // Encontrar la moda
    for (var elemento in frecuencia) {
        if (frecuencia.hasOwnProperty(elemento)) {
            if (frecuencia[elemento] === maxFrecuencia) {
                moda.push(elemento);
            }
        }
    }
    // console.log("Maxima frecuencia :" + maxFrecuencia);
    return moda;
}

// Ejemplo de uso
var numeros = [1, 2, 2, 4, 3, 2, 4, 3, 4, 5, 4, 4, 5, 4];
var moda = encontrarModa(numeros);
//console.log("La moda es:" + moda); // Devuelve [4]
/* ****************************************** */
/* ************Calculando la moda************ */
function calcularModa(lista) {
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }
    // console.log(listaCount);
    //Convertimos el objeto en un Array con el siguiente metodo {[Object.entries()]} que nos devuelve un Array de Arrais o array bidimencional

    const listaDeArrays = Object.entries(listaCount);
    const listaOrdenada = ordenarListasBidimencionales(listaDeArrays, 1);
    const indexModa = listaOrdenada.length - 1;
    const arrayModa = listaOrdenada[indexModa];
    const moda = arrayModa[0];
    /* console.log(
        listaCount,
        listaDeArrays,
        listaOrdenada,
        indexModa,
        arrayModa,
        moda
    ); */
    // console.log("La moda es: " + moda);
    return moda;
}

calcularModa(numeros);

//Para ordena la lista de Arrays
function ordenarListasBidimencionales(listaDesordenada, i) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado[i] - nuevoValor[i];
    }
    const lista = listaDesordenada.sort(ordenarListaSort);
    // console.log(lista);
    return lista;
}
const listaBi = [
    ["a", 100],
    ["b", 20],
    ["c", 30],
    ["d", 90],
];
ordenarListasBidimencionales(listaBi, 1);

/* ********************************************** */
/*  Ejercicio  *** Transforma objetos en arrays*****/

function solution(obj) {
    const output = [];

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const item = {
                id: key,
                name: obj[key],
            };
            output.push(item);
        }
    }
    console.log(output);
    return output;
    /* Esta solucion tambien funciona:
       return Object.entries(obj).map(value => {
      return { id: value[0], name: value[1] }
    }) */
}

const obj = {
    123: "Juanito Alcachofa",
    456: "Juanita Alcaparra",
};

solution(obj);
console.log(obj);
/* Output

[
  {
    id: "123",
    name: 'Juanito Alcachofa',
  },
  {
    id: "456",
    name: 'Juanita Alcaparra', 
  }
]*/
function solution2(obj) {
    const array = [];
    const objEntries = Object.entries(obj);
    for (let i = 0; i < objEntries.length; i++) {
        array.push({
            id: objEntries[i][0],
            name: objEntries[i][1],
        });
    }
    console.log(objEntries);
    console.log(array);
    return array;
}
solution2(obj);
