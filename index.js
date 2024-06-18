let numeros = [4,12,4,5,6,7,9,1,1];
let maior = 0
let menor;
let aux;

for(let i = 0; i < numeros.length; i++){
    for(let j = i + 1; j < numeros.length; j++){
        if(numeros[i] > numeros[j]){
            aux = numeros[i];
            numeros[i] = numeros[j]
            numeros[j] = aux;
        }
    }
}console.log(numeros)