function nome(name){
    console.log('your name is '+name);
}

nome('Ramon ');
nome('Lopes');
//teste();


//funçao para elevação do numero a determinada potencia
function quadrado(valor){
    return valor * valor;
}

console.log(quadrado(10)+quadrado(10))
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);


//funcao de incremento de juros
function incrementarJuros(valor, percentualjuros){
    const valordeAcrecimo = (percentualjuros/100)*valor;
    return valor + valordeAcrecimo;
}

console.log(incrementarJuros(100,10))

function calcularjuros(){

}

function main(){
    console.log('programa principal');
}

main();