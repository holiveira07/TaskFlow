const tarefas = [
  { titulo: "Estudar", status: "Pendente" },
  { titulo: "Praticar", status: "Concluída" },
  { titulo: "Revisar", status: "Pendente" },
];

function filtrarTarefasPendentes(tarefas) {
  return tarefas.filter((tarefa) => {
    const status = tarefa.status;
    return status === "Pendente";
  });
}

console.log(filtrarTarefasPendentes(tarefas));
