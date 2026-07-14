const tarefas = [
  { titulo: "JS", status: "concluida" },
  { titulo: "React", status: "pendente" },
  { titulo: "Docker", status: "concluida" },
  { titulo: "Node", status: "concluida" },
];

const concluidas = tarefas.filter((tarefa) => tarefa.status === "concluida");
console.log(concluidas);
console.log(`Total de tarefas concluidas: ${concluidas.length}`);

const titulos = tarefas.map((tarefa) => tarefa.titulo);
console.log(titulos);
