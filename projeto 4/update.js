var editMode = document.getElementById("submit").innerHTML === "Edit Aqui!";


function EnviandoDadosAtuais(id, nameItem, emailItem) {
    document.getElementById('email').value = emailItem;
    document.getElementById('name').value = emailItem;


    document.getElementById("submit").setAttribute("data-id", id);
    document.getElementById('submit').innerHTML = "Edit aqui!";
    editMode = document.getElementById('submit').innerHTML === "Edit aqui";
}


const urlEdit = "https://mynds-crud-tutorial-c030d-default-rtdb.firebaseio.com/pessoas/"


async function editData(id) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const data = {
        name: name,
        email: email

    }
    response = await fetch(urlEdit + id + '.json', {
        method: 'PATCH',
        headers: {
            'onstent-Type': 'appliation/json'

        },
        body: JSON.stringify(data)


    }).then(res => {
        PegarDados();
        document.getElementById("submit").removeAttribute("data-id");
        document.getElementById('email').value = '';
        document.getElementById('name').value = '';
        document.getElementById('submit').innerHTML = "Cadastrar!";
        editMode = document.getElementById("submit").innerHTML === "Edit Aqui!";
    }).catch(error => console.log("Erro ao editar", error))
}
