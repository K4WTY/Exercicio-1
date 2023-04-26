let nBinario
let nTeste = 2

function biFunc() {
    nBinario = Number(prompt('Digite um valor decimal:'))
    let resultado = nBinario % 2
    alert(resultado)
    biFunc()
}

biFunc()