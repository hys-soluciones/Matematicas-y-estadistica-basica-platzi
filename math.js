console.group("Cuadrado");

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado,
    };
}

console.groupEnd("Cuadrado");

console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    };
}

function calcularAlturaTriangulo(lado1, base) {
    if (lado1 == base) {
        console.warn("Este no es un triangulo Isoseles");
    } else {
        // prettier-ignore
        return Math.sqrt((lado1 ** 2) - (base ** 2) / 4);
    }
}
/* ******** */
function AlturaTrianguloEscaleno(ladoa, ladob, ladoc) {
    let a = ladoa;
    let b = ladob;
    let c = ladoc;
    if (a == b || a == c || a == c) {
        return console.log(false);
    }
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    let alturaDeA = Math.floor((2 * area) / a);
    let alturaDeB = Math.floor((2 * area) / b);
    let alturaDeC = Math.floor((2 * area) / c);

    return console.log(
        ` La altura de el lado A : ${alturaDeA} , del lado B : ${alturaDeB}, y la del lado C : ${alturaDeC}`
    );
}
AlturaTrianguloEscaleno(16, 8, 10);
AlturaTrianguloEscaleno(6, 6, 6);
function solution(lado1, lado2, lado3) {
    let a = lado1;
    let b = lado2;
    let c = lado3;

    // Si no es escaleno, no continuamos
    if (a == b || b == c || c == a) {
        return false;
    }

    // Si es escaleno, calculamos primero su area
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    // Ahora usamos que A = bh/2, por lo que h = 2A/b
    let altura_a = Math.floor((2 * area) / a);
    let altura_b = Math.floor((2 * area) / b);
    let altura_c = Math.floor((2 * area) / c);

    // IMPTE: No se especifica cual de las alturas se quiere, tras probar el codigo conclui que se busca la altura respecto a 'a' como base
    return altura_a;
}
console.log(solution(16, 8, 10));
console.log(solution(6, 6, 6));
/* ******** */

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
});

console.groupEnd("Triangulo");

/* ***************************** */

console.group("circle");

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = radioCirculo ** 2 * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo,
});
function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);
    return {
        circunferencia: diametro * Math.PI.toFixed(3),
        area: radioAlCuadrado * Math.PI.toFixed(2),
    };
}
// console.log(Math.PI.toFixed(2));
console.groupEnd("Circle");
