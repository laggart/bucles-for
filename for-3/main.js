console.log("conectado");

// CARRITO DE LA COMPRA: se le pide al usuario el precio de 5 productos. Se calcula el total. En el caso de sumar 100 euros o más, se le da un descuento del 15%. Imprimir en tal caso el precio original y el precio final con el descuento. Si no, solo el precio total. Nota: te servirá crear una variable que vaya acumulando el precio total a medida que se vayan introduciendo precios.

let precio = 0;


for (let i = 1; i <= 5 ; i++){
    let precioParcial = parseInt(prompt("Introduce el precio de tu artículo"));
    precio = precio + precioParcial;
}

let precioTotal;

if (precio >= 100) {
    precioTotal = precio - precio*0.15
    console.log("el total es: " + precioTotal)
} else {
    precioTotal = precio;
    console.log("el total es: " + precioTotal)
}








 