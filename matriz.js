//declarando matriz

let minha_matriz = [[],[]]
let minha_matriz2 = []

//declarando matriz e inicializando
let minha_matriz3 = [[1,2],
                     [3,4],
                     [5,6]]

console.log(minha_matriz3);

let obj = {"nome":"Julio", "idade":30}
let matriz_mista = [["ramon", "25",], [1,10.5], [true, false], [null,obj]]
console.log(matriz_mista)

//acessando valores
console.log(minha_matriz3[2][1])//ultimo elemento
console.log(minha_matriz3[0][0])//primeiro elemento
//acessando valores de mais de uma matriz
console.log(minha_matriz3[2][1]+" "+minha_matriz3[1][1])

let minha_matriz_tam_dif = [[1],[2,3,4,5,6],[7,8,9,10,11],[12,13],[14]]
console.log(minha_matriz_tam_dif)

let qtd_linhas = minha_matriz_tam_dif.length
console.log(qtd_linhas)

let qtd_colunas = minha_matriz_tam_dif[1].length
console.log(qtd_colunas)

///adicionar elemento a matriz após a criação
let minha_matriz4 = [[1,2],[3,4]]

minha_matriz4.splice(2,0, [5])//adicionando uma linha no meio da matriz

minha_matriz4.splice(3,0, [6,7,8])//adicionando uma linha no final da matriz

minha_matriz4.push([9,10]) //fim da matriz

//adicionando elementos dentro da linha
minha_matriz4[0].push(0)
minha_matriz4[4].push(11)

console.log(minha_matriz4)

//removendo uma determinada linha
minha_matriz_tam_dif.splice(0,0)
console.log(minha_matriz_tam_dif)
//removendo a ultima linha
minha_matriz_tam_dif.pop()
console.log(minha_matriz_tam_dif)
//removendo o ultimo elemento da linha da matriz
minha_matriz4[0].pop()
console.log(minha_matriz4)

//removendo o elemento de uma determinada linha da matriz
minha_matriz4[1].splice(1,1)
console.log(minha_matriz4)

minha_matriz4[2].splice(2,1)
console.log(minha_matriz4)

//interando uma matriz
for(l=0;l<minha_matriz4.length;l++){
    for(c=0;c<minha_matriz4[l].length;c++){
        console.log(minha_matriz4[l][c]+"")
    }
}