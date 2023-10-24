//Código que le pida al usuario su edad y si es mayor de edad, le pregunte su nombre y apellido y lo salude en el dom "Hola Juan", si no, le ponga en el DOM, ¡lo siento no eres mayor edad!
let edad;
let nombre;
let apellido;
edad= prompt("Introduce tu edad",0);
nombre= prompt("Introduce tu nombre");
apellido= prompt("Introduce tu apellido");
if (edad) {edad >= 18
    document.write("Hola " + nombre + " " + apellido);
    
} else {edad <= 17
    document.write("¡Lo siento no eres mayor de edad!");
    
}