function validarForm(){
let nome = document.getElementById("nome").value;
let sobrenome = document.getElementById("sobrenome").value;
let email = document.getElementById("email").value;
let sexo = document.getElementById("sexo").value;
let dataNascimento = document.getElementById("dataNascimento").value;
let [ano, mes, dia] = dataNascimento.split('-');
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
let botaoCadastrar = document.getElementById("botaoCadastrar");
let idadeUsuario = anoAtual - ano;


if(nome.trim() === ''){
    alert("O campo nome não foi preenchido");
} else if(sobrenome.trim() === ''){
    alert("O campo sobrenome não foi preenchido")
} else if(email.trim() === ''){
    alert("O campo email não foi preenchido")
} else if(dataNascimento.trim() === ''){
    alert("O campo data de nascimento não foi preenchido")
} else {
    alert(`${nome} ${sobrenome} parabéns o seu cadastro foi concluido!!`)

}

localStorage.setItem('nomeUsuario', nome);
localStorage.setItem('sobreNomeUsuario' , sobrenome);
localStorage.setItem('emailUsuario', email);
localStorage.setItem('sexoUsuario' , sexo);
localStorage.setItem('idadeUsuario', idadeUsuario)


}



