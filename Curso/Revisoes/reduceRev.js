const tarefas = [
  { titulo: "Estudar", horas: 7 },
  { titulo: "Praticar", horas: 1 },
  { titulo: "Revisar", horas: 2 },
];

const somarHoras = tarefas.reduce((contador, tarefa) => {
  return contador + tarefa.horas;
}, 0);

console.log(somarHoras); // saída 10
