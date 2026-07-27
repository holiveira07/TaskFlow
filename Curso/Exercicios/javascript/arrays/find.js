const usuarios = [
  { id: 1, nome: "Henrique" },
  { id: 2, nome: "Maria" },
  { id: 3, nome: "João" },
];

const usuarioEncontrado = usuarios.find((usuario) => usuario.nome === "Maria");

// console.log(usuarioEncontrado);

const tarefas = [
  { id: 1, titulo: "JavaScript", status: "Concluida" },
  { id: 2, titulo: "React", status: "pendente" },
  { id: 3, titulo: "Docker", status: "Concluida" },
];

const tarefa = tarefas.find((tarefa) => tarefa.id === 2);

// console.log(tarefa);

const tarefas2 = [
  {
    id: 1,
    titulo: "Implementar Login",
    prioridade: "Alta",
    concluida: true,
  },
  {
    id: 2,
    titulo: "Criar API",
    prioridade: "Alta",
    concluida: false,
  },

  {
    id: 3,
    titulo: "Corrigir Dashboard",
    prioridade: "Média",
    concluida: false,
  },
];

const tarefaEncontrada = tarefas2.find(
  (tarefa) => tarefa.prioridade === "Alta" && !tarefa.concluida,
);

if (tarefaEncontrada) {
  console.log("Tarefa encontrada e não concluída:", tarefaEncontrada);
} else {
  console.log("Tarefa não encontrada ou não concluída");
}
