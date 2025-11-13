// CRIE UMA LÓGICA ABAIXO
let filme1 = {titulo: "Interestelar", genero: "Ficção Científica", ano: 2014, avaliacao: 10}
let filme2 = {titulo: "A Origem", genero: "Ação / Ficção", ano: 2010, avaliacao: 9}
let filme3 = {titulo: "Clube da Luta", genero: "Drama", ano: 1999, avaliacao: 10}
let filme4 = {titulo: "O Lobo de Wall Street", genero: "Biografia / Drama", ano: 2013, avaliacao: 8}
let filme5 = {titulo: "John Wick 3", genero: "Ação", ano: 2019, avaliacao: 9}
let filme6 = {titulo: "Vingadores: Ultimato", genero: "Ação / Super-herói", ano: 2019, avaliacao: 10}
let filme7 = {titulo: "O Exterminador do Futuro 2", genero: "Ação / Ficção", ano: 1991, avaliacao: 10}
let filme8 = {titulo: "Batman: O Cavaleiro das Trevas", genero: "Ação", ano: 2008, avaliacao: 10}
let filme9 = {titulo: "Django Livre", genero: "Faroeste", ano: 2012, avaliacao: 9}
let filme10 = {titulo: "Matrix", genero: "Ficção Científica", ano: 1999, avaliacao: 10}

const catalogo = {filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10}

const listaNotas = [filme1.avaliacao, filme2.avaliacao, filme3.avaliacao, filme4.avaliacao, filme5.avaliacao, filme6.avaliacao, filme7.avaliacao, filme8.avaliacao, filme9.avaliacao, filme10.avaliacao]

let maiorNota = listaNotas[0]
for(let i = 1; i < listaNotas.length; i++){
    if(listaNotas[i] > maiorNota){
        maiorNota = listaNotas[i]
    }
}

let indiceFilmeTop = listaNotas.indexOf(maiorNota) + 1

let totalSomado = listaNotas.reduce((acc, atual) => acc + atual, 0)

let mediaNotas = totalSomado / listaNotas.length

console.log(`
    === Catalogo de filmes ===
    1. ${filme1.titulo} - ${filme1.genero}
    2. ${filme2.titulo} - ${filme2.genero}
    3. ${filme3.titulo} - ${filme3.genero}
    4. ${filme4.titulo} - ${filme4.genero}
    5. ${filme5.titulo} - ${filme5.genero}
    6. ${filme6.titulo} - ${filme6.genero}
    7. ${filme7.titulo} - ${filme7.genero}
    8. ${filme8.titulo} - ${filme8.genero}
    9. ${filme9.titulo} - ${filme9.genero}
    10. ${filme10.titulo} - ${filme10.genero}

    Filme mais bem avaliado:
    ${catalogo[`filme${indiceFilmeTop}`].titulo} (${maiorNota})

    Média geral das avaliações: ${mediaNotas}
`)

// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10 }