document.getElementById("enviar").addEventListener("click", function(event) { 
event.preventDefault ();

const calificacion1 = parseFloat(document.getElementById("calificacion1").value);
const calificacion2 = parseFloat(document.getElementById("calificacion2").value);
const calificacion3 = parseFloat(document.getElementById("calificacion3").value);
const promedio = (calificacion1 + calificacion2 + calificacion3) / 3;
if (promedio > 8) {
    document.write ("FELICIDADES LO LOGRASTE");
} else {
    document.write ("¡Sigue intentando!");
}
});