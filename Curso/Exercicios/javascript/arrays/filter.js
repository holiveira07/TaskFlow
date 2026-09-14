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

const tarefas0 = [
  { titulo: "API", status: "pendente" },
  { titulo: "Login", status: "concluida" },
  { titulo: "Dashboard", status: "pendente" },
];

function titulosTarefasPendentes(tarefas) {
  return tarefas
    .filter((tarefa) => tarefa.status === "pendente")
    .map((tarefa) => tarefa.titulo);
}

console.log(titulosTarefasPendentes(tarefas0)); // Saída: ["API", "Dashboard"]

const tarefas1 = [
  { titulo: "Criar API", status: "pendente", prioridade: "Alta" },
  { titulo: "Criar Login", status: "concluida", prioridade: "Alta" },
  { titulo: "Dashboard", status: "pendente", prioridade: "Baixa" },
  { titulo: "Testes", status: "pendente", prioridade: "Alta" },
];

function obterTitulosPorStatusEPrioridade(tarefas, status, prioridade) {
  return tarefas
    .filter(
      (tarefa) => tarefa.status === status && tarefa.prioridade === prioridade,
    )
    .map((tarefa) => tarefa.titulo);
}

console.log(obterTitulosPorStatusEPrioridade(tarefas1, "pendente", "Alta"));

console.log(obterTitulosPorStatusEPrioridade(tarefas1, "concluida", "Alta"));
console.log(obterTitulosPorStatusEPrioridade(tarefas1, "pendente", "Baixa"));

const tarefas2 = [
  { titulo: "Criar API", status: "pendente", prioridade: "Alta", horas: 5 },
  { titulo: "Criar Login", status: "concluida", prioridade: "Alta", horas: 3 },
  { titulo: "Dashboard", status: "pendente", prioridade: "Baixa", horas: 4 },
  { titulo: "Testes", status: "pendente", prioridade: "Alta", horas: 2 },
  {
    titulo: "Documentação",
    status: "concluida",
    prioridade: "Baixa",
    horas: 2,
  },
];

// -------------  função reutilizável ------------------//
function obterTarefasPorPrioridade(tarefas, prioridade) {
  return tarefas.filter((tarefa) => tarefa.prioridade === prioridade);
}

const tarefasAltaPrioridade = obterTarefasPorPrioridade(tarefas2, "Alta");

// -------------  função fixa ------------------//
const obterTitulosTarefasPendentesAltas = tarefas2
  .filter(
    (tarefa) => tarefa.status === "pendente" && tarefa.prioridade === "Alta",
  )
  .map((tarefa) => tarefa.titulo);

console.log(
  "Titulos de tarefas pendentes com alta prioridade:",
  obterTitulosTarefasPendentesAltas,
);
