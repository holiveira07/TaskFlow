const usuarios = [
  { id: 1, nome: "Henrique" },
  { id: 2, nome: "Maria" },
  { id: 3, nome: "João" },
];

const usuarioEncontrado = usuarios.find((usuario) => usuario.nome === "Maria");

console.log(usuarioEncontrado);

const tarefas = [
  { id: 1, titulo: "JavaScript", status: "Concluida" },
  { id: 2, titulo: "React", status: "pendente" },
  { id: 3, titulo: "Docker", status: "Concluida" },
];

const tarefa = tarefas.find((tarefa) => tarefa.id === 2);

console.log(tarefa);
