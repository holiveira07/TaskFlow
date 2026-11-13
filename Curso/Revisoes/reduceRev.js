const tarefas = [
  { titulo: "Estudar", horas: 7 },
  { titulo: "Praticar", horas: 1 },
  { titulo: "Revisar", horas: 2 },
];

const somarHoras = tarefas.reduce((contador, tarefa) => {
  return contador + tarefa.horas;
}, 0);

console.log(somarHoras); // saída 10

const tarefas1 = [
  { titulo: "Estudar JavaScript", horas: 2, status: "Pendente" },
  { titulo: "Revisar CSS", horas: 1, status: "Concluída" },
  { titulo: "Praticar Git", horas: 3, status: "Pendente" },
];

const totalHoras = tarefas1.reduce((ac, tarefa) => {
  if (tarefa.status === "Pendente") {
    return ac + tarefa.horas;
  } else {
    return ac;
  }
}, 0);

console.log(totalHoras); // saída 5

const tarefas2 = [
  { titulo: "Estudar JavaScript", status: "Pendente", horas: 2 },
  { titulo: "Revisar CSS", status: "Concluída", horas: 1 },
  { titulo: "Praticar Git", status: "Pendente", horas: 3 },
  { titulo: "Estudar React", status: "Concluída", horas: 2 },
  { titulo: "Praticar TypeScript", status: "Pendente", horas: 4 },
];

const resumoInicial = {
  total: 0,
  pendentes: 0,
  concluídas: 0,
  horasPendentes: 0,
};

const resumo = tarefas2.reduce((ac, tarefa) => {
  if (tarefa.status === "Pendente") {
    ac.pendentes++;
    ac.horasPendentes += tarefa.horas;
  } else if (tarefa.status === "Concluída") {
    ac.concluídas++;
  }

  ac.total++;

  return ac;
}, resumoInicial);

console.log(resumo); // { total: 5, pendentes: 0, 'concluídas': 0 }

// // if (tarefa.status === "pendente") {
//     // ac.pendentes++;
//   } else if (tarefa.status === "concluída") {
//     ac.concluídas++;
//   }
//   ac.total++;

//   return ac;
