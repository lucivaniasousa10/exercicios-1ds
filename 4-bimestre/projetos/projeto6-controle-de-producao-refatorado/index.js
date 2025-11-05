// CRIE UMA LÓGICA ABAIXO
const prompt = require('prompt-sync')()

const producoes = []
let producao = 0

console.log("=== Sistema de Controle de Produção ===")
let quantidadeDias = parseInt(prompt("quantos dias serao registrados? "))
for (let diaAtual = 1; quantidadeDias >= diaAtual; diaAtual++) {
    do {
        producao = parseInt(prompt(`Digite a quantidade produzida no dia ${diaAtual} `))
        if (typeof producao !== "number" || producao !== producao) {
            console.log("digite algo!")
        }
    } while (typeof producao !== "number" || producao !== producao)
    producoes.push(producao)
}

console.log("--- RELATÓRIO DE PRODUÇÃO ---")
console.log(`Produções registradas: [ ${producoes} ]`)
let total = 0
for (let contadorIndice = 0; contadorIndice < producoes.length; contadorIndice++) {
    total += producoes[contadorIndice]
}
console.log(`Total produzido: ${total} peças`)
let mediaDiaria = total / producoes.length
console.log(`Média diária: ${mediaDiaria}`)

let maiorValor = producoes[0]
let menorValor = producoes[0]
for (let contadorIndice = 1; contadorIndice < producoes.length; contadorIndice++) {
    if (producoes[contadorIndice] > maiorValor) {
        maiorValor = producoes[contadorIndice]
    }
    if (producoes[contadorIndice] < menorValor) {
        menorValor = producoes[contadorIndice]
    }
}
console.log(`Maior produção: ${maiorValor} (dia ${producoes.indexOf(maiorValor) + 1})`)
console.log(`Menor produção: ${menorValor} (dia ${producoes.indexOf(menorValor) + 1})`)
producoes.sort((a, b) => a - b)
console.log(`Ordem crescente: [ ${producoes} ]`)
producoes.sort((a, b) => b - a)
console.log(`Ordem descrescente: [ ${producoes} ]`)
let metadeMaior = maiorValor / 2
if (mediaDiaria >= metadeMaior) {
    console.log("Produção estável!")
} else {
    console.log("Produção abaixo do ideal.")
}
