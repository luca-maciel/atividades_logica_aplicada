// 5 - Crie um array de 5 objetos, cada um representando um visitante com:
//     nome
//     idade
//     temConvite (boolean)
//     vip (boolean)
//     Crie uma função que percorra o array e imprima:
//     "Bem-vindo Fulano!" se ele for maior de 16 e (tem convite ou é VIP).
//     "Acesso negado para Fulano" caso contrário

let visitantes = [
    { nome: "João", idade: 20, temConvite: true, vip: false },
    { nome: "Maria", idade: 17, temConvite: false, vip: true },
    { nome: "Pedro", idade: 19, temConvite: false, vip: false },
    { nome: "Ana", idade: 16, temConvite: true, vip: true },
    { nome: "Lucas", idade: 15, temConvite: false, vip: false }
]

function verificarEntrada(lista_visitantes){
    for (let i=0; i < lista_visitantes.length; i++){
        let visitante = lista_visitantes[i];
        if (visitante.idade >= 16 && (visitante.temConvite || visitante.vip)){
            console.log(`Bem-vindo(a) ${visitante.nome}!`);
        } 
        else{
            console.log(`Acesso negado para ${visitante.nome}.`);
        }
    }
}

verificarEntrada(visitantes)