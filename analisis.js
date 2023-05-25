console.log(salarios);
//Analisis personal de juanita

function encontrarPersona(personaBuscada) {
    return salarios.find((persona) => persona.name == personaBuscada);
    /*   const persona = salarios.find((persona) => {
        return persona.name == personaBuscada;
    });
    return persona; */
}
function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    const salarios = trabajos.map((elemento) => elemento.salario);
    console.log(salarios);
    const mediana = PlatziMath.calcularMediana(salarios);

    return mediana;
}
/* ******************************************* */
function calcularProximoSalario(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    const salarios = trabajos.map((elemento) => elemento.salario);
    const ultimoSalario = salarios[salarios.length - 1];

    const empresas = trabajos.map((elemento) => elemento.empresa);

    const ultimaEmpresa = empresas[empresas.length - 1];

    let proximoSalario = ultimoSalario;
    if (ultimaEmpresa === "Freelance") {
        proximoSalario *= 1.05; // Incremento del 5% para trabajos como freelance
    } else {
        proximoSalario *= 1.1; // Incremento del 10% para trabajos en industrias
    }
    console.log(
        "Ultimo salario:" +
            ultimoSalario +
            "- Proximo Salario : " +
            proximoSalario
    );
    return proximoSalario;
}
/* ******************************************* */
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
/* ************************************************ */
/* *****Analisis Empresarial******* */
/* 
Industrias Mokepon: {
    2018:[salarios,salarios]
    2019
    2020
}
*/
const empresas = {};
for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }
        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}
console.log(empresas);
/* ******************************************* */
function medianaEmpresaYear(nombre, year) {
    if (!empresas[nombre]) {
        console.warn("La empresa no existe ");
    } else if (!empresas[nombre][year]) {
        console.warn("El año no existe");
    } else {
        // console.log(empresas[nombre][year]);
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
}
/* ****************************************** */

function proyeccionPorEmpresa(nombre) {
    if (!empresas[nombre]) {
        console.warn("La empresa no existe ");
    } else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaEmpresaYear(nombre, year);
        });
        // console.log(listaMedianaYears);
        /* ****************************** */
        let porcentajesCrecimiento = [];
        for (let i = 1; i < listaMedianaYears.length; i++) {
            const medianaActual = listaMedianaYears[i];
            const medianaAnterior = listaMedianaYears[i - 1];
            const crecimiento = medianaActual - medianaAnterior;
            const porcentajeCrecimiento = crecimiento / medianaAnterior;
            porcentajesCrecimiento.push(porcentajeCrecimiento);
        }
        // console.log(porcentajesCrecimiento);
        const medianaPorcentajeCrecimiento = PlatziMath.calcularMediana(
            porcentajesCrecimiento
        );
        const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
        // console.log(medianaPorcentajeCrecimiento);
        // console.log(ultimaMediana);
        const aumento = ultimaMediana * medianaPorcentajeCrecimiento;
        const nuevaMediana = ultimaMediana + aumento;
        // console.log(aumento);
        console.log(nuevaMediana);
        return nuevaMediana;
    }
}
proyeccionPorEmpresa("Industrias Mokepon");
