const inputPrecio = document.querySelector("#price");
/* const inputDescuento = document.querySelector("#discount"); */
const inputCoupon = document.querySelector("#coupon");
const pResult = document.querySelector("#result");
const btn = document.querySelector("#calcular");

/* ************************** */

/* ************************** */
btn.addEventListener("click", calcularPrecioConDescuento);
/* **************************************** */
//const arrayUObjeto = undefined; /*["cupones" : descuento] {}  */
/* const couponsObj = {
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
/* ***************************************** */
const couponsList = [];
couponsList.push({
    name: "enero1",
    discount: 20,
});
couponsList.push({
    name: "febrero1",
    discount: 15,
});
couponsList.push({
    name: "marzo1",
    discount: 25,
});
couponsList.push({
    name: "abril1",
    discount: 30,
});
/* ***************************************** */
function calcularPrecioConDescuento() {
    /* (p * (100 - descuento)/ 100) */
    const price = parseInt(inputPrecio.value);
    // const discount = parseInt(inputDescuento.value);
    const coupon = inputCoupon.value;

    /*     if (!price || !discount) {
        pResult.innerHTML = `Chancla por favor llena el formulario`;
        return;
    } */
    if (!price || !coupon) {
        pResult.innerHTML = `Chancla por favor llena el formulario`;
        return;
    }

    /* ************************************ */
    let discount;

    function isCouponInArray(couponElement) {
        //{name,coupon}
        return couponElement.name == coupon;
    }
    const couponInArray = couponsList.find(isCouponInArray); //{}

    if (couponInArray) {
        discount = couponInArray.discount;
    } else {
        pResult.innerHTML = "El cupon No es valido";
        return;
    }

    /* *************************************** */
    /*    if (coupon == "h") {
        discount2 = 30;
    } else if ("no lo digas") {
        discount2 = 20;
    } else {
        pResult.innerHTML = "El cupon no es valido";
        return;
    } */
    /* ****************************** */
    /*    switch (coupon) {
        case "h":
            discount2 = 30;
            break;
        case "no lo digas":
            discount2 = 20;
            break;
        default:
            pResult.innerHTML = "El cupon no es valido";
            return;
            break;
    } */

    /* ************************************ */
    /*  if (couponsObj[coupon]) {
        discount = couponsObj[coupon];
    } else {
        pResult.innerHTML = "El cupon no es valido";
        return;
    } */
    /* ************************************** */

    /* if (discount > 50) {
        pResult.innerHTML = `El porcentaje no es el estipulado `;
        return;
    }
    */
    const newPrice = (price * (100 - discount)) / 100;
    pResult.innerHTML = `El nuevo precio con descuento es: $${newPrice}`;
}
