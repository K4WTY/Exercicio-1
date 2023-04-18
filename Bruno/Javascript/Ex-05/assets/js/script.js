const userName = prompt('Cadastro de usuários!\nDigite um username para o usuario:')
const passWord = prompt('Cadastro de usuários!\nDigite uma senha para o usuario:')
const inputUser = document.getElementById('user')
const inputPass = document.getElementById('pass')
const button = document.getElementById('login')

function checar() {
    if (inputUser.value == userName && inputPass.value == passWord) {
        window.location.href = 'assets/pages/home.html'
    } else {
        alert('Usuário não cadastrado')
    }
}

button.addEventListener('click', checar)