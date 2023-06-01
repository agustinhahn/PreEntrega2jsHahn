alert("Welcome al kiosquito, estos son los productos: ")

class productos{
    constructor(indice, nombre, precio, stock){
        this.indice = indice;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;}

    mostrarProductos(){ //funcion elemental. me va a servir cuando quiera ver que productos hay.
        const muestraProductos = listaProductos.map((producto, index) => {
            return `Producto ${producto.indice}: ${producto.nombre} - Precio: $${producto.precio} - Cantidad disponible: ${producto.stock} unidades`;}).join('\n');
            alert(muestraProductos)
    }
}

function eleccionProducto(){
    let elegirProducto;
    while(isNaN(elegirProducto)){
        elegirProducto = parseInt(prompt("Indicar el numero del producto que quiere comprar: "));
        if(elegirProducto > 0 && elegirProducto <= listaProductos.length){
            return elegirProducto
        }
        else{
            alert("El numero de producto no es válido.")
            elegirProducto = NaN
        }
    }   
}

function MatchProducto(){
    let resultado_find = listaProductos.find(objeto => objeto.indice === eleccion)
    if(resultado_find){
        alert(`El producto elegido es: ${resultado_find.nombre}`);
        return resultado_find
    }
    else{
        alert("No se encontro nada.")
    }
}

function eleccionCantidad(){
    let elegirCantidad;
    while(elegirCantidad == undefined){
        elegirCantidad = parseInt(prompt(`Indicar que cantidad desea comprar (Costo por unidad: $${matchProduct.precio}) :`));
        if(elegirCantidad <= matchProduct.stock){
            alert("Disponemos de esa cantidad")
            return elegirCantidad
        }
        else if(elegirCantidad > matchProduct.stock){
            alert("No disponemos esa cantidad")
            elegirCantidad = undefined
        }
        else{
            alert("Caracter invalido")
            elegirCantidad = undefined
        }
    }
}

function finalizarCompra(){
    let confirmacionCompra;
    alert(`Tu carrito contiene: \n${matchProduct.nombre} x ${cantidadElegida} unidades. Pagarias: $${costoCompra}`)
    while(confirmacionCompra != "si"){
        confirmacionCompra = prompt("¿Estas seguro de finalizar su compra?");
        confirmacionCompra = confirmacionCompra.toLowerCase()
        if(confirmacionCompra == "si"){
            alert(`Compra finalizada: \n${matchProduct.nombre} x ${cantidadElegida} unidades. Pagarias: $${costoCompra}`);
            indiceProductoElegido = matchProduct.indice - 1
            listaProductos[indiceProductoElegido].stock = matchProduct.stock - cantidadElegida
            return costoCompra
        }
        else{
            alert("Caracteres invalidos.")
        }
    }
}

function costoPagar(){
    let clientePagara = matchProduct.precio*cantidadElegida
    return clientePagara
}

function sumarCaja(){
    let caja_registradora= 0;
    caja_registradora = caja_registradora + compraFinalizada;
    return alert(`La caja cuenta ahora con: $${caja_registradora} en su cuenta`)
}

function restarBilletera(){
    let billetera_cliente = 4000;
    billetera_cliente = billetera_cliente - compraFinalizada;
    return alert(`La billetera del cliente ahora cuenta con: $${billetera_cliente}`)
}



const listaProductos = [];
listaProductos.push(new productos(1,"Alfajor",8,10));
listaProductos.push(new productos(2,"Coquita",12,50));
listaProductos.push(new productos(3,"Ibuprofeno",5,60));

const variableDeMuestra = new productos();
variableDeMuestra.mostrarProductos(listaProductos); //variable que me va servir llamar, para ver productos con la funcion.

let eleccion = eleccionProducto()
let matchProduct = MatchProducto()
let cantidadElegida = eleccionCantidad()
let costoCompra = costoPagar()
let compraFinalizada = finalizarCompra()

alert("Stock post compra: ")
variableDeMuestra.mostrarProductos(listaProductos) //esto esta aca para mostrar como se desconto el stock.

sumarCaja()
restarBilletera()




