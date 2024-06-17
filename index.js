let numeros = [4,12,4,5,6,7,1,9,1,1];
let maior = 0
let menor;

for(let i = 0; i < numeros.length; i++){
    for(let c = 1; c < numeros.length; c++){
        if(numeros[i] == numeros[c]){
            numeros.splice(c,1);
        }
    }
}
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > maior){
        maior = numeros[i];
    }else if(numeros[i] < maior){
        menor = numeros[i];
    }else if(numeros[i] > menor && numeros[i] < maior){
        numeros.splice(1,0,numeros[i])
    }
}