//Crea una clase llamada Animal que tenga propiedades nombre, edad, sonido. Añade un método llamado emitirSonido que imprima en la consola el sonido del animal.

class Animal{
    constructor  (nombre,edad,sonido){
        this.nombre = nombre;
        this.edad = edad;
        this.sonido = sonido;
        emitirSonido (); {
             console.log("Rawr");
        }
    }
}

//Crea dos subclases: perro y gato, ambas deben heredar de la clase Animal. Agrega una propiedad adicional llamada raza para representar la raza del animal. En la clase Animal el método emitirSonido debe imprimir en la consola el sonido específico de cada animal.



//Subclase Gato
class Gato extends Animal { //Gato se hereda de Animal
    constructor(nombre,edad,sonido,raza){ 
        super(nombre,edad,sonido);//Se llama el constructor con las propiedades ya definidas
        this.raza = raza;        // Se agrega la propiedad adicional
    }    
}
let gato1 = new Animal ("Michi",2,"meow","siamés"); //Se define una nueva variable para la subclase

//Subclase Perro
class Perro extends Animal {
    constructor(nombre,edad,sonido,raza){
        super(nombre,edad,sonido);
        this.raza = raza;        
    }    
}
let perro1 = new Animal ("Hamlet",5,"woof","doberman");

