let userName
let passWord
let usersLista = ['']
let passLista = ['']

const inputUser = document.querySelector('#user')
const inputPass = document.querySelector('#pass')
const buttonLogin = document.querySelector('#login')
const buttonCadastro = document.querySelector('#cadastro')

function cadastro() {
    userName = prompt('Cadastro de usuários!\nDigite um username para o usuario:')
    passWord = prompt('Cadastro de usuários!\nDigite uma senha para o usuario:')
    usersLista.push(userName)
    passLista.push(passWord)
    console.log(usersLista)
}

function checar() {
    if (inputUser.value == userName && inputPass.value == passWord) {
        window.location.href = 'assets/pages/home.html'
    } else {
        alert('Usuário não cadastrado')
    }
}

buttonCadastro.addEventListener('click', cadastro)
buttonLogin.addEventListener('click', checar)