let amigos = []
let nomeDoAmigo = document.querySelector('input').value;

//para adicionar os nomer dos amigos
function adicionarAmigo() {
     nomeDoAmigo = document.querySelector('input').value;
    if (nomeDoAmigo == ''){
        alert("Por favor, insira um nome válido");
    } else if (amigos.includes(nomeDoAmigo)){
        alert("Este nome já foi adicionado! Insira outro amigo.");
    } else{
        amigos.push(nomeDoAmigo);
        atualizarListaAmigos();
        limparCampo();
    }
}
//limpar o campo após cada amigo adicionado
function limparCampo(){
    document.querySelector('input').value = '';
}
//Mostrar a lista de acordo com os nomes adicionados pelo usuário
function atualizarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo) =>{
        let item = document.createElement('li');
        item.innerHTML = amigo;
        lista.appendChild(item);
    });
}
//Para sortear um nome que foi adicionado pelo usuário na lista
function sortearAmigo() {
    if (amigos.length > 1) {
        let sorteado = amigos[Math.floor(Math.random()*amigos.length)];
        document.getElementById('resultado').innerHTML = sorteado;
        } else {
            alert("Você precisa adicionar pelo menos dois amigos para realizar um sorteio.")
        }
}
//Para resetar as funções e começar um novo sorteio
function novoSorteio(){
    document.getElementById('resultado').innerHTML='';
    amigos=[]
    atualizarListaAmigos();
    limparCampo();
}