const nomeAluno = prompt('Digite seu nome:')

const notaUm = parseFloat(prompt(`${nomeAluno} digite a nota que tirou no primeiro bimestre:`))
const notaDois = parseFloat(prompt(`${nomeAluno} digite a nota que tirou no segundo bimestre:`))
const notaTres = parseFloat(prompt(`${nomeAluno} digite a nota que tirou no terceiro bimestre:`))
const notaQuatro = parseFloat(prompt(`${nomeAluno} digite a nota que tirou no quarto bimestre:`))

let media = (notaUm + notaDois + notaTres + notaQuatro) / 4

if (media >= 6) {
    alert(`${nomeAluno} sua média foi: ${media}\nAprovado!`)
} else if (media >= 4 && media <= 5) {
    alert(`${nomeAluno} sua média foi: ${media}\nRecuperação!`)
} else {
    alert(`${nomeAluno} sua média foi: ${media}\nReprovado!`)
}
