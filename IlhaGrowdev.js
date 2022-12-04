// Ilhas Growdev
// As Ilhas Growdev formam um reino independente nos mares do Pacífico.
// Como é um reino recente, a sociedade é muito influenciada pela
// informática. A moeda oficial é a GrowCoin; existem notas de GC$ 50,00,
// GC$ 10,00, GC$ 5,00 e GC$ 1,00. Vocês foram contratados para ajudar na
// programação dos caixas automáticos de um grande banco das Ilhas
// Growdevs.
// Os caixas eletrônicos das Ilhas Growdev operam com todos os tipos de
// notas disponíveis, mantendo um estoque de cédulas para cada valor. Os
// clientes do banco utilizam os caixas eletrônicos para efetuar retiradas de
// um certo número inteiro de GrowCoins.
// Sua tarefa é escrever um algoritmo que, dado o valor de GrowCoins
// desejado pelo cliente, determine o número de cada uma das notas
// necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja
// retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
// Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de
// GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00

let valorSaque = 135;
let nota50 = 0;
let nota10 = 0;
let nota5 = 0;
let nota1 = 0;
const valorSaqueOriginal = valorSaque

while (valorSaque >= 50) {
    nota50++;
    valorSaque = valorSaque - 50;
}

while (valorSaque >= 10) {
    nota10++;
    valorSaque = valorSaque - 10;
}

while (valorSaque >= 5) {
    nota5++;
    valorSaque = valorSaque - 5;
}

while (valorSaque >= 1) {
    nota1++;
    valorSaque = valorSaque - 1;
}

document.write(`No saque de GC$${valorSaqueOriginal.toFixed(2)}<br>`)
document.write(`Foram usadas:<br>`)
document.write(`${nota50} nota(s) de GC$50.00 <br>`)
document.write(`${nota10} nota(s) de GC$10.00 <br>`)
document.write(`${nota5} nota(s) de GC$5.00 <br>`)
document.write(`${nota1} nota(s) de GC$1.00`)