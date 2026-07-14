const tarefas = [
  { id: 1, titulo: "JavaScript", status: "Concluida", nome: "Henrique" },
  { id: 2, titulo: "React", status: "pendente", nome: "Maria" },
  { id: 3, titulo: "Docker", status: "Concluida", nome: "João" },
];

const tarefaNomes = tarefas.filter((tarefa) => tarefa.nome.length > 5);
console.log(tarefaNomes);

const usuarios = tarefas.map((tarefa) => tarefa.nome);
console.log(usuarios);

const tarefa = tarefas.find((tarefa) => tarefa.id === 2);
console.log(tarefa);
