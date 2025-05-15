let funcionarios = [
    { nome: "João", salario: 2000, cargo: "Gerente" },
    { nome: "Maria", salario: 1500, cargo: "Analista" },
    { nome: "Pedro", salario: 3000, cargo: "Diretor" },
    { nome: "Ana", salario: 2500, cargo: "Coordenador" },
    { nome: "Lucas", salario: 1800, cargo: "Analista" },
    { nome: "Fernanda", salario: 2200, cargo: "Gerente" },
    { nome: "Carlos", salario: 1700, cargo: "Analista" },
    { nome: "Juliana", salario: 3200, cargo: "Diretor" },
    { nome: "Roberto", salario: 2800, cargo: "Coordenador" },
    { nome: "Mariana", salario: 1900, cargo: "Analista" }
]

function funcionariosSalarioMaiorDoisMil(funcionarios){
    let gerentes = 0;
    for (let i=0; i < funcionarios.length; i++){
        let funcionario = funcionarios[i]
        if(funcionario.cargo == "Gerente"){
            gerentes++
        }
        if (funcionario.salario > 2000){
            console.log(`Funcionário: ${funcionario.nome}, Salário: ${funcionario.salario}`)
        }
    }
    console.log(`Total de gerentes: ${gerentes}`);
}

funcionariosSalarioMaiorDoisMil(funcionarios)