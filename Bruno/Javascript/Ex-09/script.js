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

    if(arrPacientes.length == 0) {
        promptMain = Number(prompt(`Pacientes em espera:\n\n\n\n1 - Adicionar novo paciente\n2 - Remover primeiro paciente da lista\n3 - Sair`))
    } else if(arrPacientes.length == 1) {
        promptMain = Number(prompt(`Pacientes em espera:\n${arrPacientes.indexOf(arrPacientes[0]) + 1}: ${arrPacientes[0]}\n\n\n1 - Adicionar novo paciente\n2 - Remover primeiro paciente da lista\n3 - Sair`))
    } else if(arrPacientes.length == 2) {
        promptMain = Number(prompt(`Pacientes em espera:\n${arrPacientes.indexOf(arrPacientes[0]) + 1}: ${arrPacientes[0]}\n${arrPacientes.indexOf(arrPacientes[1]) + 1}: ${arrPacientes[1]}\n\n1 - Adicionar novo paciente\n2 - Remover primeiro paciente da lista\n3 - Sair`))
    } else if(arrPacientes.length == 3) {
        promptMain = Number(prompt(`Pacientes em espera:\n${arrPacientes.indexOf(arrPacientes[0]) + 1}: ${arrPacientes[0]}\n${arrPacientes.indexOf(arrPacientes[1]) + 1}: ${arrPacientes[1]}\n${arrPacientes.indexOf(arrPacientes[2]) + 1}: ${arrPacientes[2]}\n\n1 - Adicionar novo paciente\n2 - Remover primeiro paciente da lista\n3 - Sair`))
    } else if(arrPacientes.length == 4) {
        promptMain = Number(prompt(`Pacientes em espera:\n${arrPacientes.indexOf(arrPacientes[0]) + 1}: ${arrPacientes[0]}\n${arrPacientes.indexOf(arrPacientes[1]) + 1}: ${arrPacientes[1]}\n${arrPacientes.indexOf(arrPacientes[2]) + 1}: ${arrPacientes[2]}\n${arrPacientes.indexOf(arrPacientes[3]) + 1}: ${arrPacientes[3]}\n\n1 - Adicionar novo paciente\n2 - Remover primeiro paciente da lista\n3 - Sair`))
    }
    
    switch(promptMain) {
        case 1:
            if(arrPacientes.length <= 3) {
                let paciente = prompt('Digite o nome do paciente')
                checkP(paciente)
                if(pacienteOnFila) {
                    alert('Este paciente já está na lista!')
                    pacienteOnFila = false
                } else if(pacienteOnFila == false) {
                    arrPacientes.push(paciente)
                }
            } else {
                alert('Limite atingido')
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