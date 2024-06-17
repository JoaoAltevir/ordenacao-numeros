let numeros = [4,12,4,5,6,7,1,9,1,1];

for(let i = 0; i < numeros.length; i++){
    for(let c = 1; c < numeros.length; c++){
        if(numeros[i] == numeros[c]){
            numeros.splice(c,1);
        }
    }
}
