const usuario = {
  id: 1,
  nome: "Carlos",
  email: "carlos@email.com",
  idade: 28,
  cargo: "Desenvolvedor",
  ativo: true,
  endereco: {
    cidade: "Rio de Janeiro",
    estado: "RJ",
  },
};

const { nome, email, ...demaisDados } = usuario;
const usuarioAtualizado = {
  ...usuario,
  ativo: false,
  cargo: "Desenvolvedor Front-end",
};
// console.log(nome); // saída: "Carlos"
// console.log(email); // saída: "carlos@email.com"
// console.log(usuarioAtualizado); // saída: { id: 1, nome: 'Carlos', email: 'carlos@email.com', idade: 28, cargo: 'Desenvolvedor Front-end', ativo: false, endereco: { cidade: 'Rio de Janeiro', estado: 'RJ' } }

const tarefas = [
  {
    id: 1,
    titulo: "Estudar JavaScript",
    horas: 2,
    status: "Pendente",
    prioridade: 3,
  },
  {
    id: 2,
    titulo: "Revisar CSS",
    horas: 1,
    status: "Concluída",
    prioridade: 2,
  },
  {
    id: 3,
    titulo: "Praticar React",
    horas: 3,
    status: "Pendente",
    prioridade: 1,
  },
  {
    id: 4,
    titulo: "Estudar TypeScript",
    horas: 4,
    status: "Pendente",
    prioridade: 2,
  },
];

const tarefasPendentes = tarefas
  .filter((tarefa) => tarefa.status === "Pendente")
  .map(({ titulo, horas, prioridade }) => ({ titulo, horas, prioridade }));

const propriedadesDoArrayTarefasPendentes = { ...tarefasPendentes };
const tarefasPendentesAtualizadas = [
  ...tarefasPendentes,
  { titulo: "Estudar Node.js", horas: 5, prioridade: 4 },
  { titulo: "Praticar TypeScript", horas: 2, prioridade: 5 },
  { titulo: "Revisar React", horas: 3, prioridade: 6 },
];
// console.log(tarefasPendentes); // saída: [{ titulo: 'Estudar JavaScript', horas: 2, prioridade: 3 }, { titulo: 'Praticar React', horas: 3, prioridade: 1 }, { titulo: 'Estudar TypeScript', horas: 4, prioridade: 2 }]
// console.log(propriedadesDoArrayTarefasPendentes); // saída: { '0': { titulo: 'Estudar JavaScript', horas: 2, prioridade: 3 }, '1': { titulo: 'Praticar React', horas: 3, prioridade: 1 }, '2': { titulo: 'Estudar TypeScript', horas: 4, prioridade: 2 } }
// console.log(tarefasPendentesAtualizadas); // saída: [{ titulo: 'Estudar JavaScript', horas: 2, prioridade: 3 }, { titulo: 'Praticar React', horas: 3, prioridade: 1 }, { titulo: 'Estudar TypeScript', horas: 4, prioridade: 2 }, { titulo: 'Estudar Node.js', horas: 5, prioridade: 4 }, { titulo: 'Praticar TypeScript', horas: 2, prioridade: 5 }, { titulo: 'Revisar React', horas: 3, prioridade: 6 }]

const titulos = tarefas.map(({ titulo, horas }) => ({ titulo, horas }));
console.log(titulos);

function tarefasPendentes1(tarefas) {
  return tarefas.filter((tarefa) => tarefa.status === "Pendente");
}

console.log(tarefasPendentes1(tarefas));

function resumirTarefas(tarefas) {
  return tarefas.map(({ titulo, horas, prioridade }) => ({
    titulo,
    horas,
    prioridade,
  }));
}

const resumo = resumirTarefas(tarefasPendentes1(tarefas));
console.log(resumo);
