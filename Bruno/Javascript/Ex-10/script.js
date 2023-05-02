let whileBool = true
let arrayImoveis = []
let promptMain

while(whileBool) {

    promptMain = Number(prompt(`Imoveis cadastrados: ${arrayImoveis.length}\n\n1 - Cadastrar um imovel\n2 - Ver imoveis cadastrados\n3 - Para consultar algum imovel especifico\n4 - Sair`))

    switch(promptMain) {
        case 1:
            let donoImovel = prompt(`Digite seu nome:`)
            let quartosImovel = Number(prompt(`Digite a quantidade de quartos que seu imovel possui:`))
            let banheirosImovel = Number(prompt(`Digite a quantidade de banheiros que seu imovel possui:`))
            let garagemImovel = prompt(`Seu imovel possui garagem?`)

            if(isNaN(quartosImovel) && isNaN(banheirosImovel)) {
                alert(`Algo de errado não está certo!`)
            } else {
                arrayImoveis.push(`Nome do proprietário: ${donoImovel}\nQuantidade de quartos: ${quartosImovel}\nQuantidade de banheiros: ${banheirosImovel}\nGaragem: ${garagemImovel}`)
            }
        break
        case 2:
            if(arrayImoveis.length == 0) {
                alert('Não possui nenhum imovel cadastrado')
            } else {
                let imoveisCadastrados = ''
                for(let i = 0; i < arrayImoveis.length; i++) {
                    imoveisCadastrados += `${i + 1}° Imovel\n\n${arrayImoveis[i]}\n---------------------------------------------------\n\n`
                }
                alert(imoveisCadastrados)
            }
        break
        case 3:
            if(arrayImoveis.length != 0) {
                let teste = Number(prompt(`Digite um numero de 1 a ${arrayImoveis.length}`))
                if(teste != 0) {
                    alert(`${teste}° Imovel\n\n${arrayImoveis[teste - 1]}`)
                }
            }
        break
        case 4:
        let confirmarSaida = confirm('Deseja mesmo sair?')
        if(confirmarSaida) {
            whileBool = false
        }
        break
        default:
            alert('Comando inválido')
        break
    }
}