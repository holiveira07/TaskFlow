const tarefas = [
  { titulo: "Estudar", status: "Pendente" },
  { titulo: "Praticar", status: "Concluída" },
  { titulo: "Revisar", status: "Pendente" },
];

const encontrarAoMenosUmaTarefaConcluida = (tarefas) => {
  return tarefas.some((tarefa) => tarefa.status === "Concluída");
};

console.log(encontrarAoMenosUmaTarefaConcluida(tarefas));
