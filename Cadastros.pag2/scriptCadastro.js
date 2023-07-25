function atualizar(){
    let nome = localStorage.getItem("nomeUsuario")
    let sobreNome = localStorage.getItem("sobreNomeUsuario")
    let email = localStorage.getItem("emailUsuario")
    let sexo = localStorage.getItem("sexoUsuario")
    let idadeUsuario = localStorage.getItem("idadeUsuario")
    let tabelaUsuario = document.getElementById("tabelaUsuario");

   
    if(nome == '' || sobreNome == '' || email == ''){
        alert('Cadastro nao foi preenchido corretamente')
    }else if(localStorage.length > 0){
        tabelaUsuario.innerHTML += `<tr><td>${nome} ${sobreNome}</td><td>${email}</td><td>${sexo}</td><td>${idadeUsuario}</td></tr>`
        localStorage.clear();
    }else if(localStorage.length === 0){
        alert("Não existe cadastro para atualizar a lista!!")
    }

}