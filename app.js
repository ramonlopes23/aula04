console.log("ola imundo");

let nome = "Ramon";
let idade = 12;
let altura = 1.78
let vazio


let objeto = {
    "nome":"Ramon",
    "idade":23,
    "altura":1.78
}
let objeto2 ={
    nome,
    idade,
    altura
}
console.log(nome, altura, idade, vazio)
console.log(objeto)
console.log(objeto2)

//var vetor_vazio = []
//Usando colchetes
let modelo = ["Gol","Corsa","Fusca"];
//usando o construtor
let marcas = Array("Chevrolet", "Gol", "Corsa");
//valor fixo
let acessorios = new Array(5);
//vetor vazio
let cores = [];
// ou
let categoria = new Array();

console.log(modelo)
console.log(marcas)
console.log(acessorios)
console.log(cores)

//exibindo ou recuperando vetor
console.log(modelo[1])

let nome_modelo = modelo[0];
console.log(nome_modelo)

//adiciona elemento no fim do array
modelo.push('HB20');
console.log(modelo)

//adiciona elemento no começo
modelo.unshift('Hilux')
console.log(modelo)

//remove um elemento do fim da array
modelo.pop()
console.log(modelo)

//remove um elemento do inicio da array
modelo.shift()
console.log(modelo)


let frutas = ['laranja','melancia','morango','uva'];
let vegetais = ['Batata doce', 'cenoura', 'milho'];
//concatena os dois arrays
let feira = frutas.concat(vegetais);
console.log(feira)

//função slice copia e imprime o item na posição do array e a quantidade de itens a partir do valor do indice impresso.
let frutas_sel = frutas.slice(1,3)
console.log(frutas_sel)

//verifica se há o elemento dentro do array e mostra verdadeiro ou falso
let existe = frutas.includes('morango')
console.log(existe)

//alterando ou removendo  o item na posição de indice e a quantidade a partir do indice, se colocado 0 na posição de quantidade, é possivel adicionar elementos no meio do vetor
frutas.splice(2,1, 'Manga')
console.log(frutas)

let frutas_1 = ['Laranja','Melancia','Morango','Uva','Caju'];
let texto = frutas_1.join(',');

console.log(texto);

//função map multiplica pelo numero determinado
let numeros = [1,2,3,4,5,6]
let dobra = numeros.map(x=> x*3)
console.log(dobra);

function teste(t){
    console.log(t)
}

//função filter exibe numeros pares
let numeros_par = [1,2,3,4,5,6];
let pares = numeros_par.filter(x=> x%2==0)
console.log(pares);

//if ternario
let nota = 6;
let res = nota>=6 ? "Aprovado":"Reprovado";

console.log(res)

///localiza o primeiro numero que satisfaz a solicitaçao da função
let numeros_tf = [1,2,3,4,5,6];

let localiza_elemento = numeros_tf.find(x=>x >1);
let localiza_index = numeros_tf.findIndex(x=>x>1);

console.log('Foi localizado o elemento '+localiza_elemento);
console.log('Foi localizado o index '+localiza_index);

let numeros_2 = [1,2,3,4,5,6]
let maior = numeros_2.some(x=>x>2);
console.log(maior);

let numeros_e = [1,2,3,4,5,6];
let maior1 = numeros_e.every(x=>x>0);
console.log(maior1)



let n_aleatorio = [3,2,1,4,5,6]
console.log(n_aleatorio)
n_aleatorio.sort();
console.log(n_aleatorio)
n_aleatorio.reverse();
console.log(n_aleatorio);

