let whileBool = true
let arrayImoveis = []


while(whileBool) {

    let promptMain = Number(prompt(`Imoveis cadastrados: ${arrayImoveis.length}\n
1 - Cadastrar um imovel
2 - Ver imoveis cadastrados
3 - Para consultar algum imovel especifico
4 - Sair`
))

    switch(promptMain) {
        case 1:
            let imovel = {}

            // Obrigado Bruno <3!!!

            imovel.nome = prompt(`Digite seu nome:`)
            imovel.quartos = Number(prompt(`Digite a quantidade de quartos que seu imovel possui:`))
            imovel.banheiros = Number(prompt(`Digite a quantidade de banheiros que seu imovel possui:`))
            imovel.garagem = prompt(`Seu imovel possui garagem?`)

            arrayImoveis.push(imovel)
        break
        case 2:
            if(arrayImoveis.length == 0) {
                alert('Não possui nenhum imovel cadastrado')
            } else {
                let imoveisCadastrados = ''
                for(let i = 0; i < arrayImoveis.length; i++) {
                    imoveisCadastrados += `${i + 1}° Imovel
                    Nome do proprietário: ${arrayImoveis[i].nome}
                    Quantidade de quartos: ${arrayImoveis[i].quartos}
                    Quantidade de banheiros: ${arrayImoveis[i].banheiros}
                    Garagem: ${arrayImoveis[i].garagem}\n`
                }
                alert(imoveisCadastrados)
            }
        break
        case 3:
            if(arrayImoveis.length != 0) {
                let teste = Number(prompt(`Digite um numero de 1 a ${arrayImoveis.length}`))
                if(teste != 0) {
                    alert(`${teste}° Imovel
                    Nome do proprietário: ${arrayImoveis[teste - 1].nome}
                    Quantidade de quartos: ${arrayImoveis[teste - 1].quartos}
                    Quantidade de banheiros: ${arrayImoveis[teste - 1].banheiros}
                    Garagem: ${arrayImoveis[teste - 1].garagem}`)
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