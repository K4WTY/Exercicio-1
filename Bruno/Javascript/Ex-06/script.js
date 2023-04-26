let quantidadeDinheiro = Number(prompt('Digite seu saldo bancário!'))
let saldoBancMenu
let addSaldo
let rmSaldo

function calc(caso, quantia) {
    if (caso == 1) {
        return quantidadeDinheiro = quantidadeDinheiro + quantia
    } else if (caso == 2) {
        return quantidadeDinheiro = quantidadeDinheiro - quantia
    }
}

function mainFunc() {
    if(isNaN(quantidadeDinheiro)) {
        quantidadeDinheiro = Number(prompt('Digite seu saldo bancário!'))
        mainFunc()
    } else {
        saldoBancMenu = Number(prompt(`Saldo: ${quantidadeDinheiro}R$\n1 - Para adicionar dinheiro\n2 - Para remover dinheiro\n3 - Sair`))
        altFunc(saldoBancMenu)
    }
}

function altFunc(menu) {
    switch(menu) {
        case 1:
            addSaldo = Number(prompt('Deseja adicionar quanto de dinheiro?'))
            calc(1, addSaldo)
            mainFunc()
        break
        case 2:
            rmSaldo = Number(prompt('Deseja remover quanto de dinheiro?'))
            calc(2, rmSaldo)
            mainFunc()
        break
        case 3:
            alert('Sessão encerrada')
        break
        default:
            alert('Erro')
            mainFunc()
        break
    }
}

mainFunc()