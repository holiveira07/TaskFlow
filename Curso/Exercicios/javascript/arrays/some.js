const tarefas = [
  {
    id: 1,
    titulo: "Implementar Login",
    concluida: true,
    prioridade: "Alta",
    diasAtraso: 0,
  },
  {
    id: 2,
    titulo: "Criar API",
    concluida: false,
    prioridade: "Média",
    diasAtraso: 12,
  },
  {
    id: 3,
    titulo: "Corrigir Dashboard",
    concluida: false,
    prioridade: "Alta",
    diasAtraso: 9,
  },
  {
    id: 4,
    titulo: "Atualizar Documentação",
    concluida: false,
    prioridade: "Baixa",
    diasAtraso: 15,
  },
];

const existeTarefaAtrasadaNaoConcluidaPrioridadeAlta = tarefas.some(
  (tarefa) =>
    !tarefa.concluida && tarefa.prioridade === "Alta" && tarefa.diasAtraso > 7,
);

console.log(existeTarefaAtrasadaNaoConcluidaPrioridadeAlta); // true
