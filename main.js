
var nombre_de_personas = [];

function enviar_1() {
    var invitado = document.getElementById("nombre_invitado").value;
    nombre_de_personas.push(invitado);
    console.log(invitado);
    console.log(nombre_de_personas);
    var cuenta_letras_nombres = nombre_de_personas.length;
    console.log(cuenta_letras_nombres);
    document.getElementById("display_name").innerHTML = nombre_de_personas.toString();

}

function buscar_nombre() {
    var nombre_buscar = document.getElementById("nombre_invitado").value;
    var encontrado = 0;
    var j = 0;

    for (j = 0; j < nombre_de_personas.legth; j++) {
        if (nombre_buscar == nombre_de_personas[j]) {
            encontrado = encontrado + 1;
        }
    }
    document.getElementById("p2").innerHTML = "nombre encontrado: " + encontrado + " número de veces.";
    console.log("número invitado encontrado: " + encontrado + " número de veces.");
}

function mostrar_nombres() {
    var i = nombre_de_personas.join("<br>");
    console.log(nombre_de_personas);
    document.getElementById("p1").innerHTML = i.toString();
    document.getElementById("sort_button").style.display = "block";
}

function ordenar_nombres() {
    nombre_de_personas.sort();
    var i = nombre_de_personas.join("<br>");
    console.log(nombre_de_personas);
    document.getElementById("sorted").innerHTML = i.toString();
}