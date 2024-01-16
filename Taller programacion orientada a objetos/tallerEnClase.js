const computadoresVenta = document.getElementById(computadores)
console.log(document)


//Tienda en linea, productos electrónicos, 3 tipos de productos, accesorios, computadores y ebook.
//Crear clase base llamada Producto
class Producto {
    constructor(nombre, precio, cantidadStock){
        this.nombre= nombre;
        this.precio= precio;
        this.cantidadStock = cantidadStock;
    }
    //crear metodo
    obtenerInformacion(){
        console.log(`El nombre del producto es: ${this.nombre}, el precio es ${this.precio} y la cantidad en stock actualmente es ${this.cantidadStock}`);
    }
}
class Computadores extends Producto{
    constructor( nombre, precio, cantidadStock, marca){
        super (nombre, precio, cantidadStock);
        this.marca= marca;
    }
}

class Ebooks extends Producto{
    constructor( nombre, precio, cantidadStock, autor){
        super (nombre, precio, cantidadStock);
        this.autor= autor;
    }
}

let computador1 = new Computadores("Macbook Pro", 10000000, 50, "Apple");
let ebook1 = new Ebooks ("100 años de soledad", 50000, 35, "Gabriel García Marquez");