let whileBool = true
let saldoFinanca = []
let saldo = 0

while(whileBool) {

    let saldoObject = {}

    let promptMain = Number(prompt(
    `Sistema pessoal de finanças\n
Saldo: ${saldo}\n
1 - Cadastrar crédito
2 - Cadastrar débito
3 - Extrato de ambos
4 - Sair`))

    switch(promptMain) {
        case 1:
            saldoObject.valor = Number(prompt('Deseja cadastrar quanto de crédito?'))
            saldoObject.motivo = prompt('Qual o motivo dessa creditação?')
            saldoObject.debitCredit = 'C'
            saldo += saldoObject.valor
            saldoFinanca.push(saldoObject)
        break
        case 2:
        if(saldo > 0) {
            saldoObject.valor = Number(prompt('Deseje debitar qual valor?'))
            if(saldo < saldoObject.valor) {
                alert('O saldo é insuficiente')
            } else {
                saldoObject.motivo = prompt('Qual o motivo dessa debitação?')
                saldoObject.debitCredit = 'D'
                saldo -= saldoObject.valor
                saldoFinanca.push(saldoObject)
            }
        } else {
            alert('Sem saldo')
        }
        break
        case 3:
            let extratoFinanca = ''
            let totalEx
            for(let i = 0; i < saldoFinanca.length; i++) {
                extratoFinanca += `${saldoFinanca[i].motivo} - ${saldoFinanca[i].debitCredit} - R$ ${saldoFinanca[i].valor}\n`
                totalEx = `${extratoFinanca}\nSaldo: R$ ${saldo}`
            }
            alert(totalEx)
        break
        case 4:
            let confirmarSaida = confirm('Deseja mesmo sair?')
            if(confirmarSaida) {
                whileBool = false
            }
        break
    }
}