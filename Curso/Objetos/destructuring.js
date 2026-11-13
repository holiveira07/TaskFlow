// Destructuring é uma forma de extrair valores de objetos ou arrays e
//  atribuí-los a variáveis de forma mais concisa. No exemplo abaixo,
// temos um objeto `usuario` com algumas propriedades.

const usuario = {
  nome: "Henrique",
  idade: 30,
  profissao: null,
  ativo: true,
};

// const { nome, profissao } = usuario;

// console.log(nome, profissao); // saída: Henrique Desenvolvedor

const { profissao: cargo = "Não informado" } = usuario;

console.log(cargo); // saída: Desenvolvedor

const { nome, lastName: sobrenome = "Oliveira", idade } = usuario;
console.log(nome, sobrenome, idade); // saída: Oliveira

// Aula 2.2 — Destructuring de objetos aninhados

const produto = {
  nome: "Notebook",
  preco: 3500,
  especificacoes: {
    memoriaRam: "16GB",
    armazenamento: "512GB SSD",
    processador: "Intel i5",
  },
};

const {
  especificacoes: { armazenamento: disco = "Não especificado" },
} = produto;
const {
  nome: Notebook = "Notebook hp",
  especificacoes: { memoriaRam, processador },
} = produto;

console.log(Notebook, memoriaRam, processador); // saída: Notebook 16GB Intel i5
console.log(produto.especificacoes.armazenamento); // saída: 512GB SSD
console.log(disco); // saída: 512GB SSD
