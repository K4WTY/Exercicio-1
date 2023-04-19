let usersLista = ['admin']
let passLista = ['admin']

const inputUser = document.querySelector('#user')
const inputPass = document.querySelector('#pass')
const buttonLogin = document.querySelector('#login')
const buttonCadastro = document.querySelector('#cadastro')
const buttonDados = document.querySelector('#banco')

function cadastro() {

    let oldUsuario = undefined

    if (inputUser.value != '' && inputPass.value != '') {
        for (let i = 0; i < usersLista.length; i++) {
            if (inputUser.value == usersLista[i]) {
                oldUsuario = true
                break
            } else {
                oldUsuario = false
            }
        }
    } else if (inputUser.value == '' || inputPass.value == '') {
        alert('Preencha os campos')
    }

    if (oldUsuario == true) {
        alert('Este usuário ja está cadastrado')
    } else if (oldUsuario == false) {
        usersLista.push(inputUser.value)
        passLista.push(inputPass.value)
        alert('Usuário cadastrado com sucesso')
    }
}

function checar() {

    let validar = undefined

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