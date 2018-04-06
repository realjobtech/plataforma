// VARIÁVEIS
var username = document.getElementById("username-signup");
var name = document.getElementById("name-signup");
var email = document.getElementById("email-signup");
var password = document.getElementById("password-signup");
var confirmPassword = document.getElementById("conf-password-signup")
var phone = document.getElementById("cellphone-signup");
var emailLogin = document.getElementById("email-signin");
var passwordLogin = document.getElementById("password-signin");

// CADASTRAR UM USUÁRIO
function Cadastro(){
    if(password.value == confirmPassword.value){
        firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(function () {
            alert('Bem vindo ' + email.value);
            // ENCAPSULAMENTO QUE CADASTRA INFORMAÇÕES NA TABELA PARA APROVEITAMENTO DE DADOS.
            GuardaInformacao(username.value, name.value, phone.value, email.value); 
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar, verifique o erro no console.')
        });
    }else{
        alert("As senhas não conferem");
    }
    
}

// FUNÇÃO QUE GUARDA INFORMAÇÕES NO BANCO DE DADOS PARA BIGDATA
function GuardaInformacao(username, nome, phone, email){
    var data = {
        username: username,
        nome: name,
        phone: phone,
        email: email, 
    };
    return firebase.database().ref().child('Usuários').push(data);
}

//LOGIN 
function login(){
    firebase
        .auth()
        .signInWithEmailAndPassword(emailLogin.value, passwordLogin.value)
        .then(function (result) {
            console.log(result);
            alert('Autenticado ' + emailLogin.value);
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao autenticar, verifique o erro no console.')
        });
}

// LOGOUT 
function logout(){
    firebase.auth().signOut();
}
  