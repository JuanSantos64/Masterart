console.log(document.querySelector("#nome-da-obra").value);
document.querySelector("#nome-da-obra").addEventListener("change", alterarNome);    


function alterarNome(){
    console.log("alterou o nome: ");
    const nomeObra = document.querySelector("#nome-da-obra").value;

    document.querySelector("#preco").innerText ="" + nomeObra;

    const prototipo = document.querySelector("#e-free-license").checked
    console.log(prototipo)
}
