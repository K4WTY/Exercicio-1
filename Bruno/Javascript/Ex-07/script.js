let pNumero
let sNumero
let operador
let resultado

function calcFunc(numb) {
    if(numb == 1) {
        resultado = pNumero + sNumero
    } else if(numb == 2) {
        resultado = pNumero - sNumero
    } else if(numb == 3) {
        resultado = pNumero * sNumero
    } else if(numb == 4) {
        resultado = pNumero / sNumero
    }
}

function mainFunc() {
    operador = Number(prompt('1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Alterar os números'))
    swtFunc(operador)
}

function numbFunc() {
    pNumero = Number(prompt('Digite um número:'))
    sNumero = Number(prompt('Digite um número:'))
    mainFunc()
}

function swtFunc(number) {
    switch(number) {
        case 1:
            calcFunc(1)
            alert(resultado)
            mainFunc()
        break
        case 2:
            calcFunc(2)
            alert(resultado)
            mainFunc()
        break
        case 3:
            calcFunc(3)
            alert(resultado)
            mainFunc()
        break
        case 4:
            calcFunc(4)
            alert(resultado) 
            mainFunc()
        break
        case 5:
            numbFunc()
        break
        default:
            alert('Erro')
            mainFunc()
        break
    }
}

numbFunc()