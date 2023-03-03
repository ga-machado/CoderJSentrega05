let faturamentomes = parseInt (prompt("Quanto você quer faturar por mês com seus serviço de freelancer:"))
let horas = parseInt (prompt("Qual o número de horas por dia que você planeja trabalhar:"))
let dias = parseInt (prompt("Você pretende trabalhar em quantos dias da semana:"))
let ferias = parseInt (prompt("Quantas semanas de férias você planeja tirar no ano:"))
let geralfaturamentodia 
let geralhorasproj
let geraldiasproj

const multiplicacao = (a , b) => a * b
const divisao = (a , b) => a / b
const subtracao = (a , b) => a - b

let horasnomes = parseInt (multiplicacao (4.3 , multiplicacao (dias , horas)))
let horasnomessemferias = parseInt (subtracao (horasnomes, divisao (multiplicacao(ferias, multiplicacao (horas , dias)) , 12) ))
let faturamentodia = parseInt (divisao (faturamentomes , horasnomessemferias))

let horasproj = parseInt (prompt("O custo da sua hora de trabalho a ser cobrado é de R$" + faturamentodia + ",00. Pensando em um projeto a ser executado, quantas horas você vai trabalhar no projeto, por dia:"))
let diasproj = parseInt (prompt("Quantos dias você estima que o projeto vai durar:"))


class projeto{
    constructor(geralfaturamentodia, geralhorasproj, geraldiasproj) {
        this.geralfaturamentodia;
        this.geralhorasproj;
        this.geraldiasproj;
        }
    calcularprecoproj(){
        this.precoproj = this.geralfaturamentodia*this.geralhorasproj*this.geraldiasproj;
        alert ("Seu projeto custará R$" + this.precoproj)    
    }
}

const projetopadrao = new projeto(100, 8, 10);
const projeto1 = new projeto(faturamentodia, horasproj, diasproj);

projeto1.calcularprecoproj();
projetopadrao.calcularprecoproj();

alert ("Seu projeto custará R$" + projeto1.precoproj + ",00. Em comparação, o projeto padrão levantado por aqui, considerando um faturamento diário de R$100,00 e 10 dias de trabalho com 8 horas trabalhadas custará R$" + projetopadrao.precoproj + ",00")