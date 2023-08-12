function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if( login == "oi" && senha == "oi"){

        location.href = "index.html";
    }else{
        alert('Login ou senha incorretos!!!!')
    }
}
