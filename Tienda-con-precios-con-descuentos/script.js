const inputNombre = document.querySelector(".name");
const inputPrecio = document.querySelector(".precio");
const inputDescuento = document.querySelector(".descuento");
const resultadoNombre = document.querySelector("#nombreProducto");
const resultadoPrecioFinal = document.querySelector("#precioFinal");
const mensaje = document.querySelector("#mensaje");
const resetBtn = document.querySelector("#reset-btn");
const formulario = document.querySelector("form");
const inputBono = document.getElementById("bono");

resetBtn.addEventListener("click", function () {
    formulario.reset();
    resetResultado();
});
/* ************************************ */
/* const bonusObjeto = {
    enero1: 5,
    enero2: 10,
    enero3: 15,
    febrero1: 15,
    febrero2: 20,
    febrero3: 25,
    marzo1: 10,
    marzo2: 5,
    marzo3: 15,
    abril1: 20,
    abril2: 10,
    abril3: 5,
    mayo1: 20,
    mayo2: 25,
    mayo3: 30,
    junio1: 10,
    junio2: 20,
    junio3: 30,
}; */
const couponsList = [];
couponsList.push({
    name: "enero",
    discount: 20,
});
couponsList.push({
    name: "febrero",
    discount: 15,
});
couponsList.push({
    name: "marzo",
    discount: 25,
});
couponsList.push({
    name: "abril",
    discount: 30,
});
/* ************************************ */
function resetResultado() {
    document.getElementById("nombreProducto").innerHTML = "";
    document.getElementById("precioFinal").innerHTML = "";
    document.getElementById("mensaje").innerHTML = "";
}

function calcularPrecioFinal(precio, descuento) {
    return (precio * (100 - descuento)) / 100;
}

inputNombre.addEventListener("input", () => {
    resultadoNombre.innerHTML = inputNombre.value;
});

inputPrecio.addEventListener("input", () => {
    const precio = parseInt(inputPrecio.value);
    if (precio < 0) {
        resultadoPrecioFinal.innerHTML = precio;
        mensaje.innerHTML = `El valoe negativo: ${precio}, no esta permitido`;
    }
});

inputDescuento.addEventListener("input", () => {
    const precio = parseInt(inputPrecio.value);
    const descuento = parseInt(inputDescuento.value);

    if (descuento < 50) {
        const precioFinal = calcularPrecioFinal(precio, descuento);
        resultadoPrecioFinal.innerHTML = `Precio final: $${precioFinal}`;
    } else {
        resultadoPrecioFinal.innerHTML = precio;
        mensaje.innerHTML = `El descuento de : ${descuento}, no esta permitido`;
    }
});

inputBono.addEventListener("input", () => {
    const precio = parseInt(inputPrecio.value);

    // const descuento = parseInt(seleccionaCupon());

    // const descuento = conseguirTipoDeBono(inputBono.value);

    const bono = inputBono.value;
    function isCouponInArray(couponElement) {
        //{name,discount}retourn true o false;
        return couponElement.name == bono;
    }
    const couponInList = couponsList.find(isCouponInArray); //{Traemelo el objeto}

    if (couponInList) {
        descuento = couponInList.discount;
    } else {
        descuento = 0;
    }

    // descuento = descuento;
    mensaje.innerHTML = "";
    if (descuento != 0 && precio > 0) {
        const precioFinal = calcularPrecioFinal(precio, descuento);
        resultadoPrecioFinal.innerHTML = `Precio final: $${precioFinal}`;
    } else {
        resultadoPrecioFinal.innerHTML = `Precio sin descuento: $${precio}`;
        mensaje.innerHTML = "El bono no es valido";
    }
});

/* function seleccionaCupon() {
    let descuento;
    const bonoDescuento = inputBono.value;
    if (bonoDescuento == "enero-1") {
        descuento = 30;
    } else if (bonoDescuento == "enero-2") {
        descuento = 20;
    } else {
        descuento = 0;
    }
    return descuento;
} */
/* ************************************ */
/* function conseguirTipoDeBono(bono) {
    //const bonusObjeto ={};
    if (bonusObjeto[bono]) {
        console.log(bonusObjeto[bono]);
        return bonusObjeto[bono];
    } else {
        return 0;
    }
} */

/**************************************************** */
