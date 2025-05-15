function calcularMedia(nota1, nota2, nota3){
    if ((nota1 >= 0 && nota1 <= 10) && (nota2 >= 0 && nota2 <= 10) && (nota3 >= 0 && nota3 <= 10)) {
        let media = (nota1 + nota2 + nota3) / 3;
        if (media >= 7) {
            console.log("Aprovado");
        }
        else if (media > 5 && media < 7) {
            console.log("Recuperação");
        }
        else {
            console.log("Reprovado");
        }
    }
    else {
        console.log("Notas inválidas");
    }
}

calcularMedia(8, 7, 9); 
calcularMedia(6, 5, 7); 
calcularMedia(4, 3, 5); 
calcularMedia(11, 8, 9);