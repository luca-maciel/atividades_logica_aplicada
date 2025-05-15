// 1 - Crie um sistema de verificação de entrada em um evento. Cada pessoa deve ser representada por um objeto com as seguintes propriedades: nome, idade e temIngresso (boolean).
//     Armazene pelo menos 4 objetos dentro de um array.
//     Crie uma função que percorra esse array e imprima:
//     "Entrada liberada para Fulano", se a pessoa tiver ingresso e idade maior ou igual a 18.
//     "Entrada negada para Fulano", caso contrário.

let pessoas = [
    { nome: "João", idade: 20, temIngresso: true },
    { nome: "Maria", idade: 17, temIngresso: true },
    { nome: "Pedro", idade: 19, temIngresso: false },
    { nome: "Ana", idade: 16, temIngresso: false }
]

for (let i=0; i < pessoas.length; i++){
    let pessoa = pessoas[i]
    if (pessoa.idade >= 18 && pessoa.temIngresso){
        console.log(`Entrada liberada para ${pessoa.nome}`)
    }
    else {
        console.log(`Entrada negada para ${pessoa.nome}`)
    }
}