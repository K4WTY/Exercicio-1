let usersLista = ['admin']
let passLista = ['admin']

const inputUser = document.querySelector('#user')
const inputPass = document.querySelector('#pass')
const buttonLogin = document.querySelector('#login')
const buttonCadastro = document.querySelector('#cadastro')
const buttonDados = document.querySelector('#banco')

function cadastro() {
    if (inputUser.value != '' && inputPass.value != '') {
        usersLista.push(inputUser.value)
        passLista.push(inputPass.value)
    } else {
        alert('Preencha os campos')
    }
}

function checar() {
    let validar = false

    for (let i = 0; i < usersLista.length; i++) {
        if (inputUser.value == usersLista[i] && inputPass.value == passLista[i]) {
            validar = true
            break
        } else {
            validar = false
        }
    }
    
    if (validar == true) {
        window.location.href = 'assets/pages/home.html'
    } else {
        alert('Usuário ou senha incorretos!')
    }
}

buttonDados.addEventListener('click', () => alert(usersLista))
buttonCadastro.addEventListener('click', cadastro)
buttonLogin.addEventListener('click', checar)