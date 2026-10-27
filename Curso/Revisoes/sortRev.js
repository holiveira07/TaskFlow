const tarefas = [
  { titulo: "Estudar", horas: 7 },
  { titulo: "Praticar", horas: 1 },
  { titulo: "Revisar", horas: 2 },
];

function ordenarTarefas(tarefas) {
  return [...tarefas].sort((a, b) => {
    return a.horas - b.horas;
  });
}

const tarefasOrdenadas = ordenarTarefas(tarefas);

console.log(tarefasOrdenadas);

for (const tarefa of tarefasOrdenadas) {
  if (tarefa.horas > 3) {
    console.log(`${tarefa.titulo}: excede a carga horária recomendada.`);
  }
}
