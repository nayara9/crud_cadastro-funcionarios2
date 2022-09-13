import {funcionario} from "./lista.mjs"

async function init() {
    renderData()
}
init()

function randerData () {
var div = document.getElementById("name");
var texto = '';

funcionario.forEach(function(item) {
   
    texto +=  item.name + "<br>"
})

div.innerHTML = texto

}







