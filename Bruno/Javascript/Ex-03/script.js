const nomeAluno = prompt('Digite seu nome:')

const notaUm = parseFloat(prompt(`${nomeAluno} digite a nota que tirou no primeiro bimestre:`))
const notaDois = parseFloat(prompt(`${nomeAluno} digite a nota que tirou no segundo bimestre:`))
const notaTres = parseFloat(prompt(`${nomeAluno} digite a nota que tirou no terceiro bimestre:`))
const notaQuatro = parseFloat(prompt(`${nomeAluno} digite a nota que tirou no quarto bimestre:`))

let media = (notaUm + notaDois + notaTres + notaQuatro) / 4

alert(`${nomeAluno} sua média foi: ${media}`)