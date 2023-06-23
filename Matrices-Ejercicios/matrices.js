function crearMatriz(n){
    let m = [];
    for (let i=0; i<n; i++){
        m[i] = [];
        for(let j=0; j<n; j++){
            m[i][j] = parseInt(prompt(`Ingrese el numero para la posicion [${i}][${j}]`));
        }
    }
    return m;
}

function sumarM(matr1z, matr2z){
    let resultado = [];
    for (let i=0; i<matr1z.length; i++) {
        let fila = [];
        for (let j=0; j<matr1z[i].length; j++){
            fila.push(matr1z[i][j] + matr2z[i][j])
        }
        resultado.push(fila);
    }
    return resultado;
}

let n = parseInt(prompt("Ingrese la longitud de la matriz"));
let matr1z = crearMatriz(n);
let matr2z = crearMatriz(n);
console.log(matr1z);
console.log(matr2z);
let suma = sumarM(matr1z,matr2z)
console.log(suma)
