
function inserirNome () {
    let nomeUsuario = prompt("Qual o seu nome?");
    let elemento = document.querySelector("#nome-usuario");
    elemento.textContent = nomeUsuario;
}

inserirNome();

let linguagens = ["JavaScript", "Python", "C++"]

const item =  document.querySelector("#lista");

for (let i = 0; i<linguagens.length; i++){
    const li = document.createElement("li");
    li.textContent = linguagens[i];
    item.appendChild(li);
}
    