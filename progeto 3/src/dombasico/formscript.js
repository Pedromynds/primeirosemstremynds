var objetopessoa = {};
var listadepessoa = [];


function ValoresForm(event) {
    event.preventDefault();


    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;

    objetopessoa = {
        nome,
        idade,
        email,
        telefone
    }


    console.log("Pessoa Cadastrada", objetopessoa)

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    listadepessoa.push(objetopessoa);


    alert(`Pessoa cadastrada com sucesso , Bem vindo ${objetopessoa.nome}`)


}

function pessoascadastradas() {
    console.log(`A ${listadepessoa.length} pessoas`);

    listadepessoa.map((pessoa, positionnalista) => {
        console.log(listadepessoa[positionnalista].nome);

        

        console.log(`tem ${pessoa.idade} anos`);


        console.log(`e seu contato é: ${pessoa.telefone}`)
    })



}