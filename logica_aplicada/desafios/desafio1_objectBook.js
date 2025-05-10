// Desafio: Criar um livro (como objeto) que terá um autor e um título
// 1ª Forma:

let bookZero = {
    titulo: "Meu Pé de Laranja Lima",
    autor: "José Mauro de Vasconcelos",
}

console.log(bookZero)

// 2ª Forma: 

class Book{
    constructor(title, author){
        this.title = title
        this.author = author
    }
}

let bookOne = new Book("O alinista", "joaozin")

console.log(bookOne.author)