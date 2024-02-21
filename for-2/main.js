console.log("conectado");

// Imprime los números pares entre dos números que introduzca el usuario

let x = parseInt(prompt("introduce un número"))
let y = parseInt(prompt("introduce otro número"))

if (x < y) {
    
    for (let i = x; i < y; i++) {
    
        if ( i % 2 == 0) {
            console.log(i)
        }
    }
}

else {
    
    for (let i = x; i > y; i--) {
        
        if ( i % 2 == 0) {
            console.log(i);
        }
     
    }
}

 