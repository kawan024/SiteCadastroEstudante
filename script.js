let form = document.getElementById('cadastroForm');

let lista = document.getElementById('listaAlunos');

form.addEventListener('submit', function(event){
    event.preventDefault()
    const none = document.getElementById('nomeAluno').Value;
    const idade = document.getElementById('idadeAluno').Value;
    const novoItem = documet.getElementById('li');
    novoItem.innerHTML = `<strong> ${nome} </strong> - ${idade} anos`;

    lista.appemdChild(novoItem);

    form.requestFullscreen();

});