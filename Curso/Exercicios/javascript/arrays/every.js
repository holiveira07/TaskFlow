const tarefas = [
  {
    id: 1,
    titulo: "Estudar JavaScript",
    concluida: true,
  },
  {
    id: 2,
    titulo: "Aprender Node.js",
    concluida: true,
  },

  {
    id: 3,
    titulo: "Criar API",
    concluida: false,
  },
];

const todasConcluidas = tarefas.every((tarefa) => tarefa.concluida);

// console.log(todasConcluidas); // false

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
    prioridade: "Média",
    concluida: false,
  },
  {
    id: 3,
    titulo: "Corrigir Dashboard",
    prioridade: "Alta",
    concluida: true,
  },
  {
    id: 4,
    titulo: "Atualizar Documentação",
    prioridade: "Alta",
    concluida: true,
  },
];

const prioridadeAlta = tarefas2.filter(
  (tarefa) => tarefa.prioridade === "Alta",
);

const prioridadesAltaConcluidas = prioridadeAlta.every(
  (tarefa) => tarefa.concluida,
);
// console.log(prioridadeAlta); // [ { id: 1, titulo: 'Implementar Login', prioridade: 'Alta', concluida: true }, { id: 3, titulo: 'Corrigir Dashboard', prioridade: 'Alta', concluida: true }, { id: 4, titulo: 'Atualizar Documentação', prioridade: 'Alta', concluida: true } ]
// console.log(prioridadesAltaConcluidas); // true

const tarefas3 = [
  {
    id: 1,
    titulo: "Implementar Login",
    equipe: "Backend",
    prioridade: "Alta",
    concluida: true,
  },
  {
    id: 2,
    titulo: "Criar API",
    equipe: "Backend",
    prioridade: "Alta",
    concluida: false,
  },
  {
    id: 3,
    titulo: "Criar Layout",
    equipe: "Frontend",
    prioridade: "Alta",
    concluida: true,
  },
  {
    id: 4,
    titulo: "Dashboard",
    equipe: "Frontend",
    prioridade: "Média",
    concluida: false,
  },
];

const backendPrioridadeAlta = tarefas3
  .filter(
    (tarefa) => tarefa.equipe === "Backend" && tarefa.prioridade === "Alta",
  )
  .every((tarefa) => tarefa.concluida);

console.log(backendPrioridadeAlta); // false
