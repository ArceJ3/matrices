function suma(matriz1, matriz2){
    let resultado = []
    for (let i=0; i<matriz1.length; i++){
        let fila = []
        for (let j=0; j<matriz1[i].length; j++){
            fila.push(matriz1[i][j] + matriz2[i][j])
        }
        resultado.push(fila)
    }
    return resultado;
}

let matriz1 = [[1,2,3],[4,5,6],[7,8,9]];
let matriz2 = [[1,2,3],[1,1,1],[2,3,4]];
let sumas = suma(matriz1,matriz2)
console.log(sumas)

function sumaV(vectorA, vectorB){
    let fila = []
    for (let i=0; i<vectorA.length; i++){
        if (vectorB[i] == null){
            vectorB.push(0)
        }
        fila.push(vectorA[i] + vectorB[i]);
        }
        return fila;
    }
let vectorA = [3,5,7,8];
let vectorB = [1,2,3];
let sumasV = sumaV(vectorA, vectorB)
console.log(sumasV)
