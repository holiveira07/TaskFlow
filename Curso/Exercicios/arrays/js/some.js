const tarefas = [
  {
    id: 1,
    titulo: "Estudar JavaScript",
    concluida: true,
    prioridade: "Alta",
  },
  {
    id: 2,
    titulo: "Aprender Node.js",
    concluida: false,
    prioridade: "Media",
  },
  {
    id: 3,
    titulo: "Criar API",
    concluida: false,
    prioridade: "Alta",
  },

  {
    id: 4,
    titulo: "Estudar Docker",
    concluida: true,
    prioridade: "Baixa",
  },
];

const existeTarefaAltaPendente = tarefas.some(
  (tarefa) => !tarefa.concluida && tarefa.prioridade === "Alta",
);

console.log(existeTarefaAltaPendente);
