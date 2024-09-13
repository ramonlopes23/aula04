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

console.log(texto)






