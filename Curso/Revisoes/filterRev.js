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

const tarefas1 = [
  { titulo: "Estudar JavaScript", horas: 2, status: "Pendente" },
  { titulo: "Revisar CSS", horas: 1, status: "Concluída" },
  { titulo: "Praticar Git", horas: 3, status: "Pendente" },
  { titulo: "Estudar React", horas: 4, status: "Concluída" },
];

function tarefasPendentes(tarefas1) {
  return tarefas1
    .filter((tarefa) => {
      return tarefa.status === "Pendente";
    })
    .map((tarefa) => {
      const minuto = tarefa.horas * 60;
      return {
        ...tarefa,
        minuto,
      };
    });
}

console.log(tarefasPendentes(tarefas1));
