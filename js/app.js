/**UN BESO APACIONADO
    COMPRAR PAPITAS PICANTES
    COMER UN LIMON
    CANTAR */

function retos(numero){
    switch(numero){
        case 1:
            let salida = document.getElementById("reto").innerText = "RETO 1: UN BESO APACIONADO";
            return salida;
        case 2:
            salida = document.getElementById("reto").innerText = "RETO 2: COMPRAR PAPITAS PICANTES";
                return salida;
        case 3:
            salida = document.getElementById("reto").innerText = "RETO 3: COMER UN LIMON";
            return salida;
        case 4:
            salida = document.getElementById("reto").innerText = "RETO 4: CANTAR";
            return salida;
    }
}
function ruleta(){
    let numeroRamdom = parseInt(Math.random()*4);
    numeroRamdom += 1;
    salida = retos(numeroRamdom);
    document.getElementById("reto").innerText = salida;
}
function reset(){
    let salida = document.getElementById("reto");
    salida.innerHTML = "RETOS uwu";
}