// 4 - Crie um array de objetos representando produtos de uma loja. Cada objeto deve ter as propriedades:
//     nome (string)
//     quantidade (número)
//     preco (número)
//     Crie uma função que:
//     Liste todos os produtos com quantidade maior que zero e calcule o valor total de cada um (quantidade × preço).
//     No final, informe o valor total de todos os produtos disponíveis no estoque.


let produtos = [
    {nome: "Mouse", quantidade: 12, preco: 99.90},
    {nome: "Teclado", quantidade: 5, preco: 199.90},
    {nome: "Monitor", quantidade: 2, preco: 899.90},
    {nome: "Impressora", quantidade: 0, preco: 499.90},
    {nome: "Notebook", quantidade: 3, preco: 4999.90},
    {nome: "Celular", quantidade: 10, preco: 2999.90},
    {nome: "Tablet", quantidade: 8, preco: 1999.90},
    {nome: "Cabo HDMI", quantidade: 15, preco: 49.90},
]

function listarProdutosDisponiveis(lista_produtos){
    let total_produtos = 0;
    for (let i=0; i < lista_produtos.length; i++){
        produto = lista_produtos[i]
        if(produto.quantidade > 0){
            console.log(`Valor total de ${produto.nome} -> ${(produto.quantidade*produto.preco).toFixed(2)}`);
            total_produtos += produto.quantidade*produto.preco;
        }
    }
    console.log(`\nTotal de todos os produtos é ${total_produtos.toFixed(2)}`)
}

listarProdutosDisponiveis(produtos)