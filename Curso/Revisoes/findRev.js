const tarefas = [
  { titulo: "Estudar", status: "Pendente" },
  { titulo: "Praticar", status: "Concluída" },
  { titulo: "Revisar", status: "Pendente" },
];

function encontrarTarefaPendente(tarefas) {
  return tarefas.find((tarefa) => {
    return tarefa.status === "Pendente";
  });
}
console.log(encontrarTarefaPendente(tarefas));
