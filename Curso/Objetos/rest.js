const tarefas = [
  "Estudar JavaScript Vanilla",
  "Estudar JavaScript",
  "Praticar CSS",
  "Estudar React",
  "Aprender TypeScript",
];

const [tarefaAtual, ...proximasTarefas] = tarefas;

console.log(tarefaAtual); // saída: "Estudar JavaScript"
console.log(proximasTarefas); // saída: ["Praticar CSS", "Estudar React", "Aprender TypeScript"]

function somar(...numeros) {
  let total = 0;
  for (const numero of numeros) {
    total += numero;
  }
  return total;
}

console.log(somar(5, 10, 15, 20, 25)); // saída: 55

const dezenas = [14, 19, 21, 22, 23];
let totalAnos = 0;

for (const idade of dezenas) {
  totalAnos += idade;
}

console.log(totalAnos); // saída: 99

const usuario = {
  nome: "Carlos",
  idade: 28,
  profissao: "Analista",
  cidade: "Rio de Janeiro",
  ativo: true,
};

const { nome, cidade, ...dadosAdicionais } = usuario;
console.log(nome); // saída: "Carlos"
console.log(cidade); // saída: "Rio de Janeiro"
console.log(dadosAdicionais); // saída: { idade: 28, profissao: 'Analista', ativo: true }
