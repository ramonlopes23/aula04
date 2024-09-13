function calcularimc(peso,altura){
    return peso / Math.pow(altura,2);
}

function classImc(imc){
    if (imc< 18.5){
        return 'Abaixo do peso';
    }else if(imc >= 18.5 && imc < 25){
        return 'Peso normal';
    }else if(imc >=25 && imc < 30){
        return'Acima do peso';
    }else if(imc >=30 && imc <40){
        return'Obeso';
    }else{
        return'Obesidade grave';
    }
}

//main
//função imediatamente invocada, onde é chamda e ja executada sem a necessidade de chamala. pode ser utilizada sem um nome definido porem ser poder ser referenciada depois
(function  (){
    const peso = 75;
    const altura = 1.78;
    const imc = calcularimc(peso,altura)
    console.log(calcularimc(peso, altura));
    console.log(classImc(imc));
})();




/*as funcoes podem ser manipuladas como objetos

const main2 = main;

console.log(main2);

main = function(){
    console.log(1);
}

main();
*/