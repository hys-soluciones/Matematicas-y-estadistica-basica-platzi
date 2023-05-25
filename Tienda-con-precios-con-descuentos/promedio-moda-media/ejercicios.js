const arrayList = [50, 15, 20, 13, 19, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 40];
console.log(salarios);
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

// promedioConMetodoReduce(arrayList);

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
    // console.log(output);
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
// console.log(obj);
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
    // console.log(objEntries);
    // console.log(array);
    return array;
}
solution2(obj);

/* **Reto: calcula otros tipos de promedio
20/30** */
/*   Promedio ponderado :
Promedio ponderado: Se utiliza cuando se quiere asignar un peso diferente a cada valor en función de su importancia relativa. Se multiplica cada valor por su peso correspondiente, se suman los productos y se divide entre la suma de los pesos.

Promedio ponderado = (Valor1 * Peso1 + Valor2 * Peso2 + ... + ValorN * PesoN) / (Peso1 + Peso2 + ... + PesoN)*/

function calcularPromedioPonderado(valores, pesos) {
    if (valores.length !== pesos.length) {
        return Error("La cantidad de valores y pesos debe ser la misma.");
    }
    function sumaTodosElementosPeso(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    const sumaDePesos = pesos.reduce(sumaTodosElementosPeso);
    // console.log(sumaDePesos);
    let valorXpeso = 0;
    for (let i = 0; i < valores.length; i++) {
        const element = valores[i] * pesos[i];
        valorXpeso += element;
    }
    // console.log(valorXpeso);
    const promedioPonderado = valorXpeso / sumaDePesos;
    // console.log(promedioPonderado);
    return promedioPonderado;
}
const valores = [5, 7, 8];
const pesos = [2, 3, 1];
const resultado = calcularPromedioPonderado(valores, pesos);
// console.log(resultado);

/* *************************************** */
function promedioNotasPonderado(notes) {
    const notesWithCredit = notes.map(function (noteObject) {
        return noteObject.note * noteObject.credit;
    });
    console.log(notesWithCredit);

    const sumOfNotesWithCredit = notesWithCredit.reduce(function (
        sum = 0,
        newVal
    ) {
        return sum + newVal;
    });
    console.log(sumOfNotesWithCredit);
    const credits = notes.map(function (noteObject) {
        return noteObject.credit;
    });
    console.log(credits);
    const sumOfCredits = credits.reduce(function (sum = 0, newVal) {
        return sum + newVal;
    });

    const promedioPonderadoNotasConCreditos =
        sumOfNotesWithCredit / sumOfCredits;
    console.log(promedioPonderadoNotasConCreditos);

    return promedioPonderadoNotasConCreditos;
}
const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];
// promedioNotasPonderado(notes);
/* ***************************************** */
function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    let porcentajesCrecimiento = [];
    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioAnterior = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioAnterior;
        const porcentajeCrecimiento = crecimiento / salarioAnterior;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    const medianaPorcentajeCrecimiento = PlatziMath.calcularMediana(
        porcentajesCrecimiento
    );
    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    // console.log(medianaPorcentajeCrecimiento);
    // console.log(ultimoSalario);
    const aumentoSalarial = ultimoSalario * medianaPorcentajeCrecimiento;
    const nuevoSalario = ultimoSalario + aumentoSalarial;
    // console.log(aumentoSalarial);
    // console.log(nuevoSalario);
    return nuevoSalario;
}

/* ************************************* */
/* *****Analisis Empresarial******* */
/* 
Industrias Mokepon: {
    2018:[salarios,salarios]
    2019
    2020
}
*/
const empresas3 = {};
salarios.forEach((persona) => {
    persona.trabajos.forEach((trabajo) => {
        if (!empresas3[trabajo.empresa]) {
            empresas3[trabajo.empresa] = {};
            // console.log(empresas3);
        }
        if (!empresas3[trabajo.empresa][trabajo.year]) {
            empresas3[trabajo.empresa][trabajo.year] = [];
            // console.log(empresas3);
        }
        empresas3[trabajo.empresa][trabajo.year].push(trabajo.salario);
    });
});
// console.log(empresas3);

/* ****  Encontrar mediana por empresa y por year*** */
function calcularMedianaPorEmpresaYear(empresa, year) {
    console.log(empresas3[empresa]);

    if (!empresas3[empresa]) {
        console.warn("La empresa no existe");
    } else if (!empresas3[empresa][year]) {
        console.warn("El año no existe");
    } else {
        console.log(calcularMediana(empresas3[empresa][year]));
        return calcularMediana(empresas3[empresa][year]);
    }
}
// calcularMedianaPorEmpresaYear("Industrias Mokepon", 2022);
/* ********************************************* */
/* *****   Proyeccion de rangoo medianas por empresa ***** */
function proyeccionPorEmpresa(empresa) {
    const medianaDeMedianas = [];
    if (!empresas3[empresa]) {
        console.warn("La empresa no existe");
    } else {
        /* si la empresa como obj existe la convierto en un arrayObj */
        const arrayObj = Object.entries(empresas3[empresa]);
        // console.log(arrayObj);
        /* Recorro esa ArrayObj con un forEach */
        arrayObj.forEach((salario) => {
            // console.log(salario[1]);
            /* La array de los salarios estan en la posicion una y guardo las medias de esas array en otra array */
            medianaDeMedianas.push(calcularMediana(salario[1]));

            /*A esta nueva array con las medianas les saco la mediana para octener la mediana de todos los salarios que la empresa ha generado  */
            // console.log(calcularMediana(medianaDeMedianas));
        });
        console.log(medianaDeMedianas);

        /* --------------------------- */
        let porcentajesCrecimiento = [];

        for (let i = 1; i < medianaDeMedianas.length; i++) {
            const medianaActual = medianaDeMedianas[i];
            const medianaAnterior = medianaDeMedianas[i - 1];
            const crecimiento = medianaActual - medianaAnterior;
            const porcentajeCrecimiento = crecimiento / medianaAnterior;
            porcentajesCrecimiento.push(porcentajeCrecimiento);
        }

        const medianaPorcentajeCrecimiento = calcularMediana(
            porcentajesCrecimiento
        );
        const ultimaMediana = medianaDeMedianas[medianaDeMedianas.length - 1];

        const aumentoSalarial = ultimaMediana * medianaPorcentajeCrecimiento;
        const nuevoSalario = ultimaMediana + aumentoSalarial;

        return nuevoSalario;
    }
}
// proyeccionPorEmpresa("Industrias Mokepon");
