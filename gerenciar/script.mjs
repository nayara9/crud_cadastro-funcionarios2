import {funcionario} from "./lista.mjs"


var cod = document.getElementById("codigo")
var div = document.getElementById("name")
var st = document.getElementById("status")
var texto = '';
const bdelete = document.getElementById("bdelete");
 

function init() {
escreveName();
escreveCodigo();
escreveStatus();

bdelete.addEventListener("click", onDelete);
}

init()



function escreveCodigo() {
    texto = '';
    funcionario.forEach(function(item) {
        texto +=  item.codigo + "<br>"
    })
    cod.innerHTML = texto;
    selectItens();
}

function escreveName() {
    funcionario.forEach(function(item) {
        texto +=  item.name + "<br>"
    })
    div.innerHTML = texto;
    selectItens();
    }
    

function escreveStatus() {
    texto = '';
    funcionario.forEach(function(item) {
        texto +=  item.status + "<br>"
    })
    st.innerHTML = texto;
    selectItens();
}

function selectItens() {

}



function onDelete () {

    
}

