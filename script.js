
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


const objeto =  document.querySelector("#aluno");

let aluno1 = {
  nome: "Gabriel",
  idade: 13,
  anoLetivo: "2ºsérie",
  materiasFavoritas: ["Geografia","Programação","Arte"]
}

const divDetalhes = document.querySelector("#detalhes-aluno");

let htmlConteudo = `
  <ul>
    <li><strong>Nome:</strong> ${aluno1.nome}</li>
    <li><strong>Idade:</strong> ${aluno1.idade} anos</li>
    <li><strong>Ano Letivo:</strong> ${aluno1.anoLetivo}</li>
    <li><strong>Matérias Favoritas:</strong> ${aluno1.materiasFavoritas.join(", ")}</li>
  </ul>
`;

divDetalhes.innerHTML = htmlConteudo;