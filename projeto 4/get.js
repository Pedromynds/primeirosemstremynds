const url = "https://mynds-crud-tutorial-c030d-default-rtdb.firebaseio.com/pessoas.json"

async function PegarDados() {
    try {
        const resultado = await fetch(url);
        if (!resultado.ok) {
            throw new Error(`Erro na requisição: ${resultado.status}`);
        }

        const resultadoConvertido = await resultado.json();
        console.log(resultadoConvertido); // Veja os dados aqui

        if (!resultadoConvertido || Object.keys(resultadoConvertido).length === 0) {
            throw new Error("Nenhum dado válido foi retornado pela API");
        }

        const arr = Object.entries(resultadoConvertido).map(([id, values]) => ({ id, ...values }));

        function gerarTableRows(array) {
            return array.map((item, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.name || 'Sem nome'}</td>
                    <td>${item.email || 'Sem email'}</td>
                    <td>${item.id}</td>
                    <td><button class="edit-btn" onclick="EnviandoDadosAtuais('${item.id}', '${item.name}', '${item.email}')">Editar</button></td>
                    <td><button class="delete-btn" onclick="deleteData('${item.id}')"> Deletar </button></td>
                </tr>
            `).join('');
        }

        const tableBody = document.getElementById("tbody");
        tableBody.innerHTML = gerarTableRows(arr);

    } catch (error) {
        console.error("Erro ao buscar ou processar os dados:", error);
    }
}

// Função para cadastrar novos dados
async function cadastrarDados() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const dados = { name, email };

    try {
        const resposta = await fetch(url, {
            method: 'POST', // Método para criar novo dado
            body: JSON.stringify(dados), // Converte os dados para JSON
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!resposta.ok) {
            throw new Error(`Erro ao cadastrar: ${resposta.status}`);
        }

        // Limpar os campos após o cadastro
        document.getElementById("name").value = '';
        document.getElementById("email").value = '';

        // Atualizar a tabela
        PegarDados();
    } catch (error) {
        console.error("Erro ao cadastrar:", error);
    }
}

// Chama a função para carregar os dados ao iniciar a página
window.onload = PegarDados;