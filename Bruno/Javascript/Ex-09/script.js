let loopBool = true
let promptMain
let arrPacientes = ['']
let teste

alert('Bem-vindo ao Sistema Saúde')

function mainFunc() {
    if(arrPacientes != '') {
        for(let i = 0; i < arrPacientes.length; i++) {
            teste = arrPacientes.indexOf(arrPacientes[i]) + 1
    
        }
    } else {
        promptMain = Number(prompt(`Pacientes em espera:\n${arrPacientes} \n\n\n\n1 - Adicionar novo paciente\n2 - Remover primeiro paciente da lista\n3 - Sair`))
    }
}

while(loopBool) {

    mainFunc()

    switch(promptMain) {
        case 1:
            if(arrPacientes[0] == '') {
                arrPacientes.shift()
                arrPacientes.push(prompt('Digite o nome do paciente'))
            } else {
                arrPacientes.push(prompt('Digite o nome do paciente'))
            }
        break
        case 2:
            arrPacientes.shift()
            alert('Paciente removido')
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