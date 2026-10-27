const tarefas = [
  { titulo: "Estudar", status: "Pendente" },
  { titulo: "Praticar", status: "Concluída" },
  { titulo: "Revisar", status: "Pendente" },
];

const todasAsTarefasEstaoPendentes = (tarefas) => {
  return tarefas.every((tarefa) => {
    return tarefa.status === "Pendente";
  });
};
console.log(todasAsTarefasEstaoPendentes(tarefas));
