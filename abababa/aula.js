function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
function calcularMedia() {
    let nomeAluno = "";
    let notaBim1 = 0;
    let notaBim2 = 0;
    let mediaAprovacao = 0;

    nomeAluno = prompt("Digite o nome do aluno: ")
    notaBim1 = Number(prompt("Digite a nota do primeiro bimestre: "))
    notaBim2 = Number(prompt("Digite a nota do segundo bimestre: "))

    mediaAprovacao = (notaBim1 + notaBim2) / 2

    console.log(`A media do ${capitalizeFirstLetter(nomeAluno)} para as notas ${notaBim1} e ${notaBim2} é ${mediaAprovacao}`)
}

function checarAprovacao() {
    let nomeAluno = "";
    let notaBim1 = 0;
    let notaBim2 = 0;
    let mediaSemestre = 0;
    let notaFinal = 0;
    const mediaAprovacao = 7;
    const mediaMinimaFinal = 4;

    nomeAluno = prompt("Digite o nome do Aluno");
    notaBim1 = Number(prompt("Digite a nota do primeiro Bimestre: "));
    notaBim2 = Number(prompt("Digite a nota do segundo Bimestre: "));

    mediaSemestre = (notaBim1 + notaBim2) / 2

    if (mediaSemestre >= mediaAprovacao) {
        console.log(`${capitalizeFirstLetter(nomeAluno)} foi aprovado!`)
    }
    else if (mediaSemestre < mediaAprovacao && mediaSemestre >= mediaMinimaFinal) {
        console.log(`${capitalizeFirstLetter(nomeAluno)} ficou de final`)
        notaFinal = Number(prompt("digite a nota da avaliação final: "))
        if ((notaFinal + mediaSemestre) / 2 >= 5) {
            console.log(`${capitalizeFirstLetter(nomeAluno)} foi aprovado!`)
        }
        else {
            console.log(`${capitalizeFirstLetter(nomeAluno)} foi reprovado!`)
        }
    }
    else {
        console.log(`${capitalizeFirstLetter(nomeAluno)} foi reprovado!`)
    }
}
function somarNumeros(){
    let num1 = 0;
    let num2 = 0;
    let soma = 0;

    num1 = Number(prompt("Digite o primeiro numero: "))
    num2 = Number(prompt("Digite o segundo numero: "))
    soma = num1+num2

    console.log(`A soma de ${num1} com ${num2} é ${soma}`)
}