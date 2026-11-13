// ---------  Aula 2.3 — Spread Operator com objetos  ----------//

// ----- 1. O problema que o Spread resolve

// Nos ajuda a criar novos objetos a partir de objetos existentes, copiando suas propriedades e valores.

const produto = {
  nome: "Notebook",
  preco: 3500,
  memoriaRam: "16GB",
  armazenamento: "512GB SSD",
};

const produtoAtualizado = {
  ...produto,
  preco: 3200,
  desconto: true,
};
console.log(produto);
console.log(produtoAtualizado); // saída: { nome: 'Notebook', preco: '3200', memoriaRam: '16GB', armazenamento: '512GB SSD', desconto: true }

// Próximo conceito — Shallow Copy (cópia rasa)

const usuario = {
  nome: "Henrique Oliveira",
  endereco: {
    cidade: "Mangaratiba",
  },
};

const novoUsuario = {
  ...usuario,
};

// novoUsuario.nome = "Henrique";

// novoUsuario.endereco.cidade = "Rio de Janeiro";

// console.log(usuario);

// 2. Agora vamos resolver o problema: Deep Copy

const usuarioAtualizado = {
  ...usuario,
  endereco: {
    ...usuario.endereco,
    cidade: "Rio de Janeiro",
  },
};

usuarioAtualizado.nome = "Henrique";
usuarioAtualizado.endereco.cidade = "Rio de Janeiro";

console.log(usuario);
console.log(usuarioAtualizado);

const tecnologias = ["HTML", "CSS", "JavaScript"];

const novasTecnologias = [...tecnologias, "react", "TypeScript"];

console.log(tecnologias);
console.log(novasTecnologias);
