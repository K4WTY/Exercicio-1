let loopBool = true
let promptMain
let arrPacientes = []
let pacienteOnFila = false

alert('Bem-vindo ao Sistema Saúde')

function checkP(name) {
    for(let i = 0; i < arrPacientes.length; i++) {
        if(name == arrPacientes[i]) {
            pacienteOnFila = true
        }
    }
}

while(loopBool) {

    let pacientes = ''
    for(let i = 0; i < arrPacientes.length; i++) {
        pacientes += `${i + 1}° ${arrPacientes[i]}\n`
    }

    promptMain = Number(prompt(`Pacientes em espera:\n${pacientes}\n1 - Adicionar novo paciente\n2 - Remover primeiro paciente da lista\n3 - Sair`))
    
    switch(promptMain) {
        case 1:
            let paciente = prompt('Digite o nome do paciente')
            checkP(paciente)
            if(pacienteOnFila) {
                alert('Este paciente já está na lista!')
                pacienteOnFila = false
            } else if(pacienteOnFila == false) {
                arrPacientes.push(paciente)
            }
        break
        case 2:
            if(arrPacientes.length < 1) {
                alert('Não há pacientes para remover')
            } else {
                arrPacientes.shift()
                alert('Paciente removido')
            }
        break
        case 3:
            loopBool = false
            alert('Saída do sistema confirmada')
        break
        default:
            alert('Opção inválida')
        break
    }
}