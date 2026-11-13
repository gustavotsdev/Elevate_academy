function Login() {

    var emailCorreto = "aluno@gmail.com";
    var senhaCorreta = "123456";


    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    var mensagem = document.getElementById("mensagem");

    if (email == "" && senha == "") {
        mensagem.innerHTML = "Preencha o email e a senha!";
    }

    else if (email == "") {
        mensagem.innerHTML = "Digite seu email!";
    }

    else if (email != emailCorreto) {
        mensagem.innerHTML = "Email incorreto!";
    }

    else if (senha == "") {
        mensagem.innerHTML = "Digite sua senha!";
    }

    else if (senha != senhaCorreta) {
        mensagem.innerHTML = "Senha incorreta!";
    }

    else {
        window.location.href = "acesso.html";
    }

}


