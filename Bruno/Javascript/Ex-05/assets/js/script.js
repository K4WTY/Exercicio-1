let usersLista = ['admin']
let passLista = ['admin']

const inputUser = document.querySelector('#user')
const inputPass = document.querySelector('#pass')
const buttonLogin = document.querySelector('#login')
const buttonCadastro = document.querySelector('#cadastro')
const buttonDados = document.querySelector('#banco')

function cadastro() {
    usersLista.push(prompt('Cadastro de usuários!\nDigite um username para o usuario:'))
    passLista.push(prompt('Cadastro de usuários!\nDigite uma senha para o usuario:'))
}

function checar() {
    for (let i = 0; i < usersLista.length; i++) {
        if (inputUser.value == usersLista[i] && inputPass.value == passLista[i]) {
            window.location.href = 'assets/pages/home.html'
        }
    }
}

buttonDados.addEventListener('click', () => alert(usersLista))
buttonCadastro.addEventListener('click', cadastro)
buttonLogin.addEventListener('click', checar)