let funcionario = []

let selectedItem;

const listEL = document.querySeletor("ul");
const formEl = document.querySelector("form");


//**********Selecionar item ************/
function selectItem (name) {
    selectedItem = name;
    li.classList.add("selected");
}



// ******** Iniciação *********//

async function init() {
    try {
    [funcionario] = await Promise.all ([
        listName(),
    ]);
    renderData();
   
    } catch (erro) {
        showError(erro);
    }
}
init();


//********** Mostrar lista na tela ************/

function renderData() {
    for (const funcionario of funcionarios) {
        const li = document.createElement("li");
        const divName = document.createElement("div")
        divName.textContent = funcionario.name;
        li.appendChild(divName);
        listEL.appendChild(li);

        li.addEventListener("click", () => selectItem(funcionario))
    }
}









//********** MOSTRAR ERRO *********//
function showError(error) {
    document.getElementById("errors").textContent = "Erro ao carregar dados.";
    console.error(error);
}

