function obtenerCaja() {
    let caja = document.createElement("div");
    caja.classList.add("cajaEstilo");
    return caja;
}
function obtenerCajas(cantidad) {
    let cajas = [];
    let caja;
    for (let i = 0; i < cantidad; i++) {
        caja = obtenerCaja();
        nroCaja += 1;
        caja.innerHTML = "caja-" + nroCaja;
        cajas.push(caja);
    }
    return cajas;
}

function insertarCajas(cajas, callback) {
    if (cajas instanceof Array  && cajas[0] instanceof HTMLDivElement) {
        let contenedor = document.getElementById("contenedor");
        for (let i = 0; i < cajas.length; i++) {
            contenedor.appendChild(cajas[i]);
        }
    }

    let timeoutId = setTimeout(function () {
        callback(cajas);
        clearTimeout(timeoutId);
    }, 200);
}

function agregarEfectos(cajas) {
    if (cajas instanceof Array  && cajas[0] instanceof HTMLDivElement) {
        for (let i = 0; i < cajas.length; i++) {
            cajas[i].classList.add("cajaEfecto");
        }
    }
}


let nroCaja = 0;
document.getElementById("btnEnviar").addEventListener("click", (evento) => {
    evento.preventDefault();
    let cantCajas = Number(document.getElementById("inputCantCajas").value);
    let tiempoCreacion = Number(document.getElementById("inputTiempo").value);
    if (cantCajas > 0 && tiempoCreacion >= 0) {
        
        let timeoutId = setTimeout(function () {
            let cajas = obtenerCajas(cantCajas);
            clearTimeout(timeoutId);
            insertarCajas(cajas, agregarEfectos);
        }, (tiempoCreacion * 1000));

    } else {
        alert("Ingrese valores correctos");
    }
});


document.getElementById("btnLimpiar").addEventListener("click", (evento) => {
    evento.preventDefault();
    let contenedor = document.getElementById("contenedor");
    if (contenedor.hasChildNodes()) {
        let hijos = document.querySelectorAll(".cajaEstilo");
        for (let i = 0; i < hijos.length; i++) {
            hijos[i].remove();
        }
        nroCaja = 0;
    }
});