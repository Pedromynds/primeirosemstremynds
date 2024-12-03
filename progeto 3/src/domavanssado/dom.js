var anime={};

lista_de_animes = [];

function ValoresForm(event) {


    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let episodios = document.getElementById("episodios").value;
    let protagonista = document.getElementById("protagonista").value;
    let estilo = document.getElementById("estilo").value;


    anime = {
        nome,
        episodios,
        protagonista,
        estilo
    };

    lista_de_animes.push(anime);


    console.log("anime cadastrado com sucesso!", anime);


    
    document.getElementById("nome").value ="";
    document.getElementById("episodios").value = 0;
    document.getElementById("protagonista").value = "";
    document.getElementById("estilo").value = "";
    updatetable();
    alert(`novo anime adicionado $(anime.nome)`);




};

function updatetable() {
    var tablebody = document.getElementById("animetablebody");

    tablebody.innerHTML = "";


    lista_de_animes.forEach(function (anime) { // errou o forEach
        var row = document.createElement("tr");
        row.innerHTML = `
        
        <td> ${anime.nome} </td>
        <td> ${anime.episodios} </td>
        <td> ${anime.protagonista} </td>
        <td> ${anime.estilo} </td>

        `
        tablebody.appendchild(row);
        
        
        
    
    })
}


